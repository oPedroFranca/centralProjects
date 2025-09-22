import tw from "tailwind-styled-components";

export const IconWrapper = tw.div`
  w-4
  h-4
  flex
  items-center
  justify-center
`;

export const TimelineItem = tw.div`
  flex
  items-center
  gap-3
  p-3
  rounded-lg
  bg-primary-gray-600
  border
  border-primary-gray-500
`;

export const Label = tw.p`
  text-xs
  text-primary-gray-200/95
`;

export const Value = tw.p`
  font-medium
  text-base
  text-primary-gray-200
`;
