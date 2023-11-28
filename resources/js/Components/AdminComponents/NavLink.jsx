// NavLink.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import PropTypes from 'prop-types';

function NavLink(props) {
    const { isActive, ...rest } = props;
    const className = isActive  ? 'active nav-link' : 'nav-link';

    return (
        <Link className={className} {...rest}>
            {props.children}
        </Link>
    );
}

NavLink.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

export default NavLink;
