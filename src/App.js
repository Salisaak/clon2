import './App.css';
import Header from './components/header.js';
import Main from './pages/main.js'
import Suits from './pages/suits.js'
import Footer from './components/footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main/> */}
     <Suits/>
      <Footer />
    </div>
  );
}

export default App;
