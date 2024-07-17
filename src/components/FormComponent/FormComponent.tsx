import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { createTask } from "../../api/api";
import {
  CustomButtonWrapper,
  CustomForm,
  CustomWrapper,
  CustomCloseButton,
} from "./FormComponent.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../store";

export const FormComponent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    onSubmit: async () => {
      await createTask({
        title: formik.values.title,
        category: formik.values.category,
        date: new Date(),
      });
    },
  });

  const handleIsFormActive = () => {
    dispatch(setIsActive());
  };

  return (
    <CustomForm
      onSubmit={(event) => {
        handleIsFormActive();
        formik.handleSubmit(event);
      }}
      onReset={formik.handleReset}
    >
      <CustomWrapper>
        <CustomCloseButton
          onClick={(event) => {
            handleIsFormActive();
            formik.handleReset(event);
          }}
        >
          <CloseIcon />
        </CustomCloseButton>
        <Typography variant="h3">Create a new task:</Typography>
        <TextField
          fullWidth
          label="Title"
          placeholder="Buy a T-shirt on the market"
          name="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          label="Category"
          placeholder="Shopping"
          name="category"
          type="text"
          value={formik.values.category}
          onChange={formik.handleChange}
        />
        <CustomButtonWrapper>
          <Button type="submit">Create</Button>
          <Button type="reset">Reset</Button>
        </CustomButtonWrapper>
      </CustomWrapper>
    </CustomForm>
  );
};
