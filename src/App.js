
import './App.css';
import ActCont from './components/ActCont/ActCont';
import Contact from './components/Contact/Contact';
import Header from './components/Header';
import ProjectCont from './components/ProjectContainer/ProjectCont';
import Skillcont from './components/Skillcont/Skillcont';
import Topcontainer from './components/Topcontainer/Topcontainer';


function App() {
  return (
    <div className="App">
    {/* portpolio */}
 <Header/>
 <Topcontainer/>
 <Skillcont/>
 <ProjectCont/>
 <ActCont/>
 <Contact/>
    </div>
  );
}

export default App;
