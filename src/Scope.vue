<template>
  <svg
    class="svg-pan-zoom__scope"
    @click="updateMainViewPan"
    @mousemove="updateMainViewPan"
    ref="scopeSVG"
  >
    <rect
      class="scope"
      :x="x"
      :y="y"
      :width="width"
      :height="height"
    />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, watch } from 'vue';

const props = defineProps<{
  mainSPZ: SvgPanZoom.Instance,
  thumbnailSPZ: SvgPanZoom.Instance
}>()

const x = ref(0)
const y = ref(0)
const width = ref(0)
const height = ref(0)

const scopeSVG = ref<SVGElement | null>(null)

const updateScope = () => {
  if( !props.mainSPZ || !props.thumbnailSPZ ) return;

  const mainPanX   = props.mainSPZ.getPan().x
  , mainPanY   = props.mainSPZ.getPan().y
  , mainWidth  = props.mainSPZ.getSizes().width
  , mainHeight = props.mainSPZ.getSizes().height
  , mainZoom   = props.mainSPZ.getSizes().realZoom
  , thumbPanX  = props.thumbnailSPZ.getPan().x
  , thumbPanY  = props.thumbnailSPZ.getPan().y
  , thumbZoom  = props.thumbnailSPZ.getSizes().realZoom;
  const thumByMainZoomRatio =  thumbZoom / mainZoom;
  const scopeX = thumbPanX - mainPanX * thumByMainZoomRatio;
  const scopeY = thumbPanY - mainPanY * thumByMainZoomRatio;
  const scopeWidth = mainWidth * thumByMainZoomRatio;
  const scopeHeight = mainHeight * thumByMainZoomRatio;
  x.value = scopeX + 1;
  y.value = scopeY + 1;
  width.value = scopeWidth - 2;
  height.value = scopeHeight - 2;
};

const updateMainViewPan = (evt : MouseEvent) => {
  if (evt.which == 0 && evt.button == 0 || !scopeSVG.value) return

  let main = props.mainSPZ;
  let thumb = props.thumbnailSPZ;
  let dim = scopeSVG.value.getBoundingClientRect()
  , mainWidth   = main.getSizes().width
  , mainHeight  = main.getSizes().height
  , mainZoom    = main.getSizes().realZoom
  , thumbWidth  = thumb.getSizes().width
  , thumbHeight = thumb.getSizes().height
  , thumbZoom =  thumb.getSizes().realZoom;
  var thumbPanX = evt.clientX - dim.left - thumbWidth / 2;
  var thumbPanY = evt.clientY - dim.top - thumbHeight / 2;
  var mainPanX = - thumbPanX * mainZoom / thumbZoom;
  var mainPanY = - thumbPanY * mainZoom / thumbZoom;
  main.pan({x:mainPanX, y:mainPanY});
}

onMounted(() => {
  updateScope()

  props.mainSPZ.setOnPan(() => updateScope())
  props.mainSPZ.setOnZoom(() => updateScope())
})
</script>

<style scoped>
.svg-pan-zoom__scope {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 120;
}

.scope {
  fill: red;
  fill-opacity: 0.1;
  stroke: red;
  stroke-width: 2px;
}
</style>