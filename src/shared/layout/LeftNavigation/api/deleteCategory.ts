import { AxiosResponse } from "axios";
import { tesseractApi } from '@/shared/api/client';

export const deleteCategory = async (id: number): Promise<AxiosResponse> => {
  const url = `/Category/DeleteCategory`;

  return tesseractApi.post(url, { id });
};

