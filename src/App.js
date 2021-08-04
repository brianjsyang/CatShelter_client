import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Banner from './components/Banner';
import ErrorPage from './components/ErrorPage';
import CreateCat from './components/CreateCat';
import CatUpdate from './components/CatUpdate';
import CatDetail from './components/CatDetail';

function App() {
  return(
    <React.Fragment>
        <NavBar />
        <Banner />
        <Layout>
         
          <Switch >
            <Route exact path ="/" component={ Home } />
            <Route path ="/about" component={ About } />
            <Route exact path ="/add" component={ CreateCat } />
            <Route path = "/update/:id" component={ CatUpdate } />
            <Route exact path ={"/:id"} component={ CatDetail } />
            <Route component={ ErrorPage } />
          </Switch>

        </Layout> 
    </React.Fragment>
  );
}

 export default App;