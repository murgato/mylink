//@ts-ignore
import Styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = Styled.View`
    flex: 1;
    background-color: #212743
`

export const Title = Styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 20 + '%'};
    margin-left: 20px;
    font-size: 33px;
    font-weight: bold
    color: #fff
`

export const ListLinks = Styled.FlatList``
