import './container.css';
import PropTypes from 'prop-types';
import './container.css';

export function Container(props) {
    return (
        <>
            <div className="main-banner">
                <div className="banner-container">
                    {props.children}
                </div>
            </div>
        </>
    );
}

Container.propTypes = {
    children: PropTypes.node
};