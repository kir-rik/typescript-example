import React from "react";

type Props = {
  handleClick: () => void;
  title: string;
};

export default ({ handleClick, title }: Props) => (
  <button onClick={handleClick}>{title}</button>
);
