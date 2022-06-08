import SvgPanZoom, { Props } from './SvgPanZoom.vue';
import tigerTemplate, { ThumbnailTemplate as TigerThumbnailTemplate } from '../helpers/tiger-template';

export default {
  title: 'Svg Pan Zoom',
  component: SvgPanZoom,
  args: {},
  argTypes: {},
};

const Template = (args: Props) => ({
  components: { SvgPanZoom },
  setup() {
    return { args };
  },
  template: tigerTemplate
});

export const Default = Template.bind({});
Default.args = {};

export const controlIconsEnabled = Template.bind({});
controlIconsEnabled.args = {
  controlIconsEnabled: true
};

export const PanDisabled = Template.bind({});
PanDisabled.args = {
  panEnabled: false
};

export const ZoomDisabled = Template.bind({});
ZoomDisabled.args = {
  zoomEnabled: false,
  dblClickZoomEnabled: false,
  mouseWheelZoomEnabled: false
};

export const IncreasedZoomSensitivity = Template.bind({})
IncreasedZoomSensitivity.args = {
  zoomScaleSensitivity: 1
}

export const ConstrainedZoom = Template.bind({})
ConstrainedZoom.args = {
  minZoom: 1,
  maxZoom: 4
}

const ThumbnailTemplate = (args: Props) => ({
  components: { SvgPanZoom },
  setup() {
    return { args };
  },
  template: TigerThumbnailTemplate
});

export const Thumbnail = ThumbnailTemplate.bind({})
Thumbnail.args = {}
