"use client";

import { useState } from 'react';
import { mockCategoriesDefault } from './mockCategories';
import { ButtonNavSidebar, Divider, SkeletonButtonNavSidebar } from '@/components';
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import ModalCreateCategory from '../Modal';

import { useListCategory } from '../../hooks/useListCategory';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';
import * as S from './styles';

interface ICategoriosType {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

export const MainLeftBarContent = () => {
  const [categoriesDefault] = useState<ICategoriosType[]>(mockCategoriesDefault);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | string | null>(null);
  const [isModalOpenCategory, setIsModalOpenCategory] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  const { isMinimizedSidebar } = useSidebarStore();
  const { categoriesData, loadingRequest } = useListCategory();
  const { fetchDeleteCategory, loadingRequest: loadingDelete } = useDeleteCategory();

  const handleCategoryClick = (id: number | string) => {
    setSelectedCategoryId(id);
  };

  const handleEdit = (id: string) => {
    const category = categoriesData.find(cat => cat.id === id);
    if (category) {
      setEditingCategory(category);
      setIsEditMode(true);
      setIsModalOpenCategory(true);
    }
  };

  const handleDelete = async (id: string) => {
    await fetchDeleteCategory(id);
  };

  const handleOpenCreateModal = () => {
    setIsEditMode(false);
    setEditingCategory(null);
    setIsModalOpenCategory(true);
  };

  const handleCloseModal = () => {
    setIsModalOpenCategory(false);
    setIsEditMode(false);
    setEditingCategory(null);
  };

  return (
    <S.Container>
      <S.List>
        {categoriesDefault.map((category) => (
          <ButtonNavSidebar
            key={category.id}
            Text={category.name}
            $isSelected={selectedCategoryId === category.id}
            isMinimized={false}
            handleCategoryClick={() => handleCategoryClick(category.id)}
            icon={category.icon}
          />
        ))}
      </S.List>

      <Divider />

      {!isMinimizedSidebar && <S.Title>Categories</S.Title>}

      <S.List>
        {loadingRequest ? (
          <SkeletonButtonNavSidebar count={4} />
        ) : (
          categoriesData.map((category) => (
            <ButtonNavSidebar
              key={category.id}
              Text={category.name}
              $isSelected={selectedCategoryId === category.id}
              isMinimized={false}
              handleCategoryClick={() => handleCategoryClick(category.id)}
              onEdit={() => handleEdit(category.id)}
              onDelete={() => handleDelete(category.id)}
            />
          ))
        )}

        <S.NewCategoryButton
          Text={"New Category"}
          isMinimized={false}
          handleCategoryClick={() => { }}
          onClick={handleOpenCreateModal}
          disableThreeDots
          icon={<FaPlus />}
        />
      </S.List>

      <S.ConfigButton
        Text={"Configurations"}
        isMinimized={false}
        handleCategoryClick={() => { }}
        icon={<IoSettingsOutline size={16} />}
      />

      <ModalCreateCategory
        isOpen={isModalOpenCategory}
        onClose={handleCloseModal}
        editCategory={editingCategory}
        isEditMode={isEditMode}
      />
    </S.Container>
  );
};
