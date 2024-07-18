import { Swiper, SwiperSlide } from "swiper/react";
import { CardComponent, SectionComponet } from "../../shared";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "swiper/css";

export const CurrentIdeas = () => {
  const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);
  const currentTasks = tasks.filter((task) => !task.completed && !task.new);

  return (
    <SectionComponet>
      <Swiper slidesPerView={3}>
        {currentTasks.map((task) => {
          const { id } = task;

          return (
            <SwiperSlide key={id}>
              <CardComponent task={task} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SectionComponet>
  );
};
