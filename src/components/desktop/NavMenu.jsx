import React from 'react';
import {
    Button,
    Icon,
    Layout,
    Affix,
    Space,
    Menu,
    Typography
} from 'antd'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt,
    withRouter
} from 'react-router-dom';
import {
    HomeOutlined, 
    UserOutlined,  
    ProfileOutlined,             
    StarOutlined,
    CommentOutlined,
} from '@ant-design/icons'

//

class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.location.pathname+this.props.location.search)
        return (
            <Menu 
                defaultSelectedKeys={(this.props.location.pathname+this.props.location.search).match(/\/(.*[^\/])?/)}
                selectedKeys={(this.props.location.pathname+this.props.location.search).match(/\/(.*[^\/])?/)}
                mode={this.props.mode}
                theme={'dark'}
            >
                
                <Menu.Item key="/" icon={<HomeOutlined />} onClick={this.props.onItemClick}>
                    <Link to="/" >
                        Home
                    </Link>    
                </Menu.Item>

                <Menu.Item key="/?about" icon={<UserOutlined />} onClick={this.props.onItemClick}>
                    <Link to="/?about" >
                        About
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?profile" icon={<ProfileOutlined />} onClick={this.props.onItemClick}>
                    <Link to="/?profile" >
                        Resume
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?projects" icon={<StarOutlined />} onClick={this.props.onItemClick}>
                    <Link to="/?projects" >
                        Projects
                    </Link>
                </Menu.Item>

                <Menu.Item key="/?contact" icon={<CommentOutlined />} onClick={this.props.onItemClick}>
                    <Link to="/?contact" >
                        Contact
                    </Link>
                </Menu.Item>

            </Menu>
        )
    }
}

const NavMenu = withRouter(props => <Nav {...props} />)
export default NavMenu;