import tw from "tailwind-styled-components";
import { HiOutlinePhotograph } from "react-icons/hi";

export const GalleryHeader = tw.div`
  flex
  items-center
  gap-2
  text-sm
  font-medium
`;

export const IconPhoto = tw(HiOutlinePhotograph)`
  w-5
  h-5
  text-secondary-purple-300
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
  flex-1
`;

export const Image = tw.img`
  w-full
  h-full
  object-cover
  transition-transform
  duration-300
  ease-in-out
  group-hover:scale-105
`;

export const EmptyText = tw.p`
  w-full
  h-full
  flex
  items-center
  justify-center
  text-primary-gray-300
  text-sm
`;

export const NavButtonLeft = tw.button`
  absolute
  top-1/2
  -translate-y-1/2
  left-3
  w-10
  h-10
  rounded-full
  bg-primary-gray-700/60
  hover:bg-primary-gray-700/80
  text-white
  border
  border-white/20
  backdrop-blur-sm
  flex
  items-center
  justify-center
  transition
  duration-200
`;

export const NavButtonRight = tw.button`
  absolute
  top-1/2
  -translate-y-1/2
  right-3
  w-10
  h-10
  rounded-full
  bg-primary-gray-700/60
  hover:bg-primary-gray-700/80
  text-white
  border
  border-white/20
  backdrop-blur-sm
  flex
  items-center
  justify-center
  transition
  duration-200
`;

export const ThumbnailsOverlay = tw.div`
  absolute
  bottom-3
  left-1/2
  -translate-x-1/2
  flex
  gap-2
  px-3
  py-2
  rounded-lg
  bg-black/40
  backdrop-blur-sm
`;

export const ThumbnailImage = tw.img`
  w-full
  h-full
  object-cover
`;

export const ThumbnailButton = tw.button<{ $isActive: boolean }>`
  relative
  w-14
  h-12
  rounded-md
  overflow-hidden
  border-2
  transition
  duration-200
  ${({ $isActive }) =>
    $isActive
      ? "border-secondary-purple-300"
      : "border-transparent hover:border-white/50"}
`;

