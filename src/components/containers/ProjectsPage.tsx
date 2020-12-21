import React, { Component } from "react";
import { Cards } from "../../utils/Cards";
import { ContentWrapper, ProjectsBody, BodyLine } from "../../utils/styled-components";

class ProjectsPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <ProjectsBody>
          <BodyLine>
            <Cards imageUrl="assets/avatar.jpg" altName="project image" text="hello" />
            {/* <Cards imageUrl="" altName="" />
            <Cards imageUrl="" altName="" /> */}
          </BodyLine>
          <BodyLine>
            {/* <Cards imageUrl="" altName="" />
            <Cards imageUrl="" altName="" />
            <Cards imageUrl="" altName="" /> */}
          </BodyLine>
        </ProjectsBody>
      </ContentWrapper>
    );
  }
}

export default ProjectsPage;
