import "react-native-gesture-handler";
import React from "react";
import StatusBarPage from "../../components/StatusBarPage";
import { Container, Title, ListLinks } from "./styles";
import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";

export default function MyLinks(): JSX.Element {
  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />
      <Menu />

      <Title>Meus Links</Title>

      <ListLinks
        data={[
          { id: 1, link: "test.com" },
          { id: 2, link: "test.com" },
        ]}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScroolIndicator={false}
      />
    </Container>
  );
}
