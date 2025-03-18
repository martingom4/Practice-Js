import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import api from "../config/axios.ts";
import type  {RegisterForm} from "../types/index.ts";


export default function useRegister() {
    const initialValues = {
      name: "",
      email: "",
      handle: "",
      password: "",
      password_confirmation: "",
    };

    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm({ defaultValues: initialValues });

    const handleRegister = async (formData: RegisterForm) => {
      try {
        const { data } = await api.post(`/auth/register`, formData);
        toast.success(data);
        reset();
      } catch (error) {
        if (isAxiosError(error) && error.response) {
          toast.error(error.response?.data.error);
        }
      }
    };

    return { register, handleSubmit, watch, reset, errors, handleRegister };
  }
