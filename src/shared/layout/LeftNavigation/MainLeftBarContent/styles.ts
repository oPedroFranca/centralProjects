import tw from "tailwind-styled-components";
import { ButtonNavSidebar as DefaultButtonNavSidebar } from "@/components";

export const Container = tw.div`
  flex
  flex-col
  pt-4
  pb-4
  h-full
  overflow-auto
`;

export const Title = tw.p`
  text-base
  font-semibold
  text-foreground/90
  drop-shadow-sm
  mb-3
`;

export const List = tw.div`
  relative
  flex
  flex-col
  space-y-2
`;

export const NewCategoryButton = tw(DefaultButtonNavSidebar)`
  bg-transparent 
  border 
  border-dashed 
  border-white/20
`;

export const ConfigButton = tw(DefaultButtonNavSidebar)`
  flex 
  w-full 
  mt-auto
`;
