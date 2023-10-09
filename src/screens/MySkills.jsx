import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { skills } from '../constant';
import { motion } from 'framer-motion';

const MySkills = () => {
  //   const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section id='skills' className='pt-10 pb-24'>
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-amber-500'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            perspiciatis labore magni incidunt vitae necessitatibus aspernatur
            pariatur! Laudantium vitae molestias aperiam culpa eaque,
            consequuntur possimus quaerat, non similique, adipisci quod!
          </p>
        </motion.div>
        <div className='flex flex-center  md:mt-0 font-playfair'>
          <motion.div
            className='sm:grid sm:grid-cols-2 gap-6'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skills.map((skill) => (
              <div
                className=' hover:border-amber-500 border-2 rounded-lg shadow-amber-500 py-2 px-2 gap-3  h-full transition duration-300 text-center'
                key={skill.title}
              >
                <h3 className='text-2xl font-bold mb-6'>{skill.title}</h3>
                <div className='flex justify-center gap-3 flex-wrap'>
                  {skill.skills.map((item) => (
                    <div
                      key={item.name}
                      className='flex items-center justify-center gap-2 font-normal  border border-slate-300 rounded-lg p-2 hover:bg-amber-500 '
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-[24px] h-[24px]'
                      />
                      <p className='text-slate-600'>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* {SKILLS} */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* {EXPERIENCE} */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Experience
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nostrum, quibusdam corporis eligendi totam officia, doloremque
            soluta possimus exercitationem sit cum eius animi iste molestias.
          </p>
        </motion.div>
        {/* {INNOVATIVE} */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Innovative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nostrum, quibusdam corporis eligendi totam officia, doloremque
            soluta possimus exercitationem sit cum eius animi iste molestias.
          </p>
        </motion.div>
        {/* {IMAGINATIVE} */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Imaginative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nostrum, quibusdam corporis eligendi totam officia, doloremque
            soluta possimus exercitationem sit cum eius animi iste molestias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
