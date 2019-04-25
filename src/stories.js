import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import SvgPanZoom from './index';

import RawTiger from './RawTiger.vue';

import LayerStory      from './layers.stories.vue';
import ThumbnailStory  from './thumbnail.stories.vue';
import SingleStory     from './single.stories.vue';
import Event           from './event.stories.vue';

const stories = storiesOf('SvgPanZoom', module)
.addDecorator( withKnobs )
.add('single inline SVG', () => SingleStory)
.add('event', () => Event )
.add( 'layers', () => LayerStory )
.add( 'thumbnail', () => ThumbnailStory )
;
