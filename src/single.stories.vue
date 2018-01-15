<template>
    <SvgPanZoom style="width: 500px; height: 500px; border:1px solid black;"
        :zoomEnabled="true"
        :controlIconsEnabled="true"
        :fit="false"
        :center="true"
    >
        <RawTiger />
    </SvgPanZoom>
</template>

<script>
import RawTiger from './RawTiger.vue';
import SvgPanZoom from './index';

export default {
    components: {  SvgPanZoom, RawTiger },
}
</script>
