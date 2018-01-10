<template>
 <div id="thumbViewContainer">
      <svg id="scopeContainer" class="thumbViewClass">
        <g>
          <rect id="scope" fill="red" fill-opacity="0.1" stroke="red" stroke-width="2px" x="0" y="0" width="0" height="0"/>
          <line id="line1" stroke="red" stroke-width="2px" x1="0" y1="0" x2="0" y2="0"/>
          <line id="line2" stroke="red" stroke-width="2px" x1="0" y1="0" x2="0" y2="0"/>
        </g>
      </svg>
      <slot />
</div>
</template>

<script>

export const SvgPanZoomThumbnail = {};
export default SvgPanZoomThumbnail;

</script>

<style>
    .thumbViewClass {
        border: 1px solid black;
        position: absolute;
        bottom: 5px;
        left: 5px;
        width: 20%;
        height: 30%;
        margin: 3px;
        padding: 3px;
        overflow: hidden;
      }

      #thumbView {
        z-index: 110;
        background: white;
      }

      #scopeContainer {
        z-index: 120;
      }
</style>
