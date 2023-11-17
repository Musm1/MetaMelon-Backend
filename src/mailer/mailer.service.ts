import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import * as path from 'path';

@Injectable()
export class MailerService {
  private readonly transporter: nodemailer.Transporter;
  constructor(private readonly configService: ConfigService) {
   
    this.transporter = nodemailer.createTransport({
      host:  configService.get<string>('MAIL_HOST'),
      port: configService.get<string>('MAIL_PORT'),
      // ignoreTLS: configService.get('MAIL_IGNORE_TLS'),
      secure: configService.get<string>('MAIL_SECURE'),
      // requireTLS: configService.get<string>('MAIL_REQUIRE_TLS'),
      auth: {
        user: configService.get<string>('MAIL_USER'),
        pass: configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  async sendMail({
    templatePath,
    context,
    ...mailOptions
  }: nodemailer.SendMailOptions & {
    templatePath: string;
    context: Record<string, unknown>;
  }): Promise<void> {
    let html: string | undefined;
    if (templatePath) {
      const fullPath = path.resolve(__dirname, 'emailTemplate', templatePath);

      const template = await fs.readFile(fullPath, 'utf-8');
      html = Handlebars.compile(template, {
        strict: true,
      })(context);
    }

    await this.transporter.sendMail({
      ...mailOptions,
      from: mailOptions.from
        ? mailOptions.from
        : `"${this.configService.get('MAIL_DEFAULT_NAME')}" <${this.configService.get('MAIL_DEFAULT_EMAIL')}>`,
      html: mailOptions.html ? mailOptions.html : html,
    });
  }
}
