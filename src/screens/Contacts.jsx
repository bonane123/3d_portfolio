import React from 'react';
import LineGradient from '../components/LineGradient';

const Contacts = () => {
  return (
    <section id='contact' className=' pt-10 pb-24'>
      <div className='flex w-5/6 mx-auto'>
        <div className=' w-1/3 bg-blue-500 rounded-lg'>
          <img
            src={`../assets/professional.jpg`}
            alt='Image'
            className='w-full h-full object-cover '
          />
        </div>
        <div className='w-2/3 p-6 bg-amber-600'>
          <form>
            <div className='mb-4 '>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-3 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-2 border rounded-lg'
              />
            </div>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
