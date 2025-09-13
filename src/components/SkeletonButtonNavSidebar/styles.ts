import tw from 'tailwind-styled-components';

export const SkeletonButton = tw.div`
  w-full
  flex
  items-center
  gap-3
  p-3
  h-10
  rounded-md
  bg-white/5
  border
  border-transparent
  animate-pulse
`;

export const SkeletonIcon = tw.div`
  h-4
  w-4
  bg-white/10
  rounded
  flex-shrink-0
`;

export const SkeletonText = tw.div`
  h-4
  bg-white/10
  rounded
  flex-1
`;