'use client';

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import * as yup from 'yup';

import logo from '../../../../public/logoVersionTwo.png';
import { Button, Input } from '@/components';
import * as S from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
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
          <div className="flex gap-2.5 justify-between">
            <Input
              type="text"
              placeholder="Name"
              {...register('name')}
              error={errors.name?.message}
            />

            <Input
              type="text"
              placeholder="Username"
              {...register('username')}
              error={errors.username?.message}
            />
          </div>

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

          <Input
            type="password"
            placeholder="Repeat Password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <Button type="submit" onClick={handleSubmit(onSubmit)} >Register</Button>

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
