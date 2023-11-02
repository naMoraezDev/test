import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

type CustomInputProps = {
  errorMessage?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function CustomInput({ errorMessage, ...props }: CustomInputProps) {
  const hasError = Boolean(errorMessage?.length);

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="relative flex flex-col">
      <input
        {...props}
        type={showPassword ? 'text' : props.type}
        className={`
          ${
            hasError &&
            'border-red focus:outline-red placeholder-pink-100 text-red focus:transition-none'
          }
          w-full h-40 rounded-sm px-8 border-[1px] transition-all duration-300
        `}
      />

      {props.type === 'password' && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute h-40 top-0 right-12 flex items-center"
        >
          {showPassword ? (
            <MdVisibility
              className={`w-24 h-24 ${errorMessage && 'text-pink-200'}`}
            />
          ) : (
            <MdVisibilityOff
              className={`w-24 h-24 ${errorMessage && 'text-pink-200'}`}
            />
          )}
        </button>
      )}

      {hasError && (
        <span className="font-bold text-[14px] text-red animate-revealFade">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
