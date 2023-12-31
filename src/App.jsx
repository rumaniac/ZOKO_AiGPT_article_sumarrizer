import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      <din className='main'>
        <div className='gradient' />
      </din>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;