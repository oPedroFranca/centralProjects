import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  flex-col
  relative
  rounded-xl
  overflow-hidden
  bg-gradient-to-br
  from-primary-gray-700/20
  to-primary-gray-700/5
  backdrop-blur-sm
  border
  border-primary-gray-500/20
  p-4
  gap-4
`;

export const GalleryHeader = tw.div`
  flex
  items-center
  gap-2
  text-sm
  font-medium
  text-muted-gray-300
`;

export const Text = tw.span``;

export const CountBadge = tw.span`
  text-xs
  bg-primary-gray-500/35
  px-2
  py-1
  rounded-full
`;

export const ImagesWrapper = tw.div`
  flex
  gap-4
  w-full
`;

export const ImageItem = tw.div`
  relative
  aspect-video
  rounded-lg
  overflow-hidden
  bg-primary-gray-700/20
  backdrop-blur-sm
  border
  border-primary-gray-500/20
  shadow-lg
  group
  cursor-pointer
  flex-1
`;

export const ImageOverlay = tw.div`
  absolute
  w-[150px]
  h-[30px]
  m-auto
  inset-0
  flex
  items-center
  justify-center
  opacity-0
  group-hover:opacity-100
  bg-black/50
  text-white
  text-sm
  px-3
  py-1
  rounded-full
  transition-opacity
  duration-300
  ease-in-out
`;