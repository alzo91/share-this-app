import {View} from 'moti';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export type IContainerProps = {
  type?: 'warning' | 'error' | 'sucess' | 'info';
  color?: string;
};

export const Container = styled(View)<IContainerProps>`
  background-color: ${props => props.color};
  display: flex;
  min-width: ${Dimensions.get('screen').width}px;
  padding: 45px 10px 10px;
  position: absolute;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;
