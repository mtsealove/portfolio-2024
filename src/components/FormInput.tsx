import { InputHTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { IForm } from '@/models/form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    validation?: RegisterOptions;
    name: keyof IForm;
}

const FormInput = (props:Props) => {
  const {
    label, name, validation, ...rest
  } = props;
  const { register } = useFormContext<IForm>();
  return (
        <div className='flex flex-col'>
            <label className='text-xs font-medium text-gray-700'>Password</label>
            <input className='border-b focus:outline-0 focus:border-b-blue-500 py-2'
                   {...rest}
                   {...register(name, validation)}
            />
        </div>
  );
};

export default FormInput;
