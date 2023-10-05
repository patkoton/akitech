import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { testContent } from "../data";

const Testimonial = () => {
  return (
    <div className="font-inter text-black">
        {/* Medium Screen */}
        <div className="hidden md:block bg-darkWhite pt-10 pb-14">
            <Carousel
                className=""
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 -translate-y-2/4 left-4 text-black rounded-full hover:border hover:bg-transparent border-active"
                    >
                        <IoIosArrowBack strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                    </IconButton>
                )}
                    nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 !right-4 text-black rounded-full hover:border hover:bg-transparent border-active"
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
                        activeIndex === i ? "bg-active w-3" : "bg-active/50 w-2"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                    ))}
                </div>
                )}
                >
                <div className="px-14 pb-16">
                    <div className="flex flex-row space-x-4">
                        {testContent.map((item) => {
                            return (
                                <div className="w-1/2 bg-white rounded-lg p-8">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-[40px]">
                                                <img src={item.image} alt="" className="w-full" />
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-xl">{item.name}</h5>
                                                <h6 className="font-normal text-base">{item.role}</h6>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1">
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                        </div>
                                    </div>
                                    <p className="text-base font-normal mt-2.5"><span className="text-base font-black">"</span>{item.description}<span className="text-base font-black">"</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Carousel>
        </div>

        {/* Small Screen */}
        <div className="md:hidden bg-darkWhite pt-3 pb-10">
            <Carousel
                className=""
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 -translate-y-2/4 -left-4 text-black rounded-full hover:border hover:bg-transparent border-active"
                    >
                        <IoIosArrowBack strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                    </IconButton>
                )}
                    nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 !-right-4 text-black rounded-full hover:border hover:bg-transparent border-active"
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
                        activeIndex === i ? "bg-active w-3" : "bg-active/50 w-2"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                    ))}
                </div>
                )}
                >
                {testContent.map((item) => {
                    return (
                        <div className="px-5 pb-10">
                            <div className="w-full bg-white rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-[20px]">
                                            <img src={item.image} alt="" className="w-full" />
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-sm">{item.name}</h5>
                                            <h6 className="font-normal text-xs">{item.role}</h6>
                                        </div>
                                    </div>
                                    <div className="flex">
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                            <AiFillStar strokeWidth={2} className="text-orange" />
                                    </div>
                                </div>
                                <p className="text-xs font-normal mt-2.5"><span className="text-xs font-black">"</span>{item.description}<span className="text-xs font-black">"</span></p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default Testimonial
