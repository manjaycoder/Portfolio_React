import './ScrollVelocity.css'; // Animation styles
import Scroll_and_reveal from './Scroll_and_reveal';
const Marquee = () => {
  const items = [
    '💻 Full Stack Web Developer',
    '⚡ React • Next.js • Tailwind CSS',
    '🚀 MERN Stack • REST • APIs',
    '🎨 UI/UX Focused',
    '🧠 Lifelong Learner',
    '☁️ Cloud & DevOps Aware'
  ];

  return (
    <Scroll_and_reveal direction='left'>
    <div className="select-none ml-10 mr-10 lg:ml-20 lg:mr-20 md:ml-10 ml:mr-10 sm:ml-[2rem] sm:mr-[2rem] rounded-xl relative flex text-[1rem] overflow-x-hidden px-4 sm:px-10 md:px-20 border-t border-b border-zinc-300 ">
      <div className="flex py-6 whitespace-nowrap marquee font-serif">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-zinc-300 text-[1rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mx-4 font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-0 flex py-6  whitespace-nowrap marquee2 font-serif">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-zinc-300 text-[1rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-medium"
          >
            {item}
          </span>
        ))}
      </div>
      <hr className='text-zinc-300 mt-10 md:mt-20 sm:mt-10 xl:mt-20 lg:mt-20 2xl:mt-20 ' />
    </div>
    </Scroll_and_reveal>
  );
};

export default Marquee;
