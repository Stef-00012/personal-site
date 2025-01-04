import Image from "next/image";

export default function NamePic() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/images/pfp.webp"
                alt="Avatar"
                width={120}
                height={120}
                className="pt-[60px] transition-[padding-bottom, transform] duration-[.65s] hover:scale-[1.35] pb-[10px] hover:pb-[30px] block"
                priority
            />
            <p className="text-[#d63384] text-xl transition-transform duration-[.65s] animate-cray inline-block hover:scale-[1.18] font-mono bg-[#00000099] rounded-[13px] p-[4px] pr-[8px] pl-[8px] font-bold">
                Stef
            </p>
        </div>
    )
}