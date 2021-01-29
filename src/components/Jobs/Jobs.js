import React, { Component } from 'react';
import Constants from '../../helper/Constants';
import styles from './Jobs.module.css';


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
                <div className={styles.row} key={element.id} >
                    <div className={styles.headline}>{element.name}</div>
                    <div>{element.description}</div>
                </div>
            );
        });
        return widgets;
    };
    render() {
        return (
            <div className={styles.container}>
                {this.state.name}
                {this.getJobs()}
                <div className={styles.row}>
                <div className={styles.headline}>Sende uns deine Bewerbung an</div>
                {this.state.email}
                </div>
                <div>oder melde dich telefonisch bei</div>
                <div>{this.state.phone}</div>
            </div>
        );
    }
}
export default Jobs;