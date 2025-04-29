import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocoMotive = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enables smooth scrolling
      getDirection: true, // Determines scroll direction (up/down)
      lerp: 0.1, // Controls the smoothing effect
      gestureDirection: "vertical", // Controls scrolling direction
      tablet: { smooth: true }, // Enables smooth scrolling on tablets
      smartphone: { smooth: true }, // Enables smooth scrolling on smartphones
    });

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocoMotive;
