import styled from 'styled-components';
import { View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';


export const Colors = {
    primary: '#FFFFFF',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#000000',
    green: '#10B981',
    red: '#EF4444',
    purple: '#871F78'
  };
  
  const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;


export const Container = styled.View`
width: 100%;
height: 500px;

`;

export const Header = styled.View`
height: 15%;
width: 100%;
background-color: ${Colors.red}

`;

export const Main = styled.View`
  height: 500px;
  display: flex;
  flexDirection: row;
`;

export const Section1 = styled.View`
height: 500px;
width: 210px;
background-color: ${Colors.green}
`;

export const Section2 = styled.View`
height: 500px;
width: 100%;
background-color: ${Colors.purple}
`;

export const Footer = styled.View`
  height: 250px;
  width: 100%;
  background-color: ${Colors.tertiary}
`;