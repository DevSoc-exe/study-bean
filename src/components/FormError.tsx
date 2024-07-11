import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string | undefined;
}

function FormError({ message }: FormErrorProps) {
  return (
    <div
      className={`${
        message ? "flex" : "hidden"
      } capitalize border border-red-200 w-full text-red-500 p-3 text-sm justify-start gap-x-4 items-center rounded-md text-red bg-red-200/50`}
    >
      <ExclamationTriangleIcon className="size-7 m-2" />
      {message}
    </div>
  );
}

export default FormError;
