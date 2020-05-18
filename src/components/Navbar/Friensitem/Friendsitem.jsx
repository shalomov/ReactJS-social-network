import React from 'react';
import c from './Friendsitem.module.css';

const Friendsitem = (props) => {
    
    return (
        <li className={c.item_friend}>
            <div className={c.photo_friend} style={{backgroundImage: `url(${props.photo})`}}></div>
            <span className={c.name_friend}>{props.name}</span>
        </li>
    );
};

export default Friendsitem;