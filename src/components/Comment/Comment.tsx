import { Text, Group } from '@mantine/core';
import classes from './Comment.module.css';

interface CommentProps {
  rating: number;
  difficulty: number;
  professor: string;
  description: string;
}

export function Comment({ rating, difficulty, professor, description }: CommentProps) {
  return (
    <div className={classes.card}>
      <Text size="sm" className={classes.professor}>
        {professor}
      </Text>
      <Text size="xs" c="dimmed" className={classes.date}>
        {new Date().toLocaleString()}
      </Text>
      <Text size="sm" className={classes.description}>
        {description}
      </Text>
      <Group mt="sm">
        <Text size="sm" className={classes.rating}>
          Rating: {rating}/10
        </Text>
        <Text size="sm" className={classes.difficulty}>
          Difficulty: {difficulty}/10
        </Text>
      </Group>
    </div>
  );
}