import React from 'react'
import {
    Card, 
    Tag
} from 'antd'

import SlideIndicator from './SlideIndicator.jsx'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            imageIndex: 0,
            images: ['/me/img/abstract.png','/me/img/galaxy.png','/me/img/gradient.png']
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
                imageIndex: (oldState.imageIndex + 1) % oldState.images.length,
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
                    backgroundImage: `url(${this.state.images[(this.state.imageIndex+this.state.images.length-1) % this.state.images.length]})`
                }}
            />
            <div 
                className= {"icon glitch1"}
                style= {{
                    opacity: "0.9",
                    filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.state.images[this.state.imageIndex]})`
                }}
            />
            <div 
                className= {"icon glitch2"}
                style= {{
                    opacity: "0.9",
                    filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.state.images[this.state.imageIndex]})`
                }}
            />
            <SlideIndicator index={this.state.imageIndex+1} slides={this.state.images.length}/>
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
                    backgroundImage: `url(${this.state.images[this.state.imageIndex]})`
                } }
            />
            <SlideIndicator index={this.state.imageIndex+1} slides={this.state.images.length}/>
        </div>
        return (
            <Card 
                style = {{minHeight: "100%"}}
                hoverable
                title="Card title"
                cover= {cover}
            >
                <Card.Meta title="Title" description="Description and Info"/>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>

            </Card>
        )
    }
}

export default Project