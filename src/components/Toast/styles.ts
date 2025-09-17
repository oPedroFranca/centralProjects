import tw from "tailwind-styled-components";


export const base = `
  bg-primary-gray-800
  text-white
  flex
  shadow-2xl
  border
  rounded-md
  p-4
`;

export const success = `${base} border-green-500/50`;
export const error = `${base} border-red-500/50`;
export const warning = `${base} border-yellow-500/50`;

export const ToastBase = tw.div`
  bg-primary-gray-800
  text-white
  flex
  items-start
  shadow-2xl
  border
  rounded-md
  p-4
  max-w-sm
`;

export const SuccessToast = tw(ToastBase)`
  border-green-500/50
`;

export const ErrorToast = tw(ToastBase)`
  border-red-500/50
`;

export const WarningToast = tw(ToastBase)`
  border-yellow-500/50
`;

export const ToastIconWrapper = tw.div`
  w-6
  h-6
  flex
  items-center
  justify-center
`;

export const ToastTextWrapper = tw.div`
  ml-3
  flex
  flex-col
`;

export const ToastTitle = tw.span`
  font-medium
`;

export const ToastDescription = tw.span`
  text-sm
  opacity-80
`;
