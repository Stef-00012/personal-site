import React, { type MouseEvent, useEffect, useRef, useState } from "react";
import SelectIcon from "@/components/images/selectIcon";
import type { Option } from "@/types/select";
import Image from "next/image";

interface Data {
	onChange: (option: Option) => void | Promise<void>;
	options: Array<Option>;
	placeholder: string;
    className?: string;
	align?: string;
}

export default function Select({
	placeholder,
	onChange,
    className,
	options,
	align,
}: Data) {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<Option | undefined>(options.find((opt: Option) => opt.default));
	const inputRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function clickHandler(event: globalThis.MouseEvent) {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target as Node)
			) {
				setShowMenu(false);
			}
		}

		window.addEventListener("click", clickHandler);

		return () => {
			window.removeEventListener("click", clickHandler);
		};
	}, []);

	function handleInputClick(event: MouseEvent<HTMLDivElement>) {
		setShowMenu(!showMenu);
	}

	function getDisplay() {
		if (!selectedValue) {
			return placeholder;
		}

		return selectedValue.label;
	}

	function onItemClick(option: Option) {
		setSelectedValue(option);
		onChange(option);
	}

	return (
		<div className={className}>
            <div className="text-left relative cursor-pointer w-[-webkit-max-content] rounded-md border-solid border-[#818181] border-2 bg-black/50">
                <div ref={inputRef} onClick={handleInputClick} className="[display:-webkit-box] [-webkit-box-align:center] [-ms-flex-align:center] items-center [-webkit-box-pack:justify] [-ms-flex-pack:justify] justify-between [-webkit-user-select:none] [-moz-user-select:none] [-ms-user-select:none] select-none gap-[7px] px-[11px] py-[7px]">
                    {selectedValue?.icon && (
						<Image
							width={20}
							height={20}
							alt={"Cat Icon"}
							src={selectedValue.icon}
							className="align-middle"
						/>
					)}
					<div
                        className={!selectedValue ? "text-[#82868b]" : ""}
                    >
                        {getDisplay()}
                    </div>
                    <div>
                        <div>
                            <SelectIcon color="#ffffffb3" isOpen={showMenu} alt="Select Icon" />
                        </div>
                    </div>
                </div>

                {showMenu && (
                    <div className={`w-max absolute [-webkit-transform:translateY(6px)] [-ms-transform:translateY(6px)] translate-y-1.5 border-2 overflow-auto bg-black/50 z-[99] max-h-[312px] min-h-[50px] p-[5px] rounded-md border-solid border-[#818181] align-[${align || null}]`}>
                        {options.map((option) => (
							<div
								key={option.value}
								onClick={() => onItemClick(option)}
								className="[-ms-flex-align:center] items-center [-webkit-box-pack:justify] [-ms-flex-pack:justify] [-webkit-user-select:none] [-moz-user-select:none] [-ms-user-select:none] select-none gap-[7px] flex justify-center cursor-pointer [-webkit-transition:background-color_0.35s_ease] transition-[background-color] duration-[0.35s] ease-[ease] font-medium px-2.5 py-[7px] rounded-md hover:bg-white/10 hover:text-slate-400"
							>
								{option?.icon && (
									<Image
										width={20}
										height={20}
										alt="Cat Icon"
										src={option.icon}
										className="align-middle float-left"
									/>
								)}
								{option.label}
							</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
	);
}
