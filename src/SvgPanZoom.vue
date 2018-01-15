<template>
    <div>
        <slot />
    </div>
</template>


<script>
import svg_pan_zoom from 'svg-pan-zoom';

import props from './props';

export default {
    props,
    computed: {
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
        svg_pan_zoom( this.$slots.default[0].elm , this.options );
    },
};

</script>
