'use client';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { usePostLogin } from "./usePostLogin";
import * as yup from "yup";

interface ILoginForm {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().required("Required field").email("E-mail invalid"),
  password: yup.string().required("Required field"),
});

export function useLoginForm() {
  const { loginUser, loading } = usePostLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginForm) => {
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
    loading
  };
}
