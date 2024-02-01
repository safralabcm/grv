import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menu-bar";

interface Options {
  label: string;
  value: string;
}
interface ItemProps {
  content: string;
  link?: string;
  hasBorder?: boolean;
  isMultiple?: boolean;
  options?: Options[];
}

export const Item = ({
  content,
  link,
  hasBorder = true,
  options,
}: ItemProps) => {
  if (options && options.length > 0) {
    return (
      <Menubar
        className={hasBorder ? "border-b border-[#c2c2c2]" : "border-none"}
      >
        <MenubarMenu>
          <div className="w-full h-full group">
            <MenubarTrigger
              className={cn(
                "flex items-center gap-2 h-full w-full justify-between"
              )}
            >
              {content}
              <ChevronDown
                size={20}
                className="text-[#141414] group-hover:text-[#1f78de]"
              />
            </MenubarTrigger>
            <MenubarContent className="flex flex-col p-4">
              {options.map((option, index) => (
                <MenubarItem className="outline-none hover:text-[#1f78de]">
                  <a href={`#${option.value}`}>{option.label}</a>
                  {index !== 1 && <MenubarSeparator />}
                </MenubarItem>
              ))}
            </MenubarContent>
          </div>
        </MenubarMenu>
      </Menubar>
    );
  }
  return (
    <li className="relative group">
      <a
        href={`#${link}`}
        className={`text-base hover:text-[#1f78de] transition-colors ease-linear duration-200 leading-3 py-4 lg:py-3 px-5 text-[#141414] ${
          hasBorder ? "border-b border-[#c2c2c2]" : "border-none"
        } block lg:border-none`}
      >
        {content}
      </a>
      <div className="w-0 hidden rounded-lg lg:block group-hover:w-full absolute h-1 bg-[#1f78de] transition-all duration-200 ease-linear" />
    </li>
  );
};
