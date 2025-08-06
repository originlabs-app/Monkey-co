/**
 * Constantes centralisées du Dashboard
 * Évite la duplication et facilite la maintenance
 */

import React from 'react';
import { Grid01_2 } from '@/icons/Grid01_2';
import { CoinsStacked01_1 } from '@/icons/CoinsStacked01_1';
import { Users01_2 } from '@/icons/Users01_2';
import { Folder2 } from '@/icons/Folder2';
import { BookOpen01_1 } from '@/icons/BookOpen01_1';

// Menu items avec icônes SVG
export const DASHBOARD_MENU_ITEMS = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: <Grid01_2 size={20} color="currentColor" />, 
    active: true 
  },
  { 
    id: 'staking', 
    label: 'Staking', 
    icon: <CoinsStacked01_1 size={20} color="currentColor" />
  },
  { 
    id: 'dao', 
    label: 'DAO', 
    icon: <Users01_2 size={20} color="currentColor" />
  },
  { 
    id: 'projects', 
    label: 'Projets', 
    icon: <Folder2 size={20} color="currentColor" />
  },
  { 
    id: 'documentation', 
    label: 'Documentation', 
    icon: <BookOpen01_1 size={20} color="currentColor" />
  },
];

// Community cards
export const COMMUNITY_CARDS = [
  {
    id: 'discord',
    title: 'Rejoignez-nous sur Discord',
    description: 'Au plus près de la communauté',
    icon: '💬',
    link: 'https://discord.gg/monkeyco',
  },
  {
    id: 'twitter',
    title: 'Suivez-nous sur X (Twitter)',
    description: 'Suivez l\'aventure au quotidien',
    icon: '🐦',
    link: 'https://twitter.com/monkeyco',
  },
  {
    id: 'share',
    title: 'Parler de Monkey-co autour de vous',
    description: 'Agrandissons ensemble la communauté',
    icon: '📢',
  },
  {
    id: 'idea',
    title: 'Une idée à partager ?',
    description: 'Toute idée est bonne à prendre',
    icon: '💡',
  },
];

// Project cards
export const PROJECT_CARDS = [
  {
    id: 'ecological',
    title: 'Vous avez un projet pour la transition écologique ?',
    description: 'Faites appel à Monkey-co pour obtenir un financement adapté et concrétiser votre initiative durable !',
    action: 'Demander un financement',
    bgColor: 'linear-gradient(135deg, #52705F 0%, #E67E22 100%)',
  },
  {
    id: 'funding',
    title: 'Vous connaissez un projet à financer ?',
    description: 'Recommandez-le à Monkey-co et recevez une récompense en devenant apporteur d\'affaires !',
    action: 'Devenir apporteur d\'affaires',
    bgColor: 'linear-gradient(135deg, #E67E22 0%, #52705F 100%)',
  },
];

// Chart colors (réutilise les couleurs du thème)
export const CHART_COLORS = {
  primary: '#52705F',
  secondary: '#E67E22',
  grid: '#e2e8f0',
  text: '#718096',
};