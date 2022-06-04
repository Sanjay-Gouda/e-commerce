import './App.css';
import {Routes,Route} from "react-router-dom"

import {HomePage} from './pages/homePage/homePage'
import {Header} from './components/navbarComponent/navbar'
import {CartItemPage} from './pages/cartItemPage/cartItemPage'

function App() {
  return (
    <div className="App">


        <Header/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cartItem" element={<CartItemPage/>} />


          
        </Routes>
    </div>
  );
}

export default App;
