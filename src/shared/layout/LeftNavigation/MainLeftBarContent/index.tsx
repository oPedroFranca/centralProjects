"use client";

import { useEffect, useState } from 'react';
import { mockCategories } from './mockCategories';
import * as S from './styles';

interface categoriosType {
  id: number
  color: string
  nameCategorie: string
  isSelected: boolean
}

export const MainLeftBarContent = () => {
  const [categories, setCategories] = useState<categoriosType[]>([]);

  const loadData = () => {
    setCategories(mockCategories);
    console.log(categories);
  };

  useEffect(() => {
    loadData();
  }, [mockCategories]);

  return (
    <S.Container>
      <S.Title>Categories</S.Title>

      <S.List>
        {categories.map((categorie) => (
          <S.CategorieItem key={categorie.id} $isSelected={categorie.isSelected}>
            <S.ColorWrapper style={{ backgroundColor: categorie.isSelected ? categorie.color : 'transparent' }}>
              <S.ColorCircle style={{ backgroundColor: categorie.color }} />
            </S.ColorWrapper>

            <S.CategorieName $isSelected={categorie.isSelected}>
              {categorie.nameCategorie}
            </S.CategorieName>
          </S.CategorieItem>
        ))}
      </S.List>
    </S.Container>
  );
};
