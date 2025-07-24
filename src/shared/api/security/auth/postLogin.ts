import { AxiosResponse } from "axios";
import { tesseractApi } from "../../client";
import { ILoginPost } from '@/shared/interfaces';

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
