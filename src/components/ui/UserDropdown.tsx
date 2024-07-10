import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

const SidebarDropdown = ({
    elements,
    className,
    setOpen,
    open
} : {
    elements: DropdownElement[]
    className: string
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
}
) => {
  //   const [open, setOpen] = useState(false);

  return (
    <motion.ul
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      animate={open ? "open" : "closed"}
      style={{ originY: "top" }}
      className={cn(
        "flex flex-col z-40 gap-2 p-2 rounded-lg bg-white shadow-xl absolute left-0 w-48 top-[120%] overflow-hidden",
        className
      )}
    >
      {elements &&
        elements.map((element) => {
          return (
            <Option
              setOpen={setOpen}
              Icon={element.icon}
              text={element.text}
              onClick={element.onClick}
            />
          );
        })}
    </motion.ul>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  onClick,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClick: any;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        onClick();
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default SidebarDropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
