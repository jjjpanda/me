import React from 'react';
import {
    message
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    withRouter
} from 'react-router-dom';

class Top extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            icons: ["red", "violet", "yellow", "black", "green", "orange", "blue"],
            paths: ["/", "/?about", "/?profile", "/?projects", "/?contact"],
            iconIndex: 3,
            iconLoading: false,
            toggles: 0
        }   
    }

    toggleLogo = (event) => {
        event.stopPropagation();
        const ctrlKey = event.ctrlKey
        const isHome = this.props.location.search == ""
        if(this.state.toggles == 3){
            message.info('Try clicking the icon while holding ctrl 😉');
        }
        if(this.state.iconLoading){
            return
        }
        else{
            this.setState(oldState => {
                setTimeout(() => {
                    this.setState(() => ({iconLoading: false}), () => {
                        if(ctrlKey){
                            this.props.history.push(this.state.paths[ (this.state.paths.findIndex(path => this.props.location.pathname+this.props.location.search === path) + 1) % this.state.paths.length ])
                        }
                        else{
                            if(!isHome){
                                this.props.history.push('/')
                            }
                        }
                       
                    })
                }, 300)
                return {
                    iconLoading: true, 
                    iconIndex: ((oldState.iconIndex+1) % oldState.icons.length),
                    toggles: oldState.toggles+1
                }
            })
        }
        
    }

    render() {

        const rand = Math.random()
        const img1 = rand > 0.33 ? (rand > 0.66 ? "easeOutForward" : "easeOutBackward") : "glitch1"
        const img2 = rand > 0.33 ? (rand > 0.66 ? "easeInForward" : "easeInBackward") : "glitch2"

        if(this.state.iconLoading){
            return (
                <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                    <img 
                        src={`/me/img/${this.state.icons[(this.state.iconIndex+this.state.icons.length-1)%this.state.icons.length]}Icon.png`} 
                        className = {`icon ${ img1 }` }
                    />
                    <img 
                        src={`/me/img/${this.state.icons[(this.state.iconIndex)%this.state.icons.length]}Icon.png`} 
                        className = {`icon ${ img2 }` }
                    />
                </div>
            )
        }
        else{
            return (
                <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                    <img 
                        className = {"icon"} 
                        src = {`/me/img/${this.state.icons[this.state.iconIndex]}Icon.png`} 
                        onClick={(event) => {
                            this.toggleLogo(event)
                        }}
                    />
                </div>
            )
        }
    }
}

const TopIcon = withRouter(props => <Top {...props} />)
export default TopIcon