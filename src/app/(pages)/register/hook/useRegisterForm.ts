import { usePostRegister } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = yup.object({
  name: yup.string().required("Required field"),
  username: yup.string().required("Required field"),
  email: yup.string().required("Required field").email("E-mail invalid"),
  password: yup
    .string()
    .required("Required field")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required field"),
});

export function useRegisterForm() {
  const { registerUser } = usePostRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    const formatRegisterPost = {
      name: data.name,
      userName: data.username,
      email: data.email,
      password: data.password,
    };

    await registerUser(formatRegisterPost);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
