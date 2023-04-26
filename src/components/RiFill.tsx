import {useState} from 'react';
import {RiCheckboxBlankCircleFill} from 'react-icons/ri';
import styles from '@/components/Aeronautica.module.css';

// @ts-ignore
const StyleBlock = ({text}) => {
  return (
    <span
      className="text-sky-600 py-2 px-6 border-8 border-sky-600 relative inline-block group"
    >
      {text}
      <RiCheckboxBlankCircleFill
        className="text-white text-base absolute -left-5 -top-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
      />
      <RiCheckboxBlankCircleFill
        className="text-white text-base absolute -right-5 -top-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
      />
      <RiCheckboxBlankCircleFill
        className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
      />
      <RiCheckboxBlankCircleFill
        className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
      />
    </span>
  );
};

export default StyleBlock;
