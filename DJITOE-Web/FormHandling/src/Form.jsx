import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <p className="mb-1 text-sm">Name</p>
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        className="mb-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      {errors.name && (
        <p className="text-sm text-red-500 mb-2">{errors.name.message}</p>
      )}

      <p className="mb-1 text-sm">Password</p>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        className="mb-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      />
      {errors.password && (
        <p className="text-sm text-red-500 mb-2">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="mt-2 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
