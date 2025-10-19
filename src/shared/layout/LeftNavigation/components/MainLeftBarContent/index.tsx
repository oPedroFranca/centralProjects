"use client";;
import { useState } from 'react';
import { mockCategoriesDefault } from './mockCategories';
import { ButtonNavSidebar, Divider, SkeletonButtonNavSidebar } from '@/components';
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import ModalCreateOrEditCategory from '../ModalCreateOrEditCategory';

import { useCategoryHandlers } from '../../hooks/useCategoryHandlers';
import * as S from './styles';

interface ICategoriosType {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

export const MainLeftBarContent = () => {
  const { ui, categories, handlers } = useCategoryHandlers();

  const [categoriesDefault] = useState<ICategoriosType[]>(mockCategoriesDefault);

  return (
    <S.Container>
      <S.List>
        {categoriesDefault.map((category) => (
          <ButtonNavSidebar
            key={category.id}
            Text={category.name}
            $isSelected={ui.selectedId === category.id}
            disableThreeDots
            isMinimized={false}
            handleCategoryClick={() => handlers.handleCategoryClick(category.id)}
            icon={category.icon}
          />
        ))}
      </S.List>

      <Divider />

      {!ui.isMinimizedSidebar && <S.Title>Categories</S.Title>}

      <S.List className="mb-2">
        {ui.globalLoading ? (
          <SkeletonButtonNavSidebar count={4} />
        ) : (
          categories.map((category) => (
            <ButtonNavSidebar
              key={category.id}
              Text={category.name}
              $isSelected={ui.selectedId === category.id}
              disableThreeDots={ui.isMinimizedSidebar}
              isMinimized={false}
              handleCategoryClick={() => handlers.handleCategoryClick(category.id)}
              onEdit={() => handlers.handleEdit(category.id)}
              onDelete={() => handlers.handleDelete(category.id)}
            />
          ))
        )}

        <S.NewCategoryButton
          Text={"New Category"}
          isMinimized={false}
          handleCategoryClick={() => { }}
          onClick={handlers.handleOpenCreateModal}
          disableThreeDots
          icon={<FaPlus />}
        />
      </S.List>

      <S.ConfigButton
        Text={"Configurations"}
        isMinimized={false}
        disableThreeDots
        handleCategoryClick={() => { }}
        icon={<IoSettingsOutline size={16} />}
      />

      <ModalCreateOrEditCategory
        isOpen={ui.modalProps.isOpen}
        onClose={handlers.handleCloseModal}
        editCategory={ui.modalProps.editCategory}
        isEditMode={ui.modalProps.isEdit}
      />
    </S.Container>
  );
};
