"use client";

import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

export interface SelectOption {
	default: boolean;
	lazy?: boolean;
	label: string;
	value: string;
	icon?: string;
	tooltip?: ReactNode;
}

interface Data {
	onChange?: (option: SelectOption) => void | Promise<void>;
	options: Array<SelectOption>;
	placeholder: string;
	className?: string;
	type?: "link" | "button";
	query?: string;
}

export default function Select({
	placeholder,
	onChange = () => {},
	className,
	options,
	type = "button",
	query,
}: Data) {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(
		options.find((opt: SelectOption) => opt.default),
	);
	const inputRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

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

	function handleInputClick() {
		setShowMenu(!showMenu);
	}

	function getDisplay() {
		if (!selectedValue) {
			return placeholder;
		}

		return selectedValue.label;
	}

	function onItemClick(option: SelectOption) {
		setSelectedValue(option);
		if (type === "button") onChange(option);
		else router.push(`?${query}=${option.value}`);
	}

	return (
		<div className={className}>
			<div className="relative w-full px-2 mt-4 ml-4 -mb-20">
				<div
					ref={inputRef}
					// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
					tabIndex={0}
					onClick={handleInputClick}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleInputClick();
					}}
					className="btn btn-soft flex items-center gap-2 w-full justify-between"
				>
					{selectedValue?.icon && (
						<Image
							width={20}
							height={20}
							alt="Icon"
							src={selectedValue.icon}
							className="inline-block"
							loading={selectedValue?.lazy ? "lazy" : undefined}
						/>
					)}
					<span className="truncate">{getDisplay()}</span>
					<span
						className={`${
							showMenu ? "rotate-90" : ""
						} transition-transform duration-200 icon-[tabler--chevron-right] size-5 text-base-content`}
					/>
				</div>

				{showMenu && (
					<ul className="absolute mt-1 z-50 max-h-80 overflow-y-auto w-full bg-base-200 border border-base-content/10 rounded-box shadow-md">
						{options.map((option) => (
							<li
								key={option.value}
								// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
								tabIndex={0}
								onClick={() => onItemClick(option)}
								onKeyDown={(e) => {
									if (e.key === "Enter") onItemClick(option);
								}}
								className="flex items-center gap-2 pl-3 rounded-2xl py-1.5 cursor-pointer hover:bg-base-300 transition-colors"
							>
								{option.icon && (
									<Image
										width={20}
										height={20}
										alt="Icon"
										src={option.icon}
										className="inline-block shrink-0"
									/>
								)}
								<span className="truncate">{option.label}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
