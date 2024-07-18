import React from "react";

import { FatherComponent } from "../../../types";
import { Section } from "./Section.styles";

export const SectionComponet: React.FC<FatherComponent> = ({ children }) => {
  return <Section>{children}</Section>;
};
