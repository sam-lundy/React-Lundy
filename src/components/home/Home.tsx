// Home.tsx
import React from 'react';
import trollface from '../../assets/images/Untitled.jpg'

const Home: React.FC = () => {
  return (
    <div className='body-container'>
      <h1>Welcome to my React Project</h1>
      <div className='troll-image'>
        <img className='troll' src={trollface} alt='TrollFace'></img>
      </div>
    </div>
  );
}

export default Home;
