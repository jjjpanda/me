import React from 'react'
import {
    NavBar,
    WingBlank,
    SwipeAction
} from 'antd-mobile';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt,
    Redirect,
    withRouter
} from 'react-router-dom';

import TopIcon from './TopIcon.jsx'

class MobileTop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            swipe: [
                {
                    text: ' ',
                    style: {backgroundColor: "purple"}
                }
            ],
            paths: ["/", "/?about", "/?profile", "/?projects", "/?contact"],
        }
    }

    render() {
        const pathName = this.props.location.pathname+this.props.location.search
        return (
            <SwipeAction 
                autoClose
                onOpen={() => {
                    this.setState(() => {
                        this.props.history.push(this.state.paths[(this.state.paths.findIndex(p => p === pathName) + 1) % this.state.paths.length])
                        return {swipe: []}
                    }, () => {
                        this.setState({swipe: [
                            {
                                text: ' ',
                                style: {backgroundColor: "purple"}
                            }
                        ]})
                    })
                    
                }}
                right={this.state.swipe}
            >
                <NavBar 
                    mode={"dark"}
                    leftContent={<div style={{height: "inherit"}}> <TopIcon mobile /> </div>}
                />
            </SwipeAction>
        )
    }
}

const MobileTopMenu = withRouter(props => <MobileTop {...props}/>)
export default MobileTopMenu