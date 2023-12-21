import Layout from "./components/Layout/Layout";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemContext";
import HeadShake from 'react-reveal/HeadShake';
import MobileNav from "./components/MobileNav/MobileNav";
function App() {
  const[theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav/>
     <Layout/>
     <div classNamme="container">
      <About/>
     <Education/>
     <TechStack/>
     <Projects/>
     <Contact/>
     </div>
     <div className="footer pb-3 ms-1">
      <HeadShake>
      <h4 className="text-center">
        Made with 🩷 Sushma.P 
      </h4>
      </HeadShake>
    </div>
    </div>
    <ScrollToTop 
    smooth 
    color="#c40692" 
    style={{backgroundColor:"#ebe8ea", borderRadius:"80px" , fontSize:"bold"}}/>
    </>
  );
}

export default App;
