import { Container } from "@mui/material";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { OverlayComponent } from "./components/OverlayComponent/OverlayComponent";

export const App = () => {
  const isFormActive = useSelector(
    (state: RootState) => state.formReducer.isActive
  );

  return (
    <>
      {isFormActive && <OverlayComponent></OverlayComponent>}

      <Container>
        <HeaderComponent />
        <MainComponent />
      </Container>
    </>
  );
};
