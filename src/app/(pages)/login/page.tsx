'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import * as yup from 'yup';

import logo from '../../../../public/logo.png';
import { Button, Input } from '@/components';
import * as S from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export default function Login() {

  const loginSchema = yup.object({
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(6, 'Mínimo 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
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
            <p>Forgot your password?</p>

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
