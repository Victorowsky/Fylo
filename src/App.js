
import './App.css';
import FirstContent from './comp/FirstContent/FirstContent';
import Footer from './comp/Footer/Footer';
import GetAccess from './comp/GetAccess/GetAccess';
import Header from './comp/Header/Header';
import Opinions from './comp/Opinions/Opinions';
import SecondContent from './comp/SecondContent/SecondContent';
import ThirdContent from './comp/ThirdContent/ThirdContent';

function App() {
  return (
    <div className="app">
        <div className="firstPage">
          <Header/>
          <FirstContent/>
        </div>
        <div className="secondPage">
          <SecondContent/>
          <ThirdContent/>
          <Opinions/>
          <GetAccess/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
