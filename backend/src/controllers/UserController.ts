import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users =
  { name: 'Lucas', email: 'lucas.vanni@hotmail.com'}


export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
     const emailService = new EmailService();
     emailService.sendMail({
        to: {
          name: users.name,
          email: users.email
        }, 
        message: { 
          subject: 'Email Teste',
          body: `Olá ${users.name}, estamos efetuando um teste`
        }
      });
    res.send('E-mail enviado com sucesso');
  }
}