import { AxiosResponse } from "axios";
import { tesseractApi } from '@/shared/api/client';

export const deleteCategory = async (categoryId: string): Promise<AxiosResponse> => {
  const url = `/Category/DeleteCategory?categoryId=${categoryId}`;

  return tesseractApi.delete(url);
};

