import React, {useState} from 'react'
import imageplus from './images/icon-plus.svg';
import imageminus from './images/icon-minus.svg'

const Accordion = ({title, content, isLast}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="pl-6 tablet:pl-10 pr-1 tablet:pr-0">
      <div className="flex flex-row justify-between items-center cursor-pointer bg-White font-bold gap-6" onClick={() => setIsActive(!isActive)}>
        <div className='w-[80%] tablet:w-[85%] text-DarkPurple tracking-wide py-3 tablet:py-6 hover:text-LightPink'>
          {title}
        </div>
        <div className='w-[20%] tablet:w-[15%] tablet:pr-3'>
          {isActive ? <img className='w-9' src={imageminus} /> : <img className='w-9' src={imageplus} />}
        </div>
      </div>
      {isActive && <div className="w-[90%] text-GrayishPurple text-[14px] font-medium pb-3">{content}</div>}
      {!isLast && <div className="w-[90%] border-b-2"></div>}
    </div>
  )
}

export default Accordion