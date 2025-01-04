"use client";

import { Tooltip } from "react-tooltip";
import Image from "next/image";
import Link from "next/link";

import { socials } from "@/data/socials";

export default function Socials() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mt-[10px] p-[15px] w-auto bg-[#00000099] rounded-[22px] inline-flex flex-wrap items-center justify-center mx-[25px]">
				{socials.map((social) => (
					<div key={social.id}>
						<Link
							href={
								social.type === "social" ? `/socials/${social.id}` : social.url
							}
							target="_blank"
							rel="noopener"
							data-tooltip-id={`${social.id}-tooltip`}
						>
							<Image
								loading="lazy"
								src={`/images/socialLogos/${social.image}`}
								alt={`${social.name} Logo`}
								width={53}
								height={53}
								className="pl-[8px] pr-[8px] transition-transform duration-[.65s] hover:scale-[1.35] py-[3px]"
							/>
						</Link>

						<Tooltip
							id={`${social.id}-tooltip`}
							style={social.tooltipStyle}
							border={social.tooltipBorder}
						>
							<b>{social.name}</b>
							<br />
							<i>{social.tooltip}</i>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	);
}
