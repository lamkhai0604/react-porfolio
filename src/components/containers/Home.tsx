import React, { Component } from "react";
import {
  ContentWrapper,
  ContentLeftSide,
  ContentRightSide,
  Image,
  Name,
  Position,
  Content
} from "../../utils/styled-components";

class Home extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentLeftSide>
          <Image><img src="assets/avatar.jpg" alt="avatar" /></Image>
        </ContentLeftSide>
        <ContentRightSide>
          <Name>Lâm Khải</Name>
          <Position>Front end web developer</Position>
          <Content>
            "My plan is to work hard and gets to know the work with front end
            position. I will always challenge to have enough experience to work
            as back end position also. Within one year, I'm looking forward to
            getting myself from junior position to middle position and learning
            up to date knowledge. With that being said, from 4-5 years from
            today, I can try to work as a project manager."
          </Content>
        </ContentRightSide>
      </ContentWrapper>
    );
  }
}

export default Home;
