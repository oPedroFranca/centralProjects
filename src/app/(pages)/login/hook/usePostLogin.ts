'use client';

import { ILoginPost } from "@/shared/interfaces";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postLogin } from '../api/postLogin';

export const usePostLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const loginUser = async (postData: ILoginPost) => {
    setLoading(true);

    try {
      const resp = await postLogin(postData);

      if (resp.status === 200) {
        localStorage.setItem("TESSEACT_TOKEN", resp.data.token);
        router.push("/");
      }
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginUser };
};
