import localFont from 'next/font/local';

export const fonts = localFont({
  src: [
    {
      path: '../public/fonts/GT-America-LC-Standard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GT-America-LC-Standard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GT-America-LC-Standard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-GT-America-LC',
});
