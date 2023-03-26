import type { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from "yup";
import axios from 'axios';

interface ContactResponse {
  description: string;
  firstName: string;
  lastName: string;
  captcha: string;
  email: string;
}

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too short")
    .max(40, "Too long")
    .required("Requred"),
  lastName: Yup.string()
    .min(3, "Too short")
    .max(40, "Too long")
    .required("Requred"),
  email: Yup.string().email("Invalid email").required("Required"),
  description: Yup.string()
    .min(30, "Must be longer than 30 characters")
    .max(300, "Must be shorter than 300 characters")
    .required("Required"),
  captcha: Yup.string().required(),
});

type Data = {
  msg: string;
  err?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
      // Process a POST request
      const body: ContactResponse = req.body
      const contact = await ContactFormSchema.validate(body);

      if (contact) {
        const params = new URLSearchParams();
        params.append('response', contact.captcha);
        params.append('secret', process.env.HCAPTCHA_SECRET as string);
        const resp = axios.post('https://hcaptcha.com/siteverify', params);
        let captcha_resp: any = await resp.catch()
        captcha_resp = captcha_resp.data

        // Successful HCaptcha response
        if (captcha_resp && captcha_resp.success === true) {
          let data = JSON.stringify({
            "sender": {
              "name": "noreply",
              "email": "noreply@sliger.dev"
            },
            "to": [
              {
                "email": "tsliger@protonmail.com",
                "name": "Thomas Sliger"
              }
            ],
            "subject": "Contact Form Submission | sliger.dev",
            "htmlContent": `
              <p>
                ${contact.firstName + " " + contact.lastName} <br/>
                ${contact.email} <br/> <br/>
                ${contact.description}
                <br/> <br/>
                Autogenerated by sliger.dev
              </p>
            `
          });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.sendinblue.com/v3/smtp/email',
            headers: { 
              'accept': 'application/json', 
              'api-key': process.env.SENDINBLUE_API_KEY, 
              'content-type': 'application/json'
            },
            data : data
          };

          let newReq = await axios(config).catch()

          // Success
          if (newReq.status === 201) 
          {
            return res.status(201).json({ msg: 'success' })
          } else {
            return res.status(400).json({err: true, msg: 'error'})
          }
        }

        if (captcha_resp && captcha_resp.success === false) {
          return res.status(403).json({err: true, msg: 'HCAPTCHA couldn`t verify'})
        }
      } else {
        // Cannot verify correctly
        return res.status(400).json({err: true, msg: 'couldn`t validate'})
      }

      return res.status(200).json({ msg: 'success' })
    } else {
      // Handle any other HTTP method
      return res.status(405).json({err: true, msg: 'Not POST request'})
    }
  }
  