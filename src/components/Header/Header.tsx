
import { useAppDispatch } from '../../hooks/hooks';
import { setWeekDifference } from '../../store/reducers/DateSlice';
import { DateHeader } from './DateHeader';
import styles from './Header.module.css';

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <DateHeader />
      <div>
        <div>Profile</div>
        <button onClick={()=> dispatch(setWeekDifference("before"))}>Before</button>
        <button onClick={()=> dispatch(setWeekDifference("next"))}>Next</button>
      </div>
    </div>
  );
};
