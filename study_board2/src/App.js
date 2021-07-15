import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './routes/ListPage'
import DetailPage from './routes/DetailPage';
import EditPage from './routes/EditPage';
import WritePage from './routes/WritePage';


function App() {
  return (
    <HashRouter>
    <Navigation/>
    <h1 className="title">foxmonStudy board</h1>
    <Route path="/" exact={true} component={ListPage}/>
    <Route path="/Detail/:no" component={DetailPage}/>
    <Route path="/edit" component={EditPage}/>
    <Route path="/write" component={WritePage}/>
  </HashRouter>  
  );
}

export default App;
