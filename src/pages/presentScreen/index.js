import { Button, Card, Layout, Text, ViewPager } from "@ui-kitten/components";
import { UndoIcon } from "components/icons";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { navService } from "service";
import { env, i18n } from "utils";
import introduction from "./components/introduction";

const navLogin = () => {
  navService.navigate("login");
};

const totalPage = 5;

export default ({ nonLogin = true }) => {
  const [viewPagerIndex, setViewPaperIndex] = React.useState(0);

  const pageProps = {
    title: "Title",
    body: () => <Text>Body</Text>,
    pageIndex: viewPagerIndex,
    previousPage: () => setViewPaperIndex(viewPagerIndex - 1),
    nextPage: () => setViewPaperIndex(viewPagerIndex + 1),
  };

  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <Layout style={styles.container}>
        <Layout
          style={{ flexDirection: "row", backgroundColor: "transparent" }}
        >
          {nonLogin && (
            <Button
              appearance="outline"
              status="control"
              size="small"
              accessoryLeft={UndoIcon}
              onPress={navLogin}
            >
              {i18n.t("login.login")}
            </Button>
          )}

          <Layout style={{ flex: 1, backgroundColor: "transparent" }}></Layout>
        </Layout>

        <ViewPager
          style={{ marginVertical: 15 }}
          selectedIndex={viewPagerIndex}
          onSelect={setViewPaperIndex}
          shouldLoadComponent={(index) => index === viewPagerIndex}
        >
          <Page {...pageProps} {...introduction} />
          <Page {...pageProps} />
          <Page {...pageProps} />
        </ViewPager>
      </Layout>
      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>
    </ImageBackground>
  );
};

const Page = (props) => (
  <Card
    status="primary"
    header={(headerProps) => <Header {...headerProps} title={props.title} />}
    footer={(footerProps) => (
      <Footer
        {...footerProps}
        nextPage={props.nextPage}
        previousPage={props.previousPage}
        pageIndex={props.pageIndex}
      />
    )}
    style={{
      margin: 10,
      maxWidth: 800,
    }}
  >
    {props.body()}
  </Card>
);

const Header = (props) => (
  <Text category="h6" {...props}>
    {props.title}
  </Text>
);

const Footer = (props) => (
  <Layout style={[props.style, styles.footerContainer]}>
    {props.pageIndex > 0 && (
      <Button
        style={styles.footerControl}
        size="small"
        onPress={props.previousPage}
      >
        {i18n.t("origin.previous")}
      </Button>
    )}
    {props.pageIndex < totalPage - 1 && (
      <Button
        style={styles.footerControl}
        size="small"
        onPress={props.nextPage}
      >
        {i18n.t("origin.next")}
      </Button>
    )}
  </Layout>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    padding: 10,
  },
  imageStyle: {
    opacity: 0.9,
  },
  container: {
    marginVertical: "1%",
    marginBottom: 15,
    maxWidth: 800,
    flex: 1,
    backgroundColor: "transparent",
  },
  versionText: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
