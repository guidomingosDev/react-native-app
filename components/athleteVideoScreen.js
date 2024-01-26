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
  gray: '#F2F2F2',
  orange: '#F2994A',
  blue: '#2F80ED',
  gray2: '#4F4F4F'
};

const { gray2, primary, black, gray, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const Container = styled.View`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
flex: 1 0 0;
align-self: stretch;
background-color: ${Colors.primary}
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

export const Lessons = styled.View`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  height: 100%; 
  align-self: stretch;
`;

export const FilterComponent = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 100px;
width: 100%;
`;

export const InputLabel = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 6px;
width: 100%;
`;

export const Input = styled.View`
display: flex;
flex-direction: row;
align-items: flex-start;
border-radius: 8px;
border: 1px solid;
border-color: D0D5DD;
width: 100%;
`;

export const Content = styled.View`
display: flex;
padding: 10px 0px 10px 14px;
gap: 8px;
height: 50px;
flex: 1 0 0;
`;

export const TextInputView = styled.View`
display: flex;
gap: 8px;
flex: 1 0 0;
`;

export const TextInnerInput = styled.Text`
flex: 1 0 0;
color: var(--Gray-500, #667085);
/* Text md/Regular */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
margin-top: 3px;
`;

export const DropDown = styled.TouchableOpacity`
display: flex;
padding: 10px 14px;
margin-top: 5px;
justify-content: space-between;
align-items: center;
align-self: stretch;
color: #667085;
width: 40px;
height: 30px;
`;

export const DropDownIcon = styled.Image`
width: 20px;
height: 20px;
transform: rotate(-90deg);
`;