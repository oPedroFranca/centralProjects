import { AxiosResponse } from "axios";
import { tesseractApi } from '@/shared/api/client';
import { ICategoryPost } from '@/shared/interfaces';

export const createCategory = async (postData: ICategoryPost): Promise<AxiosResponse> => {
  const url = `/Category/CreateCategory`;

  return tesseractApi.post(url, postData);
};
