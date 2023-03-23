"use client";

import {
  FormControl,
  FormLabel,
  VStack,
  Button,
  Input,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Textarea } from "@chakra-ui/react";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import * as Yup from "yup";
import { useColorMode } from '@chakra-ui/react';


const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Too short').max(40, 'Too long').required('Requred'),
  lastName: Yup.string().min(3, 'Too short').max(40, 'Too long').required('Requred'),
  email: Yup.string().email("Invalid email").required("Required"),
  description: Yup.string().min(30, "Must be longer than 30 characters").max(300, "Must be shorter than 300 characters").required("Required"),
  captcha: Yup.string().required(),
});
  

export default function ContactForm() {
  const { colorMode } = useColorMode();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        captcha: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={ContactFormSchema}
    >
      {({ setFieldValue, handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.firstName && touched.firstName} >
              <Field
                as={Input}
                id="firstName"
                name="firstName"
                type="text"
                variant="filled"
                placeholder="First Name"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.lastName && touched.lastName}>
              <Field
                as={Input}
                id="lastName"
                name="lastName"
                type="text"
                variant="filled"
                placeholder="Last Name"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
                placeholder="Email"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.description && touched.description}>
              <Field
                as={Textarea}
                id="description"
                name="description"
                type="text"
                variant="filled"
                placeholder="Enter description here..."
                resize={'none'}
                rows={5}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_KEY as string}
              onVerify={(token,ekey) => setFieldValue("captcha", token)}
              theme={colorMode}
            />
            <Button type="submit" colorScheme="blue" variant={'outline'}>
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
  };