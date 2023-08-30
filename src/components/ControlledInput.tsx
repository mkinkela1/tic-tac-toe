import { useId } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type InputType = "text" | "password";

type Props<Interface extends FieldValues> = {
  label: string;
  type?: InputType;
  control: Control<Interface>;
  fieldName: FieldPath<Interface>;
};

const ControlledInput = <Interface extends FieldValues>({
  label,
  type = "text",
  control,
  fieldName,
}: Props<Interface>) => {
  const inputId = useId();

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field, fieldState: { error } }) => (
        <>
          <label
            htmlFor={inputId}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          <div className="mb-4">
            <input
              {...field}
              id={inputId}
              type={type}
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="text-red-500 text-xs">{error?.message}</div>
          </div>
        </>
      )}
    />
  );
};

export default ControlledInput;
