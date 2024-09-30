"use client";

import { Input } from "@/app/signin/component/input";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Social } from "./authsocial";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Var = "LOGIN" | "REGISTER";
type FormValues = {
  email: string;
  password: string;
  name: string;
};

export const Authmain = () => {
  const session = useSession();
  const router = useRouter();
  const [variable, setVariable] = useState<Var>("LOGIN");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/template");
    }
  }, [session?.status, router]);

  const toggle = () => {
    setVariable((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const validateInputs = (data: FormValues) => {
    const validationErrors: { [key: string]: string } = {};

    if (variable === "REGISTER" && !data.name) {
      validationErrors.name = "Name is required.";
    }

    if (!data.email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid.";
    }

    if (!data.password) {
      validationErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!validateInputs(data)) {
      return;
    }

    setLoading(true);
    if (variable === "REGISTER") {
      await axios
        .post(`/api/register`, data)
        .then(() => signIn("credentials", data))
        .catch(() =>
          toast({
            title: "Error in credentials",
            description: "Something went wrong",
          }),
        )
        .finally(() => setLoading(false));
    } else {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast({ title: "Invalid Credentials" });
          } else {
            toast({ title: "Login Successful" });
            router.push("/template");
          }
        })
        .finally(() => setLoading(false));
    }
  };

  const clicking = (action: string) => {
    setLoading(true);
    signIn(action, { redirect: true })
      .then((callback) => {
        if (callback?.error) {
          toast({ title: "Invalid Credentials" });
        } else {
          toast({ title: "Login Successful" });
          router.push("/template");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white  p-3 ">
      <Card className="border-hidden shadow-none w-[380px]">
        <CardHeader>
          <CardTitle className="flex text-4xl font-bold font-openSans justify-center pb-4">
            Create Your Cv
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className=" rounded">
            <div>
              <Input
                id="name"
                name="name"
                type="text"
                errors={formErrors}
                label="Name"
                placeholder="Enter your name"
                //@ts-ignore
                register={register}
                className="mb-4"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                errors={formErrors}
                label="Email"
                placeholder="Enter your email"
                //@ts-ignore
                register={register}
                className="mb-4"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                errors={formErrors}
                label="Password"
                placeholder="Enter your password"
                //@ts-ignore
                register={register}
                className="mb-4 p-4"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-700 text-lg font-semibold text-white py-2 w-full rounded hover:bg-blue-600"
            >
              {loading
                ? "Loading..."
                : variable === "LOGIN"
                  ? "Login"
                  : "Register"}
            </button>
          </form>
        </CardContent>
        <CardFooter className="grid">
          <div className="mt-4 flex justify-center gap-7">
            <Social icon={BsGithub} onclick={() => clicking("github")} />
            <Social icon={BsGoogle} onclick={() => clicking("google")} />
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggle}
              className="text-gray-500 text-sm underline"
            >
              {variable === "LOGIN"
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
