import { NextResponse } from 'next/server';
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

export async function POST(request: Request) {
  const res: ContactResponse = await request.json();

  const contact = await ContactFormSchema.validate(res);

  if (contact) {
    const params = new URLSearchParams();
    params.append('response', contact.captcha);
    params.append('secret', process.env.HCAPTCHA_SECRET as string);
    const resp = axios.post('https://hcaptcha.com/siteverify', params);
    let data: any = await resp.catch()
    data = data.data

    // Successful HCaptcha response
    if (data && data.success === true) {
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
        return NextResponse.json({ msg: 'success' })
      } 

      return NextResponse.error();
    }

    if (data && data.success === false) {
      return NextResponse.error()
    }
  } else {
    // Cannot verify correctly
    return NextResponse.error()
  }
}