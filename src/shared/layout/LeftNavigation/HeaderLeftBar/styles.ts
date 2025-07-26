import tw from "tailwind-styled-components";
import { ButtonNavSidebar as defaultButtonNavSidebar } from "@/components";
import Image from "next/image";

export const Container = tw.div`
  min-h-[60px]
  flex
  items-center
  justify-between
  border-b
  border-white/20
`;

export const LogoWrapper = tw.div`
  flex
  items-center
`;

export const Logo = tw.div`
  h-10
  w-10
  mr-2
`;

export const Title = tw.h1`
  text-base
  font-medium
  tracking-wider
`;

export const ButtonNavSidebar = tw(defaultButtonNavSidebar)`
  w-[32px]
  h-[32px]
  p-0
  justify-center
  border
  gap-0
  
  ${(props) => (props.isMinimized ? "bg-transparent" : "bg-white/5")}
`;

export const LogoImage = tw(Image)`
  h-10
  w-10
  object-contain
`;
