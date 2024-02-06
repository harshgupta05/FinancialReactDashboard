import './App.css';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/Navbar';
import RemSection from './Components/RemSection/RemSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <RemSection/>
    </div>
  );
}

export default App;
