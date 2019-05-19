import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "expo";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;
export default class Menu extends React.Component {
  state = {
    top: new Animated.Value(900)
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, { toValue: screenHeight }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Umair Qaisar</Title>
          <Subtitle>Developer at Own Business</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zindex: 1
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" color="#546bfb" size={42} />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              icon={item.icon}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  position: absolute;
  z-index: 100;
  background: white;
  width: 100%;
  height: 100%;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
