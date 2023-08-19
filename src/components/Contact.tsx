import { useForm, Resolver, FieldValues, UseFormReturn, SubmitHandler } from "react-hook-form"
//import emailjs from '@emailjs/browser';
import React from "react"
import 'react-toastify/dist/ReactToastify.min.css';


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


type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
))

type Option = {
  label: React.ReactNode
  value: string | number | string[]
}

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
)

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  )
}

type FormValues = {
    name: string
    email: string
    phone: string
    request: string
    message: string
}

//type FormEvent = React.FormEvent<HTMLFormElement>;

const Contact = () => {
    const {
        formState: { errors },
      } = useForm<FormValues>({ resolver })
      const onSubmit = (data: FormValues) => console.log(data)

    // const sendForm = (e: FormEvent) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_h8jaimr', 'template_vs8fpy', e.currentTarget, 'Pl2-CWjPBJYUaQXcu')
    //     .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     }, (err) => {
    //     console.log('FAILED...', err);
    //     });
    // } 

  return (
    <div className='bg-darkWhite pt-1 md:pb-20 md:px-60 font-inter text-black' id='contact'>
        <div className="bg-white rounded-lg">
            <h1 className="font-medium text-lg md:text-2xl text-center pt-16 md:pt-10">Request a Quote</h1>
            <p className="font-normal text-xs md:text-base text-center px-5 md:px-24 mt-3 md:mt-5">Lorem ipsum dolor sit amet consectetur. Viverra magna nec felis faucibus in adipiscing congue. Arcu vel sed.</p>
            <Form<FormValues>  onSubmit={onSubmit}>
            {({ register }) => (
                <>
                    <div className="mx-auto px-5 md:px-0 mb-16 md:mb-10 max-w-xl sm:mt-10 pb-5">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm md:text-base font-semibold leading-6 text-black">
                                Name
                                </label>
                                <div className="mt-2.5">
                                <Input
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
                                <Input
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
                                <Input
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
                                <Select
                                    {...register("request")}
                                    id="request"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                                    options={[
                                        { label: "Inquiry", value: "inquiry" },
                                        { label: "Complaint", value: "complaint" },
                                    ]}
                                >
                                </Select>
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
                            <Input type="submit" className="font-medium text-sm md:text-lg text-white cursor-pointer border-none rounded-md bg-active outline-none transition-all py-2 px-6 md:px-12" />
                        </div>
                    </div>
                </>
      )}
            </Form>
        </div>
    </div>
  )
}

export default Contact
