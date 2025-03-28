import Cardsocial from "./components/Social";
import FirstPage from "./pages/FirstPage";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import SocialMedia from "./pages/SocialMedia";
import TechStack from "./pages/TechStack";

function App() {
  return <>
    <div   className="overflow-auto h-auto">
      <FirstPage />
      <TechStack/>
      <Projects/>
      <Services/>
      <SocialMedia/>
      
      
    </div>
  
  
  </>;
}

export default App;
