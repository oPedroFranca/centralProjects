import { useState } from "react";
import { ICategoryPost, ICategoryResponse } from "@/shared/interfaces";
import { createCategory } from '../api/createCategory';
import { Toast } from "@/components";

export const useCreateCategory = () => {
  const [loadingRequest, setLoadingRequest] = useState(false);

  const fetchCreateCategory = async ({ name, description }: ICategoryPost): Promise<ICategoryResponse | undefined> => {

    try {
      setLoadingRequest(true);
      const res = await createCategory({ name, description });

      Toast.success('Category created successfully!', {
        description: `Category "${name}" has been created.`
      });

      return res.data;
    } catch (err) {
      console.error(err);

      Toast.error('Failed to create category', {
        description: 'An error occurred while creating the category. Please try again.'
      });
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
