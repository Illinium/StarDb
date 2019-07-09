import React from 'react';
import './item-list.css';

const ItemList = (props) => {

    const {data, onItemsSelected, children: renderItem} = props;
    
    const items = data.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            return (
                <li className="list-group-item pointer" key={id}
                    onClick={() => onItemsSelected(id)}>
                    {label}
                </li>
                )
    });
    
    return (
            <div className="jumbotron">
                <ul className="item-list list-group">
                    {items}
                </ul>
            </div>
    )
};

export default ItemList;