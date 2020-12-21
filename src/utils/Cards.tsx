import React from "react";
import { Card } from "./styled-components";

type IProps = {
  imageUrl: string;
  altName: string;
  text: string;
};

export const Cards = (props: IProps) => {
  console.log(props);
  return (
    <Card>
      <img
        src={props.imageUrl}
        alt={props.altName}
        style={{ width: "100%", height: "100%" }}
      />
      <p>{props.text}</p>
    </Card>
  );
};
