import Header from '../Header';
import LeftNavigation from '../LeftNavigation';
import * as S from './styles';

const LayoutStructure = ({ children }: React.PropsWithChildren) => {
  return (
    <S.Wrapper>
      <LeftNavigation />

      <S.MainArea>
        <Header />

        <S.MainContent>
          {children}
        </S.MainContent>
      </S.MainArea>
    </S.Wrapper>
  );
};

export default LayoutStructure;
