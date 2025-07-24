import { postLogin } from "@/shared/api";
import { ILoginPost } from "@/shared/interfaces";
import { useState } from "react";

export const usePostLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const loginUser = async (postData: ILoginPost) => {
    setLoading(true);

    try {
      const resp = await postLogin(postData);

      console.log(resp);
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginUser };
};
