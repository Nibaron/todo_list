import './App.css';
import Addtask from './components/addtask.component';
import Appbar from './components/appbar.component';
import Footer from './components/footer.component';
import Showtask from './components/showtask.component';

function App() {
  return (
    <>
    <Appbar/>
    <Addtask/>
    <Showtask/>
    <Footer/>
    </>
  );
}

export default App;
