"use client"

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../../../public/logoVersionTwo.png';
import { Button, Input } from '@/components';
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";

import * as S from './styles';
import { useLoginForm } from './hook/useLoginForm';

export default function Login() {
  const { register, handleSubmit, errors, loading } = useLoginForm();

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

      <S.Form onSubmit={handleSubmit}>
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

          <Button type="submit" loading={loading} onClick={handleSubmit}> Entrar</Button>
        </div>

        <S.Options>
          <S.FlexBetween>
            <p>Forgot your password?</p>
            <S.SignInLink href="/register">Register</S.SignInLink>
          </S.FlexBetween>

          <S.Divider>
            <S.Line />
            <S.DividerText>Sign in with</S.DividerText>
            <S.Line />
          </S.Divider>

          <S.SocialButtons>
            <Button variant="secondary">
              <FaGoogle />
            </Button>
            <Button variant="secondary">
              <FaLinkedin />
            </Button>
            <Button variant="secondary">
              <FaGithub />
            </Button>
          </S.SocialButtons>
        </S.Options>
      </S.Form>
    </S.Container>
  );
}
