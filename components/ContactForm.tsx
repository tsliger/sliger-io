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
import HCaptcha from "@hcaptcha/react-hcaptcha";
import * as Yup from "yup";
import { useColorMode, useToast } from "@chakra-ui/react";
import axios from "axios";

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

export default function ContactForm() {
  const { colorMode } = useColorMode();
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        captcha: "",
      }}
      onSubmit={(values, formProps) => {
        formProps.setSubmitting(true)
        axios.post("/api/contact", values).then(() => {
          formProps.resetForm();
          formProps.setSubmitting(false)
          toast({
            title: 'Message success.',
            description: "Message sent succesfully.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }).catch(() => {
          formProps.setSubmitting(false)
          toast({
            title: 'Message failed.',
            description: "Message not sent.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        });

      }}
      validationSchema={ContactFormSchema}
    >
      {({ setFieldValue, handleSubmit, errors, touched, isValid, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.firstName && touched.firstName}>
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
            <FormControl
              isInvalid={!!errors.description && touched.description}
            >
              <Field
                as={Textarea}
                id="description"
                name="description"
                type="text"
                variant="filled"
                placeholder="Enter description here..."
                resize={"none"}
                rows={5}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            {!!touched.description && !errors.description && (
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_KEY as string}
                onVerify={(token, ekey) => setFieldValue("captcha", token)}
                theme={colorMode}
              />
            )}

            <Button isDisabled={!touched.firstName || !isValid} isLoading={isSubmitting} type="submit">Submit</Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
