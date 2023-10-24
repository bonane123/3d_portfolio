import { useEffect, useState } from 'react';
import { Navbar } from './components';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from './components/DotGroup';
import Landing from './screens/Landing';
import MySkills from './screens/MySkills';
import Projects from './screens/Projects';
import Contacts from './screens/Contacts';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px  )');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills />
      </div>
      <div className='w-5/6 mx-auto mt-32'>
        <Projects />
      </div>
      <div className=' mx-auto mt-32'>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
