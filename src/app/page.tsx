import { Header, LeftNavigation, MainContent } from '@/layout';
import * as S from './styles';

export default function Home() {
  return (
    <S.Wrapper>
      <LeftNavigation />

      <S.MainArea>
        <Header />
        <MainContent />
      </S.MainArea>
    </S.Wrapper>
  );
}
