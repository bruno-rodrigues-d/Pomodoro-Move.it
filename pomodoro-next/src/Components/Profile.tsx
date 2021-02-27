import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bruno-rodrigues-d.png" alt="Bruno Rodrigues" />
            <div>
                <strong>Bruno Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
          Level {level}
                </p>
            </div>
        </div>
    );
}