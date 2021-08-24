const logo_img = require('../../img/youtube-logo.png');
const logo_img_dark = require('../../img/youtube-logo-dark.png');

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
  logo: logo_img_dark,
};

const light = {
  id: 'light',
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'hsl(0, 0%, 95%)',
  primaryTextColor: 'black',
  secondaryTextColor: '#a0a0a0',
  navColor: 'lightcoral',
  logo: logo_img,
};

export const theme = { dark, light };
