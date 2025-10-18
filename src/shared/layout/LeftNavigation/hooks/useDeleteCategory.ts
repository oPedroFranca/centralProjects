import { useState } from "react";
import { deleteCategory } from '../api/deleteCategory';
import { Toast } from "@/components";
import { useAppStore } from "@/shared/zustand";

export const useDeleteCategory = () => {
  const { setGlobalLoading, triggerRefetch } = useAppStore();

  const fetchDeleteCategory = async (id: string, categoryName?: string): Promise<void> => {
    try {
      setGlobalLoading(true);
      await deleteCategory(id);

      Toast.success('Category deleted successfully!', {
        description: categoryName ? `Category "${categoryName}" has been deleted.` : 'The category has been deleted.'
      });

      triggerRefetch();
    } catch (err) {
      console.error(err);
      Toast.error('Failed to delete category', {
        description: 'An error occurred while deleting the category. Please try again.'
      });
    } finally {
      setGlobalLoading(false);
    }
  };

  return {
    fetchDeleteCategory,
  };
};
