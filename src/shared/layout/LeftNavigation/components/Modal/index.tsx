"use client";

import { useState, useEffect } from "react";
import { CounterCharacter, Input, Modal } from "@/components";
import * as S from "./styles";
import { useCreateCategory } from '../../hooks/useCreateCategory';
import { useUpdateCategory } from "../../hooks/useUpdateCategory";

interface ICategoryData {
  id: string;
  name: string;
  description?: string;
}

interface ModalCreateCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  editCategory?: ICategoryData | null;
  isEditMode?: boolean;
}

const ModalCreateCategory = ({ isOpen, onClose, editCategory, isEditMode = false }: ModalCreateCategoryProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const { fetchCreateCategory, loadingRequest } = useCreateCategory();
  const { fetchUpdateCategory, loadingUpdate } = useUpdateCategory();

  const resetForm = () => {
    setCategoryName("");
    setDescription("");
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

    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      loading={loadingRequest}
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

export default ModalCreateCategory;
