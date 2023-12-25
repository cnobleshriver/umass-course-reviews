'use client';
import React, { useState } from 'react';
import { TextInput, TextInputProps, ActionIcon, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export function InputWithButton(props: TextInputProps) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      window.location.href = `/courses?search=${encodeURIComponent(searchText)}`;
    }
  };

  const handleButtonClick = () => {
    window.location.href = `/courses?search=${encodeURIComponent(searchText)}`;
  };

  return (
    <TextInput
      radius="xl"
      size="xl"
      placeholder="Search courses"
      rightSectionWidth={60}
      style={{ width: rem(500) }}
      leftSection={<IconSearch style={{ width: rem(24), height: rem(24) }} stroke={1.5} />}
      rightSection={
        <Link href={`/courses?search=${encodeURIComponent(searchText)}`}>
          <ActionIcon size={45} radius="xl" variant="filled" onClick={handleButtonClick}>
            <IconArrowRight style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
          </ActionIcon>
        </Link>
      }
      value={searchText}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}