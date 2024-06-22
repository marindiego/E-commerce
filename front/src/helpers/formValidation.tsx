import { LoginErrorProps, LoginProps, RegisterErrorProps } from "@/types";
import { error } from "console";

export function validateLoginForm({ email, password }: LoginErrorProps) {
    const errors: LoginErrorProps = {};

    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
    }
    if (!password) {
        errors.password = "Password is required";
    }
    
    return errors;
}
const isEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validateRegisterForm(values: RegisterErrorProps) {

  const errors: RegisterErrorProps = {};

  if (!values.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email?.trim()) {
    errors.email = "Email is required";
  } else if (!isEmail(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password?.trim()) {
    errors.password = "Password is required";
  }

  if (!values.address?.trim()) {
    errors.address = "Address is required";
  }
  if (!values.phone?.trim()) {
    errors.phone = "Phone is required";
  }

  return errors;
}
