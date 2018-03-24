<template>
    <div>
        <input type="button" value="center me" @click="center" />
        <SvgPanZoom style="width: 500px; height: 500px; border:1px solid black;"
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true"
            @svgpanzoom="registerSvgPanZoom"
        >
            <RawTiger />
        </SvgPanZoom>
    </div>
</template>

<script>
import RawTiger from './RawTiger.vue';
import SvgPanZoom from './index';

export default {
    components: {  SvgPanZoom, RawTiger },
    data: () => ({ svgpanzoom: null }),
    methods: {
        registerSvgPanZoom(svgpanzoom) {
            this.svgpanzoom = svgpanzoom;
        },
        center() {
            if( !this.svgpanzoom ) return;

            this.svgpanzoom.center();
        }
    },
}
</script>
