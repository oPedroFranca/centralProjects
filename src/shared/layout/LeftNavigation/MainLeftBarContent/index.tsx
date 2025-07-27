"use client";

import { useState } from 'react';
import { mockCategories, mockCategoriesDefault } from './mockCategories';
import { ButtonNavSidebar, Divider } from '@/components';
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';

import * as S from './styles';

interface CategoriosType {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

export const MainLeftBarContent = () => {
  const [categories] = useState<CategoriosType[]>(mockCategories);
  const [categoriesDefault] = useState<CategoriosType[]>(mockCategoriesDefault);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const { isMinimizedSidebar } = useSidebarStore();

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
  };

  return (
    <S.Container>
      <S.List>
        {categoriesDefault.map((category) => (
          <ButtonNavSidebar
            key={category.id}
            Text={category.name}
            isSelected={selectedCategoryId === category.id}
            isMinimized={false}
            handleCategoryClick={() => handleCategoryClick(category.id)}
            icon={category.icon}
          />
        ))}
      </S.List>

      <Divider />

      {!isMinimizedSidebar && (
        <S.Title>Categories</S.Title>
      )}

      <S.List>
        {categories.map((category) => (
          <ButtonNavSidebar
            key={category.id}
            Text={category.name}
            isSelected={selectedCategoryId === category.id}
            isMinimized={false}
            handleCategoryClick={() => handleCategoryClick(category.id)}
          />
        ))}

        <S.NewCategoryButton
          Text={"New Category"}
          isMinimized={false}
          handleCategoryClick={() => { }}
          icon={<FaPlus />}
        />
      </S.List>

      <S.ConfigButton
        Text={"Configurations"}
        isMinimized={false}
        handleCategoryClick={() => { }}
        icon={<IoSettingsOutline size={16} />}
      />
    </S.Container>
  );
};
