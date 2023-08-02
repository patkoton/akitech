import { useForm, Resolver } from "react-hook-form"
import emailjs from '@emailjs/browser';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type FormValues = {
    name: string
    email: string
    phone: string
    request: string
    message: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.email ? values : {},
      errors: !values.email
        ? {
            email: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    }
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({ resolver })
    //   const onSubmit = handleSubmit((data) => console.log(data))

    // const toastifySuccess = () => {
    //     toast('Form sent!', {
    //       position: 'bottom-right',
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,  
    //       draggable: false,
    //       className: 'submit-feedback success',
    //       toastId: 'notifyToast'
    //     });
    // };

    //   const onSubmit = async (data: any, e: any) => {
    //     const { name, email, phone, inquiry, message } = data;
    //     try {
    //       const templateParams = {
    //         name,
    //         email,
    //         phone,
    //         inquiry,
    //         message
    //       };

    //       await emailjs.send(
    //         process.env.REACT_APP_SERVICE_ID,
    //         process.env.REACT_APP_TEMPLATE_ID,
    //         templateParams,
    //         process.env.REACT_APP_PUBLIC_KEY
    //       );
    //       e.preventDefault();
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };

    const onSubmit = () => {
    
        emailjs.sendForm('service_h8jaimr','template_vs8fpyr', '#contact-form', 'Pl2-CWjPBJYUaQXcu')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    }

  return (
    <div className='bg-darkWhite pt-1 md:pb-20 md:px-60 font-inter text-black' id='contact'>
        <div className="bg-white rounded-lg">
            <h1 className="font-medium text-lg md:text-2xl text-center pt-16 md:pt-10">Request a Quote</h1>
            <p className="font-normal text-xs md:text-base text-center px-5 md:px-24 mt-3 md:mt-5">Lorem ipsum dolor sit amet consectetur. Viverra magna nec felis faucibus in adipiscing congue. Arcu vel sed.</p>
            <form action="#" method="POST" id='contact-form' onSubmit={handleSubmit(onSubmit)} className="mx-auto px-5 md:px-0 mb-16 md:mb-10 max-w-xl sm:mt-10 pb-5">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Name
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            {...register("name")}
                            id="name"
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
                            {...register("email")}
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                        {errors?.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Phone Number
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            {...register("phone")}
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="request" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Request
                        </label>
                        <div className="mt-2.5">
                        <select
                            {...register("request")}
                            id="request"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        >
                            <option value="default">Inquiry</option>
                            <option value="complaint">Complaint</option>
                        </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            {...register("message")}
                            id="message"
                            rows={6}
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8 md:mb-4">
                    <input type="submit" className="font-medium text-sm md:text-lg text-white cursor-pointer border-none rounded-md bg-active outline-none transition-all py-2 px-6 md:px-12" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
