import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
        href='https://github.com/bonane123'
      >
        <BsGithub className='w-6 h-6' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/ndayishimye-bonane-779ba1204/'
      >
        <BsLinkedin className='w-6 h-6' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
        href='https://www.instagram.com/nb.us.0808/'
      >
        <BsInstagram className='w-6 h-6' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
        href='https://wa.me/250783553581'
      >
        <BsWhatsapp className='w-6 h-6' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
