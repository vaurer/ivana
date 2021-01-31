import React, { Component } from 'react';
import Constants from '../../helper/Constants';
import styles from './Jobs.module.css';

class Jobs extends Component {
    state = {
        jobs: [],
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
                        isactive: element.isactive,
                    }
                    jobs.push(job);
                });
                this.setState({
                    jobs: jobs,
                })
            });
        fetch(Constants.contact)
            .then((response2) => response2.json())
            .then((result2) => {
                this.setState({
                    id: result2.data[0].id,
                    phone: result2.data[0].phonenumber,
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
        let lastItem = this.state.jobs[this.state.jobs.length - 1]

        if ((this.state.jobs === null)) {
            widgets.push(
                <div className={styles.row}       >
                    <div className={styles.headline}>Derzeit können wir leider keine Stellen anbieten.</div>
                </div>
            )
        } else
            this.state.jobs.forEach((element) => {
                if (element.isactive === true) {
                    widgets.push(
                        <div  key={element.id} className={styles.row}   >
                            <div className={styles.headline}>{element.name}</div>
                            <div>{element.description}</div>
                        </div>
                    );
                }
            },
            )
        if (lastItem && widgets.length > 0) {  
            widgets.push(
                <div className={styles.row} key={this.state.id}>
                    <div>
                        <div className={styles.bold}>Sende uns deine Bewerbung an</div>
                        {this.state.email}
                    </div>
                    <div className={styles.bold}>oder melde dich telefonisch bei</div>
                    <div >{this.state.phone}</div>
                </div>)
        } else if (lastItem && widgets.length === 0) {
            widgets.push(
            <div className={styles.headline}>Derzeit können wir leider keine Stellen anbieten.</div>)
        }
        return widgets;
    };

    render() {
        return (
            <div className={styles.container}  >
               {this.getJobs()}

            </div>
        );
    }
}
export default Jobs;