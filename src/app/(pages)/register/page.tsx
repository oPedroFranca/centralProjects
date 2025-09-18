'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../../../public/logoVersionTwo.png';
import { Button, Input } from '@/components';
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuLock } from "react-icons/lu";

import { useRegisterForm } from './hook/useRegisterForm';
import * as S from './styles';

export default function Register() {
  const { register, handleSubmit, errors, loading } = useRegisterForm();

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
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-2.5 justify-between">
            <Input
              type="text"
              placeholder="Name"
              {...register('name')}
              error={errors.name?.message}
              leftIcon={<FiUser size={16} />}
            />

            <Input
              type="text"
              placeholder="Username"
              {...register('username')}
              error={errors.username?.message}
              leftIcon={<FiUser size={16} />}
            />
          </div>

          <Input
            type="email"
            placeholder="E-mail"
            {...register('email')}
            error={errors.email?.message}
            leftIcon={<MdOutlineEmail size={16} />}
          />

          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            error={errors.password?.message}
            leftIcon={<LuLock size={16} />}
          />

          <Input
            type="password"
            placeholder="Repeat Password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            leftIcon={<LuLock size={16} />}
          />

          <Button type="submit" onClick={handleSubmit} loading={loading} >Register</Button>
        </div>


        <S.Options>
          <S.FlexBetween>
            <p></p>

            <S.SignInLink href="/login">Sign in</S.SignInLink>
          </S.FlexBetween>

          <S.Divider>
            <S.Line />
            <S.DividerText>Register with</S.DividerText>
            <S.Line />
          </S.Divider>

          <S.SocialButtons>
            <Button variant="secondary"><FaGoogle /></Button>
            <Button variant="secondary"><FaLinkedin /></Button>
            <Button variant="secondary"><FaGithub /></Button>
          </S.SocialButtons>
        </S.Options>
      </S.Form>
    </S.Container>
  );
}
