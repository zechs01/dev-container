import Header from './components/Header';
import './App.css';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import { AlertProvider } from "./context/alertContext";
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Header />

        <LandingSection />

        <ProjectsSection />

        <ContactMe />

        <Footer />
         
      
      
      </AlertProvider >
    </div>
  );
}

export default App;
