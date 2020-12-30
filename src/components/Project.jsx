import React from 'react'
import {
    Card, 
    Tag,
    Space,
    Avatar,
    Typography
} from 'antd'
import {
    ExportOutlined,
    CopyOutlined
} from '@ant-design/icons'

import {
    CopyToClipboard
} from 'react-copy-to-clipboard';

import note from './note.jsx'
import Cookie from 'js-cookie'

import SlideIndicator from './SlideIndicator.jsx'
import { SwipeAction } from 'antd-mobile';

let enter, exit = 0;
class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            imageIndex: 0,
            swipe: [
                {
                    text: ' ',
                    style: {backgroundColor: "purple"}
                }
            ],
            tagColor: {
                "Android": "#9e1068",
                "iOS": "#9e1068",
                "Web App": "#9e1068",
                "Mobile Web App": "#9e1068",
                "PC App": "#9e1068",

                "HTML": "#a8071a",
                "XML": "#a8071a",
                
                "C": "#ad2102",
                "C++": "#ad2102",
                "C#": "#ad2102",

                "MATLAB": "#d46b08",
                "R": "#d46b08",

                "MongoDB": "#d48806",
                "Firebase": "#d48806",
                "mySQL": "#d48806",
                "Excel": "#d48806",

                "Java": "#5b8c00",

                "CSS": "#389e0d",
                "Less": "#389e0d",
                "SASS": "#389e0d",

                "NodeJS": "#0050b3",
                "ExpressJS": "#0050b3",

                "ReactJS": "#1d39c4",
                "AngularJS": "#1d39c4",
                "VueJS": "#1d39c4",

                "Python": "#08979c",
                "Bash": "#08979c",

                "TypeScript": "#531dab",
                "JavaScript": "#531dab",
                "JSON": "#531dab",
                "PHP": "#531dab",
            }
        }
    }

    toggleImage = (forward) => {
        this.setState((oldState) => {
            setTimeout(() => {
                this.setState(() => {
                    return { loading: false }
                })
            }, 300) 
            return {
                imageIndex: (oldState.imageIndex + (forward ? 1 : this.props.images.length - 1)) % this.props.images.length,
                loading: true
            }
        })
    }

    render() {
        const cover = this.state.loading ? <div style={{height: "40vh"}}>
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
            <SlideIndicator index={this.state.imageIndex+1} slides={this.props.images.length} toggleImage={this.toggleImage} />
        </div> : <div 
            onClick={() => {
                this.toggleImage(true)
            }}
            style={ {
                height: '40vh'
            } }
            onTouchStart={(e) => {
                enter = e.touches[0].screenX
                //console.log(enter)
            }}
            onTouchMove={(e) => {
                exit = e.touches[0].screenX
                if(this.props.mobile) {
                    this.toggleImage(enter>exit)
                }
            }}
        >
            <div
                className= {"icon"}
                style={ {
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundImage: `url(${this.props.images[this.state.imageIndex]})`
                } } 
            />
            <SlideIndicator index={this.state.imageIndex+1} slides={this.props.images.length} toggleImage={this.toggleImage} arrowEnabled/>
        </div>

        return (
            <Card 
                style = {{minHeight: "100%", wordWrap: "break-word"}}
                hoverable
                title={this.props.title}
                cover= {cover}
                extra={<Space style={{fontSize: "2vh"}}>
                    <CopyToClipboard text={this.props.link} style={{color: (Cookie.get('darkModeToggled') == 'true' ? "white" : "black")}}
                        onCopy={() => {
                                note('info', "Copied Link", `Link to ${this.props.title}:\n ${this.props.link}`, 3)
                            }}
                        >
                            <CopyOutlined style={{color: "#991087"}}/>
                    </CopyToClipboard>
                    <a target="_blank" href={this.props.link} >
                        <ExportOutlined />
                    </a>
                </Space>}
            >
                <Card.Meta 
                    avatar={<Avatar shape='square' src={this.props.logo} />} 
                    title={<div style={{whiteSpace: "normal"}}>{this.props.subtitle}</div>} 
                        description={<Typography>{this.props.description}</Typography>}/>
                <br />
                <div>
                    {this.props.tags.map(tag => {
                        return <Tag style={{margin: "2px 2px"}} color={this.state.tagColor[tag]}>{tag}</Tag>
                    })}
                </div>
            </Card>
        )
    }
}

export default Project