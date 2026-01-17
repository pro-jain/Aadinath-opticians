import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  return (
    <Link className="item" to={`/product/${props.id}`}>
      <div className="item-image-wrap">
        <img src={props.image} alt={props.name} />
      </div>
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <span className="item-price-new">₹ {props.new_price}</span>
        <span className="item-price-old">₹ {props.old_price}</span>
      </div>
    </Link>
  );
};

export default Item;
