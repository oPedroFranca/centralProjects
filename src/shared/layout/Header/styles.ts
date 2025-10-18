import tw from "tailwind-styled-components";

interface IMainAreaProps {
  $isMinimizedSidebar: boolean;
}

export const Container = tw.div<IMainAreaProps>`
  ${(p) => p.$isMinimizedSidebar ? "w-[calc(100%-65px)]" : "w-[calc(100%-250px)]"}

  h-[60px]
  fixed
  p-2
  px-4
  border-b
  border-primary-gray-500
  backdrop-blur-xl

  transition-all
  duration-300
  ease-in-out
  z-50
`;

export const HeaderWrapper = tw.div`
  relative
  h-full
  flex
  items-center
  justify-between
`;

export const DateContainer = tw.div`
  flex
  items-center
  gap-2
  bg-white/5
  backdrop-blur-sm
  border
  border-white/20
  rounded-full
  px-4
  py-2
`;

export const DateText = tw.p`
  text-sm
  font-medium
  text-foreground/90
  capitalize
`;

export const UserInfoContainer = tw.div`
  flex
  items-center
  gap-3
`;

export const UserDetails = tw.div`
  text-right
`;

export const UserText = tw.p`
  text-sm
  font-medium
  text-foreground/90
`;

export const Avatar = tw.div`
  border
  border-white/20
  shadow-lg
  flex
  h-10
  w-10
  shrink-0
  overflow-hidden
  rounded-full
  bg-secondary-purple-300/20
`;

export const AvatarFallback = tw.div`
  text-secondary-purple-300
  relative
  flex
  h-full
  w-full
  items-center
  justify-center
  rounded-full
  bg-muted
`;
