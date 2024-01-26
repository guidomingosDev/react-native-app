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
color: ${Colors.tertiary};
display: flex;
padding: 3px;
justify-content: center;
align-items: center;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 24px;
`;

export const ContainerFilter = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
align-self: stretch;
`;

export const OptionsContainer = styled.View`
display: flex;
padding: 0px 16px;
align-items: flex-start;
gap: 8px;
background-color: ${Colors.primary};
`;

export const ButtonText = styled.TouchableOpacity`
display: flex;
background-color: ${Colors.primary}
`;

export const BottomLine = styled.View`
color: var(--Gray-1, #333);
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 141.176% */ 
`;

export const BtnOption = styled.View`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;
  background-color: ${Colors.primary};
`;

export const LabelOption = styled.Text`
  color: ${Colors.tertiary};
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
