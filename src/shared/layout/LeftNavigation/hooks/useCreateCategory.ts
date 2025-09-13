import { useState } from "react";
import { ICategoryPost, ICategoryResponse } from "@/shared/interfaces";
import { createCategory } from '../api/createCategory ';

export const useCreateCategory = () => {
  const [loadingRequest, setLoadingRequest] = useState(false);

  const fetchCreateCategory = async ({ name, description }: ICategoryPost): Promise<ICategoryResponse | undefined> => {
    
    try {
      setLoadingRequest(true);
      const res = await createCategory({ name, description });
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setLoadingRequest(false);
    }
  };

  return {
    fetchCreateCategory,
    loadingRequest,
  };
};
