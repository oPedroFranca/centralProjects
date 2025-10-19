"use client";

import { useState, useEffect } from "react";
import { CounterCharacter, Input, Modal } from "@/components";
import { useCreateCategory } from '../../hooks/useCreateCategory';
import { useUpdateCategory } from "../../hooks/useUpdateCategory";
import { useAppStore } from "@/shared/zustand";
import * as S from "./styles";

interface ICategoryData {
  id: string;
  name: string;
  description?: string;
}

interface ModalCreateOrEditCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  editCategory?: ICategoryData | null;
  isEditMode?: boolean;
}

const ModalCreateOrEditCategory = ({ isOpen, onClose, editCategory, isEditMode = false }: ModalCreateOrEditCategoryProps) => {
  const { globalLoading } = useAppStore();
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const { fetchCreateCategory } = useCreateCategory();
  const { fetchUpdateCategory } = useUpdateCategory();

  const resetForm = () => {
    setCategoryName("");
    setDescription("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (isEditMode && editCategory) {
      setCategoryName(editCategory.name);
      setDescription(editCategory.description || "");
    } else {
      resetForm();
    }
  }, [isEditMode, editCategory, isOpen]);

  const handleSubmit = async () => {
    if (isEditMode && editCategory) {
      await fetchUpdateCategory({
        id: editCategory.id,
        name: categoryName,
        description,
      });
    } else {
      await fetchCreateCategory({
        name: categoryName,
        description,
      });
    }

    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      loading={globalLoading}
      onSubmit={handleSubmit}
      className="w-[450px]"
    >
      <S.Wrapper>
        <S.Header>
          <S.HeaderIcon>
            <S.IconAdd />
          </S.HeaderIcon>
          <S.HeaderText>
            <S.Title>{isEditMode ? 'Edit Category' : 'New Category'}</S.Title>
            <S.Subtitle>
              {isEditMode
                ? 'Edit the category information.'
                : 'Create a new category to organize your projects.'
              }
            </S.Subtitle>
          </S.HeaderText>
        </S.Header>

        <div>
          <S.Field>
            <S.Label>Category Name</S.Label>
            <Input
              placeholder="Enter the category name..."
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              maxLength={30}
            />
            <CounterCharacter value={categoryName.length} max={30} />
          </S.Field>

          <S.Field>
            <S.Label>Description</S.Label>
            <Input
              placeholder="Category description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={100}
            />
            <CounterCharacter value={description.length} max={100} />
          </S.Field>
        </div>
      </S.Wrapper>
    </Modal>
  );
};

export default ModalCreateOrEditCategory;
