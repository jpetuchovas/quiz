import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Result } from './Result';

Enzyme.configure({ adapter: new Adapter() });

const getProps = () => ({
  correctlyAnsweredQuestionsCount: 1,
  questionCount: 2,
  onRestartClick: jest.fn(),
});

describe('Result component', () => {
  it('should contain congratulation', () => {
    const wrapper = shallow(<Result {...getProps()} />);
    expect(wrapper.find('.congratulation').exists()).toEqual(true);
  });

  it('should display correct final grade', () => {
    const props = getProps();
    const percentage = props.correctlyAnsweredQuestionsCount / props.questionCount * 100;
    const wrapper = shallow(<Result {...props} />);

    const finalGradeText = `Out of ${props.questionCount} quiz questions, you answered ${
      props.correctlyAnsweredQuestionsCount
    } correctly with a final grade of ${percentage}%.`;

    expect(wrapper.find('.final-grade').text()).toEqual(finalGradeText);
  });

  it('should call onClick when restart button is clicked', () => {
    const props = getProps();
    const wrapper = shallow(<Result {...props} />);
    wrapper.find('.restart-button').simulate('click');

    expect(props.onRestartClick.mock.calls.length).toEqual(1);
  });
});
