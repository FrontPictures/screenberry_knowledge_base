import { twMerge } from 'tailwind-merge';
import Loader from './Loader';

interface Props extends React.ComponentProps<'form'> {
  children?: React.ReactNode;
  submitBtnClassName?: string;
  submitBtnText?: string;
  isPending?: boolean;
}

export default function Form({
  children,
  submitBtnText = 'Send Enquiry',
  submitBtnClassName,
  isPending = true,
  ...restProps
}: Props) {
  return (
    <form {...restProps}>
      {children}
      <button
        type="submit"
        className={twMerge(
          'border-solid mx-auto text-center mt-5 block cursor-pointer rounded border border-title-black py-3 transition hover:bg-title-black hover:text-white',
          submitBtnClassName
        )}
      >
        {isPending ? <Loader /> : submitBtnText}
      </button>
    </form>
  );
}
