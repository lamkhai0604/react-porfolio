import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  overflow: auto;
`;

export const SidebarWrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #2c4a52;
  color: #fff;
`;

export const Container = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 4rem;
  padding: 1.2rem;
  background-color: #537072;
`;

export const BodyContainer = styled.div`
  background-color: #8e9b97;
  height: 100%;
  padding: 3rem;
`;

export const ContentWrapper = styled.div`
  background-color: #f4ebdb;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.span`
  height: 35%;
  font-size: 1.6rem;
`;

export const NavbarLink = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;

export const StyledLink = styled.span`
  font-weight: bold;
  :hover {
    padding-bottom: 3px;
    border-bottom: 5px solid #fff;
    border-radius: 5px;
  }
  :active {
    color: #537072;
    border-bottom: 5px solid #537072;
    border-radius: 7px;
  }
`;

//HOME
export const HomeContentPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentRightSide = styled(HomeContentPart)`
  height: 23rem;
  margin: auto;
`;

export const ContentLeftSide = styled(HomeContentPart)`
  margin: auto;
`;

export const Image = styled.div`
  height: 30rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: auto;
`;

export const HomeText = styled.p`
  font-family: "Pacifico", cursive;
  color: #2c4a52;
`;

export const Name = styled(HomeText)`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Position = styled(HomeText)`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Content = styled(HomeText)`
  font-size: 1.2rem;
`;

//PROJECT
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20rem;
  height: 90%;
  display: flex;
  flex-direction: row;
  transition: width 1s;
  :hover {
    width: 40rem;
  }
`;

export const ProjectsBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BodyLine = styled(ProjectsBody)`
  flex-direction: row;
  justify-content: space-between;
`;
