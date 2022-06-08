<template>
  <div
    class="svg-pan-zoom__thumbnail"
    @wheel="zoomMain"
  >
    <SPZ
      class="thumbnail"
      :zoomEnabled="false"
      :panEnabled="false"
      :controlIconsEnabled="false"
      :dblClickZoomEnabled="false"
      :preventMouseEventsDefault="true"
      @created="thumbnailSPZcreated"
    >
      <slot />
    </SPZ>
    <Scope
      v-if="thumbnailSPZ"
      :mainSPZ="mainSPZ"
      :thumbnailSPZ="thumbnailSPZ"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Scope from './Scope.vue';
import SPZ from './SvgPanZoom.vue';

const props = defineProps<{
  mainSPZ: SvgPanZoom.Instance
}>()

const emit = defineEmits<{
  /**
   * Emitted when svg pan zoom thumbnail is created. Returns created instance
   */
  (event: 'thumbnailCreated', spz: SvgPanZoom.Instance): void
}>()

const thumbnailSPZ = ref<SvgPanZoom.Instance | null>(null)

const zoomMain = (e: WheelEvent) => {
  props.mainSPZ[e.deltaY < 0 ? 'zoomIn' : 'zoomOut']()
}

const thumbnailSPZcreated = (spz: SvgPanZoom.Instance) => {
  thumbnailSPZ.value = spz
  emit('thumbnailCreated', spz)
}
</script>

<style scoped>
.svg-pan-zoom__thumbnail {
  border: 1px solid black;
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 30%;
  height: 30%;
  margin: 3px;
  padding: 3px;
  overflow: hidden;
  z-index: 120;
}

.thumbnail {
  max-width: 100%;
  max-height: 100%;
}

.thumbnail svg {
  width: 100% !important;
  height: 100% !important;
}
</style>