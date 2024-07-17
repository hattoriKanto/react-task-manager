import { FormComponent } from "../FormComponent/FormComponent";
import {
  CustomAsideForm,
  CustomOverlay,
  CustomOverlayBackground,
} from "./OverlayComponent.styles";

export const OverlayComponent = () => {
  return (
    <CustomOverlay>
      <CustomOverlayBackground />
      <CustomAsideForm>
        <FormComponent />
      </CustomAsideForm>
    </CustomOverlay>
  );
};
