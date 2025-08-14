import React from 'react';
import * as S from './styles';

interface IDividerProps extends React.HTMLProps<HTMLDivElement> {
  color?: string;
  thickness?: string;
}

export const Divider = ({
  color = 'white/20',
  thickness = 'h-[1px]',
  ...rest
}: IDividerProps) => {
  return (
    <S.Divider
      color={color}
      thickness={thickness}
      data-testid="divider"
      {...rest}
    />
  );
};
