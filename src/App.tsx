//import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tailWindLogo from './assets/tailwind.svg';
import linkedinLogo from './assets/Linkedin.svg';
import viteLogo from '/vite.svg';
import vueLogo from './assets/Vue.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <a href='https://www.linkedin.com/in/nicolas-cendron-fernandes/'>
        <img
          src={linkedinLogo}
          className=' top-right logo blue linkedin animate-up-down'
          title='Linkedin'
          alt='Linkdin logo'
        />
      </a>
      <h1 className='title'>Nícolas Cendron</h1>
      <h3 className='subtitle'>Software Developer</h3>
      <div className='logos'>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo}
            className='logo react blue'
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
            className='logo blue animate-up-down'
            title='Tailwind'
            alt='Tailwind logo'
          />
        </a>
      </div>
    </div>
  );
}

export default App;
