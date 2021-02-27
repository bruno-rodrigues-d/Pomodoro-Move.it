import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

import { FiAward } from 'react-icons/fi';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>
                <FiAward size={16} />
        Desafios completos
      </span>
            <span>{challengesCompleted}</span>
        </div>
    );
}