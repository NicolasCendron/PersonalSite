import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tailWindLogo from './assets/tailwind.svg';
import viteLogo from '/vite.svg';
import vueLogo from './assets/Vue.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Welcome to</h2>
      <h1>Nícolas Cendron's Portfolio Page</h1>

      <div>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo}
            className='logo react'
            title='React'
            alt='React logo'
          />
        </a>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' title='Vite' alt='Vite logo' />
        </a>
        <a href='https://vuejs.org/' target='_blank'>
          <img src={vueLogo} className='logo vue' title='Vue' alt='Vue logo' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank'>
          <img
            src={tailWindLogo}
            className='logo react animate-up-down'
            title='Tailwind'
            alt='Tailwind logo'
          />
        </a>
      </div>
    </>
  );
}

export default App;
