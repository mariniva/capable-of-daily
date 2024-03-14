import styles from "./Weekday.module.css";

type PropsWeekday = {
  weekday: Date;
  day: string;
  isCurrentDate: boolean;
};

export const Weekday = ({weekday,day,isCurrentDate}:PropsWeekday) => {
  
  const date = weekday.getDate();
  const month = weekday.getMonth();
  const dateForm = date < 10 ? `0${date}` : `${date}`;
  const monthForm = month < 10 ? `0${month + 1}` : `${month + 1}`;

  return (
    <>
      <h4 className={isCurrentDate?styles.current:""}>
        <span>
          {dateForm}.{monthForm}|
        </span>
        <span>{day}</span>
      </h4>
    </>
  );
};
