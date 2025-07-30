'use client';

import { usePostLogin } from "@/app/(pages)/login/hook/usePostLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";

interface LoginForm {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().required("Required field").email("E-mail invalid"),
  password: yup.string().required("Required field"),
});

export function useLoginForm() {
  const { loginUser } = usePostLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    const formatDataLogin = {
      email: data.email,
      password: data.password,
    };

    await loginUser(formatDataLogin);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
