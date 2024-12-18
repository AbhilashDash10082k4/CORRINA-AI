/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: Dispatch<SetStateAction<"owner" | "student">>;
};
function TypeSelectionForm({ register, userType, setUserType }: Props) {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
      <p className="text-iridium md:text-sm">Tell us about yourself! What do you do? Let&apos;s tailor your <br/>experience so it best suits you</p>
      <UserTypeCard register={register} setUserType={setUserType} userType={userType} value="owner" title="I own a business" text="Setting up my acccount for my company."></UserTypeCard>

      <UserTypeCard register={register} setUserType={setUserType} userType={userType} value="owner" title="I am a Student" text="Looking to learn about the tool."></UserTypeCard>
    </>
  );
}

export default TypeSelectionForm;
