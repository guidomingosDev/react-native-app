import { Text, TouchableOpacity} from 'react-native'

import {
    LogoContainer, 
    LogoImage, 
    InputContainer, 
    Input, 
    ContainerButton, 
    KeyAbordingView, 
    BtnLogin, 
    RegisterText, 
    Container
}
from '../components/styles'

const NewScreen = () => {
    return (
        <Container>
            <KeyAbordingView behavior='padding'>
                <LogoContainer>
                    <LogoImage
                        source={require('../assets/novo_logo.png')}
                    />
                </LogoContainer>
                <InputContainer>
                    <Input
                        placeholder="CPF"
                        onChangeText={{}}
                    />
                    <Input
                        placeholder="Senha"
                        onChangeText={{}}
                    />
                    <ContainerButton>
                        <BtnLogin>
                            <Text>Login</Text>
                        </BtnLogin>
                        <TouchableOpacity>
                            <RegisterText>
                                Cadastre-se
                            </RegisterText>
                        </TouchableOpacity>
                    </ContainerButton>
                </InputContainer>
            </KeyAbordingView>
        </Container>
    )
}

export default NewScreen

