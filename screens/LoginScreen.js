import { Text, TouchableOpacity } from 'react-native'

import {
    LogoImage,
    KeyAbordingView,
    Container,
    ContainerTextLogin,
    HeaderAndText,
    SubHeaderSubText,
    Heading,
    SupportingHeader,
    LoginInput,
    InputField,
    Label,
    InputWithLabel,
    Input,
    Content,
    Sign,
    ButtonSign,
    ButtonBase,
    TextButtonSign,
    FrameLine,
    Line1,
    TextOther,
    Line2,
    SocialLoginButton,
    HaveAccount,
    TextHaveAccount,
    TextCreateAccount,
    RedirectCreatAccount,
    GoogleImage,
    TextGoogleSign

}
    from '../components/home'

const LoginScreen = () => {
    return (
        <Container>
            <KeyAbordingView behavior='padding'>
                <LogoImage
                    source={require('../assets/logo.png')}
                />
                <ContainerTextLogin>
                    <HeaderAndText>
                        <SubHeaderSubText>
                            <Heading>
                                Olá, bem-vindo(a)!
                            </Heading>
                            <SupportingHeader>
                                Faça seu login para ter acesso ao melhor do esporte da atualidade.
                            </SupportingHeader>
                        </SubHeaderSubText>
                    </HeaderAndText>
                </ContainerTextLogin>

                <LoginInput>
                    <InputField>
                        <InputWithLabel>
                            <Label>
                                E-mail
                            </Label>
                            <Input>
                                <Content>
                                    <Text>
                                        exemplo@email.com.br
                                    </Text>
                                </Content>
                            </Input>
                        </InputWithLabel>
                    </InputField>
                    <InputField>
                        <InputWithLabel>
                            <Label>
                                Senha
                            </Label>
                            <Input>
                                <Content>
                                    <Text>
                                        exemplo@email.com.br
                                    </Text>
                                </Content>
                            </Input>
                        </InputWithLabel>
                    </InputField>
                </LoginInput>

                <Sign>
                    <ButtonSign>
                        <ButtonBase>
                            <TextButtonSign>
                                Entrar
                            </TextButtonSign>
                        </ButtonBase>
                    </ButtonSign>
                    <FrameLine>
                        <Line1 />
                        <TextOther>
                            Ou
                        </TextOther>
                        <Line2 />
                    </FrameLine>

                    <SocialLoginButton>
                        <GoogleImage
                            source={require('../assets/SocialIcon.png')}
                        />
                        <TextGoogleSign>
                        Sign in with Google
                        </TextGoogleSign>
                    </SocialLoginButton>

                    <HaveAccount>
                        <TextHaveAccount>
                            Não possui conta?
                        </TextHaveAccount>
                        <RedirectCreatAccount>
                            <TextCreateAccount>
                                Criar agora
                            </TextCreateAccount>
                        </RedirectCreatAccount>

                    </HaveAccount>

                </Sign>

            </KeyAbordingView>
        </Container>
    )
}

export default LoginScreen

