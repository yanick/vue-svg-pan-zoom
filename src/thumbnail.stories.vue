<template>
    <SvgPanZoom
        style="width: 300px; height: 500px; border:1px solid black; "
    >
        <embed id="mainView" type="image/svg+xml" src="tiger.svg"/>
        <SvgPanZoomThumbnail>
            <embed id="mainView" type="image/svg+xml" src="tiger.svg"/>
        </SvgPanZoomThumbnail>
    </SvgPanZoom>
</template>


<script>
import { SvgPanZoom, SvgPanZoomThumbnail } from './index.vue';

export default {
    components: {  SvgPanZoom, SvgPanZoomThumbnail },
};

</script>
