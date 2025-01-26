import { Container } from '../container/container';
import AndreaPicture from '../../../assets/andrea-test.png';
import "./banner.css";  


export function Banner({title, text}){
    return(
        <Container>
                <div className="inner-banner">
                    <h1>{title}</h1>
                    <p>
                        {text}
                    </p>
                    {/* <button>Learn More</button> */}
                </div>
                <div className="banner-image" >
                    <img src={AndreaPicture} alt="Andrea Chacin" />
                </div>
        </Container>
    )
}

import PropTypes from 'prop-types';

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};