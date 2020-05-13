import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardBody, CardText, CardTitle, Button, CardFooter
} from 'reactstrap';
import ConditionCardImg from './ConditionCardImg';

const ConditionCard = ({ condition }) => {

    return (
        <Card className="conditionCard">
            <ConditionCardImg src={condition.image} alt={condition.label} />
            <CardBody>
                <CardTitle className="font-weight-bold">{condition.label}</CardTitle>
                <CardText className="text-truncate">{condition.snippet}</CardText>
            </CardBody>
            <CardFooter className="text-right">
                <Button color='link'>find out more</Button>
            </CardFooter>
        </Card>
    );
}

ConditionCard.propTypes = {
    condition: PropTypes.object.isRequired,
};

export default ConditionCard;
