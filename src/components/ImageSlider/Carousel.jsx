import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"


export default function Carousel({ children: slides, autoslide = false, autoslideInterval = 5000 }) {

    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))



    return (
        <>
            <div className="overflow-hidden relative shadow-md">
                <div className="flex transition-transform ease-out duration-1000 " style={{ transform: `translateX(-${curr * 100}% )` }} >
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev}>
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next}>
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
        </>
    )
}