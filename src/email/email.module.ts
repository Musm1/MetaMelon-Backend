import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerService } from 'src/mailer/mailer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),],
  controllers: [EmailController],
  providers: [EmailService, MailerService, ConfigService],
})
export class EmailModule { }
