/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useToast } from "../use-toast"

//hook for sign-up
export const useSignUpForm = () => {
    const {toast} = useToast();
    const [loading, setLoading] = useState<boolean>(false);

}