
import Skill from "./Components/Skill"
import About from "./Components/About"
import Header from "./Components/Header"
import Marque from "./Components/Marque"
import Navber from "./Components/Navber"
import AnimatedCursor from "react-animated-cursor"


const App = () => {
 
  return (
    <>
    <div className="w-full h-full overflow-x-hidden" >
    <Navber/>
   <Header/>
   <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='212, 212, 216'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '212, 212, 216',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
    {/* <Header/> */}
    
    <About/>
    <Marque/>
    <Skill/>
    </div>
   
    </>
   
   
    
    
  )
}

export default App