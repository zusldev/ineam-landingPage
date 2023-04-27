import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const StyleBlock = ({ text }: any) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.span
      className="inline-block relative group"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="text-sky-600 py-2 px-2 -rotate-1 border-8 max-w-[19rem] md:max-w-full border-sky-600 relative inline-block group"
        variants={variants}
        initial="hidden"
        animate="visible"
        key={text}
      >
        {text}
        <span>

          <RiCheckboxBlankCircleFill
            className="text-white dark:text-gray-900 text-base absolute -left-5 -top-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
          />
          <RiCheckboxBlankCircleFill
            className="text-white dark:text-gray-900 text-base absolute -right-5 -top-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
          />
          <RiCheckboxBlankCircleFill
            className="text-white dark:text-gray-900 text-base absolute -right-5 -bottom-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
          />
          <RiCheckboxBlankCircleFill
            className="text-white dark:text-gray-900 text-base absolute -left-5 -bottom-5 p-2 bg-sky-600 rounded-full box-content group-hover:block"
          />
        </span>
      </motion.span>
    </motion.span>
  );
};

export default StyleBlock;
