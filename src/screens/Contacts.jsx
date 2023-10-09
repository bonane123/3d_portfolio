import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const Contacts = () => {
  return (
    <section id='contact' className='pt-10 pb-24'>
      <motion.div
        className='flex flex-col justify-center items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-white'>CONT</span>ACT
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-2/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
        <div className='w-2/3 flex gap-24 justify-between items-center'>
          <div>
            <p className=' text-5xl font-bold font-monoton'>
              Bonane{'  '}
              <br /> <span className=''>NDAYISHIMYE</span>
            </p>
          </div>

          <form className='w-full h-full border-2 border-slate-200 max-w-[400px] font-playfair py-6 px-3 rounded-md '>
            <p className='text-xl font-bold '>Email Me📧</p>
            <div className='mt-5'>
              <div className='w-full flex flex-col'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='p-2 rounded-md bg-transparent  border-2  focus:outline-none placeholder:text-slate-200'
                />
              </div>
              <div className='w-full flex flex-col mt-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='p-2 rounded-md bg-transparent  border-2  focus:outline-none placeholder:text-slate-200'
                />
              </div>
              <div className='w-full flex flex-col mt-2'>
                <textarea
                  type='text'
                  placeholder='Enter your name'
                  rows={5}
                  cols={20}
                  className='p-2 rounded-md bg-transparent border-2  focus:outline-none placeholder:text-slate-200'
                />
              </div>
              <div className='w-full flex flex-col mt-2'>
                <button className='bg-white py-2 rounded-md'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
