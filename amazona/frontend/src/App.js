// import data from './data';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen  from './screens/ProductScreen';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  {LinkContainer} from 'react-router-bootstrap';
function App() {
  return (
   <BrowserRouter>
    <div>
      <header>
        <Navbar bg ='dark' variant = 'dark'>
        <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}>
          </Route>
          <Route path='/product/:slug' element={<ProductScreen></ProductScreen>}>
          </Route>
        </Routes>
      </main>
      <footer>
        <div className='text-centre'>All rights reserved</div>
      </footer>
    </div>
   </BrowserRouter>
      
  )
}

export default App;
