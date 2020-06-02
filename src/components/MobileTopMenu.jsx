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
import note from './note.jsx'

import Cookie from 'js-cookie'

let enter, exit = 0;

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
            toggles: Cookie.get('swipeToggled') == 'toggled' ? NaN : 0,
        }
    }

    render() {
        const pathName = this.props.location.pathname+this.props.location.search
        return (
            <div 
                onTouchStart={(e) => {
                    enter = e.touches[0].screenX
                    //console.log(enter)
                    if(this.state.toggles == 10){
                        note('info', "A Little Secret", 'Try swiping at the the top bar 😉', 5, "bottomRight")
                    }
                    this.setState((oldState) => ({toggles: oldState.toggles+1}))
                }}
                onTouchMove={(e) => {
                    exit = e.touches[0].screenX
                    //console.log(exit)
                }}
            >
                <SwipeAction 
                    autoClose
                    onOpen={() => {
                        this.setState(() => {
                            //console.log(enter, exit, exit > enter)
                            
                            Cookie.set("swipeToggled", 'toggled', {expires: 10000})
                            if(this.state.toggles < 10){
                                note('success', "Easter Egg Hunter", 'Yes, swiping at the the top bar will allow you to cycle through the pages.\n Let\'s see if you can find more secrets 😅', 7, "bottomRight")
                            }
                           
                            this.props.history.push(this.state.paths[(this.state.paths.findIndex(p => p === pathName) + (enter > exit ? 1 : this.state.paths.length-1)) % this.state.paths.length])
                            return {swipe: [], toggles: NaN}
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
                    left={this.state.swipe}
                >
                    <NavBar 
                        mode={"dark"}
                        leftContent={<div style={{height: "inherit"}}> <TopIcon mobile /> </div>}
                    />
                </SwipeAction>
            </div>
        )
    }
}

const MobileTopMenu = withRouter(props => <MobileTop {...props}/>)
export default MobileTopMenu