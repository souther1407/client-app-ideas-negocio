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

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

function Combobox({ id, data, w = "100%", title, nofoundText, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const formated = React.useMemo(
    () => data.map((d) => ({ value: d, label: d })),
    []
  );

  React.useEffect(() => {
    onSelect(id, value);
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={`w-[${w}]`}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          style={{ fontSize: "0.6rem" }}
          className={`w-[${w}] h-[40px] justify-between  border-neutral-700 hover:bg-neutral-700/[.5] hover:text-white`}
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
      <PopoverContent className="w-[200px] h-[300px] border-neutral-700 p-0 overflow-auto bg-transparent">
        <Command className="bg-neutral-950 text-white">
          <CommandInput
            placeholder={title}
            style={{ fontSize: "0.6rem" }}
            className={"placeholder:text-neutral-400"}
          />

          <CommandEmpty style={{ fontSize: "0.6rem" }}>
            {nofoundText}
          </CommandEmpty>
          <CommandGroup className="overflow-auto">
            {formated.map((framework) => (
              <CommandItem
                key={framework.value}
                style={{ fontSize: "0.6rem" }}
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
