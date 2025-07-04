import styles from './VoteStats.module.css';
import type { VoteType } from '../../types/votes';
import Notification from '../Notification/Notification';

interface VoteStatsProps {
  votes: VoteType;
}
export default function VoteStats({ votes }: VoteStatsProps) {
  const { good, neutral, bad } = votes;
  const totalVotes = good + bad + neutral;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;
  if (totalVotes !== 0) {
    return (
      <div className={styles.container}>
        <p className={styles.stat}>
          Good:<strong>{good}</strong>
        </p>
        <p className={styles.stat}>
          Neutral:<strong>{neutral}</strong>
        </p>
        <p className={styles.stat}>
          Bad:<strong>{bad}</strong>
        </p>
        <p className={styles.stat}>
          Total:<strong>{totalVotes}</strong>
        </p>
        <p className={styles.stat}>
          Positive:<strong>{positiveRate}%</strong>
        </p>
      </div>
    );
  } else {
    return <Notification />;
  }
}
