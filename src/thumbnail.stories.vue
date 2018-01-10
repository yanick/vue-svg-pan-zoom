<template>
    <SvgPanZoom
        style="width: 300px; height: 500px; border:1px solid black; "
    >
        <RawTiger /> 
        <RawTiger slot="thumbnail" id="thumbView" class="thumbViewClass" 
            style="position: absolute; width: 20%; height: 30% bottom: 5px;
            left: 5px; margin: 3px; padding: 3px;"
            /> 
    </SvgPanZoom>
</template>


<script>
import { SvgPanZoom, SvgPanZoomThumbnail } from './index.vue';
import RawTiger from './RawTiger.vue';

console.log(SvgPanZoomThumbnail);

export default {
    components: {  SvgPanZoom, RawTiger, SvgPanZoomThumbnail },
};

</script>
