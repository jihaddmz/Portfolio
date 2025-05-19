import {Smartphone, Briefcase, BadgeDollarSign, ShoppingBag, Link, FileJson, Film} from 'lucide-react';

export const PROJECTS = [
  {
    title: 'AlloDolar',
    description: 'A mobile app, that lets users to charge credits/dolars for their phones',
    image: 'https://play-lh.googleusercontent.com/2e9G4miT5fXYukJQamaQc5eMMm5aMSoemUdIuafUSPYahnAHFaJvmg56Nm9PUYcB7nw8=w5120-h2880-rw',
    technologies: ['Flutter', 'Dart', 'Sqlite', 'Firebase', 'OneSignal'],
    icon: BadgeDollarSign,
    link: 'https://github.com/jihaddmz/lebussd'
  },
  {
    title: 'ClinicSync',
    description: 'A mobile app for doctors and clinics to manage their work paperless',
    image: '/clinicsync_image.png',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Sqlite'],
    icon: Briefcase,
    link: 'https://github.com/jihaddmz/clinicsync'
  },
  {
    title: 'Applicx',
    description: 'A mobile app for phone stores that makes them able to charge their customer\'s phone (credits, line validity, & services)',
    image: 'https://play-lh.googleusercontent.com/31tkyU-Xv5VT95tWbHzeHa8UcDY498L6dE5s_jH2lQGDoTJwLkBsUrtb2Mb2FNQuJg=w5120-h2880-rw',
    technologies: ['Flutter', 'Dart', 'Sqlite', 'Firebase', 'OneSignal'],
    icon: Smartphone,
    link: 'https://github.com/jihaddmz/Applicx'
  },
  {
    title: 'WatchIQ',
    description: 'A mobile app that simplifies the dilemma (what movies to watch!)',
    image: 'https://play-lh.googleusercontent.com/coe8D_xpzqv7PvPdHgXIx3O0Zy6BCiH0HgErnYxC2kTYYJnB-3vfu7A5L4Nb7IeDfVY=w5120-h2880-rw',
    technologies: ['React Native', 'Expo', 'Typescript', 'Redux', 'NativeWind', 'AppWrite'],
    icon: Film,
    link: 'https://github.com/jihaddmz/WatchIQ'
  },
  {
    title: 'OneAppUrl',
    description: 'A website for mobile developers to share one url that redirects users to their specific app store',
    image: '/oneappurl_image.png',
    technologies: ['React.js', 'Typescript', 'Redux', 'Taildwindcss', 'Spring Boot', 'Java', 'MongoDB', 'Docker', 'Github Actions'],
    icon: Link,
    link: 'https://oneappurl.netlify.app/'
  },
  {
    title: 'MovieFinder',
    description: 'A website for users to discover and search for movies to watch',
    image: '/moviefinder_image.png',
    technologies: ['React.js', 'Typescript', 'Redux', 'Taildwindcss', 'Spring Boot', 'Java', 'MySql', 'Docker', "AWS", 'Github Actions'],
    icon: Film,
    link: 'https://jz-moviefinder.netlify.app/'
  },
  {
    title: 'iStore',
    description: 'A demo website for an ecommerce iphone store',
    image: 'https://github.com/user-attachments/assets/c48b220b-c604-47bf-bcd4-b8eb98beb762',
    technologies: ['React', 'Typescript', 'Threejs', 'Supabase'],
    icon: ShoppingBag,
    link: 'https://ipstore.netlify.app/'
  },
  {
    title: 'Online CV',
    description: 'A website to showcase an online CV',
    image: 'https://github.com/user-attachments/assets/78fa9240-f647-46d4-b258-078a65f37379',
    technologies: ['React', 'Typescript', 'Javascript', 'Framer Motion'],
    icon: FileJson,
    link: 'https://jihadmz-demo-cv.netlify.app/'
  }
];