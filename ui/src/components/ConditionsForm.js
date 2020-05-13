import React from 'react';
import PropTypes from 'prop-types';
import {
    CardDeck, Spinner, Container
} from 'reactstrap';
import ConditionCard from './ConditionCard';
import ConditionsSearchBox from './ConditionsSearchBox';

const ConditionsForm = ({ conditions, isLoading, onSearch }) => (

    <Container className="mt-4">

        <ConditionsSearchBox onSearch={onSearch} />
        <CardDeck>
            {
                isLoading
                    ?
                    <Spinner type="grow" color="primary" />
                    :
                    (
                        conditions.map((condition, index) => (
                            <ConditionCard key={`conditionCard${index}`} condition={condition} />
                        ))
                    )
            }
        </CardDeck>
    </Container>
);

ConditionsForm.propTypes = {
    conditions: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default ConditionsForm;
