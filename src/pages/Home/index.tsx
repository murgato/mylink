import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Modal,
} from "react-native";
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
import ModalLink from "../../components/ModalLink";

export default function Home(): JSX.Element {
  const [link, setLink] = useState<string>("");
  const [modal, onModal] = useState<boolean>(false);
  const handleShortLink = () => {
    onModal(!modal);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage barStyle="light-content" backgroundColor="#1ddbb9" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
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
              <Input
                placeholder={"Cole seu link aqui..."}
                placeholderTextColor={"white"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={link}
                onChangeText={(link: any) => setLink(link)}
              />
            </ContainerInput>

            <ButtonLink onPress={() => handleShortLink()}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modal} transparent animationType={"slide"}>
          <ModalLink onClosed={() => onModal(!modal)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
