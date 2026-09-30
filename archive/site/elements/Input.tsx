import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface Props extends React.ComponentProps<'input'> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClassName?: string;
  className?: string;
  labelClass?: string;
  errorClass?: string;
}

export default function Input({
  register,
  name,
  error,
  label,
  wrapperClassName,
  className,
  labelClass,
  errorClass,
  type,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={twMerge('mb-4', wrapperClassName)}>
      {label && (
        <label className={twMerge('title-m-9 mb-2 block', labelClass)} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword && type === 'password' ? 'text' : type}
          aria-invalid={error ? 'true' : 'false'}
          className={twMerge(
            'placeholder:text-4! text-4! block w-full rounded border border-solid bg-sand-bg px-3 py-3.75 text-title-black placeholder:text-secondary-text-inverse focus:border-middle-border',
            error ? 'border-error-red!' : 'border-secondary-divider',
            className
          )}
          {...register(name)}
          {...rest}
        />
        {type === 'password' && (
          <div onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-4">
            {showPassword ? (
              <Image alt="eye close" width={20} height={20} src="/assets/icons/eyeClose.png" />
            ) : (
              <Image alt="eye open" width={20} height={20} src="/assets/icons/eyeOpen.png" />
            )}
          </div>
        )}
      </div>
      {error && (
        <p className={twMerge('mt-1 text-left text-xs text-error-red', errorClass)} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
