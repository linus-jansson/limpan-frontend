import React, { Component } from 'react';
import axios from 'axios';


class Footer extends Component {
    constructor(props) {
        super(props)
        
        this.state = { author: "Linus J"} 
    }
    
	async componentDidMount() {
        let response = await axios.get(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BACKEND_DOMAIN}/api/get_socials/`)
        this.setState({author: response.data.discord_username })
    }

    // await get_discord_name()
    render() { 
        return (
            <footer>
                <h3>Copyright <span>&copy;</span> { this.state.author }</h3>
            </footer>
        );
    }


}
 
export default Footer;