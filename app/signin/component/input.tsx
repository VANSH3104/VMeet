import clsx from "clsx";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  disabled?: boolean;
}

export const Input: React.FC<Props> = ({
  register,
  errors,
  label,
  id,
  type = "text",
  required,
  placeholder,
  disabled
}) => {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mb-6">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={clsx(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            {
              "border-red-500": errors[id], // Red border on error
              "opacity-35": errors[id] // Optional opacity for error state
            }
          )}
          disabled={disabled}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};