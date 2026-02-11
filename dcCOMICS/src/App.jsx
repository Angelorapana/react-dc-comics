import 'bootstrap/dist/css/bootstrap.min.css';
import "./BigComponents/Main.css";
import Header from './BigComponents/Header'
import Main from './BigComponents/Main'
import Footer from './BigComponents/Footer';
import SingolaCard from './components/SingolaCard';


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}


export default App;