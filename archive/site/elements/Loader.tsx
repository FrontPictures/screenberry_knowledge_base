import { twMerge } from 'tailwind-merge';

export default function Loader({ className }: React.ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'inline-block h-4.5 w-4.5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        className
      )}
    >
      <span className="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!">
        Loading...
      </span>
    </div>
  );
}
