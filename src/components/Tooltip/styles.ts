// components/Tooltip/styles.ts
import tw from "tailwind-styled-components";

export const TooltipWrapper = tw.div`
  relative
  inline-flex
`;

export const TooltipContent = tw.div`
  absolute
  bottom-full
  mb-2
  left-1/2
  -translate-x-1/2
  whitespace-nowrap
  px-2.5
  py-1
  text-xs
  rounded-md
  bg-primary-gray-700
  text-primary-gray-200
  border
  border-primary-gray-500/30
  shadow-md
  transition-opacity
  duration-300
  opacity-100
`;
