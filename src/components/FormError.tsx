import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

function FormError({ message }: FormErrorProps) {
  return (
    <div
      className={`${message ? "flex" : "hidden"
        } capitalize border border-red-200 w-full p-3 text-sm justify-start gap-x-2 items-center rounded-md text-red bg-red-200/50`}
    >
      <ExclamationTriangleIcon className="w-4 h-4" />
      {message}
    </div>
  );
}

export default FormError;
