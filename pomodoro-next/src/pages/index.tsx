import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../Components/CompletedChallenges';
import { Countdown } from '../Components/Countdown';
import { ExperienceBar } from '../Components/ExperienceBar';
import { Profile } from '../Components/Profile';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../Components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengeProvider } from '../context/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | TimeUp</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section className={styles.content}>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};