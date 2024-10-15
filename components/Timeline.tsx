'use client';
import { experiencesData } from '@/constants/data/experience';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Timeline = () => {
  const theme = 'dark';
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
      {experiencesData.map((item, index) => (
        <motion.div
          key={index}
          className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={timelineVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-5/12">
            <div className={`p-4 rounded-lg shadow-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
            </div>
            <div
              className={`absolute top-1/2 w-8 h-8 transform -translate-y-1/2 rounded-full border-4 ${
                theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-800 border-gray-500'
              }`}
            >
              {item.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
