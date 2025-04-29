import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import digit from "../Assets/digital.png";
import flag from "../Assets/flag.png";
import fitness from "../Assets/fitness.png";
import city from "../Assets/city.png";
import Scroll_and_reveal from "./Scroll_and_reveal";
const Projects = () => {
  return (
    <>
    
    <div className="px-6 py-10 md:px-10 lg:px-20 w-full bg-zinc-950">
      <Scroll_and_reveal direction="top">
      <h1 className="text-zinc-300 text-center font-extrabold underline underline-offset-8 decoration-zinc-500
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        PROJECTS
      </h1>
      </Scroll_and_reveal>

      {/* PROJECT 1 */}
      <Scroll_and_reveal direction="left">
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg group">
  <img  
    src={digit} 
    alt="Obys Agency" 
    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
</div>
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">Movie_Application</h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl max-w-xl">
            Built this website with workout plans using HTML, SCSS, and GSAP animations.
            Added smooth transitions inspired by Awwwards.com; optimized for mobile responsiveness.
            Deployed on Vercel with 90%+ Lighthouse score.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            <a href="https://studio-lovat-xi.vercel.app/">
            <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
      </Scroll_and_reveal>

      {/* PROJECT 2 */}
      <Scroll_and_reveal direction="right">
      <div className="mt-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">Obys-Agency</h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl max-w-xl">
            Developed an interactive site with dynamic UI using HTML, SCSS, and GSAP. 
            Enhanced with custom scroll effects inspired by Awwwards.com designs.
            Achieved fast load times with performance tweaks.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            <a href="https://antra77.github.io/Obys-Agency-Clone/">
            <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg group">
  <img  
    src={flag} 
    alt="Obys Agency" 
    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
</div>
      </div>
      </Scroll_and_reveal>

      {/* PROJECT 3 */}
      <Scroll_and_reveal direction="left">
      <div className="mt-24 flex flex-col lg:flex-row items-center gap-10 mb-10 lg:mb-20 xl:mb-20 2xl:mb-20">
      <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg group">
  <img  
    src={city} 
    alt="Obys Agency" 
    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
</div>
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">ExoApe</h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-lg max-w-xl">
            Designed and developed a high-fidelity, responsive landing page inspired by Exoape using 
            HTML, CSS, and JavaScript. Focused on pixel-perfect design, smooth animations, 
            and deployed on Vercel for fast, reliable access.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />

            <a href="https://exoape-kohl.vercel.app/">
            <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
      </Scroll_and_reveal>
      <Scroll_and_reveal direction="right">
      <div className="mt-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">MyGym</h2>
          <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl max-w-xl">
          Built this website with workout plans using HTML, SCSS, and GSAP animations. Added smooth transitions inspired by Awwwards.com; optimized for mobile responsiveness. Deployed on Vercel with 90%+ Lighthouse score.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
            <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
          </div>
        </div>
        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg group">
  <img  
    src={fitness} 
    alt="Obys Agency" 
    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
</div>

      </div>
      </Scroll_and_reveal>
    </div>
    <Scroll_and_reveal direction="bottom">
    <hr className="bg-zinc-300 mb-10 mt-10 lg:mt-10 xl:mt-10 
    2xl:mt-10" />
    </Scroll_and_reveal>
    </>
  );
};

export default Projects;
