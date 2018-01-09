import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import SvgPanZoom from './index.vue';

import RawTiger from './RawTiger.vue';

import LayerStory      from './layers.stories.vue';
import ThumbnailStory  from './thumbnail.stories.vue';

const stories = storiesOf('SvgPanZoom', module)
.addDecorator( withKnobs )
.add('single inline SVG', () => {
    return {
        components: {  SvgPanZoom, RawTiger },
        template: `
            <SvgPanZoom style="width: 500px; height: 500px; border:1px solid black;"
                :zoomEnabled="true"
                :controlIconsEnabled="true"
                :fit="false"
                :center="true"
            >
                <RawTiger />
            </SvgPanZoom>`
    }}
)
.add( 'layers', () => {
    return {
        components: { LayerStory },
        template: '<div><LayerStory /></div>'
    };
})
.add( 'thumbnail', () => {
    return {
        components: { ThumbnailStory },
        template: '<div><ThumbnailStory /></div>',
    };
});
