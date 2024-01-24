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
    AthletesView,


    Menu,
    ItemBottomNavigation,
    IconBottomNavigation,
    HomeBottomContainer,
    HomeNavigation,
    InnerHomeNavigation,
    IconHomeNavigation,
    TextItemNavigation,
    TextViewAthletes,
    Athletes,
    AthleteFrame,
    AthleteImage,
    DescriptionAthlete,
    FirstName,
    SecondName

} from '../components/jiuScreen'

const HomeScreen = () => {

    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState('Todos');
  
    const handleItemPress = (item) => {
      setSelectedItem(item);
  
      if (item === 'Todos') {
        // Navegar para a tela desejada (ajuste conforme a estrutura do seu projeto)
        navigation.navigate('Home');
      }
  
      // Adicione mais lógica conforme necessário para outras opções
    };


    return (
        <Container>
            <ContainerFilter>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <OptionsContainer>
                        <BtnOption>
                            <ButtonText onPress={() => handleItemPress('Todos')}>
                                <View style={selectedItem === 'Todos' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        Todos
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Jiu-Jítsu')}>
                                <View style={selectedItem === 'Jiu-Jítsu' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        Jiu-Jítsu
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('MMA')}>
                                <View style={selectedItem === 'MMA' ? { borderBottomWidth: 4, borderBottomColor: '#000000' } : {}}>
                                    <LabelOption>
                                        MMA
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Muay Thai')}>
                                <View style={selectedItem === 'Muay Thai' ? { borderBottomWidth: 4, borderBottomColor: '#000000', } : {}}>
                                    <LabelOption>
                                        Muay Thai
                                    </LabelOption>
                                </View>
                            </ButtonText>
                            <ButtonText onPress={() => handleItemPress('Wrestling')}>
                                <View style={selectedItem === 'Wrestling' ? { borderBottomWidth: 4, borderBottomColor: '#000000', } : {}}>
                                    <LabelOption>
                                        Wrestling
                                    </LabelOption>
                                </View>
                            </ButtonText>
                        </BtnOption>
                    </OptionsContainer>
                </ScrollView>
            </ContainerFilter>

            <InnerContainer>


                <ContainerLive>
                    <ContainerGroup>
                        <ImageContainer>
                            <LiveImage
                                source={require('../assets/charles.jpg')}
                            />
                        </ImageContainer>
                        <ContainerInLive>
                            <BasedLive>
                                <RedirectLive>
                                    <Dot
                                        source={require('../assets/_Dot.jpg')}
                                    />
                                    <TextLive>Ao vivo (89K)</TextLive>
                                </RedirectLive>
                            </BasedLive>
                            <TextPrincipal>
                                Cage Talk: A força e a estratégia nos bastidores do MMA com Charlie Du Bronx
                            </TextPrincipal>
                        </ContainerInLive>
                    </ContainerGroup>
                </ContainerLive>
                <AthletesView>
               
                    <TextViewAthletes>
                        Competidores
                    </TextViewAthletes>
                    
                    <Athletes>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Alan.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Allan Nascimento
                                </FirstName>
                                <SecondName>
                                    (Allan Puro Osso)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Elves.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Elves Brenner
                                </FirstName>
                                <SecondName>
                                    (Elves)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Atleta.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    3
                                </FirstName>
                                <SecondName>
                                    (3)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Charles.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Charles Oliveira
                                </FirstName>
                                <SecondName>
                                    (Charles Do Bronx)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Xarope.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Julio Rodrigues
                                </FirstName>
                                <SecondName>
                                    (Xaropinho)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Polyana.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    6
                                </FirstName>
                                <SecondName>
                                    (6)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Miojo.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Daniel da Silva
                                </FirstName>
                                <SecondName>
                                    (Daniel Miojo)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                        <AthleteFrame>
                            <AthleteImage
                                source={require('../assets/Bocao.png')}
                            />
                            <DescriptionAthlete>
                                <FirstName>
                                    Mateus Soares
                                </FirstName>
                                <SecondName>
                                    (Mateus Bocão)
                                </SecondName>
                            </DescriptionAthlete>
                        </AthleteFrame>
                    </Athletes>

                </AthletesView>

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


export default HomeScreen