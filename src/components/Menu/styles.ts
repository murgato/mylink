//@ts-ignore
import Styled from 'styled-components/native'
import { StatusBar, Platform } from 'react-native'
export const ButtonMenu = Styled.TouchableOpacity`

top: ${Platform.OS === 'ios' ? 
//@ts-ignore
StatusBar.currentHeight + 60 + 'px' : 10 + 'px'};
position: absolute;
margin: 0 20px;
justify-content:space-around
`;