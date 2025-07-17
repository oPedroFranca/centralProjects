'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../../../public/logoVersionTwo.png';
import { Button, Input } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";

import * as S from './styles';
import * as yup from 'yup';

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
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email?.message}
            leftIcon={<MdOutlineEmail size={16} />}
          />

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
            leftIcon={<LuLock size={16} />}
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Entrar
          </Button>
        </div>

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
            <Button variant="secondary">
              {" "}
              <FaGoogle />
            </Button>
            <Button variant="secondary">
              {" "}
              <FaLinkedin />{" "}
            </Button>
            <Button variant="secondary">
              <FaGithub />{" "}
            </Button>
          </S.SocialButtons>
        </S.Options>
      </S.Form>
    </S.Container>
  );
}
