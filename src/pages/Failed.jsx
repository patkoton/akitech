import React from 'react'
import Layout from '../layout/Layout'

const Failed = () => {
  return (
    <Layout>
        <div className='w-screen h-screen flex justify-center items-center text-center'>
            <h3 className='text-xl'>Message Not Sent! <br /> <span className='text-sm'>Please try again.</span> </h3>
        </div>
    </Layout>
  )
}

export default Failed
