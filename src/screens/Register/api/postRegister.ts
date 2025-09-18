'use client';

import { AxiosResponse } from "axios";
import { IRegisterPost } from '@/shared/interfaces';
import { tesseractApi } from '@/shared/api/client';

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
