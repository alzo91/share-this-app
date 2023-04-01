import * as Yup from "yup";

export const signinValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const signupValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const forgotinValidation = Yup.object({
  email: Yup.string().email().required(),
});
