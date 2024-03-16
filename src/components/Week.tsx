
import { Tasks } from "./Tasks/Tasks";
import { WeekdayContainer } from "./Weekday/WeekdayContainer";



export const Week = () => {
  return (
    <div>
      <div>
        <WeekdayContainer weekdayString="Mon" />
        <Tasks />
      </div>
      <div>
        <WeekdayContainer weekdayString="Tue" />
      </div>
      <div>
        <WeekdayContainer weekdayString="Wed" />
      </div>
      <div>
        <WeekdayContainer weekdayString="Thu" />
      </div>
      <div>
        <WeekdayContainer weekdayString="Fri" />
      </div>
      <div>
        <WeekdayContainer weekdayString="Sat" />
      </div>
      <div>
        <WeekdayContainer weekdayString="Sun" />
      </div>
    </div>
  );
};
