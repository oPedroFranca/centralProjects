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
          <S.LoginButton>Entrar</S.LoginButton>
          <S.Options>
            <p className="text-white text-sm">Esqueceu a senha?</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button>Google</Button>
              <Button>Facebook</Button>
            </div>
          </S.Options>
        </S.Form>
      </div>
    </S.Container>
  );
}
