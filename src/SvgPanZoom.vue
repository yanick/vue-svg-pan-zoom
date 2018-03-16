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

import props from './props';

import thumbnailViewer from './thumbnailViewer';
import SvgPanZoomThumbnail from './SvgPanZoomThumbnail.vue';

export default {
    props,
    components: { SvgPanZoomThumbnail },
    computed: {
        has_thumbnail: function() { return this.$slots.thumbnail },
        options: function() {
            let options = {};

            const is_defined = k => this[k] !== undefined;

            Object.keys(props)
                .filter( is_defined )
                .forEach( k => options[k] = this[k] );

            return options;
        }
    },
    mounted: function() {
        let options = {};

        Object.keys(props).filter( k => this[k] !== undefined ).forEach( k => options[k] = this[k] );

        let svgpanzoom;
        if( this.has_thumbnail ) {
            this.$slots.thumbnail[0].elm.id  = 'thumbView';
            svgpanzoom = thumbnailViewer({
                mainViewId: this.$slots.default[0].elm.id,
                thumbViewId: 'thumbView',
            });
        }
        else {
            svgpanzoom = svg_pan_zoom( this.$slots.default[0].elm , options );
        }

        this.$emit( 'svgpanzoom', svgpanzoom );

        console.log(svgpanzoom);
    },
};

</script>
