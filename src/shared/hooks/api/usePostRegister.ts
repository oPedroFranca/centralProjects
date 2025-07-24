import { postRegister } from '@/shared/api';
import { IRegisterPost } from '@/shared/interfaces';
import { useState } from "react";

export const usePostRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (postData: IRegisterPost) => {
    setLoading(true);

    try {
      const resp = await postRegister(postData);

      console.log(resp);
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, registerUser };
};
