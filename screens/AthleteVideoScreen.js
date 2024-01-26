import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ContainerFilter,
    InnerContainer,
    OptionsContainer,
    BtnOption,
    ButtonText,
    LabelOption,
    ContainerLive,
    ImageContainer,
    LiveImage,
    ContainerGroup,
    ContainerInLive,
    RedirectLive,
    Dot,
    BasedLive,
    TextLive,
    TextPrincipal,
    TrendingContainer,
    TrendingInnerContainer,
    TrendingLayout,
    TextTrending,
    TrendingVideosContainer,
    VideoContainer,
    ImageVideo,
    FrameLayout,
    RedirectTrendingVideo,
    BaseCategory1,
    BaseCategory2,
    BaseCategory3,
    BaseCategoryText,
    DescribeCategoryText,
    ShoppingContainer,
    ShoppingInnerContainer,
    ShoppingLayout,
    TextShopping,
    ShoppingItensContainer,
    ItensContainer,
    ItensImages,
    DescribeItemView,
    ItenText,
    ValueItemText,
    Menu,
    ItemBottomNavigation,
    IconBottomNavigation,
    HomeBottomContainer,
    HomeNavigation,
    InnerHomeNavigation,
    IconHomeNavigation,
    TextItemNavigation,
    ContainerNameAhtlete,
    ArrowBack,
    ArrowBackIcon,
    NameAthlete,
    AthleteName,
    Name,
    NameText

} from '../components/athleteVideoScreen'

const AthleteVideoScreen = () => {

    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState('Todos');

    const handleItemPress = (item) => {
        setSelectedItem(item);
        if (item === 'Jiu-Jítsu') {
            navigation.navigate('Jiu-Jitsu');
        }
    };


    return (
        <Container>
            <InnerContainer>
                <AthleteName>
                    <ArrowBackIcon>
                    <ArrowBack
                        source={require('../assets/arrow-left.png')}
                    />
                    </ArrowBackIcon>
                    <Name>
                        <NameText>
                            Allan Nascimento (Allan Puro Osso)
                        </NameText>
                    </Name>
                </AthleteName>
            </InnerContainer>



        </Container>
    )
}


export default AthleteVideoScreen