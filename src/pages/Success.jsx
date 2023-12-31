import React from 'react'
import Layout from '../layout/Layout'

const Success = () => {
  return (
    <Layout>
        <div className='w-screen h-screen flex justify-center items-center text-center'>
            <h3 className='text-xl'>Message Sent! <br /> <span className='text-sm'>You will be replied shortly.</span> </h3>
        </div>
    </Layout>
  )
}

export default Success
