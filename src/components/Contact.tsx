import Button from "../elements/Button"


const Contact = () => {
  return (
    <div className='bg-darkWhite pt-1 md:pb-20 md:px-60 font-inter text-black' id='contact'>
        <div className="bg-white rounded-lg">
            <h1 className="font-medium text-lg md:text-2xl text-center pt-16 md:pt-10">Request a Quote</h1>
            <p className="font-normal text-xs md:text-base text-center px-5 md:px-24 mt-3 md:mt-5">Lorem ipsum dolor sit amet consectetur. Viverra magna nec felis faucibus in adipiscing congue. Arcu vel sed.</p>
            <form action="#" method="POST" className="mx-auto px-5 md:px-0 mb-16 md:mb-10 max-w-xl sm:mt-10 pb-5">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Name
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Phone Number
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="company" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Address
                        </label>
                        <div className="mt-2.5">
                        <select
                            name="company"
                            id="company"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        >
                            <option value="default">Inquiry</option>
                            <option value="">Inquiry</option>
                            <option value="">Inquiry</option>
                        </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8 md:mb-4">
                    <Button children='Contact Us' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact