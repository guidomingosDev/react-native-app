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
    NameText,
    Lessons,
    FilterComponent,
    InputLabel,
    Input,
    Content,
    TextInputView,
    TextInnerInput,
    DropDown,
    DropDownIcon

} from '../components/athleteVideoScreen'

const AthleteVideoScreen = () => {

    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState('Todos');

    const handleItemPress = (item) => {
        setSelectedItem(item);
        if (item === '') {
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

                <ContainerFilter>
                    <OptionsContainer>
                        <BtnOption>
                            <ButtonText onPress={() => handleItemPress('Todos')}>
                                <View style={selectedItem === 'Todos' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        Todos
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Básico')}>
                                <View style={selectedItem === 'Básico' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        Básico
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Intermediário')}>
                                <View style={selectedItem === 'Intermediário' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        Intermediário
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Avançado')}>
                                <View style={selectedItem === 'Avançado' ? { borderBottomWidth: 4, borderBottomColor: '#000000', } : {}}>
                                    <LabelOption>
                                        Avançado
                                    </LabelOption>
                                </View>
                            </ButtonText>
                        </BtnOption>
                    </OptionsContainer>
                </ContainerFilter>
                <Lessons>
                    <FilterComponent>
                        <InputLabel>
                            <Input>
                                <Content>
                                    <TextInputView>
                                        <TextInnerInput>
                                            Filtrar por...
                                        </TextInnerInput>
                                    </TextInputView>
                                </Content>
                                <DropDown>
                                    <DropDownIcon
                                        source={require('../assets/arrow-left.png')}
                                    />
                                </DropDown>
                            </Input>
                        </InputLabel>
                    </FilterComponent>
                </Lessons>
            </InnerContainer>



        </Container>
    )
}


export default AthleteVideoScreen