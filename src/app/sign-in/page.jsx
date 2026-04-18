"use client";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { LoginFunc } = useAppContext();

  const onSubmit = async (data) => {
    await LoginFunc(data.identifier, data.password);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Welcome back
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">
              Sign in to CarPool
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Username or email
              </label>
              <input
                type="text"
                placeholder="Username or Email"
                {...register("identifier", {
                  required: "Username/Email is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
              {errors.identifier && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-3xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New here?{" "}
            <button
              type="button"
              onClick={() => router.push("/sign-up")}
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
