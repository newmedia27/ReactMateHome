import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
    const {children} = props
    return (
        <ul style={{dispaly: 'flex'}}>
            {children((value)=>props.onSelected(value))}
        </ul>
    );
};


Menu.Item = props => {
    return (
        <li
            onClick={()=>props.onClick(props.value)}
        >
            {props.children}
        </li>
    )
}


Menu.propTypes = {};

export default Menu;