
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';


function App() {
  return (
    <>
       
     <Navbar title="Texter" about="about" />
     <div className="container my-3">
     <TextForms heading="Enter Your text here~"/>
     </div>
     {/* <div className="container my-3">
        <About/>
     </div>
     */}
     
    </>
  );
}
 
export default App;
