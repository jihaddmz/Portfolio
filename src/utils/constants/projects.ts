import { Smartphone, Bot, BadgeDollarSign, ShoppingBag, Store, MessageCircleMore, FileJson } from 'lucide-react';

export const PROJECTS = [
  {
    title: 'AlloDolar',
    description: 'A mobile app, that lets users to charge credits/dolars for their phones',
    image: 'https://lh3.googleusercontent.com/XLpaVbUpXODc001nE3lIirGfjfghoURjOe50GCA0BkOLlV5n9HH2XI3WW7bDeJRQxRLE',
    technologies: ['Flutter', 'Dart', 'Sqlite', 'Firebase', 'OneSignal'],
    icon: BadgeDollarSign,
    link: 'https://onelink.to/72qq96'
  },
  {
    title: 'Draftogo',
    description: 'A mobile app in which you can generate various text content and images from just a simple input/prompt.',
    image: 'https://lh3.googleusercontent.com/1VmPtp7IbZPLvmzBo4bFW8EXYI-m6EYB7tfbUXQtYZAk_L2li-dxKh1xBVCD5SmLloVg',
    technologies: ['Kotlin, Jetpack Compose', 'Firebase', 'ChatGpt Api', 'Dall-E Api', 'SqliteDatabase'],
    icon: Bot,
    link: 'https://github.com/jihaddmz/AI-Writer-Android'
  },
  {
    title: 'Applicx',
    description: 'A mobile app for phone stores that makes them able to charge their customer\'s phone (credits, line validity, & services)',
    image: 'https://lh3.googleusercontent.com/W-HAX8SPDXLC40N7IlD3KYNVouzeF8cO9EcUKMmo-9yqzBp66sQOy3L-6YBGtIzu8Yc',
    technologies: ['Flutter', 'Dart', 'Sqlite', 'Firebase', 'OneSignal'],
    icon: Smartphone,
    link: 'https://onelink.to/hdr4gn'
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
    title: 'Maya\'s Handmade',
    description: 'A website for a business that sells crochet handmade products',
    image: 'https://github.com/user-attachments/assets/922fd9a1-4304-4287-bfd2-ce1b6a6696b3',
    technologies: ['React', 'Typescript', 'Supabase'],
    icon: Store,
    link: 'https://mayashandmade.netlify.app/'
  },
  {
    title: 'Avatech',
    description: 'A website for a business that sells interactive AI Avatar Chatbots',
    image: 'https://github.com/user-attachments/assets/dd8c7f23-a269-43a7-83f6-06307ab1153e',
    technologies: ['React', 'Typescript', 'Supabase'],
    icon: MessageCircleMore,
    link: 'https://avatech.site/'
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