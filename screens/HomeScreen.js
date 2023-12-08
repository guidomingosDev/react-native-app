import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react';

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
  TextItemNavigation

} from '../components/homeScreen'

const HomeScreen = () => {

  const [selectedItem, setSelectedItem] = useState('Todos');

  const handleItemPress = (item) => {
    console.log('Selected Item:', item);
    setSelectedItem(item);
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
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
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

          <TrendingContainer>
            <TrendingInnerContainer>
              <TrendingLayout>
                <TextTrending>
                  Em alta
                </TextTrending>
              </TrendingLayout>
            </TrendingInnerContainer>
          </TrendingContainer>
          <TrendingVideosContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <VideoContainer>

                <ImageVideo
                  source={require('../assets/bjjImage.jpg')}
                />
                <FrameLayout>
                  <RedirectTrendingVideo>
                    <BaseCategory1>
                      <BaseCategoryText>
                        Jiu-Jítsu
                      </BaseCategoryText>
                    </BaseCategory1>
                    <DescribeCategoryText>
                      Jiu-Jitsu Hardcore: Dicas de finalização
                      e controle no tatame
                    </DescribeCategoryText>
                  </RedirectTrendingVideo>
                </FrameLayout>
              </VideoContainer>
              <VideoContainer>
                <ImageVideo
                  source={require('../assets/mma.jpg')}
                />
                <FrameLayout>
                  <RedirectTrendingVideo>
                    <BaseCategory2>
                      <BaseCategoryText>
                        MMA
                      </BaseCategoryText>
                    </BaseCategory2>
                    <DescribeCategoryText>
                      Explosão de ação com os melhores nocautes do MMA
                    </DescribeCategoryText>
                  </RedirectTrendingVideo>
                </FrameLayout>
              </VideoContainer>
              <VideoContainer>
                <ImageVideo
                  source={require('../assets/wrestling.jpg')}
                />
                <FrameLayout>
                  <RedirectTrendingVideo>
                    <BaseCategory3>
                      <BaseCategoryText>
                        Wrestling
                      </BaseCategoryText>
                    </BaseCategory3>
                    <DescribeCategoryText>
                      Aprenda Wrestling com os melhores
                    </DescribeCategoryText>
                  </RedirectTrendingVideo>
                </FrameLayout>
              </VideoContainer>
            </ScrollView>
          </TrendingVideosContainer>

          <ShoppingContainer>
            <ShoppingInnerContainer>
              <ShoppingLayout>
                <TextShopping>
                  Loja
                </TextShopping>
              </ShoppingLayout>
            </ShoppingInnerContainer>
          </ShoppingContainer>

          <ShoppingItensContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/camiseta.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Camiseta
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/bone.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Bone CB
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/moletom.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Moletom Feminino
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/camiseta.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Camiseta
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
            </ScrollView>
          </ShoppingItensContainer>
          <ShoppingItensContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/camiseta.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Camiseta
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/bone.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Bone CB
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/moletom.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Moletom Feminino
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
              <ItensContainer>
                <ItensImages
                  source={require('../assets/camiseta.png')}
                />
                <DescribeItemView>
                  <ItenText>
                    Camiseta
                  </ItenText>
                  <ValueItemText>
                    R$ 199,00
                  </ValueItemText>
                </DescribeItemView>
              </ItensContainer>
            </ScrollView>
          </ShoppingItensContainer>
        </InnerContainer>
      </ScrollView>
      
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