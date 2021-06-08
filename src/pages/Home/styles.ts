//@ts-ignore
import Styled from 'styled-components/native'
import { Platform } from "react-native";


export const ContainerLogo = Styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px'}
`;

export const Logo = Styled.Image`

    width: 150px;
    height: 160px

`;

export const ContainerContent = Styled.View`
margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 15 + '%'}

`;
export const Title = Styled.Text`
font-size: 35px;
color: #FFF;
font-weight: bold;
text-align: center;
`;
export const SubTitle = Styled.Text`
font-size: 20px;
color: #FFF;
text-align: center;
padding-bottom: 10%
`;

export const ContainerInput = Styled.View`
align-items: center;
flex-direction: row;
width: 100%;
border-radius: 7px;
margin: 15px 0;
padding: 0 15px 0 15px;
`;

export const BoxIcon = Styled.View`
align-items: center;
justify-content: center;
padding-left: 10px ;
width: 11%;
height: 50px;
background-color: rgba(255,255,255,0.15);
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
`
export const Input = Styled.TextInput`
align-items: center;
justify-content: center;
width: 90%;
height:50px;
padding: 10px;
background-color: rgba(255,255,255,0.15);
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
font-size: 17px;
`

export const ButtonLink = Styled.TouchableOpacity`
align-items: center;
justify-content: center;
height: 45px;
background-color: #fff;
margin: 0 15px;
border-radius: 7px;
margin-bottom: 15px;
`
export const ButtonLinkText = Styled.Text``