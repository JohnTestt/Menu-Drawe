
// importar rotas

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importar 

import { Home } from './pages/Home';
import { Header } from './partials/Header';
import { Template } from './partials/Template';

function App() {



  

  return (
    <>
    <Router>

      <Routes>

        <Route path='/' 
        element = {
          <Header>
            <Template
            title = 'Home '
            Component = {Home}
            />
          </Header>
        } />
     
     <Route path='/user' 
        element = {
          <Header>
            <Template
            title = 'Users'
            Component = {Home}
            />
          </Header>
        } />

<Route path='/register' 
        element = {
          <Header>
            <Template
            title = 'Register'
            Component = {Home}
            />
          </Header>
        } />

      </Routes>

    </Router>
  
    </>
  );
}


export default App;
