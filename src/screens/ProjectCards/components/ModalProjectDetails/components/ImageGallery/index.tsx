import { HiOutlinePhotograph } from "react-icons/hi";
import * as S from "./styles";

export const ImageGallery = () => {
  return (
    <S.Container>
      <S.GalleryHeader>
        <HiOutlinePhotograph className="w-4 h-4 text-secondary-purple-300" />
        <S.Text>Galeria de Imagens</S.Text>
        <S.CountBadge>4 imagens</S.CountBadge>
      </S.GalleryHeader>

      <S.ImagesWrapper>
        <S.ImageItem>
          <img
            src="https://images.unsplash.com/photo-1685558589023-3297b012d8bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Projeto - Image 2"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          <S.ImageOverlay>
            Clique para ampliar
          </S.ImageOverlay>
        </S.ImageItem>
      </S.ImagesWrapper>
    </S.Container>
  );
};
