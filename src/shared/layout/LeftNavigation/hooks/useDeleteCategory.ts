import { useState } from "react";
import { deleteCategory } from '../api/deleteCategory';
import { Toast } from "@/components";

export const useDeleteCategory = () => {
  const [loadingRequest, setLoadingRequest] = useState(false);

  const fetchDeleteCategory = async (id: string, categoryName?: string): Promise<void> => {

    try {
      setLoadingRequest(true);
      await deleteCategory(id);

      Toast.success('Category deleted successfully!', {
        description: categoryName ? `Category "${categoryName}" has been deleted.` : 'The category has been deleted.'
      });

    } catch (err) {
      console.error(err);
      Toast.error('Failed to delete category', {
        description: 'An error occurred while deleting the category. Please try again.'
      });
      throw err;
    } finally {
      setLoadingRequest(false);
    }
  };

  return {
    fetchDeleteCategory,
    loadingRequest,
  };
};
