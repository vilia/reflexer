import { css } from 'styled-components';
import { mediaProperty, propsChecker } from '../helpers';

// eslint-disable-next-line
export const Row = props => css`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  ${mediaProperty(propsChecker(props, 'rowGutter'), 'margin-left')};
  ${mediaProperty(propsChecker(props, 'rowGutter'), 'margin-right')};
  ${props.flexDirection && mediaProperty(props.flexDirection, 'flex-direction')};
  ${props.flexWrap && mediaProperty(props.flexWrap, 'flex-wrap')};
  ${props.justifyContent && mediaProperty(props.justifyContent, 'justify-content')};
  ${props.alignItems && mediaProperty(props.alignItems, 'align-items')};
  ${props.alignContent && mediaProperty(props.alignContent, 'align-content')};
`;
