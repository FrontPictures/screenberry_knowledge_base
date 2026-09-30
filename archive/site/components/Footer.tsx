'use client';

import { useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { twJoin, twMerge } from 'tailwind-merge';
import { middleNavMenu } from 'shared/constants/navigation';
import { getLocalizedHref } from 'shared/lib/getLocalizedHref';
import Form from 'elements/Form';
import SocialMediaLinks from 'elements/SocialMediaLinks';
import Input from 'elements/Input';
import { fonts } from './fonts';

interface FormDataTypes {
  'Last Name': string;
  Email: string;
}

const validationSchema = yup
  .object({
    'Last Name': yup.string().required(),
    Email: yup.string().email().required(),
  })
  .required();

const inputClasses =
  'h-12 w-full rounded border border-solid border-[#555555] bg-white/[0.15] px-6 py-4 text-5 tracking-[0.02em] text-white placeholder:text-white/[0.4] autofill:text-title-black focus:border-white mb-2';

const policyLinkCSS = 'text-xs text-[#c0c0c0] hover:text-white';

export default function Footer() {
  const pathname = usePathname();
  const [isPending, setIsPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataTypes>({
    resolver: yupResolver(validationSchema) as Resolver<FormDataTypes, any>,
  });
  const handleOnSubmit = handleSubmit(async (data, e) => {
    return;
    e?.preventDefault();

    const formData = new FormData(e?.target);
    if (isPending || !!formData.get('name')) return;
    setIsPending(true);

    axios
      .post('https://crm.zoho.com/crm/WebToLeadForm', formData)
      .then((res) => {
        if (res.status === 200) {
          setIsPending(false);
          toast.success('You have successfully subscribed', { position: 'bottom-right' });
        }
      })
      .catch(console.error);
  });

  return (
    <footer
      className={twJoin(
        'relative z-10 bg-[#171717] pt-10 pb-11 font-america tracking-[0.02em] text-white sm:pt-12 sm:pb-13 xl:pb-17',
        fonts.variable
      )}
    >
      <div className="mx-auto max-w-360 px-4 sm:px-8 xl:px-16">
        <div className="mb-6 flex justify-center xl:justify-between">
          <nav className="hidden xl:grid grid-flow-col-dense">
            {middleNavMenu.map(({ title, subMenu, footerSubMenu }) => (
              <div
                className={twMerge('row-span-3 mr-10', 'nth-3:row-span-1', 'nth-4:row-span-2 nth-4:col-span-2')}
                key={title}
              >
                <p className="title-m-8">{title}</p>
                {subMenu
                  ? subMenu?.childLinks.map(({ href, title }) => (
                      <Link
                        key={title}
                        href={getLocalizedHref(href, pathname)}
                        prefetch={false}
                        className="title-r-8 mt-2 block text-primary-text-inverse hover:text-white"
                      >
                        {title}
                      </Link>
                    ))
                  : footerSubMenu?.childLinks.map(({ href, title }) => (
                      <Link
                        key={title}
                        href={getLocalizedHref(href, pathname)}
                        prefetch={false}
                        className="title-r-8 mt-2 block text-primary-text-inverse hover:text-white"
                      >
                        {title}
                      </Link>
                    ))}
              </div>
            ))}
          </nav>
          <div>
            <Form
              action="#"
              isPending={isPending}
              onSubmit={handleOnSubmit}
              className="mb-11 flex w-80 flex-col items-center"
              submitBtnText="SUBSCRIBE"
              submitBtnClassName="mt-0 w-full cursor-pointer rounded border border-solid bg-transparent px-0 py-4.5 text-center text-sm font-medium tracking-[0.02em] text-white transition hover:bg-white hover:text-black"
            >
              <div className="w-full">
                <p className="title-r-8 mb-4 xl:text-left">Subscribe for updates</p>
                <input
                  className="opacity-0 absolute h-0 w-0 -z-50"
                  placeholder="Your name here"
                  type="text"
                  name="name"
                />
                <input
                  type="text"
                  className="hidden"
                  name="xnQsjsdp"
                  value="68ab6ee42a297e5a854010b5de4709b2f929c0b10e4b4e4f7510affc9697226b"
                  readOnly
                />
                <input type="hidden" name="zc_gad" className="hidden" id="zc_gad" value="" readOnly />
                <input
                  type="text"
                  className="hidden"
                  name="xmIwtLD"
                  value="93e0c956ca917d25206e967599a1b07928166b8e65a99389f74a4e16b33ed084"
                  readOnly
                />
                <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                <input type="text" className="hidden" name="returnURL" value="https://screenberry.com" readOnly />
                <Input
                  register={register}
                  className={inputClasses}
                  name="Last Name"
                  placeholder="Name *"
                  wrapperClassName="mb-2"
                  error={errors['Last Name']?.message && 'Name is required field'}
                />
                <Input
                  register={register}
                  className={inputClasses}
                  name="Email"
                  type="email"
                  placeholder="Email *"
                  wrapperClassName="mb-4"
                  error={errors.Email?.message}
                />
              </div>
            </Form>
            <SocialMediaLinks />
          </div>
        </div>
        <div className="border-b border-solid border-[#4d4d4d]" />
        <div className="mt-4 flex items-center gap-4 max-xl:flex-col">
          <p className="xl:text-sm">&copy; {new Date().getFullYear()} Front Pictures LLC. All rights reserved.</p>
          <Link href={getLocalizedHref('/privacy-policy', pathname)} prefetch={false} className={policyLinkCSS}>
            Privacy Policy
          </Link>
          <Link href={getLocalizedHref('/terms-and-conditions', pathname)} prefetch={false} className={policyLinkCSS}>
            Terms and Conditions
          </Link>
        </div>
      </div>
      <Toaster />
    </footer>
  );
}
