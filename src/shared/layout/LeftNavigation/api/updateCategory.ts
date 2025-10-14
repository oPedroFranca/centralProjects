import { AxiosResponse } from "axios";
import { tesseractApi } from '@/shared/api/client';
import { ICategoryUpdate } from '@/shared/interfaces';

export const updateCategory = async (postData: ICategoryUpdate): Promise<AxiosResponse> => {
  const url = `/Category/updateCategory`;

  return tesseractApi.put(url, postData);
};
