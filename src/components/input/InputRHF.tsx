import React, { ComponentProps } from "react";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";

import Input from "./Input";

export interface InputRHFProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, "render"> {
  inputComponentProps?: Omit<ComponentProps<typeof Input>, "name">;
}

export default function InputRHF<T extends FieldValues>({
  inputComponentProps,
  ...item
}: InputRHFProps<T>) {
  return (
    <Controller
      {...item}
      render={({ field, fieldState }) => (
        <Input
          {...inputComponentProps}
          onChange={(e) => field.onChange(e.target.value)}
          value={field.value}
          id={field.name}
          name={field.name}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
