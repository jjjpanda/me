import React from 'react'

import Cookie from 'js-cookie'
class Image extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            clicked : false
        }
    }

    click = () => {
        if(!this.state.clicked){
            this.setState(() => ({
                clicked: true
            }), () => {
                this.props.onClick()
                setTimeout(() => {
                    this.setState({clicked: false}, this.props.onEnd)
                }, 1600)
            })
        }
        
    }
    render(){
        const styleDiv = {
            ...this.props.style,
            filter: `drop-shadow(0 0 0.9vh ${Cookie.get('darkModeToggled') == "true" ? "#ffeeff" : "#040002"})`,
        }
        if(this.state.clicked){
            return (
                <div className={"fitDiv"} style={styleDiv}>
                    <img 
                        className= {"iconNoPos"} 
                        src={this.props.src} 
                        alt={this.props.alt} 
                    />
                    <img 
                        className= {"icon glitch1"} 
                        src={this.props.src} 
                        alt={this.props.alt} 
                        style={{
                            left: "2px", 
                            filter: "hue-rotate(45deg)"
                        }}
                    />
                    <img 
                        className= {"icon glitch2"} 
                        src={this.props.src} 
                        alt={this.props.alt} 
                        style={{
                            left: "-1px", 
                            filter: "hue-rotate(180deg)"
                        }}
                    />
                </div>
            )
        }
        else{
            return <img 
                className={"fitDiv"}
                src={this.props.src} 
                alt={this.props.alt} 
                style={styleDiv}
                onClick = {this.click}
            />
        }
    }
}

export default Image