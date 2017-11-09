import React,{Component} from 'react'

import {NavLink} from  'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <div className="footer">
                <div>
                    <p className="glyphicon glyphicon-home"><NavLink to="/">首页</NavLink></p>
                </div>
                <div>
                    <p className="glyphicon glyphicon-shopping-cart"><NavLink to="/store">商城</NavLink></p>
                </div>
                <div>
                    <p className="glyphicon glyphicon-edit"><NavLink to="/comment">点评</NavLink></p>
                </div>
                <div>
                    <p className="glyphicon glyphicon-user"><NavLink to="/my">我的</NavLink></p>
                </div>
            </div>
        )
    }
    
}

export default Navigation