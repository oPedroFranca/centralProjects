'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import * as yup from 'yup';

import logo from '../../../../public/logo.png';
import { Button, Input } from '@/components';
import * as S from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Required field')
    .email('E-mail invalid'),
  password: yup
    .string()
    .required('Required field')
});

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log('dados validados', data);
    // TODO: autenticar
  };

  return (
    <S.Container>
      <div>
        <S.LogoContainer>
          <S.Logo>
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-full object-contain"
              priority
            />
          </S.Logo>
          <S.Title>Tesseract</S.Title>
        </S.LogoContainer>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="E-mail"
            {...register('email')}
            error={errors.email?.message}
          />

          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)} >Entrar</Button>

          <S.Options>
            <S.FlexBetween>
              <p>Forgot your password?</p>
              <S.SignInLink href="/register">Sign in</S.SignInLink>
            </S.FlexBetween>

            <S.Divider>
              <S.Line />
              <S.DividerText>Sign in with</S.DividerText>
              <S.Line />
            </S.Divider>

            <S.SocialButtons>
              <Button variant="secondary"> <FaGoogle /></Button>
              <Button variant="secondary"> <FaLinkedin /> </Button>
              <Button variant="secondary"><FaGithub /> </Button>
            </S.SocialButtons>
          </S.Options>
        </S.Form>
      </div>
    </S.Container>
  );
}
