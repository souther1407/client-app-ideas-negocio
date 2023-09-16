"use client";

import * as React from "react";
import { Check, ChevronsUpDown, XIcon } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../../atoms/ShadcnButton/ShadcdButton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../Command/Commnand";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../atoms/Popover/Popover";

function Combobox({
  id,
  data,
  w = "100%",
  h = "100%",
  title,
  nofoundText,
  onSelect,
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const formated = React.useMemo(
    () => data.map((d) => ({ value: d, label: d })),
    []
  );
  const contentRef = React.useRef();
  React.useEffect(() => {
    onSelect(id, value);
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger ref={contentRef} asChild className={`w-[${w}] h-[${h}]`}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          style={{ fontSize: "1rem", height: h, width: w }}
          className={`w-[${w}] h-[${h}] justify-between  border-neutral-700 hover:bg-neutral-700/[.5] hover:text-white`}
        >
          {value
            ? formated.find(
                (c) => c.value.toLowerCase() === value.toLowerCase()
              )?.label
            : title}
          {!value ? (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          ) : (
            <XIcon
              className="ml-2 h-4 w-4 shrink-0 opacity-50 hover:opacity-70"
              onClick={() => setValue("")}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: `${contentRef.current.clientWidth}px` }}
        className={`w-[100%] h-[280px] p-0 overflow-auto `}
      >
        <Command
          style={{
            background: "var(--linkedin-bluegray)",
            border: "1px solid var(--dark-green)",
          }}
          className=" text-white"
        >
          <CommandInput
            placeholder={title}
            style={{ fontSize: "1rem" }}
            className={"placeholder:text-neutral-400"}
          />

          <CommandEmpty style={{ fontSize: "1rem" }}>
            {nofoundText}
          </CommandEmpty>
          <CommandGroup className="overflow-auto">
            {formated.map((framework) => (
              <CommandItem
                key={framework.value}
                style={{ fontSize: "1rem" }}
                className={"text-white"}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Combobox;
