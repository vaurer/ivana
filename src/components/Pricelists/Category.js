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
                    <tr className={styles.tableHeader}>
                        <th> {element.category}</th>
                        <th> kurz</th>
                        <th> mittel</th>
                        <th> lang</th>
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
                        <th> {element.category}</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
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