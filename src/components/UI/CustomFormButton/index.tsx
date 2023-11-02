import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type CustomFormButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function CustomFormButton({ ...props }: CustomFormButtonProps) {
  return (
    <button
      {...props}
      className="
        h-40 bg-primary-green text-white rounded-normal font-bold transition-all duration-300 w-full
        active:bg-primary-green-dark active:shadow-inset-button
        disabled:bg-gray2
      "
    >
      {props.children}
    </button>
  );
}
