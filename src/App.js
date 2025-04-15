import logo from './logo.svg';
import './App.css';
import './components/Content/Content.js';
import './components/Header/Header';
import './components/Footer/Footer.js';
import Content from './components/Content/Content';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer> 
    </>
  );
}

export default App;
