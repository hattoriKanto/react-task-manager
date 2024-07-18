import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { RootState } from "./store";
import { OverlayComponent } from "./components/OverlayComponent/OverlayComponent";
import { MainComponent } from "./components/shared";
import { fetchTasks } from "./utils/utils";

export const App = () => {
  const dispatch = useDispatch();
  const isFormActive = useSelector(
    (state: RootState) => state.formReducer.isActive
  );

  useEffect(() => {
    (async () => await fetchTasks(dispatch))();
  }, []);

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
