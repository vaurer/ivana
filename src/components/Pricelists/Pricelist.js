import React, { Component } from 'react';
import Constants from "../../helper/Constants";
import Category from './Category';
import styles from './Pricelist.module.css';

class Pricelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            categories: [],
            alles: []
        }
    }
    componentDidMount() {
                fetch(Constants.category )
                .then((res2) => res2.json())
                .then((res) => {
                    let categories = [];
                    res.data.forEach((element) => {
                        let cat = { 
                            category : element.category,
                            short: element.short,
                            medium:  element.medium,
                            long:  element.long,
                            id : element.id
                    }
                        categories.push(cat);
                });
            this.setState({
                categories: categories
            })
        });
        fetch(Constants.services)
            .then((response) => response.json())
            .then((result) => {
                let services = [];
                result.data.forEach((element) => { 
                    let service = {
                        id: element.id,
                        category: element.category_service.category,
                        name: element.service,
                        price1: element.price_short,
                        price2: element.price_medium,
                        price3: element.price_long
                    }
                    services.push(service);
                });
                this.setState({
                    services: services,
                })
            });
    }
    render() {
        return (
            <div key={this.state.id} className={styles.wrapperList} onClick={this.props.pricesToggleHandler}>
                <Category
                key={this.state.id}
                services={this.state.services}
                categories={this.state.categories}/>
            </div>
            
        );
    }
}
export default Pricelist;