import React from 'react';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './about.module.css';

const links = [
  { link: '/courses', label: 'Courses' },
];

const about = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          About{' '}
        </Title>

        <Container size={800}>
          <Text size="lg" className={classes.description}>
            Umass Course Reviews was created to enhance the course selection process for students at the University of Massachusetts. Offering an innovative alternative to RateMyProfessor, this platform focuses on providing comprehensive details about courses, independent of the instructors. It features insightful reviews from your peers, covering aspects of each course that are unique and not available through other sources. This tool aims to give students a clearer, more informed understanding of their academic choices.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component='a' href='/courses' className={classes.control} variant="white" size="lg">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default about;