/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import TypeSelectionForm from './type-selection-form';
import { Spinner } from '@/components/spinner';
import dynamic from 'next/dynamic';

const DetailForm = dynamic(() => import('./account-details-form'),{
    ssr: false,
    loading:  () => <Spinner noPadding={false} />
})
const OTPForm = dynamic(() => import('./otp-form'), {
    ssr: false,
    loading:  () => <Spinner noPadding={false} />,
})
  
type Props = {};

function RegistrationFormSetup( props : Props) {
    const {register, formState: {errors}, setValue} = useFormContext();
    const { currentStep } = useAuthContextHook();
    const [onOTP, setOnOTP] = useState<string>("");
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp', onOTP);

    switch (currentStep) {
        case 1:
            return (
                <TypeSelectionForm register={register} userType={onUserType} setUserType={setOnUserType}/>
            )
        case 2:
            return <DetailForm errors={errors} register={register}/>
        case 3: return (
            <OTPForm
              onOTP={onOTP}
              setOTP={setOnOTP}
            />
          )
    }

    return <div>RegistrationFormSetup</div>
}

export default RegistrationFormSetup;