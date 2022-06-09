<template>
  <div class="svg-pan-zoom">
    <div class="svg-pan-zoom__default" ref="defaultSlot">
      <slot />
    </div>
    <SvgPanZoomThumbnail
      v-if="!!$slots.thumbnail && !!spz"
      @thumbnailCreated="$emit('thumbnailCreated', $event)"
      :mainSPZ="spz"
    >
      <slot name="thumbnail" />
    </SvgPanZoomThumbnail>
  </div>
</template>

<script lang="ts" setup>
import svg_pan_zoom from 'svg-pan-zoom';
import SvgPanZoomThumbnail from './SvgPanZoomThumbnail.vue';
import { defineProps, onMounted, onUnmounted, PropType, ref, RendererNode, useSlots, VNode } from 'vue';

export interface Props {
  /**
   * can be querySelector string or SVGElement (default enabled)
   * @type {string|HTMLElement|SVGElement}
   */
  viewportSelector?: string|HTMLElement|SVGElement;
  /**
   * enable or disable panning (default enabled)
   * @type {boolean}
   */
  panEnabled?: boolean;
  /**
   * insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
   * @type {boolean}
   */
  controlIconsEnabled?: boolean;
  /**
   * enable or disable zooming (default enabled)
   * @type {boolean}
   */
  zoomEnabled?: boolean;
  /**
   * enable or disable zooming by double clicking (default enabled)
   * @type {boolean}
   */
  dblClickZoomEnabled?: boolean;
  /**
   * enable or disable zooming by scrolling (default enabled)
   * @type {boolean}
   */
  mouseWheelZoomEnabled?: boolean;
  /**
   * prevent mouse events to bubble up (default enabled)
   * @type {boolean}
   */
  preventMouseEventsDefault?: boolean;
  zoomScaleSensitivity?: number; // Zoom sensitivity (Default 0.2)
  minZoom?: number; // Minimum Zoom level (Default 0.5)
  maxZoom?: number; // Maximum Zoom level  (Default 10)
  fit?: boolean; // enable or disable viewport fit in SVG (default true)
  contain?: boolean; // (default true)
  center?: boolean; // enable or disable viewport centering in SVG (default true)
  refreshRate?: number | "auto"; // (default 'auto')
}

export interface Events {
  (event: 'beforeZoom', oldScale: number, newScale: number): void;
  (event: 'onZoom', newScale: number): void;
  (event: 'beforePan', oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point): void;
  (event: 'onPan', newPan: SvgPanZoom.Point): void;
  (event: 'onUpdatedCTM', newCTM: SVGMatrix): void;
  /**
   * Emitted when svg pan zoom instance is created. Returns created instance
   */
  (event: 'created', spz: SvgPanZoom.Instance): void
  /**
   * Emitted when svg pan zoom thumbnail is created. Returns created instance
   */
  (event: 'thumbnailCreated', spz: SvgPanZoom.Instance): void
}

const props = defineProps({
  viewportSelector: {
    type: [String, Object] as PropType<string|HTMLElement|SVGElement>,
    default: '.svg-pan-zoom'
  },
  panEnabled: {
    type: Boolean,
    default: true
  },
  controlIconsEnabled: {
    type: Boolean,
    default: false
  },
  zoomEnabled: {
    type: Boolean,
    default: true
  },
  dblClickZoomEnabled: {
    type: Boolean,
    default: true
  },
  mouseWheelZoomEnabled: {
    type: Boolean,
    default: true
  },
  preventMouseEventsDefault: {
    type: Boolean,
    default: true
  },
  zoomScaleSensitivity: {
    type: Number,
    default: 0.2
  },
  minZoom: {
    type: Number,
    default: 0.5
  },
  maxZoom: {
    type: Number,
    default: 10
  },
  fit: {
    type: Boolean,
    default: true
  },
  contain: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: true
  },
  refreshRate: {
    type: [Number, String] as PropType<Number | 'auto'>,
    default: 'auto'
  }
})
const emit = defineEmits<Events>()

const defaultSlot = ref<HTMLElement | null>(null)

const slots = useSlots()
const options = ref<SvgPanZoom.Options>({})

Object.keys(props)
  .filter(k => props[k as keyof Props] !== undefined)
  .forEach(k => {
    options.value = {
      ...options.value,
      [k]: props[k as keyof Props]
    }
  })

const spz = ref<SvgPanZoom.Instance | null>(null)

const getSvgSelector = (instance: Element): Element | false => {
  if (instance && instance.tagName === 'svg') return instance
  const children = Array.from(instance.children)
  if (!children) return false

  for (const child of children) {
    const selector = getSvgSelector(child)

    if (selector) return selector
  }

  return false
}

onMounted(() => {
  options.value.onZoom = (newScale: number) => emit('onZoom', newScale)
  options.value.onPan = (newPan: SvgPanZoom.Point) => emit('onPan', newPan)

  if (!(slots['default'] && defaultSlot.value)) return
  const selector = getSvgSelector(defaultSlot.value)

  if (!selector) return
  spz.value = svg_pan_zoom(selector as HTMLElement, options.value);

  emit('created', spz.value)
})
</script>

<style>
.svg-pan-zoom {
  position: relative;
}

.svg-pan-zoom__default {
  width: 100%;
  height: 100%;
}
</style>