//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topbar from './components/topbar';
import Data from './components/data';
import Data1 from './components/data1';
import Home from './components/Home';
import Api from './components/Api';
import Table from './components/Table';

import FaceDetect from './components/byApi/FaceDetect';
import FacialFeature from './components/byApi/FacialFeature';
import SkinAnalyzeAdvanced from './components/byApi/SkinAnalyzeAdvanced';
class App extends Component {
    render() {
        return (   
        <BrowserRouter>
            <div id='app'>
                <Topbar />
                    <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/FaceDetect" component={FaceDetect} />
                    <Route path="/FacialFeature" component={FacialFeature} />
                    <Route path="/SkinAnalyzeAdvanced" component={SkinAnalyzeAdvanced} />
                    <Route component={Error} />
                </Switch>
                    
                <br />
                <Data/>
                <Api />

            </div>
        </BrowserRouter>
    )
    }
}

export default App


