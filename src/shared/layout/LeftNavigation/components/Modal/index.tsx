"use client";

import { useState } from "react";
import { CounterCharacter, Input, Modal } from "@/components";
import * as S from "./styles";
import { useCreateCategory } from '../../hooks/useCreateCategory';

interface ModalCreateCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreateCategory = ({ isOpen, onClose }: ModalCreateCategoryProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const { fetchCreateCategory, loadingRequest } = useCreateCategory();

  const handleSubmit = async () => {
    await fetchCreateCategory({
      name: categoryName,
      description,
    });

    setCategoryName("");
    setDescription("");

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      loading={loadingRequest}
      onSubmit={handleSubmit}
    >
      <S.Wrapper>
        <S.Header>
          <S.HeaderIcon>
            <S.IconAdd />
          </S.HeaderIcon>
          <S.HeaderText>
            <S.Title>New Category</S.Title>
            <S.Subtitle>
              Create a new category to organize your projects.
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
