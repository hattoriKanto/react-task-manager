import React from "react";
import { Section } from "./SectionComponent.styles";
import { FatherComponent } from "../../types";

export const SectionComponent: React.FC<FatherComponent> = ({ children }) => {
  return <Section>{children}</Section>;
};
