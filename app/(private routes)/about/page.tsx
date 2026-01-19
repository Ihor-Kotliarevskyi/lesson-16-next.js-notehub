import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'About page',
};

function About() {
  redirect('/');
  return null;
};

export default About;
