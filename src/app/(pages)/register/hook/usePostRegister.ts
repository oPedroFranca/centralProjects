'use client';

import { IRegisterPost } from "@/shared/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { postRegister } from '../api/postRegister';

export const usePostRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const registerUser = async (postData: IRegisterPost) => {
    setLoading(true);

    try {
      const resp = await postRegister(postData);

      if (resp.status === 200) router?.push("/login");
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, registerUser };
};
