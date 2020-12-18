import React from "react";
import AboutMePage from "./components/containers/AboutmePage";
import MyProjectsPage from "./components/containers/ProjectsPage";
import ContactMePage from "./components/containers/ContactmePage";
import MySkillPage from "./components/containers/Myskillpage";
import Home from "./components/containers/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./utils/Breadcrumbs";
//STYLES
import {
  BodyWrapper,
  Container,
  Header,
  BodyContainer,
} from "./utils/styled-components";

class Routes extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <Navbar />

        <Container>
          <Header>
            <Breadcrumbs />
          </Header>

          <BodyContainer>
            <Switch>
              <Route exact from="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/Home/AboutMe"
                render={(props) => <AboutMePage {...props} />}
              />
              <Route
                exact
                path="/Home/MyProjects"
                render={(props) => <MyProjectsPage {...props} />}
              />
              <Route
                exact
                path="/Home/Skills"
                render={(props) => <MySkillPage {...props} />}
              />
              <Route
                exact
                path="/Home/ContactMe"
                render={(props) => <ContactMePage {...props} />}
              />
            </Switch>
          </BodyContainer>
        </Container>
      </BodyWrapper>
    );
  }
}

export default Routes;
