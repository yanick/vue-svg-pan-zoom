# vue-svg-pan-zoom : Vue 3 component for SVG-Pan-Zoom

This module is a very simple [Vue 3](https://vuejs.org/) component providing the
goodness of [SVG-Pan-Zoom](https://github.com/ariutta/svg-pan-zoom) for SVG elements.

/!\ WARNING: the module is young, basic, probably will have its
API change with no notice, and likely to have
bugs. Use at your own risk, send patches for my eternal gratitude.

## Basic Use

In a Single File Component:

```vue
<template>
  <SvgPanZoom
    style="width: 500px; height: 500px; border:1px solid black;"
    :zoomEnabled="true"
    :controlIconsEnabled="true"
    :fit="false"
    :center="true"
  >
    <svg>
      <circle x="10" y="10" r="5" />
    </svg> </SvgPanZoom
  >`
</template>

<script>
import SvgPanZoom from "vue-svg-pan-zoom";

export default {
  components: { SvgPanZoom }
};
</script>
```

### Notes

Currently the `SvgPanZoom` component only works with a `svg` child -- `embed` won't work.

### Props

`SvgPanZoom` accepts as props most `svg-pan-zoom` options:

| attribute                 | default                  |
| ------------------------- | ------------------------ |
| zoomEnabled               | `true`                   |
| controlIconsEnabled       | `false`                  |
| fit                       | `true`                   |
| panEnabled                | `true`                   |
| dblClickZoomEnabled       | `true`                   |
| mouseWheelZoomEnabled     | `true`                   |
| preventMouseEventsDefault | `true`                   |
| contain                   | `false`                  |
| center                    | `true`                   |
| viewportSelector          | `.svg-pan-zoom_viewport` |
| zoomScaleSensitivity      | `0.2`                    |
| minZoom                   | `0.5`                    |
| maxZoom                   | `10`                     |
| refreshRate               | `auto`                   |
| customEventsHandler       | `null`                   |

| event                     | arguments                                                  |
| ------------------------- | ---------------------------------------------------------- |
| beforeZoom                | `(oldScale: number, newScale: number)`                     |
| onZoom                    | `(newScale: number)`                                       |
| beforePan                 | `(oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point)`     |
| onPan                     | `(newPan: SvgPanZoom.Point)`                               |
| onUpdatedCTM              | `(newCTM: SVGMatrix)`                                      |
| created                   | `(spz: SvgPanZoom.Instance)`                               |
| thumbnailCreated          | `(spz: SvgPanZoom.Instance)`                               |

### svgpanzoom object

To access the created `svgpanzoom` javascript object, you can
listen to the `created` event on the `SvgPanZoom` component.

```vue
<template>
  <div>
    <input type="button" value="center me" @click="center" />
    <SvgPanZoom
      style="width: 500px; height: 500px; border:1px solid black;"
      :fit="false"
      @created="registerSvgPanZoom"
    >
      <RawTiger />
    </SvgPanZoom>
  </div>
</template>

<script>
import RawTiger from "./RawTiger.vue";
import SvgPanZoom from "vue-svg-pan-zoom";

export default {
  components: { SvgPanZoom, RawTiger },
  data: () => ({ svgpanzoom: null }),
  methods: {
    registerSvgPanZoom(svgpanzoom) {
      this.svgpanzoom = svgpanzoom;
    },
    center() {
      if (!this.svgpanzoom) return;

      this.svgpanzoom.center();
    }
  }
};
</script>
```

## Use with thumbnails

In a Single File Component:

```vue
<template>
  <SvgPanZoom style="width: 300px; height: 500px; border:1px solid black; ">
    <template #default>
      <svg>...</svg>
    <template>
    <template #thumbnail>...</template>
  </SvgPanZoom>
</template>

<script>
import SvgPanZoom from "vue-svg-pan-zoom";

export default {
  components: { SvgPanZoom }
};
</script>
```

Just like the main `SvgPanZoom` component, the `thumbnail` slot needs to
be assigned to a `svg` node -- `embed` won't work.

### Storybook demos

To run [Storybook](https://github.com/storybooks/storybook) stories duplicating the demos of
the main `SVG-Pan-Zoom` project, do

```fish
$ yarn install --dev
$ yarn storybook
```
