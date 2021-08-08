import React, { Component } from 'react';
import local from 'local-storage'




export default class Menu extends Component {
    static defaultProps = {
        menu: [],
        fee: null

    }
    state = { ordered: [] }

    render() {
        const { menu } = this.props;
        const ordered = local('ordered')
        const updated = ordered ? ordered : []
        if (updated.length !== this.state.ordered.length) {
            this.setState({
                ordered: updated
            })
        }

        return (
            <div className="menu" >


                <ul>
                    {menu && menu.map(item => {
                        const already = updated.find(menuItem => menuItem.item_name === item.item_name)
                        console.log(already, 'dfd')
                        const quantity = already ? already.ordered : 0;
                        const add = () => {
                            console.log('add')


                            if (already) {
                                already.ordered = already.ordered + 1
                            } else {
                                const menuItem = { ...item, ordered: 1 }
                                updated.push(menuItem)
                            }

                            local('ordered', updated)
                            local('fee', this.props.fee)
                            this.setState({
                                ordered: updated
                            })
                            this.props.onItemAdded(ordered)
                        }

                        const full = already && already.ordered > 0
                        const subtract = () => {
                            console.log('subtract', already)


                            if (already && already.ordered > 0) {
                                already.ordered = already.ordered - 1
                                local('ordered', updated)
                                this.setState({
                                    ordered: updated
                                })
                            }

                            if (already && already.ordered === 0) {
                                let i = updated.findIndex(item => item.item_id === already.item_id);
                                updated.splice(i, 1);
                                local('ordered', updated);
                            }
                            this.props.onItemRemove();

                        }


                        return (
                            <li key={item.item_id}>
                                <div className="item">
                                    <div className="item-controls">
                                        <h3 className="item-name">{item.item_name} </h3>
                                        <p className="item-price">${item.price}</p>
                                        <div className="controls">
                                            <button onClick={subtract}>-</button>
                                            <p className="qty" >{quantity}</p>
                                            <button className="" onClick={add}>+</button>
                                        </div>
                                    </div>
                                    {/* <div className="item-img">
                                    <img src={item.image} />
                                </div> */}
                                </div>

                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}



