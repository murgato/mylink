import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
} from "react-native";
import {
  Container,
  Header,
  ModalContainer,
  LinkArea,
  Title,
  LongUrl,
  ShotLinkArea,
  ShortLinkUrl,
} from "./styles";
import { Feather } from "@expo/vector-icons";

interface Props {
  onClosed: Function;
}
import Clipboard from "expo-clipboard";

export default function ModalLink({ onClosed }: Props): JSX.Element {
  const copyLink = () => {
    Clipboard.setString("teste");
    alert("Link copiado");
  };
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Link",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("ActivityType");
        } else {
          console.log("Compartilhado com sucesso!");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Modal fechado");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={() => onClosed()}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => onClosed()}>
            <Feather name={"x"} color={"#212743"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare()}>
            <Feather name={"share"} color={"#212743"} size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title> Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://teste.com.br</LongUrl>
          <ShotLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>https://bit.ly/dasdas</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name={"copy"} color={"#fff"} size={30} />
            </TouchableOpacity>
          </ShotLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
