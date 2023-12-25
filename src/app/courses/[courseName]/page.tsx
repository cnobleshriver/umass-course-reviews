 'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { CourseReview } from '@/components/CourseReview/CourseReview';

const CoursePage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const pathSegment = pathSegments.pop();
  const router = useRouter();

  // Check if pathSegment is valid
  if (!pathSegment) {
    router.push('/courses');
    return null;
  }
  const courseName = decodeURIComponent(pathSegment);

  return (
    <>
      <CourseReview courseName={courseName} />
    </>
  );
};

export default CoursePage;

