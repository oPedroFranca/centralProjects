import { useState } from 'react';
import { updateCategory } from '../api/updateCategory';
import { ICategoryUpdate } from '@/shared/interfaces';
import { Toast } from '@/components/Toast';

export const useUpdateCategory = () => {
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const fetchUpdateCategory = async (data: ICategoryUpdate) => {
    setLoadingUpdate(true);

    try {
      await updateCategory(data);

      Toast.success('Category updated successfully!', {
        description: data.name ? `Category "${data.name}" has been updated.` : 'The category has been updated successfully.'
      });
    } catch (error: any) {
      console.error('Error updating category:', error);

      Toast.error(
        error?.response?.data?.message || 'An unexpected error occurred while updating the category.'
      );
    }
  };

  return {
    fetchUpdateCategory,
    loadingUpdate,
  };
};
