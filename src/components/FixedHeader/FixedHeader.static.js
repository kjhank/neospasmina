import React from 'react';
import {
  Cart, House,
} from '@icons';

export const mainMenu = [
  {
    content: <House />,
    to: '/',
  },
  {
    content: 'Produkty',
    to: '/produkty/',
  },
  {
    content: 'Psycholog radzi',
    to: '/psycholog-radzi/',
  },
  {
    content: 'Kontakt',
    to: '/kontakt/',
  },
  {
    content: <Cart />,
    to: '/gdzie-kupic/',
  },
];
