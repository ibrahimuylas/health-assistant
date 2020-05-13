
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/conditionsActions';
import ConditionsForm from './ConditionsForm';
import '../styles/conditionsPage.css';

class ConditionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: undefined
        };
        this.props.actions.getConditions();
    }

    handleOnSearch(filter) {
        this.setState({ filter });
    }

    getFilteredData() {
        if (this.state.filter)
            return this.props.data.filter(_ => _.label.toUpperCase().includes(this.state.filter.toUpperCase()));

        return this.props.data;
    }

    render() {
        return (
            <ConditionsForm conditions={this.getFilteredData()} isLoading={this.props.isLoading} onSearch={(filter) => this.handleOnSearch(filter)} />
        );
    }
}

ConditionsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.object,
    data: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        isLoading: state.conditions.isLoading,
        errorMessage: state.conditions.errorMessage,
        data: state.conditions.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConditionsPage);
