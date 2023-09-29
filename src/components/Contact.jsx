import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [contact_number, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
      event.preventDefault();

      emailjs.sendForm('service_fb0h3r9', 'template_vs8fpyr', form.current, 'Pl2-CWjPBJYUaQXcu')
      .then((response)=>{
        if (response.data.status === 'success') {
            alert("Message Sent.");
            navigate('/my-new-page');
            resetForm();
        } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
        }
      })

      const resetForm = () => {
        setName('')
        setEmail('') 
        setPhone('')
        setMessage('')
      }    
  }

  return (
    <div className='bg-darkWhite pt-1 md:pb-20 md:px-60 font-inter text-black' id='contact'>
        <div className="bg-white rounded-lg">
            <h1 className="font-medium text-lg md:text-2xl text-center pt-16 md:pt-10">Request a Quote</h1>
            <p className="font-normal text-xs md:text-base text-center px-5 md:px-24 mt-3 md:mt-5">Lorem ipsum dolor sit amet consectetur. Viverra magna nec felis faucibus in adipiscing congue. Arcu vel sed.</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mx-auto px-5 md:px-0 mb-16 md:mb-10 max-w-xl sm:mt-10 pb-5">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                          <label htmlFor="user_name" className="block text-sm md:text-base font-semibold leading-6 text-black">
                          Name
                          </label>
                          <div className="mt-2.5">
                          <input
                              type="text"
                              name="user_name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                              value={user_name}
                              onChange={(e) => setName(e.target.value)}
                          />
                          </div>
                      </div>
                      <div className="">
                          <label htmlFor="user_email" className="block text-sm md:text-base font-semibold leading-6 text-black">
                          Email
                          </label>
                          <div className="mt-2.5">
                          <input
                              type="email"
                              name="user_email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                              value={user_email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                          </div>
                      </div>
                      <div>
                        <label htmlFor="contact_number" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Phone Number
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="contact_number"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                            value={contact_number}
                                onChange={(e) => setPhone(e.target.value)}
                        />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="request" className="block text-sm md:text-base font-semibold leading-6 text-black">
                        Request
                        </label>
                        <div className="mt-2.5">
                        <select
                            id="request"
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                        >
                        <option value="inquiry">Inquiry</option>
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
                              name="message"
                              rows={6}
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-lightWine text-black shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-active sm:text-sm sm:leading-6"
                              defaultValue={''}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                          />
                          </div>
                      </div>
                  </div>
                  <div className="flex justify-center mt-8 md:mb-4">
                      <input type="submit" className="font-medium text-sm md:text-lg text-white cursor-pointer border-none rounded-md bg-active outline-none transition-all py-2 px-6 md:px-12" 
                      />
                  </div>
              </div>
            </form>
            
        </div>
    </div>
  )
}

export default Contact

