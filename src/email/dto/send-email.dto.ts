import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class SendEmailDTO {
  @ApiProperty({
    example: 'sender@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  senderAddress: string;

  @ApiProperty({
    example: 'This is the email body content.',
  })
  @IsNotEmpty()
  emailBody: string;

  @ApiProperty({
    example: 'This is the email subject content.',
  })
  @IsNotEmpty()
  subject: string;
}