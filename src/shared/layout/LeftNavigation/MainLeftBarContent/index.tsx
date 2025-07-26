"use client";

import { useState } from 'react';
import { mockCategories } from './mockCategories';
import * as S from './styles';
import { ButtonNavSidebar } from '@/components';

interface CategoriosType {
  id: number;
  name: string;
}

export const MainLeftBarContent = () => {
  const [categories,] = useState<CategoriosType[]>(mockCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const handleCategoryClick = (id: string) => {
    setSelectedCategoryId(id);
  };

  return (
    <S.Container>
      <S.Title>Categories</S.Title>

      <S.List>
        {categories.map((categorie) => (
          <ButtonNavSidebar
            key={categorie.id}
            categoryId={String(categorie.id)}
            selectedCategoryId={selectedCategoryId}
            isMinimized={false}
            handleCategoryClick={handleCategoryClick}
          >
            {categorie.name}
          </ButtonNavSidebar>
        ))}
      </S.List>

    </S.Container>
  );
};
