import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import * as S from './styles';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { Button, Input } from '@/components';

export default function Login() {
  return (
    <S.Container>
      <div>
        <S.LogoContainer>
          <S.Logo>
            <Image src={logo} alt="Logo" className="h-full w-full object-contain" />
          </S.Logo>
          <S.Title>Tesseract</S.Title>
        </S.LogoContainer>

        <S.Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button>Entrar</Button>

          <S.Options>
            <p>Forgot your password?</p>

            <S.Divider>
              <S.Line />
              <S.DividerText>Sign in with</S.DividerText>
              <S.Line />
            </S.Divider>

            <S.SocialButtons>
              <Button variant="secondary"> <FaGoogle /></Button>
              <Button variant="secondary"> <FaLinkedin /></Button>
              <Button variant="secondary"> <FaGithub /></Button>
            </S.SocialButtons>
          </S.Options>
        </S.Form>
      </div>
    </S.Container>
  );
}
