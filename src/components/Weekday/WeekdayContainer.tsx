import { useAppSelector } from "../../hooks/hooks";
import { Weekday } from "./Weekday";

type PropsDate = {
  weekdayString: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
};

export const WeekdayContainer = ({
  weekdayString,
}: PropsDate) => {
  const weekArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const index = weekArray.indexOf(weekdayString);

  const weekDifference = useAppSelector(state=>state.tasks.weekDifference);
  const date = new Date();
  const currentDate = new Date();
  const week = 7;
  currentDate.setDate(date.getDate() - date.getDay() + week*weekDifference+1+index);
  
  const isCurrentDate = currentDate.getTime() === date.getTime();

  return (
    <>
      <div>
        <Weekday
          weekday={currentDate}
          day={weekdayString}
          isCurrentDate={isCurrentDate}
        />
      </div>
    </>
  );
};
