import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ConditionCardImg = ({ src, alt }) => {

    const notFoundImage = "./images/not-found-image.jpg";
    const [source, setSource] = useState(src || notFoundImage);

    const handleError = () => {
        setSource(notFoundImage);
    };

    return <img src={source} alt={alt} onError={handleError} />;
}

ConditionCardImg.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default ConditionCardImg;
