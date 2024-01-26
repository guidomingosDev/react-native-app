import styled from 'styled-components/native';

export const Colors = {
    primary: '#FFF',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#000000',
    green: '#10B981',
    red: '#EF4444',
    purple: '#871F78',
    black: '#000000',
    gray:'#F2F2F2',
    orange: '#F2994A',
    blue: '#2F80ED',
    gray2: '#4F4F4F'
  };

const { gray2, primary,black, gray, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const Container = styled.View`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
flex: 1 0 0;
align-self: stretch;
background-color: ${Colors.prirmary};
`;

export const InnerContainer = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex: 1 0 0;
align-self: stretch;
`;

export const AthleteName = styled.View`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  width: 100%;
  flex-direction: row;
  margin-top: 40px;
  gap: 8px;
  align-self: stretch;
`;

export const ArrowBackIcon = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const ArrowBack = styled.Image`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const Name = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1 0 0;
align-self: stretch;
`;

export const NameText = styled.Text`
color: var(--Gray-3, #828282);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;
