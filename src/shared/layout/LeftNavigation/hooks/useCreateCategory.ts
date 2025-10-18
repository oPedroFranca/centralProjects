import { useState } from "react";
import { ICategoryPost, ICategoryResponse } from "@/shared/interfaces";
import { createCategory } from '../api/createCategory';
import { Toast } from "@/components";
import { useAppStore } from "@/shared/zustand";

export const useCreateCategory = () => {
  const { setGlobalLoading, triggerRefetch } = useAppStore();

  const fetchCreateCategory = async ({ name, description }: ICategoryPost): Promise<ICategoryResponse | undefined> => {

    try {
      setGlobalLoading(true);
      const res = await createCategory({ name, description });

      Toast.success('Category created successfully!', {
        description: `Category "${name}" has been created.`
      });

      triggerRefetch();

      return res.data;
    } catch (err) {
      console.error(err);

      Toast.error('Failed to create category', {
        description: 'An error occurred while creating the category. Please try again.'
      });
      throw err;
    } finally {
      setGlobalLoading(false);
    }
  };

  return {
    fetchCreateCategory,
  };
};
