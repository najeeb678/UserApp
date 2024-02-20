import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("please Enter your Name "),
  email: Yup.string().email().required("Please Enter your Email"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Please enter your Phone number"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must contain at least one alphabet and one number"
    )
    .required("Please enter your password"),
});
