import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';
import { InputWithButton } from '../InputWithButton/InputWithButton';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Course reviews for any class {' '}
          <Text component="span" inherit className={classes.highlight}>
            at UMass
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Read and write reviews for any course you have taken and help others to find the best
            classes.
          </Text>
        </Container>

        <div className={classes.controls}>
          <InputWithButton />
        </div>
      </div>
    </div>
  );
}