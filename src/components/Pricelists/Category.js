import React, { Component } from 'react';
import Price from './Price';
import styles from './Catogory.module.css'

class Category extends Component {
    getServices = () => {
        console.log(this.props.categories)
        let widgets = [];
        let tempName;
        this.props.categories.forEach(element => {
            if (((element.category === 'Damen'))) {
                tempName = element.category;
                widgets.push(
                    <tr style={{backgroundColor: "#705f46"}}>
                        <th> <h2>{element.category}</h2></th>
                        <th> <h3>kurz</h3></th>
                        <th> <h3>mittel</h3></th>
                        <th> <h3>lang</h3></th>
                    </tr>
                )
                this.props.services.forEach(element => {
                    if (element.category === tempName) {
                        widgets.push(
                            <Price
                                id={element.id}
                                name={element.name}
                                price1={element.price1}
                                price2={element.price2}
                                price3={element.price3}
                            />
                        );
                    }
                });
            }
            if ((tempName == null) || (tempName !== element.category)) {
                tempName = element.category;
                widgets.push(
                    <tr style={{backgroundColor: "#705f46"}} >
                        <th> <h2>{element.category}</h2></th>
                        <th> <h2> </h2></th>
                        <th> <h2> </h2></th>
                        <th> <h2> </h2></th>
                    </tr>
                )
                this.props.services.forEach(element => {
                    if (element.category === tempName) {
                        widgets.push(
                            <Price
                                id={element.id}
                                name={element.name}
                                price1={element.price1}
                                price2={element.price2}
                                price3={element.price3}
                            />
                        );
                    }
                });
            }
        });
        return widgets;
    }
    render() {
        return (
            <div className={styles.container}>
                <table >
                    <tbody className={styles.shadow}> 
                        {this.getServices()}
                  </tbody>
                </table>
            </div>
        );
    }
}
export default Category;