import React, { Component } from 'react';
import Constants from '../../helper/Constants';


class Jobs extends Component {
    state = {
        jobs: []
    }
    componentDidMount() {
        fetch(Constants.jobs)
            .then((response) => response.json())
            .then((result) => {
                let jobs = [];
                result.data.forEach((element) => {
                    let job = {
                        
                        id: element.id,
                        name: element.name,
                        description: element.description,
                    }
                    jobs.push(job);
                });
                this.setState({
                    jobs: jobs,
                })
            });
        fetch(Constants.impressum)
            .then((response2) => response2.json())
            .then((result2) => {
                this.setState({
                
                    id: result2.data[0].id,
                    phone: result2.data[0].phone,
                    email: result2.data[0].email,
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }
    getJobs = () => {
        let widgets = [];
        this.state.jobs.forEach((element) => {
            widgets.push(
                <div key={element.id} >
                    <div ><h2>{element.name}</h2></div>
                    <div>{element.description}</div>
                </div>
            );
        });
        return widgets;
    };
    render() {
        return (
            <div >                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>{this.state.name}</h1>
                {this.getJobs()}
                <p>Sende uns deine Bewerbung an:</p>
                <div >{this.state.email}</div>
                <div>oder melde dich telefonisch bei:</div>
                <div>{this.state.phone}</div>
            </div>
        );
    }
}
export default Jobs;