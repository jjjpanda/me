import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    withRouter
} from 'react-router-dom';

class Top extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            icons: ["red", "violet", "yellow", "black", "green", "orange", "blue"],
            iconIndex: 3,
            iconLoading: false 
        }   
    }

    toggleLogo = () => {
        if(this.state.iconLoading){
            return
        }
        else{
            this.setState(oldState => {
                setTimeout(() => {
                    this.setState(() => ({iconLoading: false}))
                }, 500)
                return {iconLoading: true, iconIndex: ((oldState.iconIndex+1) % oldState.icons.length)}
            })
        }
        
    }

    render() {
        const isHome = this.props.location.search == ""
        if(this.state.iconLoading){
            return (
                <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                    <img 
                        src={`/me/img/${this.state.icons[(this.state.iconIndex+this.state.icons.length-1)%this.state.icons.length]}Icon.png`} 
                        className = {`icon easeOut` } 
                    />
                    <img 
                        src={`/me/img/${this.state.icons[(this.state.iconIndex)%this.state.icons.length]}Icon.png`} 
                        className = {`icon easeIn` } 
                    />
                </div>
            )
        }
        else{
            if(isHome){
                return (
                    <div style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                        <img 
                            className = {"icon"} 
                            src = {`/me/img/${this.state.icons[this.state.iconIndex]}Icon.png`} 
                            onClick={this.toggleLogo} 
                        />
                    </div>
                )
            }
            else{
                return (
                    <Link to={'/'} style={{position: 'absolute', float: 'left', display: 'inline-block', width: "auto", height: "inherit"}}>
                        <img 
                            className = {"icon"} 
                            src = {`/me/img/${this.state.icons[this.state.iconIndex]}Icon.png`} 
                            onClick={this.toggleLogo} 
                        />
                    </Link>
                )
            }
        }
    }
}

const TopIcon = withRouter(props => <Top {...props} />)
export default TopIcon