import {  Injectable,  } from '@nestjs/common';
import { SendEmailDTO } from './dto/send-email.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class EmailService {
  
  constructor(private mailerService: MailerService) {}


  async sendEmail(body:SendEmailDTO): Promise<{
   data:string
  }> {

    const mailOptions = {
      // ... other mail options
      to: body.senderAddress,
      subject: body.subject,
    };
    
    const context = {
      username: 'John',
      message: 'This is the content of the email.',
    };
    
    

    try {
      await this.mailerService.sendMail({templatePath: 'template1.html',
      context,
      ...mailOptions})
      // get private and public keys
      return {data:""
      }; 
    } catch (error) {
      console.log(error, '====d')
    }
   
  }

}
