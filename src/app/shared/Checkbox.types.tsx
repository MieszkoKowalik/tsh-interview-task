import React from 'react';

type InputHTMLAttributesWithoutType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

export type CheckboxProps = InputHTMLAttributesWithoutType & {
  label: string;
};
