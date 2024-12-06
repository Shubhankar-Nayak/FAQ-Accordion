import './App.css';
import React, {useState} from 'react';
import Accordion from './Accordion';
import {accordionData} from './content';
import imagestar from './images/icon-star.svg';

function App() {
  const {title, content} = accordionData;
  const [isActive, setIsActive] = useState(false);


  return (
    <React.Fragment>
      <div className="w-[100%] h-[100vh] flex justify-center items-center font-WorkSans">
        <div className='bg-White w-[90%] tablet:w-[50%] min-h-[48vh] rounded-xl shadow-2xl overflow-hidden'>
          <div className='flex flex-row items-center pt-5 pb-2 px-6 tablet:px-10 gap-5'>
            <img className='size-6 tablet:size-10' src={imagestar} />
            <h1 className='text-[35px] tablet:text-[45px] font-bold text-DarkPurple'>FAQs</h1>
          </div>
          <div className='pb-3'>
            {accordionData.map(({ title, content }, index) => (
              <Accordion title={title} content={content} isLast={index === accordionData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
