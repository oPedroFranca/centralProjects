"use client";

import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import Header from '../Header';
import LeftNavigation from '../LeftNavigation';
import { useState } from "react";
import { Modal } from "@/components/Modal";
import * as S from './styles';

const LayoutStructure = ({ children }: React.PropsWithChildren) => {
  const { isMinimizedSidebar } = useSidebarStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategory = (name: string, description?: string) => {

    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <LeftNavigation onOpenModal={() => setIsModalOpen(true)} />

      <S.MainArea $isMinimizedSidebar={isMinimizedSidebar}>
        <Header />
        <S.MainContent>{children}</S.MainContent>
      </S.MainArea>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCategory={handleAddCategory}
      />
    </S.Wrapper>
  );
};

export default LayoutStructure;