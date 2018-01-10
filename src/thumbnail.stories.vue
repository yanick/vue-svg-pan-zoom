<template>
    <SvgPanZoom
        style="width: 300px; height: 500px; border:1px solid black; "
    >
        <RawTiger /> 
    </SvgPanZoom>
</template>


<script>
import { SvgPanZoom, SvgPanZoomThumbnail } from './index.vue';
import RawTiger from './RawTiger.vue';

export default {
    components: {  SvgPanZoom, RawTiger },
};

</script>
