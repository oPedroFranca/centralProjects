"use client";

import { useState } from 'react';
import { mockCategoriesDefault } from './mockCategories';
import { ButtonNavSidebar, Divider, SkeletonButtonNavSidebar } from '@/components';
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import ModalCreateCategory from '../Modal';

import { useListCategory } from '../../hooks/useListCategory';
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

  const { isMinimizedSidebar } = useSidebarStore();
  const { categoriesData, loadingRequest } = useListCategory();

  const handleCategoryClick = (id: number | string) => {
    setSelectedCategoryId(id);
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
          <SkeletonButtonNavSidebar count={3} />
        ) : (
          categoriesData.map((category) => (
            <ButtonNavSidebar
              key={category.id}
              Text={category.name}
              $isSelected={selectedCategoryId === category.id}
              isMinimized={false}
              handleCategoryClick={() => handleCategoryClick(category.id)}
            />
          ))
        )}

        <S.NewCategoryButton
          Text={"New Category"}
          isMinimized={false}
          handleCategoryClick={() => { }}
          onClick={() => setIsModalOpenCategory(true)}
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
        onClose={() => setIsModalOpenCategory(false)}
      />
    </S.Container>
  );
};
