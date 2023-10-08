import { useState } from 'react';
import { Navbar } from './components';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px  )');

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Navbar>
    </div>
  );
}

export default App;
