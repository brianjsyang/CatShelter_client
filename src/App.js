import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ErrorPage from './components/ErrorPage';
import CreateCat from './components/CreateCat';
import CatUpdate from './components/CatUpdate';
import CatDetail from './components/CatDetail';

function App() {
  return(
    <React.Fragment>
        <NavBar />

        {/* <Layout>
          <Switch >
            <Route exact path ="/" component={ Home } />
            <Route path ="/about" component={ About } />
            <Route exact path ="/add" component={ CreateCat } />
            <Route path = "/update/:id" component={ CatUpdate } />
            <Route exact path ={"/:id"} component={ CatDetail } />
            <Route component={ ErrorPage } />
          </Switch>
        </Layout>  */}

        <Switch >
            <Route exact path ="/"> <Banner/> <Home/> </Route>
            <Route path ="/about"> <Banner/> <About/> </Route>
            <Route exact path ="/add"> <CreateCat/> </Route>
            <Route path = "/update/:id"> <CatUpdate/> </Route>
            <Route exact path ={"/:id"}> <CatDetail/> </Route>
            <Route> <ErrorPage/> </Route>
          </Switch>

    </React.Fragment>
  );
}

 export default App;