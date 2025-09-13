import tw from "tailwind-styled-components";
import { BiFolderPlus } from "react-icons/bi";
import { Input as BaseInput } from "@/components";

/** Container geral */
export const Wrapper = tw.div`
  flex
  flex-col
  gap-6
`;

/** Header */
export const Header = tw.div`
  flex
  gap-3
`;

export const HeaderIcon = tw.div`
  flex
  items-center
  justify-center
  relative

  mx-auto
  w-12
  h-12
  rounded-full
  bg-gradient-to-br
  from-secondary-purple-300/30
  to-secondary-purple-200/10
  backdrop-blur-sm
  border
  border-secondary-purple-300/30
  
  shadow-lg
  shadow-secondary-purple-300/10
`;

export const IconAdd = tw(BiFolderPlus)`
  h-6
  w-6
  text-secondary-purple-300
  drop-shadow-sm
`;

export const HeaderText = tw.div`
  flex
  flex-col
  gap-1
`;

export const Title = tw.h2`
  text-xl
  font-bold
  text-foreground/95
  drop-shadow-sm
`;

export const Subtitle = tw.p`
  text-sm
  text-primary-gray-300
  leading-relaxed
`;

/** Campo / formulário */
export const Field = tw.div`
  space-y-2
`;

export const Label = tw.label`
  text-foreground/90
  font-medium
  text-sm
`;