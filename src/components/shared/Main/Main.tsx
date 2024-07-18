import { Main } from ".";
import { CompletedIdeas, CurrentIdeas, FreshIdeas } from "../../layout";

export const MainComponent = () => {
  return (
    <Main>
      <FreshIdeas />
      <CurrentIdeas />
      <CompletedIdeas />
    </Main>
  );
};
