import * as S from "./styles";

interface SkeletonButtonNavSidebarProps {
  count?: number;
}

export const SkeletonButtonNavSidebar = ({ count = 1 }: SkeletonButtonNavSidebarProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <S.SkeletonButton key={index}>
          <S.SkeletonIcon />
          <S.SkeletonText />
        </S.SkeletonButton>
      ))}
    </>
  );
};
