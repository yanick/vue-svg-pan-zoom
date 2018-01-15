<template>
    <SvgPanZoom
       :controlIconsEnabled="true" 
       :minZoom="0.1"
       :eventsListenerElement="querySelector"
        style="width: 300px; height: 500px; border:1px solid black; "
        >
      <svg id="svg-1" xmlns="http://www.w3.org/2000/svg" style="display: inline; width: inherit; min-width: inherit; max-width: inherit; height: inherit; min-height: inherit; max-height: inherit;" version="1.1">
        <defs>
          <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(56,121,217);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(138,192,7);stop-opacity:1" />
          </linearGradient>
        </defs>
        <g stroke="#000">
          <rect x="0" y="400" width="100" height="100" fill="yellow"/>
        </g>
        <g fill="none" class="svg-pan-zoom_viewport">
          <g stroke="#000" fill="#FFF">
            <rect x="5" y="5" width="240" height="240" fill="url(#linear-gradient)"/>
            <path d="M 5 5  L 245 245 Z"/>
          </g>
        </g>
        <g stroke="#000">
          <rect x="0" y="0" width="100" height="100" fill="pink"/>
        </g>
      </svg>
    </SvgPanZoom>
</template>


<script>
import SvgPanZoom from './index';

export default {
    computed: {
        querySelector: function() {
            return document.querySelector('#svg-1 .svg-pan-zoom_viewport')
        },
    },
    components: {  SvgPanZoom },
};

</script>
