import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const Colors = {
  primary: '#FFF',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#000000',
  green: '#10B981',
  red: '#EF4444',
  purple: '#871F78',
  black: '#344054',
  gray:'#D0D5DD'
  
};

const { primary,black, gray, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const Container = styled.View`
display: flex;
width: 414px;
padding: 24px 16px;
flex-direction: column;
align-items: center;
gap: 32px;
flex: 1 0 0;
background-color: ${Colors.primary};
`;

export const KeyAbordingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
width: 143px;
height: 133px;
margin-top: 50px
`;

export const ContainerTextLogin = styled.View`
display: flex;
margin-top: 40px;
width: 100%;
height: 25%;
align-items: flex-start;
align-self: stretch;
`;

export const HeaderAndText = styled.View`
display: flex;
margin-top: 20px;
flex-direction: column;
align-items: center;
flex: 1 0 0;
width: 100%;
`;

export const Heading = styled.Text`
align-self: stretch;
color: var(--gray-900, #101828);
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 44px; /* 183.333% */
letter-spacing: -0.48px;
`;

export const SupportingHeader = styled.Text`
align-self: stretch;
color: var(--gray-500, #667085);
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */

`;


export const SubHeaderSubText = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
align-self: stretch;
width: 100%;
`;

export const LoginInput = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
`; 


export const InputField = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
`;


export const InputWithLabel = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 6px;
align-self: stretch;
`;

export const Label = styled.Text`
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
`;

export const Input = styled.TextInput`
display: flex;
padding: 10px 14px;
align-items: center;
gap: 8px;
align-self: stretch;
border-radius: 8px;
border: 1px solid;
border-color: ${Colors.gray};
background-color: ${Colors.primary};

`;

export const Content = styled.View`
display: flex;
align-items: center;
gap: 8px;
flex: 1 0 0;
`;

export const Text = styled.Text`
flex: 1 0 0;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
color: ${Colors.gray};
`;

export const Sign = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
flex: 1 0 0;
align-self: stretch;
`;

export const ButtonSign = styled.TouchableOpacity`
display: flex;
align-items: center;
align-self: stretch;
border-radius: 8px;
margin-top: 30px;
height:17%;
border-color: ${Colors.purple};
`;

export const ButtonBase = styled.View`
display: flex;
padding: 10px 18px;
justify-content: center;
align-items: center;
gap: 8px;
width: 100%;
flex: 1 0 0;
border-radius: 8px;
border: 1px solid;
border-color: ${Colors.gray};
background: ${Colors.gray};
`;

export const TextButtonSign = styled.Text`
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 24px;
color: white; 
`;

export const FrameLine = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
`;

export const Line1 = styled.View`
width: 153.5px;
height: 1px;
background: #F2F2F2
`

export const TextOther = styled.Text`
color: ${Colors.gray};
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Line2 = styled.View`
width: 153.5px;
height: 1px;
background: #F2F2F2
`

export const SocialLoginButton = styled.TouchableOpacity`
display: flex;
padding: 10px 16px;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;
border-radius: 8px;
border: 1px solid;
border-color: ${Colors.gray};
background: ${Colors.primary};
`;

export const GoogleImage = styled.Image`
width:24;
height: 24;
`;

export const TextGoogleSign = styled.Text`
color: ${Colors.gray};
/* Text md/Semibold */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
`;

export const HaveAccount = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
`;

export const TextHaveAccount = styled.Text`
color: ${Colors.gray};
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const RedirectCreatAccount = styled.TouchableOpacity`
`;

export const TextCreateAccount = styled.Text`
color: ${Colors.gray};
color: var(--Gray-1, #333);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;



