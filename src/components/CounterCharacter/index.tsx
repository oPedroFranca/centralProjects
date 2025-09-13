"use client";

import * as S from "./styles";

interface CounterCharacterProps {
  value: number;
  max: number;
  warningAt?: number;
}

export const CounterCharacter = ({ value, max, warningAt }: CounterCharacterProps) => {
  const threshold = warningAt ?? Math.floor(max * 0.8);

  return (
    <S.CounterRow>
      <S.CounterRight>
        <S.Counter $warning={value >= threshold}>
          {value}/{max}
        </S.Counter>
      </S.CounterRight>
    </S.CounterRow>
  );
};