const logoImg = require('../../img/youtube-logo.png');
const logoImgDark = require('../../img/youtube-logo-dark.png');

const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
};

const dark = {
  id: 'dark',
  ...base,
  primaryBackgroundColor: '#262626',
  secondaryBackgroundColor: '#1A1A1A',
  primaryTextColor: 'white',
  secondaryTextColor: '#a0a0a0',
  navColor: 'indianred',
  navColorDark: '#b45151',
  logo: logoImgDark,
};

const light = {
  id: 'light',
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'hsl(0, 0%, 95%)',
  primaryTextColor: 'black',
  secondaryTextColor: '#a0a0a0',
  navColor: 'lightcoral',
  navColorDark: '#b45151',
  logo: logoImg,
};

export const theme = { dark, light };
