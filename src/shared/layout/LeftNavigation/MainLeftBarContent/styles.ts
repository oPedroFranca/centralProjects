import tw from 'tailwind-styled-components';

export const Container = tw.div`
  pt-4
  pb-4
  pl-2
  pr-2
`;

export const Title = tw.p`
  text-primary-gray-400
`;

export const List = tw.div`
  flex
  flex-col
  w-full
  mt-4
  cursor-pointer
`;

interface CategorieItemProps {
  $isSelected: boolean;
}

export const CategorieItem = tw.div<CategorieItemProps>`
  flex
  mb-3
  items-center
  rounded
  group
  transition-all
  duration-300
  ${({ $isSelected }) => $isSelected 
    ? 'ml-1.5 font-semibold'
    : 'hover:font-semibold hover:ml-1.5'}
`;

export const ColorWrapper = tw.div`
  w-[18px]
  h-[18px]
  mr-3.5
  p-0.5
  flex
  rounded-full
  transition-all
  duration-300
`;

export const ColorCircle = tw.span`
  w-full
  h-full
  rounded-full
  border-2
  border-primary-gray-800
  transition-all
  duration-300
`;

interface CategorieNameProps {
  $isSelected: boolean;
}

export const CategorieName = tw.p<CategorieNameProps>`
  transition-all
  duration-300
  ${({ $isSelected }) => $isSelected
    ? 'text-primary-gray-100'
    : 'group-hover:text-primary-gray-200'}
`;
