/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import SignUpFormProvider from '@/components/forms/sign-up/form-provider';
import React from 'react'
import RegistrationFormSetup from '@/components/forms/sign-up/registration-step';
import ButtonHandler from '@/components/forms/sign-up/button-handlers';
import HighlightBar from '@/components/forms/sign-up/highlight-bar';

type Props = {};

export default async function SignUp(props: Props) {

  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
        <div className="flex flex-col h-full gap-3">
            <SignUpFormProvider>
              <div className="flex flex-col gap-3">
                <RegistrationFormSetup/>
                <ButtonHandler/>
              </div>
              <HighlightBar/>
            </SignUpFormProvider>
        </div>
    </div>
  )
}