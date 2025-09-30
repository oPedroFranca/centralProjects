"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ContainerModalProject } from '@/components';
import { Project } from "@/shared/interfaces";
import * as S from "./styles";

interface ImageGalleryProps {
  projectData: Project;
}

export const ImageGallery = ({ projectData }: ImageGalleryProps) => {
  const images = projectData.images ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMany = images.length > 1;

  const goPrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <ContainerModalProject>
      <S.GalleryHeader>
        <S.IconPhoto />
        <S.Text>Galeria de Imagens</S.Text>
        <S.CountBadge>
          {images.length} {images.length === 1 ? "Image" : "Images"}
        </S.CountBadge>
      </S.GalleryHeader>

      <S.ImagesWrapper>
        <S.ImageItem>
          {images[currentIndex] ? (
            <S.Image
              src={images[currentIndex]}
              alt={`Projeto - Imagem ${currentIndex + 1}`}
            />
          ) : (
            <S.EmptyText>Sem imagens</S.EmptyText>
          )}

          {hasMany && (
            <>
              <S.NavButtonLeft onClick={goPrev} >
                <FiChevronLeft />
              </S.NavButtonLeft>
              <S.NavButtonRight onClick={goNext}>
                <FiChevronRight />
              </S.NavButtonRight>

              <S.ThumbnailsOverlay>
                {images.map((img, index) => (
                  <S.ThumbnailButton
                    key={index}
                    $isActive={index === currentIndex}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <S.ThumbnailImage src={img} alt={`Miniatura ${index + 1}`} />
                  </S.ThumbnailButton>
                ))}
              </S.ThumbnailsOverlay>
            </>
          )}
        </S.ImageItem>
      </S.ImagesWrapper>
    </ContainerModalProject>
  );
};
