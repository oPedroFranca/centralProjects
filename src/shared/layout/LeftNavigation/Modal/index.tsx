"use client";

import { useState } from "react";
import { Modal } from "@/components";
import * as S from "./styles";
import { CounterCharacter } from './CounterCharacter';

interface ModalCreateCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ModalCreateCategory = ({ isOpen, onClose, onSubmit }: ModalCreateCategoryProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => onSubmit();

  const handleNameChange = (value: string) => setCategoryName(value);
  const handleDescriptionChange = (value: string) => setDescription(value);

  return (
    <Modal isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Header>
          <S.HeaderIcon>
            <S.IconAdd />
          </S.HeaderIcon>
          <S.HeaderText>
            <S.Title>Nova Categoria</S.Title>
            <S.Subtitle>
              Crie uma nova categoria para organizar seus projetos.
            </S.Subtitle>
          </S.HeaderText>
        </S.Header>

        <div>
          <S.Field>
            <S.Label>Nome da Categoria</S.Label>

            <S.Input
              placeholder="Digite o nome da categoria..."
              value={categoryName}
              onChange={(e: any) => handleNameChange(e.target.value)}
              maxLength={30}
            />

            <CounterCharacter value={categoryName.length} max={30} />
          </S.Field>

          <S.Field>
            <S.Label>Descrição</S.Label>

            <S.Input
              placeholder="Descricao da categoria..."
              value={description}
              onChange={(e: any) => handleDescriptionChange(e.target.value)}
              maxLength={30}
            />

            <CounterCharacter value={description.length} max={100} />
          </S.Field>
        </div>
      </S.Wrapper>
    </Modal>
  );
};

export default ModalCreateCategory;
