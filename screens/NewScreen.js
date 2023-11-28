import { StyleSheet, Text, View } from 'react-native'

import { Container, Header, Main, Section1, Section2, Footer } from '../components/styles'

const NewScreen = () => {
    return (
       <Container>
        <Header></Header>
        <Main>
            <Section1></Section1>
            <Section2></Section2>
        </Main>
        <Footer></Footer>
       </Container>
    )
}

export default NewScreen

const styles = StyleSheet.create({})