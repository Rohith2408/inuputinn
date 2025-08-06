import './App.css';
import Section1 from './components/Section1';
import About from './components/About';
import Memes from './components/Memes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div ><Section1/></div>
      {/* <img className={styles.banner} src={banner}/> */}
      <div><About/></div>
      {/* <div><Tokenomics/></div> */}
      <div><Memes/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
