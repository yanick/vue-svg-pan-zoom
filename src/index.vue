<template>
    <div>
        <slot />
        <SvgPanZoomThumbnail v-if="has_thumbnail">
            <slot name="thumbnail" />
        </SvgPanZoomThumbnail>
    </div>
</template>

<script>
import svg_pan_zoom from 'svg-pan-zoom';

import SvgPanZoomThumbnail from './SvgPanZoomThumbnail.vue';
export { SvgPanZoomThumbnail } from './SvgPanZoomThumbnail.vue';

import thumbnailViewer from './thumbnailViewer';

let props = {
        'zoomEnabled':               { type: Boolean, default: true },
        'controlIconsEnabled':       { type: Boolean, default: false },
        'fit':                       { type: Boolean, default: true },
        'panEnabled':                { type: Boolean, default: true },
        'dblClickZoomEnabled':       { type: Boolean, default: true },
        'mouseWheelZoomEnabled':     { type: Boolean, default: true },
        'preventMouseEventsDefault': { type: Boolean, default: true },
        'contain':                   { type: Boolean, default: false },
        'center':                    { type: Boolean, default: true },
        viewportSelector:            { default: '.svg-pan-zoom_viewport' }
        , zoomScaleSensitivity:      { default: 0.2}
        , minZoom:                   { default: 0.5}
        , maxZoom:                   { default: 10}
        , refreshRate:               { default: 'auto'}
        , beforeZoom:                { }
        , onZoom:                    { }
        , beforePan:                 { }
        , onPan:                     { }
        , onUpdatedCTM:              { }
        , customEventsHandler:   { }
        , eventsListenerElement: {  }
};

export const SvgPanZoom = {
    props,
    components: { SvgPanZoomThumbnail },
    computed: {
        has_thumbnail: function() { return this.$slots.thumbnail }
    },
    mounted: function() {
        let options = {};

        Object.keys(props).filter( k => this[k] !== undefined ).forEach( k => options[k] = this[k] );
        console.log(options);

        if( this.has_thumbnail ) {
            console.log( this.$slots.default[0].elm.id );
            console.log( this.$slots.thumbnail );
            let svgpanzoom = thumbnailViewer({
                mainViewId: this.$slots.default[0].elm.id,
                thumbViewId: 'thumbView',
            });
            console.log(svgpanzoom);
        }
        else {
            let svgpanzoom = svg_pan_zoom( this.$slots.default[0].elm , options );
        }
//        svg_pan_zoom( '#mainView', options );
    },
};

export default SvgPanZoom;

</script>
