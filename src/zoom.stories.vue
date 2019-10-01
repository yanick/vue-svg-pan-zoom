<template>
    <div>
        <div>Zoom factor: {{zoomFactor}}</div>
        <SvgPanZoom style="width: 500px; height: 500px; border:1px solid black;"
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true"
            @svgpanzoom="registerSvgPanZoom"
            :onZoom="zooming"
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
    data: () => ({ zoomFactor: 1 }),
    methods: {
        zooming(zoomFactor) {
            this.zoomFactor = zoomFactor[0];
        }
    },
};

</script>
