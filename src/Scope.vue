<template>
  <svg class="thumbViewClass" @click="updateMainViewPan" @mousemove="updateMainViewPan">
    <rect class="scope" :x="x" :y="y" :width="width" :height="height"/>
  </svg>
</template>

<style scoped>
  .scope {
    fill: red;
    fill-opacity: 0.1;
    stroke: red;
    stroke-width: 2px;
  }

  svg.thumbViewClass {
    border: 1px solid black;
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
</style>

<script>
  function updateScope(){
    let main = this.mainSPZ;
    let thumb = this.thumbnailSPZ;

    if( !main || !thumb ) return;

    let mainPanX   = main.getPan().x
    , mainPanY   = main.getPan().y
    , mainWidth  = main.getSizes().width
    , mainHeight = main.getSizes().height
    , mainZoom   = main.getSizes().realZoom
    , thumbPanX  = thumb.getPan().x
    , thumbPanY  = thumb.getPan().y
    , thumbZoom  = thumb.getSizes().realZoom;

    let thumByMainZoomRatio =  thumbZoom / mainZoom;

    let scopeX = thumbPanX - mainPanX * thumByMainZoomRatio;
    let scopeY = thumbPanY - mainPanY * thumByMainZoomRatio;
    let scopeWidth = mainWidth * thumByMainZoomRatio;
    let scopeHeight = mainHeight * thumByMainZoomRatio;

    this.x = scopeX + 1;
    this.y = scopeY + 1;
    this.width = scopeWidth - 2;
    this.height = scopeHeight - 2;
  };


  function updateMainViewPan(evt){
    if(evt.which == 0 && evt.button == 0){
      return false;
    }

    let main = this.mainSPZ;
    let thumb = this.thumbnailSPZ;

    let dim = this.$el.getBoundingClientRect()
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

  export default {
    props: [ 'bus', 'mainSPZ', 'thumbnailSPZ' ],
    data: () => ({ x: 0, y: 0, width: 0, height: 0 }),
    watch: {
      mainSPZ() { updateScope.call(this) },
      thumbnailSPZ() { updateScope.call(this) },
    },
    mounted() {
      const up = updateScope.bind(this);
      [ 'mainZoom', 'mainPan', 'thumbnailCreated' ].forEach( event => this.bus.$on( event, up ) );
      up();
    },
    methods: {
      updateMainViewPan
    }
  };
</script>
