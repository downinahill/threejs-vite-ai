
 

import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#0000FF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './JerryGarcia.jpg',
  fullDecal: './JerryGarcia.jpg',
});

export default state;