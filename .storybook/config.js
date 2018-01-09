import { configure } from '@storybook/vue';
import './addons';

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
