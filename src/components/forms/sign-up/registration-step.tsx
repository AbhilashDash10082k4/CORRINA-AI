/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import TypeSelectionForm from './type-selection-form';
import { Spinner } from '@/components/spinner';

const DetailForm = dynamic (() => import('./account-details-form'),{
    ssr: false,
    loading: Spinner,
})

type Props = {};

function RegistrationFormSetup(props: Props) {
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
        case 3:
    }

    return <div>Reg</div>
}

export default RegistrationFormSetup;
function dynamic(arg0: () => Promise<any>, arg1: { ssr: boolean; loading: ({ noPadding }: { noPadding?: boolean; }) => React.JSX.Element; }) {
    throw new Error('Function not implemented.');
}

