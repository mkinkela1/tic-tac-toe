import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useMemo } from "react";

export type TOption = {
  id: string;
  label: string;
  value: string;
};

type Props = {
  options: TOption[];
  value: string;
  onSelect: (value: TOption) => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectableDropdown: React.FC<Props> = ({ options, value, onSelect }) => {
  const selectedValue = useMemo(
    () => options.find((option: TOption) => option.value === value),
    [value],
  );
  return (
    <div className="w-48">
      <Listbox value={selectedValue} onChange={onSelect}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-900">
              Status
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">
                    {selectedValue?.label ?? "All"}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate",
                              )}
                            >
                              {option.label}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectableDropdown;
