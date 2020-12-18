import React, { Component } from "react";
import { ContentWrapper, HomeContentSide, Image } from "../../utils/styled-components";

class Home extends Component {
  render() {
    return (
      <ContentWrapper>
        <HomeContentSide>
          <Image></Image>
        </HomeContentSide>
        <HomeContentSide>this is home page</HomeContentSide>
      </ContentWrapper>
    );
  }
}

export default Home;
