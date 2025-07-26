import FooterLeftBar from './FooterLeftBar';
import HeaderLeftBar from './HeaderLeftBar';
import { MainLeftBarContent } from './MainLeftBarContent';
import * as S from './styles';

const LeftNavigation = () => {
  return (
    <S.Container>
      <HeaderLeftBar />

      <MainLeftBarContent />

      <FooterLeftBar />
    </S.Container>
  );
};

export default LeftNavigation;