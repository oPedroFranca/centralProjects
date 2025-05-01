import * as S from './styles';

const FooterLeftBar = () => {
  return (
    <S.Container>
      <S.TextWrapper>
        <p>created by</p>
        <S.Link 
          href="https://www.linkedin.com/in/pedro-henrique-frança/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Tesseract
        </S.Link>
      </S.TextWrapper>
    </S.Container>
  );
};

export default FooterLeftBar;
