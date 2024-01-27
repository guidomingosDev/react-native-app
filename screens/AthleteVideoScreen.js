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
    DropDownIcon,
    Class,
    TextInnerClassView,
    TextClass,
    CategoryClass,
    TextCategory,
    InnerClass

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

    const getBackScreen = () => {
        navigation.navigate('Jiu-Jitsu')
    }


    return (
        <Container>
            <InnerContainer>
                <AthleteName>
                    <ArrowBackIcon onPress={getBackScreen}>
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
                                        source={require('../assets/chevron-down.jpg')}
                                    />
                                </DropDown>
                            </Input>
                        </InputLabel>
                    </FilterComponent>
                    <InnerClass>
                    <ScrollView ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                        <Class>
                            <TextInnerClassView>
                                <TextClass>
                                    Estratégias Iniciais de Combate: Conhecendo o Jogo
                                </TextClass>
                            </TextInnerClassView>
                            <CategoryClass>
                                <TextCategory>
                                    Finalização
                                </TextCategory>
                            </CategoryClass>
                        </Class>
                        <Class>
                            <TextInnerClassView>
                                <TextClass>
                                Fundamentos Essenciais: Iniciando no Mundo das Quedas
                                </TextClass>
                            </TextInnerClassView>
                            <CategoryClass>
                                <TextCategory>
                                    Queda
                                </TextCategory>
                            </CategoryClass>
                        </Class>
                        <Class>
                            <TextInnerClassView>
                                <TextClass>
                                Transições Suaves para Iniciantes: Movimentos Básicos e Eficazes
                                </TextClass>
                            </TextInnerClassView>
                            <CategoryClass>
                                <TextCategory>
                                    Raspagem
                                </TextCategory>
                            </CategoryClass>
                        </Class>
                        <Class>
                            <TextInnerClassView>
                                <TextClass>
                                    Estratégias Iniciais de Combate: Conhecendo o Jogo
                                </TextClass>
                            </TextInnerClassView>
                            <CategoryClass>
                                <TextCategory>
                                    Raspagem
                                </TextCategory>
                            </CategoryClass>
                        </Class>
                        <Class>
                            <TextInnerClassView>
                                <TextClass>
                                Guarda Simplificada: Defesa Pessoal para Iniciantes
                                </TextClass>
                            </TextInnerClassView>
                            <CategoryClass>
                                <TextCategory>
                                    Defesa Pessoal
                                </TextCategory>
                            </CategoryClass>
                        </Class>
                    </ScrollView>
                    </InnerClass>
                </Lessons>
            </InnerContainer>

            <Menu>
                <ItemBottomNavigation>
                    <IconBottomNavigation
                        source={require('../assets/li_clock.jpg')}
                    />
                    <TextItemNavigation>
                        Histórico
                    </TextItemNavigation>
                </ItemBottomNavigation>
                <ItemBottomNavigation>
                    <IconBottomNavigation
                        source={require('../assets/li_search.jpg')}
                    />
                    <TextItemNavigation>
                        Pesquisar
                    </TextItemNavigation>
                </ItemBottomNavigation>

                <ItemBottomNavigation>
                    <HomeNavigation>
                        <InnerHomeNavigation>
                            <IconHomeNavigation
                                source={require('../assets/home.png')}
                            />
                        </InnerHomeNavigation>
                    </HomeNavigation>
                </ItemBottomNavigation>

                <ItemBottomNavigation>
                    <IconBottomNavigation
                        source={require('../assets/shopping-cart.jpg')}
                    />
                    <TextItemNavigation>
                        Shopping
                    </TextItemNavigation>
                </ItemBottomNavigation>
                <ItemBottomNavigation>
                    <IconBottomNavigation
                        source={require('../assets/li_user.jpg')}
                    />
                    <TextItemNavigation>
                        Perfil
                    </TextItemNavigation>
                </ItemBottomNavigation>
            </Menu>
        </Container>
    )
}


export default AthleteVideoScreen