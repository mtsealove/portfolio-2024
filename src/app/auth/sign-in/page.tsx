'use client';

import { useForm, FormProvider } from 'react-hook-form';
import CardBody from '@/components/Card/CardBody';
import Card from '@/components/Card';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import { useMutation } from '@tanstack/react-query';
import {
  getMe, ResSignIn, setToken, signIn,
} from '@/api/AuthApi';
import { useDispatch } from 'react-redux';
import { login } from '@/reducers/user';

export interface IForm {
    email: string;
    password: string;
}

const AuthPage = () => {
  const methods = useForm<IForm>();
  const dispatch = useDispatch();
  const onSuccess = async (data: ResSignIn) => {
    window.alert('success');
    const { accessToken } = data;
    setToken(accessToken);
    const user = await getMe();
    dispatch(login(user));
  };
  const mutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: (data: IForm) => signIn(data.email, data.password),
    onSuccess,
    onError: () => {
      window.alert('오류가 발생하였습니다.');
    },
  });
  return (
      <main className='pt-10 min-h-dvh flex flex-col justify-center items-center bg-slate-100'>
          <Card className='min-w-80'>
              <CardBody>
                  <h1 className='font-semibold text-xl mb-6'>로그인</h1>
                  <FormProvider {...methods}>
                      <form className='flex flex-col gap-y-3'
                            onSubmit={methods.handleSubmit((data) => {
                              mutation.mutate(data);
                            })}>
                          <FormInput label='Email'
                                     placeholder='email'
                                     name='email'
                                     validation={{ required: true }}
                          />
                          <FormInput label='Password'
                                     placeholder='password'
                                     type='password'
                                     name='password'
                                     validation={{ required: true }}
                          />
                          <Button className='mt-2' type='submit'>
                              로그인
                          </Button>
                      </form>
                  </FormProvider>

              </CardBody>
          </Card>
      </main>
  );
};

export default AuthPage;
