import React from 'react';
import { shallow, mount } from 'enzyme';
import ConditionsSearchBox from './ConditionsSearchBox';
import { FilterInput } from './controls/FilterInput';
import {
    Button
} from 'reactstrap';

describe('<ConditionsSearchBox />', () => {
    it('should contain 1 <FilterInput /> component', () => {
        const props = {
            onSearch: jest.fn()
        };

        const wrapper = shallow(<ConditionsSearchBox {...props} />);

        const allInputs = wrapper.find(FilterInput);

        expect(allInputs.length).toEqual(1);
    });

    it('should contain 1 <Button /> component', () => {
        const props = {
            onSearch: jest.fn()
        };

        const wrapper = shallow(<ConditionsSearchBox {...props} />);

        const allInputs = wrapper.find(Button);

        expect(allInputs.length).toEqual(1);
    });

    it('should search button is clicked', () => {
        const props = {
            onSearch: jest.fn()
        };
        const wrapper = shallow(<ConditionsSearchBox {...props} />);

        expect(props.onSearch).not.toBeCalled();
        wrapper.find('Button').simulate("click");
        expect(props.onSearch).toBeCalled();
    });

    it('should call onChange when text input changes', () => {
        const props = {
            onSearch: jest.fn()
        };
        const wrapper = mount(<ConditionsSearchBox {...props} />);
        const changeEvent = { target: { value: 'disease' } };

        const input = wrapper.find('input').first();
        input.simulate('change', changeEvent);

        const button = wrapper.find('button').first();
        button.simulate('click');

        expect(props.onSearch).toBeCalledWith('disease');
    });
});
