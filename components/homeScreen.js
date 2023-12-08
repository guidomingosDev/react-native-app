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
background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 40px;
gap: 16px;
flex: 1 0 0;
align-self: stretch;
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

export const ContainerLive = styled.View`
display: flex;
height: 140px;
padding: 0px 16px;
align-items: flex-start;
gap: 10px;
align-self: stretch;
`;

export const ImageContainer = styled.View`
display: flex;
align-items: center;
gap: 10px;
flex: 1 0 0;
align-self: stretch;
border-radius: 16px;
`;

export const LiveImage = styled.Image`
width: 100%;
height: 100%;
resize-mode: cover;
border-radius: 16px;
`;

export const ContainerGroup = styled.View`
flex: 1 0 0;
align-self: stretch;
`;

export const ContainerInLive = styled.TouchableOpacity`
display: flex;
position: absolute;
width: 358px;
height: 140px;
padding: 8px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 8px;
border-radius: 16px;
opacity: 0.7;
`;

export const RedirectLive = styled.View`
display: flex;
padding: 8px;
flex-direction: column;
flex-direction: row;
align-items: flex-start;
gap: 10px;
background-color: ${Colors.red};
align-self: stretch;
border-radius: 8px;
`;

export const BasedLive = styled.View`
display: flex;
padding: 2px 8px 2px 6px;
justify-content: center;
align-items: center;
border-radius: 16px;
color: ${Colors.tertiary}
`;

export const Dot = styled.Image`
width: 8px;
height: 8px;
margin-rigth: 6px;
margin-top: 5px;
border-radius: 16px;
`;

export const TextLive = styled.Text`
color: ${Colors.primary};
text-align: center;
/* Text xs/Medium */
font-family: Inter;
margin-rigth: 6px;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
`;

export const TextPrincipal = styled.Text`
align-self: stretch;
color: ${Colors.primary};
margin-left: 5px;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 138.462% */
`;

export const TrendingContainer = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`;

export const TrendingInnerContainer = styled.View`
display: flex;
width: 390px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
background-color: ${Colors.primary};
`;

export const TrendingLayout = styled.View`
display: flex;
padding: 0px 16px;
align-items: flex-start;
gap: 10px;
align-self: stretch;
border-radius: 8px;
`;

export const TextTrending = styled.Text`
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 141.176% */
`;

export const TrendingVideosContainer = styled.View`
display: flex;
height: 248px;
padding: 0px 16px;
position: relative;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
gap: 16px;
align-self: stretch;
`;

export const VideoContainer = styled.View`
display: flex;
flex: 1;
position: relative;
width: 164px;
height: 248px;
flex-direction: column;
justify-content: space-between;
margin-right: 19px;
align-items: center;
border-radius: 16px;
position: relative;
background-color: ${Colors.red}
`;

export const ImageVideo = styled.Image`
width: 100%;
height: 100%;
resize-mode: cover;
border-radius: 16px;
`;

export const FrameLayout = styled.View`
display: flex;
width: 164px;
height: 248px;
padding: 8px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
flex-shrink: 0;
border-radius: 16px;
position: absolute;
background: ${Colors.black};
opacity: 0.66;
`;

export const RedirectTrendingVideo = styled.TouchableOpacity`
display: flex;
padding: 8px;
position: absolute;
flex-direction: column;
align-items: flex-start;
gap: 10px;
height: 50%;
align-self: stretch;
border-radius: 8px;
`;

export const BaseCategory1 = styled.View`
display: flex;
padding: 2px 8px;
justify-content: center;
align-items: center;
border-radius: 20px;
background: ${Colors.green};
`;

export const BaseCategory2 = styled.View`
display: flex;
padding: 2px 8px;
justify-content: center;
align-items: center;
border-radius: 20px;
background: ${Colors.orange};
`;

export const BaseCategory3 = styled.View`
display: flex;
padding: 2px 8px;
justify-content: center;
align-items: center;
border-radius: 20px;
background: ${Colors.blue};
`;

export const BaseCategoryText = styled.Text`
color: ${Colors.primary};
text-align: center;
/* Text xs/Medium */
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
`;

export const DescribeCategoryText = styled.Text`
align-self: stretch;
color: ${Colors.primary};
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 138.462% */
`;


export const ShoppingContainer = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
`;

export const ShoppingInnerContainer = styled.View`
display: flex;
width: 390px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
background-color: ${Colors.primary};
`;

export const ShoppingLayout = styled.View`
display: flex;
padding: 0px 16px;
align-items: flex-start;
gap: 10px;
align-self: stretch;
border-radius: 8px;
`;

export const TextShopping = styled.Text`
color: ${Colors.black};
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 141.176% */
`;

export const ShoppingItensContainer = styled.View`
display: flex;
padding: 0px 16px;
align-items: flex-start;
gap: 16px;
flex: 1 0 0;
align-self: stretch;
`;

export const ItensContainer = styled.TouchableOpacity`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
margin: 5px;
`;

export const ItensImages = styled.Image`
border-radius: 8px;
width: 130px;
height: 130px;
`;

export const DescribeItemView = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
align-self: stretch;
`;

export const ItenText = styled.Text`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
align-self: stretch;
overflow: hidden;
color: var(--Gray-1, #333);
text-overflow: ellipsis;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 138.462% */
`;

export const ValueItemText = styled.Text`
color: var(--Gray-1, #333);
text-align: center;
/* Text xs/Medium */
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
`;

export const Menu = styled.View`
display: flex;
padding: 16px;
height: 10%;
flex-direction: row;
justify-content: center;
align-items: flex-end;
align-self: stretch;
border-radius: 24px 24px 0px 0px;
background-color: ${Colors.primary};
box-shadow: 0.4px 0px 0.4px black;
`;

export const ItemBottomNavigation = styled.TouchableOpacity`
display: flex;
flex-direction: column;
align-items: center;
flex: 1 0 0;
`;

export const IconBottomNavigation = styled.Image`
width: 27px;
height: 27px;
`;

export const HomeBottomContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
flex: 1 0 0;
`;

export const HomeNavigation = styled.View`
display: flex;
padding: 10px;
align-items: flex-start;
paddin-top: 20px;
border-radius: 100px;
border: 4px solid;
border-color: ${Colors.black};
background: ${Colors.black};
`;

export const InnerHomeNavigation = styled.View`
display: flex;
width: 24px;
height: 24px;
justify-content: center;
align-items: center;
`;

export const IconHomeNavigation = styled.Image`
width: 24px;
height: 24px;
flex-shrink: 0;
color: ${Colors.blue}
`;

export const TextItemNavigation = styled.Text`
color: ${Colors.gray2};
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`;