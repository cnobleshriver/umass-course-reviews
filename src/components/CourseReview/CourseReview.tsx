import { Text, Card, SimpleGrid, Container, RingProgress } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './CourseReview.module.css';
import { Comment } from '@/components/Comment/Comment';

const comments = [
    {
      rating: 8,
      difficulty: 6,
      professor: 'John Doe',
      description: 'This course was great! The professor was very knowledgeable and engaging.',
    },
    {
      rating: 7,
      difficulty: 8,
      professor: 'Jane Smith',
      description: 'This course was challenging but rewarding. The professor was very helpful and supportive.',
    },
  ];

  type CourseReviewProps = {
    courseName: string; // Replace 'string' with the actual type if it's not a string
  };
  
  export function CourseReview({ courseName }: CourseReviewProps) {
    const getRatingColor = (rating: number, isDifficulty = false) => {
      if (isDifficulty) {
        if (rating <= 4) return 'green';
        if (rating <= 7.5) return 'orange';
        return 'red';
      } else {
        if (rating >= 7.5) return 'green';
        if (rating >= 4) return 'orange';
        return 'red';
      }
    };
  
    const calculateAverage = (property: 'rating' | 'difficulty') => {
      const sum = comments.reduce((acc, comment) => acc + comment[property], 0);
      return sum / comments.length;
    };
  
    const averageRating = calculateAverage('rating');
    const averageDifficulty = calculateAverage('difficulty');
  
    const features = [
      {
        title: 'Average rating',
        value: averageRating,
        isDifficulty: false,
      },
      {
        title: 'Average difficulty',
        value: averageDifficulty,
        isDifficulty: true,
      },
      {
        title: 'Number of reviews',
        value: comments.length,
        isDifficulty: false,
      },
    ].map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        {feature.title === 'Number of reviews' ? (
          <Text fz="xl" fw={700} ta="left" className={classes.cardValue}>
            {feature.value}
          </Text>
        ) : (
          <div className={classes.progressRing}>
            <RingProgress
              sections={[{ value: feature.value * 10, color: getRatingColor(feature.value, feature.isDifficulty) }]}
              label={
                <Text c={getRatingColor(feature.value, feature.isDifficulty)} fw={700} ta="center" size="xl">
                  {feature.value.toFixed(1)}/10
                </Text>
              }
            />
          </div>
        )}
      </Card>
    ));
  
    const commentCards = comments.map((comment, index) => (
      <Comment key={index} rating={comment.rating} difficulty={comment.difficulty} professor={comment.professor} description={comment.description} />
    ));
  
    return (
      <Container size="lg" py="xl">
        <Text size="xl" mb="lg">
          {courseName}
        </Text>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
        <Text size="lg" mt="xl">
          Comments
        </Text>
        {commentCards}
      </Container>
    );
  }