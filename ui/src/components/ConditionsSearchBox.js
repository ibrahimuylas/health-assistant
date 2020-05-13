import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Row, Col, Button
} from 'reactstrap';
import { FilterInput } from './controls/FilterInput';

const ConditionsSearchBox = ({ onSearch }) => {

    const [filter, setFilter] = useState('');

    return (
        <Row className="mb-4">
            <Col sm="5" className="mb-2">
                <FilterInput value={filter} onChange={e => setFilter(e.target.value)} placeholder="Enter key to search condition" />
            </Col>
            <Col sm="3">
                <Button onClick={() => onSearch(filter)}>Search</Button>
            </Col>
        </Row>
    );
}

ConditionsSearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default ConditionsSearchBox;
