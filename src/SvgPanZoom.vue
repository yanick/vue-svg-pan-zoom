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
    mounted: function() {
        let options = {};

        Object.keys(props).filter( k => this[k] !== undefined ).forEach( k => options[k] = this[k] );
        console.log(options);
        svg_pan_zoom( this.$slots.default[0].elm , options );
    },
};

</script>
