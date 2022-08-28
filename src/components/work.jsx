import React, { Component } from 'react';

import Placeholder from '../assets/images/web-placeholder.jpg';
class Work extends Component {
    state = {  
        loading: true,
        projects: []
    } 


    async componentDidMount() {

        let response = await fetch(`/api/v1/get_projects/`)
        response = await response.json()
        this.setState({ projects: response })
        this.setState({ loading: false })

    }


    render() { 
        return (

            <section id="portfolio">
                <div className="container" id="portfolio-text">
                    <h1>My work</h1>
                    <p>Here is some of my most recent projects on <a href="https://github.com/linus-jansson/">github</a>. </p>
                </div>

                <div className="portfolio">
                    {this.state.loading ? <h1>Loading portfolio...</h1>
                        :
                        this.state.projects.map((project, index) => (
                            <Card key={index} name={project.name} desc={project.description} link={project.link}/>
                        ))
                    }                    
                    
                </div>

            </section>

        );
    }
}


class Card extends Component {
    state = {  } 

    render() { 
        return (
        <div className="image_container">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                <img src={Placeholder} alt="Responsive 2" /> 
                <div className="image_overlay">
                    <p className="overlay_text">{this.props.name}</p>
                </div>
            </a>
        </div>

        // <div className='card'>
        //     <div className='card-title'>
        //         <h1><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.name}</a></h1>
        //     </div>
            
        //     <div className='card-desc'>
        //         <p>{this.props.desc}</p>
        //     </div>

        //     <div className='card-stats'>
        //         <p>Last commit: <span>{this.props.last}</span></p>
        //         <a href={this.props.link} target='_blank' rel="noopener noreferrer">link to repo</a>
            
        //     </div>
        // </div>
        );
    }
}


 
export default Work;