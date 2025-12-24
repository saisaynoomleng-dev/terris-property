import localFont from 'next/font/local';

export const lora = localFont({
  src: [
    {
      path: '../app/fonts/lora/Lora-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/lora/Lora-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/lora/Lora-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    { path: '../app/fonts/lora/Lora-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-lora',
});

export const poppins = localFont({
  src: [
    {
      path: '../app/fonts/poppins/thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/extrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/poppins/black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});
