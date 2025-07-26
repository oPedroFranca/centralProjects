'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../../../public/logoVersionTwo.png';
import { Button, Input } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { usePostRegister } from '@/shared/hooks';

import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuLock } from "react-icons/lu";

import * as yup from 'yup';
import * as S from './styles';

interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = yup.object({
  name: yup
    .string()
    .required('Required field'),
  username: yup
    .string()
    .required('Required field'),
  email: yup
    .string()
    .required('Required field')
    .email('E-mail invalid'),
  password: yup
    .string()
    .required('Required field')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required field'),
});

export default function Register() {
  const { registerUser } = usePostRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    const formatRegisterPost = {
      name: data.name,
      userName: data.username,
      email: data.email,
      password: data.password,
    };

    await registerUser(formatRegisterPost)
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

          <Button type="submit" onClick={handleSubmit(onSubmit)} >Register</Button>
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
            <Button variant="secondary"> <FaGoogle /> </Button>
            <Button variant="secondary"> <FaLinkedin /> </Button>
            <Button variant="secondary"> <FaGithub /> </Button>
          </S.SocialButtons>
        </S.Options>
      </S.Form>
    </S.Container>
  );
}
