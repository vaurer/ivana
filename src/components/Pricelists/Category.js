import React, { Component } from 'react';
import Price from './Price';
import styles from './Catogory.module.css'

class Category extends Component {
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.keyCount2 = 100;
        this.keyCount3 = 200;
        this.keyCount4 = 300;
        this.getKey = this.getKey.bind(this);
        this.getKey2 = this.getKey2.bind(this);
        this.getKey3 = this.getKey3.bind(this);
        this.getKey4 = this.getKey4.bind(this);
    }

    getKey() {
        return this.keyCount++;
    }
    getKey2() {
        return this.keyCount2++;
    }
    getKey3() {
        return this.keyCount3++;
    }
    getKey4() {
        return this.keyCount4++;
    }

    getServices = () => {
        let widgets = [];
        let tempName;
        this.props.categories.forEach(element => {
            tempName = element.category;

            widgets.push(
                <tr key={this.getKey()} style={{ backgroundColor: "#705f46" }}>
                    <th>{element.category}</th>
                    <th>{element.short}</th>
                    <th>{element.medium}</th>
                    <th>{element.long}</th>
                </tr>
            )
            this.props.services.forEach(element => {
                if (element.category === tempName) {
                    widgets.push(
                        <Price
                            key={this.getKey3()}
                            id={element.id}
                            name={element.name}
                            price1={element.price1}
                            price2={element.price2}
                            price3={element.price3}
                        />
                    );
                }
            });
        });
        return widgets;
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Preise</h1>
                    <table className={styles.shadow}><tbody>{this.getServices()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Category;