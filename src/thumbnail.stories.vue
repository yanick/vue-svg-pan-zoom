<template>
    <SvgPanZoom
        style="width: 880px; height: 720px; border:1px solid black; "
    >
        <RawTiger /> 
        <RawTiger slot="thumbnail" class="thumbViewClass" 
            style="position: absolute; width: 20%; height: 30% bottom: 5px;
            left: 5px; margin: 3px; padding: 3px;"
            /> 
    </SvgPanZoom>
</template>


<script>
import { SvgPanZoom, SvgPanZoomThumbnail } from './index';
import RawTiger from './RawTiger.vue';


export default {
    components: {  SvgPanZoom, RawTiger, SvgPanZoomThumbnail },
};

</script>
