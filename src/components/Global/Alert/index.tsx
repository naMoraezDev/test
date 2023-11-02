import { IoCloseSharp } from 'react-icons/io5';
import { BiSolidMessageAltError } from 'react-icons/bi';

type AlertProps = {
  message: string;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Alert({ message, setShowAlert }: AlertProps) {
  return (
    <div className="w-full flex justify-center fixed top-40 z-[999] animate-fade">
      <div className="flex items-center gap-24 p-24 bg-red text-white rounded-normal font-bold shadow-xl">
        <BiSolidMessageAltError className="w-24 h-24" />

        <p>{message}</p>

        <button onClick={() => setShowAlert(false)}>
          <IoCloseSharp className="w-24 h-24" />
        </button>
      </div>
    </div>
  );
}
