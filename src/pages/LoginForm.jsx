import AppSpinner from "@/ui/AppSpinner";
import { Input } from "@/components/ui/input";
import AppButton from "@/ui/AppButton";
import { useForm, FormProvider } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const { errors, isLoading } = formState;

  useEffect(() => {
    if (isAuth) navigate("/users");
  }, [isAuth, navigate]);

  console.log("errors", errors);

  function onSubmit({ email, password }) {
    if (!email && !password) {
      throw new Error("Invalid email or password");
    }
    if (email === "dana@adel" && password === "dana12345") {
      login({ email, password });
    } else {
      throw new Error("Please enter the right email and password");
    }

    console.log("login error", login);
    console.log("form auth", isAuth);
    console.log("email", email, "password", password);
  }

  return (
    <>
      {isLoading && <AppSpinner />}
      <FormProvider>
        <div className=" w-11/12 max-w-md md:mx-40 sm:60 my-auto mt-12 sm:mt-16 p-5 sm:p-8 border rounded-2xl shadow-2xl bg-white ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <Input
              type="email"
              className=" w-full sm:w-72 md:w-80 px-3 py-2 rounded-2xl mb-2.5"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
            />
            {errors?.email && (
              <p className="text-red-600 "> {errors.email.message} </p>
            )}{" "}
            <Input
              className="w-full sm:w-72 md:w-80 px-3 py-2 rounded-2xl mb-2.5"
              {...register("password", {
                required: "Password is required",
                validate: (value) => {
                  if (value.length < 8)
                    return "Password should be at least 8 characters";
                },
              })}
              placeholder="Password"
            />
            {errors?.password && (
              <p className="text-red-600 "> {errors.password.message} </p>
            )}
            <AppButton className="w-full  sm:w-60 md:w-60  mt-4" />
          </form>
        </div>
      </FormProvider>
    </>
  );
}

export default LoginForm;
