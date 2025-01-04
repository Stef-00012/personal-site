"use client"

import Collapsible from "@/components/Collapsible";
import { Carousel } from "react-responsive-carousel";

interface Data {
    rabbitImages: Array<string>;
}

export default function RabbitCollapsible({
    rabbitImages
}: Data) {
    return (
        <Collapsible title="My Rabbit">
            <div className="flex flex-wrap items-center justify-center">
                <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    showArrows
                    infiniteLoop
                >
                    {rabbitImages.map((image) => (
                        <div key={image}>
                            <img
                                src={`/images/rabbit/${image}`}
                                alt="My Rabbit Pictures"
                                className="object-contain w-[100%] h-[100%] max-h-[60vh] m-auto"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </Collapsible>
    )
}