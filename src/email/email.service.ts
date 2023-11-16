import { Inject, Injectable,  } from '@nestjs/common';
import { SendEmailDTO } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  
  constructor(private emailService: EmailService) {}


  async sendEmail(body:SendEmailDTO): Promise<{
   data:string
  }> {

    // get private and public keys

    return {data:""
    };
  }

}
