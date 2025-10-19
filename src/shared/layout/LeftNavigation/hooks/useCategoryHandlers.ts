import { useAppStore, useSidebarStore } from "@/shared/zustand";
import { useListCategory } from "./useListCategory";
import { useDeleteCategory } from "./useDeleteCategory";
import { useState } from "react";
import { ICategoryResponse } from "@/shared/interfaces";

interface modalPropsType {
  isOpen: boolean;
  isEdit: boolean;
  editCategory: ICategoryResponse | null;
}

interface UseCategoryHandlersReturn {
  handlers: {
    handleCategoryClick: (id: number | string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => Promise<void>;
    handleOpenCreateModal: () => void;
    handleCloseModal: () => void;
  };
  categories: ICategoryResponse[];
  ui: {
    globalLoading: boolean;
    selectedId: number | string | null;
    modalProps: modalPropsType;
    isMinimizedSidebar: boolean;
  };
}

export const useCategoryHandlers = (): UseCategoryHandlersReturn => {
  const { globalLoading } = useAppStore();
  const { categoriesData } = useListCategory();
  const { isMinimizedSidebar } = useSidebarStore();
  const { fetchDeleteCategory } = useDeleteCategory();

  const [selectedId, setSelectedId] = useState<number | string | null>(null);
  const [modalProps, setModalProps] = useState<modalPropsType>({
    isOpen: false,
    isEdit: false,
    editCategory: null
  });

  const handleEdit = (id: string) => {
    const category = categoriesData.find(cat => cat.id === id);
    console.log(category);

    if (category) setModalProps({ isOpen: true, isEdit: true, editCategory: category });
  };

  const handleCategoryClick = (id: number | string) => setSelectedId(id);
  const handleDelete = async (id: string) => await fetchDeleteCategory(id);

  const handleOpenCreateModal = () => setModalProps({ isOpen: true, isEdit: false, editCategory: null });
  const handleCloseModal = () => setModalProps({ isOpen: false, isEdit: false, editCategory: null });

  return {
    handlers: { handleCategoryClick, handleEdit, handleDelete, handleOpenCreateModal, handleCloseModal },
    categories: categoriesData,
    ui: { globalLoading, selectedId, modalProps, isMinimizedSidebar }
  };
};
