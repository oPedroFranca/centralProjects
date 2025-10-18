import { useState } from 'react';
import { updateCategory } from '../api/updateCategory';
import { ICategoryUpdate } from '@/shared/interfaces';
import { Toast } from '@/components/Toast';
import { useAppStore } from '@/shared/zustand';

export const useUpdateCategory = () => {
  const { setGlobalLoading, triggerRefetch } = useAppStore();

  const fetchUpdateCategory = async (data: ICategoryUpdate) => {
    setGlobalLoading(true);

    try {
      await updateCategory(data);

      Toast.success('Category updated successfully!', {
        description: data.name ? `Category "${data.name}" has been updated.` : 'The category has been updated successfully.'
      });

      triggerRefetch();
    } catch (error: any) {
      console.error('Error updating category:', error);

      Toast.error(
        error?.response?.data?.message || 'An unexpected error occurred while updating the category.'
      );
    }
  };

  return {
    fetchUpdateCategory,
  };
};
