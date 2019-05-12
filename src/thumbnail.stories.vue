<template>
    <SvgPanZoom
        style="width: 880px; height: 720px; border:1px solid black; "
        :onThumbnailShown="honk"
    >
        <RawTiger />
        <RawTiger slot="thumbnail" />
    </SvgPanZoom>
</template>


<script>
import { SvgPanZoom } from './index';
import RawTiger from './RawTiger.vue';


export default {
    components: {  SvgPanZoom, RawTiger },
    methods: {
        honk(){ console.log( "thumbnail was mounted!" ) }
    },
};

</script>
