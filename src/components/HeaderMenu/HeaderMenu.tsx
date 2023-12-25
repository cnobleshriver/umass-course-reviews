'use client'

import { Menu, Group, Center, Burger, Container, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import Image from 'next/image'
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/courses', label: 'Courses' },
  { link: '/about', label: 'About'},
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
         <Link
          key={link.label}
          href={link.link}
          className={classes.link}
          // onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Link> 
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <Image src='/umass-logo.png' alt="UMass" width={60} height={49}/> */}
            <Text size="lg">UMass Course Reviews</Text>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Menu opened={opened} onClose={toggle}>
            <Menu.Target> 
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </header>
  );
}