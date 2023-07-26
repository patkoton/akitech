import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdOutlinePersonOutline } from 'react-icons/md'

const Testimonial = () => {
  return (
    <div>
       <Carousel
            className=""
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4 text-black"
                >
                    <IoIosArrowBack strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                </IconButton>
            )}
                nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4 text-black"
                >
                    <IoIosArrowForward strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-gray w-3" : "bg-gray/50 w-2"
                    }`}
                    onClick={() => setActiveIndex(i)}
                />
                ))}
            </div>
            )}
            >
            <div className="bg-lightGray px-12 md:px-20">
                <div className="flex justify-center">
                    <div className="w-14 md:w-20 h-14 md:h-20 rounded-full bg-borderColor flex justify-center items-center">
                        <MdOutlinePersonOutline className="w-6 h-6 text-gray" />
                    </div> 
                </div>
                <p className="font-normal text-center text-black text-base md:text-lg mt-3">Working with Patience has been exhilarating, her determination and passion towards her job makes it seamless and worth doing.</p>
                <p className="font-bold text-xl md:text-2xl text-black text-center mt-2.5">Debs Utomi</p>
                <p className="font-normal text-center text-black text-base md:text-lg">Co-Founder, PHD Technical Solutions</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Testimonial
