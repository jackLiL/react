import React,{Component} from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

import Home from './home/home.component.jsx';
import Comment from './comment/comment.component.jsx';
import Navigation from './navigation/navigation.component.jsx';
import Store from "./store/store.component.jsx";
import My from "./my/my.component.jsx";



class Routing extends Component {

   
    render() {

        return(
            <HashRouter>
            <div>
                <Navigation />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/comment" component={Comment}/>
                    <Route path="/store" component={Store}/>
                    <Route path="/my" component={My} />
                 </main>
            </div>
          </HashRouter>
        )
    }
}
export default Routing