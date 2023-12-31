import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import SocialMediaIcons from '../components/SocialMediaIcons';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PROFILE from '../assets/bonane.png';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full py-10'
    >
      {/* {IMAGE SECTION} */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 '>
        {isAboveMediumScreens ? (
          <div className='relative z-0 ml-20 '>
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full bg-gradient-to-r from-amber-500 rounded-full'
              src={PROFILE}
            />
          </div>
        ) : (
          <img
            alt='profile'
            className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w[600px] bg-gradient-to-r from-amber-500 '
            src={PROFILE}
          />
        )}
      </div>
      {/* {MAIN SECTION} */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-lg font-semibold mb-6 text-slate-500'>Hi🙋‍♂️,</p>
          <p className='text-5xl font-playfair z-10 text-center md:text-start font-bold'>
            I'm{' '}
            <span
              className='text-amber-600	
 my-3'
            >
              Bonane{' '}
            </span>
          </p>
          <p className='font-bold text-5xl z-10 text-center md:text-start'>
            Software Developer
          </p>
          <p className='mt-10 mb-7 text-lg text-center md:text-start'>
            Experienced Software Developer with over 4+ years of hands-on
            expertise in designing, developing, and delivering cutting-edge
            software solutions. Proficient in multiple programming languages and
            frameworks, I have a strong track record of collaborating with
            diverse teams to create robust and scalable applications. My
            dedication to staying current with industry trends and best
            practices ensures that I consistently deliver high-quality software
            solutions.
          </p>
        </motion.div>
        {/* {CALL TO ACTIONS} */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-amber-600 text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg:blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className='rounded-r-sm bg-gradient-rainyellow py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div className='bg-white hover:text-yellow transition duration-500 w-full  h-full flex items-center justify-center font-playfair px-10'>
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
