import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  items-center
  justify-center
  
  min-h-[40px]
  mb-2

  border-t
  border-white/20

  overflow-hidden
`;

export const TextWrapper = tw.div`
  text-xs
  text-muted-foreground/60
  text-center
  drop-shadow-sm
  whitespace-nowrap
`;

export const Link = tw.a`
  cursor-pointer
  ml-1
  text-secondary-purple-200
`;
