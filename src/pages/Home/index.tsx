import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import {
  ContainerContent,
  ContainerLogo,
  Logo,
  SubTitle,
  Title,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Home(): JSX.Element {
  return (
    <LinearGradient
      colors={["#1ddbb9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBarPage barStyle="light-content" backgroundColor="#1ddbb9" />
      <Menu />

      <ContainerLogo>
        <Logo source={require("../../assets/Logo.png")} />
      </ContainerLogo>

      <ContainerContent>
        <Title>SujeitoLink</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name={"link"} size={22} color={"#fff "} />
          </BoxIcon>
          <Input placeholder={"Cole seu link aqui..."} 
          placeholderTextColor={'white'}/>
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}