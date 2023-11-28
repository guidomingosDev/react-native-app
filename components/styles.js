import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';

export const Colors = {
  black: '#373434',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#000000',
  green: '#10B981',
  red: '#EF4444',
  purple: '#871F78',
  
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  justify-content: center;
  align-items: center;
`;

export const KeyAbordingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 80%;
  height: 210px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const LogoImage = styled.Image`
  width: 320;
  height: 230;
  margin-bottom: 40px;
  resizeMode: cover;
`;

export const InputContainer = styled.View`
  width: 80%;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding-horizontal: 12px;
  padding-vertical: 10px;
  border-radius: 10px;
  margin-top: 10px;
  border-width: 1px;
  background-color: ${Colors.secondary};
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  border-radius: 10px;
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TextBtnLogin = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${Colors.secondary};
`;


export const RegisterText = styled.Text`
font-weight: 700;
font-size: 13px;
color: ${Colors.secondary};
`;
