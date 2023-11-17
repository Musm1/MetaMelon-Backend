import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {  SendEmailDTO } from './dto/send-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  // generate mnemonic
  @Post('/send')
  async sendEmail(@Body() body: SendEmailDTO) {
    return this.emailService.sendEmail(body);
  }

}
