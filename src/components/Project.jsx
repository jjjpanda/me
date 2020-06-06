import React from 'react'
import {
    Card, 
    Tag
} from 'antd'
import {
    LinkOutlined
} from '@ant-design/icons'

import SlideIndicator from './SlideIndicator.jsx'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            imageIndex: 0,
            tagColor: {
                "JavaScript": "magenta",
                "HTML": "red",
                "CSS": "volcano",
                "Python": "orange",
                "NodeJS": "gold",
                "React": "lime",
                "AngularJS": "green",
                "C++": "cyan",
                "C#": "blue",
                "Java": "geekblue",
                "MATLAB": "purple"
            }
        }
    }

    toggleImage = () => {
        this.setState((oldState) => {
            setTimeout(() => {
                this.setState(() => {
                    return { loading: false }
                })
            }, 300) 
            return {
                imageIndex: (oldState.imageIndex + 1) % this.props.images.length,
                loading: true
            }
        })
    }

    render() {
        const cover = this.state.loading ? <div style={{height: "20vh"}}>
            <div 
                className= {"icon"}
                style= {{
                    opacity: "0.9",
                    filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.props.images[(this.state.imageIndex+this.props.images.length-1) % this.props.images.length]})`
                }}
            />
            <div 
                className= {"icon glitch1"}
                style= {{
                    opacity: "0.9",
                    filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.props.images[this.state.imageIndex]})`
                }}
            />
            <div 
                className= {"icon glitch2"}
                style= {{
                    opacity: "0.9",
                    filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.props.images[this.state.imageIndex]})`
                }}
            />
            <SlideIndicator index={this.state.imageIndex+1} slides={this.props.images.length}/>
        </div> : <div 
            onClick={this.toggleImage}
            style={ {
                height: '20vh'
            } }
        >
            <div 
                className= {"icon"}
                style={ {
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.props.images[this.state.imageIndex]})`
                } }
            />
            <SlideIndicator index={this.state.imageIndex+1} slides={this.props.images.length}/>
        </div>
        return (
            <Card 
                style = {{minHeight: "100%"}}
                hoverable
                title={this.props.title}
                cover= {cover}
                extra={<a href={this.props.link} ><LinkOutlined /></a>}
            >
                <Card.Meta title={this.props.subtitle} description={this.props.description}/>
                <br />

                {this.props.tags.map(tag => {
                    return <Tag color={this.state.tagColor[tag]}>{tag}</Tag>
                })}

            </Card>
        )
    }
}

export default Project