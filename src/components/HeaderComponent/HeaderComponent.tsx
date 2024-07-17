import { Container, Typography } from "@mui/material";
import {
  CustomHeader,
  CustomHeaderWrapper,
  CustomAddButton,
} from "./HeaderComponent.styles";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../store";

export const HeaderComponent = () => {
  const dispatch = useDispatch();

  const handleIsFormActive = () => {
    dispatch(setIsActive());
  };

  return (
    <CustomHeader>
      <Container>
        <CustomHeaderWrapper>
          <Typography variant="h1">Task Manager</Typography>

          <CustomAddButton onClick={handleIsFormActive}>
            <AddIcon />
          </CustomAddButton>
        </CustomHeaderWrapper>
      </Container>
    </CustomHeader>
  );
};
