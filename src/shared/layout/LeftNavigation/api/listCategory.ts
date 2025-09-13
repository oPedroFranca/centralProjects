import { AxiosResponse } from "axios";
import { tesseractApi } from '@/shared/api/client';
import { ICategoryResponse, } from '@/shared/interfaces/api/category';

export const listCategory = async (): Promise<AxiosResponse<ICategoryResponse[]>> => {
  const url = `/Category/ListCategory`;

  return tesseractApi.get(url);
};
