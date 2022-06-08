import tigerIcon from './tiger-icon'

export const ThumbnailTemplate = `
<SvgPanZoom
  v-bind="args"
  style="width: 300px; height: 300px; border: 1px solid blue;"
>
  <template #default>
    ${tigerIcon}
  </template>
  <template #thumbnail>
    ${tigerIcon}
  </template>
</SvgPanZoom>
`

export default `
<SvgPanZoom
  v-bind="args"
  style="width: 300px; height: 300px; border: 1px solid blue;"
>
  ${tigerIcon}
</SvgPanZoom>
`