export const SvgPanZoomApi = ( SvgPanZoomInstance ) => ({
  zoom: function( v ){
    SvgPanZoomInstance.zoom( v );
  },
  zoomBy: ( v ) => SvgPanZoomInstance.zoomBy( v )
});
