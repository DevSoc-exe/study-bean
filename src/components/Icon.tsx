import Link from "next/link";

const Icon = ({
  children,
  className,
  href,
  onclick
}: {
  href?: string;
  children: React.ReactElement;
  className?: string;
  onclick?: any
}) => {
  return (
    <Link href={href ? href : ""} onClick={onclick}>
      <div
        className={`size-10 mx-auto rounded-full flex justify-center items-center hover:border hover:border-primary transition-colors ${className}`}
      >

        {children}
      </div>
    </Link>
  );
};

export default Icon;
