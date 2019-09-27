<template>
  <div v-on:wheel="zoomMain">
    <SPZ class="thumbnail"
      :zoomEnabled="false"
      :panEnabled="false"
      :controlIconsEnabled="false"
      :dblClickZoomEnabled="false"
      :preventMouseEventsDefault="true"
      v-on:svgpanzoom="thumbnailSPZcreated"
    >
      <slot class="thumbnail" />
    </SPZ>
    <Scope :bus="bus" :mainSPZ="mainSPZ" :thumbnailSPZ="thumbnailSPZ" />
  </div>
</template>

<style>
  .thumbView {
    z-index: 110;
    background: white;
  }

  .thumbnail {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 20%;
    height: 30%;
    margin: 3px;
    padding: 3px;
    overflow: hidden;
    z-index: 120;
  }

  .thumbnail svg {
    width: 100% !important;
    height: 100% !important;
  }
</style>

<script>
import Scope from './Scope.vue';

export default {
  components: { Scope },
  props: [ 'onThumbnailShown', 'mainSPZ', 'bus' ],
  data: () => ({ thumbnailSPZ: null }),
  beforeCreate: function () {
    this.$options.components.SPZ = require('./SvgPanZoom.vue').default
  },
  methods: {
    zoomMain(evt) {
      this.mainSPZ[ event.deltaY < 0 ? 'zoomIn' : 'zoomOut' ]();
    },
    thumbnailSPZcreated(spz) {
      this.thumbnailSPZ = spz;
      this.bus.$emit( 'thumbnailCreated', spz );
    },
  },
  mounted() {
    if( this.onThumbnailShown ) {
      this.onThumbnailShown();
    }
  }
};
</script>
