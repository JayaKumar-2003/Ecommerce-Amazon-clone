// import data from './data';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen  from './screens/ProductScreen';

function App() {
  return (
   <BrowserRouter>
    <div>
      <header>
        <Link to="/"> Amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}>
          </Route>
          <Route path='/product/:slug' element={<ProductScreen></ProductScreen>}>
          </Route>
        </Routes>
        
      </main>
    </div>
   </BrowserRouter>
      
  )
}

export default App;
