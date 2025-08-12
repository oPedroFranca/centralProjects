import tw from "tailwind-styled-components";

export const Button = tw.button`
  flex
  gap-2
  px-3
  py-1.5
  
  m-auto

  bg-purple-500/20
  hover:bg-purple-500/30

  text-purple-200
  hover:text-purple-100
 
  border-purple-400/30
  hover:border-purple-400/50
  rounded-md

  shadow-lg
  hover:shadow-xl
  backdrop-blur-sm
  border
  
  transition-all
  duration-300
`;
