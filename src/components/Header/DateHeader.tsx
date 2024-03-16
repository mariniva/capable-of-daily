import styles from "./DateHeader.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setWeekDifference } from "../../store/reducers/TasksSlice";

export const DateHeader = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
      const dispatch = useAppDispatch();
      const weekDifference = useAppSelector(state=>state.tasks.weekDifference);
      const date = new Date();
      const week = 7;
      date.setDate(date.getDate()+week*weekDifference);

      const monthWord = months[date.getMonth()];
      const year = date.getFullYear();

      return (
        <button className={styles.date} onClick={()=> dispatch(setWeekDifference("today"))}>
          {monthWord} {year}
        </button>
      )
}