import { motion } from "framer-motion";
import Scroll_and_reveal from "./Scroll_and_reveal";
const Contact = () => {
  return (
    <>
      <div className="w-full p-6 sm:p-8 md:p-10 lg:p-10 lg:pl-20">
        <Scroll_and_reveal direction="left">
          <h1 className="select-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-zinc-200 font-semibold leading-tight">
            Let's
            <br />
            Connect
          </h1>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="right">
          <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-300 select-none mt-4">
            I'M ALWAYS INTERESTED ABOUT
          </h5>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="left">
          {/* Buttons Group 1 */}

          <div className="flex flex-wrap gap-4 mt-6">
            <AnimatedButton
              label="UI & UX DESIGN"
              width="w-40 sm:w-44 md:w-48"
            />
            <AnimatedButton
              label="FRONTEND DEVELOPMENT"
              width="w-44 sm:w-52 md:w-60"
            />
          </div>

          {/* Buttons Group 2 */}
          <div className="flex flex-wrap gap-4 mt-4">
            <AnimatedButton label="BACKEND DEVELOPMENT" width="w-52 sm:w-60" />
            <AnimatedButton
              label="FULL STACK DEVELOPMENT"
              width="w-48 sm:w-56"
            />
          </div>

          {/* Buttons Group 3 */}
          <div className="flex flex-wrap gap-4 mt-4">
            <AnimatedButton
              label="GENERATIVE AI"
              width="w-40 sm:w-44 md:w-48"
            />
          </div>
        </Scroll_and_reveal>
        {/* Contact CTA */}
        <Scroll_and_reveal direction="right">
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <h4 className="select-none text-lg sm:text-xl md:text-2xl text-zinc-300">
              Are you minding a project?
            </h4>
            <AnimatedButton label="CONTACT ME" width="w-40" />
          </div>
        </Scroll_and_reveal>
      </div>

      {/* Divider */}
      <Scroll_and_reveal direction="top">
        <hr className="bg-zinc-300 " />
      </Scroll_and_reveal>

      {/* Footer Links */}

      <div className="select-none w-full px-6 sm:px-8 md:px-10 lg:px-20">
        <Scroll_and_reveal direction="left">
          <ul className="flex flex-wrap gap-4 text-zinc-300 pt-10">
            {["INSTAGRAM", "LINKEDIN", "TWITTER", "GITHUB"].map((item) => (
              <li
                key={item}
                className="text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-60 transition-opacity"
              >
                {item}
              </li>
            ))}
          </ul>
        </Scroll_and_reveal>
      </div>
    </>
  );
};

const AnimatedButton = ({ label, width }: { label: string; width: string }) => (
  <motion.button
    className={`h-12 ${width} text-center rounded-full border border-zinc-600 overflow-hidden text-zinc-50 relative`}
    whileHover="hover"
  >
    <motion.div
      className="select-none whitespace-nowrap font-semibold"
      variants={{
        hover: {
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "linear",
            },
          },
        },
      }}
    >
      &nbsp;{label} &nbsp;{label} &nbsp;{label} &nbsp;
    </motion.div>
  </motion.button>
);

export default Contact;
