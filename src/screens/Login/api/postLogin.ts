import { AxiosResponse } from "axios";
import { ILoginPost } from '@/shared/interfaces';
import { tesseractApi } from '@/shared/api/client';

export const postLogin = async (
  postData: ILoginPost
): Promise<AxiosResponse> => {
  const url = `/User/Login`;

  const body = {
    email: postData.email,
    password: postData.password,
  };

  return tesseractApi.post(url, body);
};
