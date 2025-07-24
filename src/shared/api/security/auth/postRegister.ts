import { AxiosResponse } from "axios";
import { tesseractApi } from "../../client";
import { IRegisterPost } from '@/shared/interfaces';

export const postRegister = async (
  postData: IRegisterPost
): Promise<AxiosResponse> => {
  const url = `/User/Register`;

  const body = {
    name: postData.name,
    userName: postData.userName,
    email: postData.email,
    password: postData.password,
  };

  return tesseractApi.post(url, body);
};
