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
        <SingolaCard datiCard={{
          title: "HOLAOLALA",
          thumb: "https://magazine.arcaplanet.it/wp-content/uploads/2022/11/razza_cane_shiba_inu.png"
        }} />

        <Main />
        <Footer />
      </div>
    </>
  )
}


export default App;