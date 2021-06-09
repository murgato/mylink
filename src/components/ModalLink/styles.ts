//@ts-ignore
import Styled from 'styled-components/native'

export const ModalContainer = Styled.View`
flex: 1`

export const Container = Styled.View`
    flex: 1;
    background-color: #fff;
    border-top-right-radius: 10px ;
    border-top-left-radius: 10px ;
    padding: 0 15px;

`
export const Header = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0 ;
`

export const LinkArea = Styled.View`
    flex: 1;
    justify-content: center 
`

export const Title = Styled.Text`
    font-size: 33px;
    font-weight: bold;
    color: #1ccbae;
`

export const LongUrl = Styled.Text`
    font-size: 25px;
    color: #a7a7a7;
    margin-bottom: 30px;
    margin-left: 10px ;
`
export const ShotLinkArea = Styled.TouchableOpacity`
height: 45px;
width: 100%;
background-color: #172742;
border-radius: 7px;
flex-direction: row;
justify-content:space-between;
align-items: center
padding: 0 10px;
`
export const ShortLinkUrl = Styled.Text`
width: 90%;
color: #fff;
font-size: 16px
`