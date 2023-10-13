// Import the main styles
import '../styles/main.scss';

import RevealOnScroll from './modules/RevealOnScroll';

let revealOnScroll = new RevealOnScroll();

if(module.hot) { module.hot.accept() }