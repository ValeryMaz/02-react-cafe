import css from './VoteOptions.module.css';
import type { VoteKey } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (key: VoteKey) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
