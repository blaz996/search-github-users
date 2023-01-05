import React from 'react';

import { z, ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  useForm,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema: Schema;
};

const Form = <
  TFormValues extends FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <form
      className={`form ${className}`}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      {children(methods)}
    </form>
  );
};

export default Form;
