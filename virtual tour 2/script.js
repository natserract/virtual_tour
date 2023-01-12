(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Player",
 "minHeight": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "thumbnailUrl": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_t.jpg",
 "partial": false,
 "label": "30.kelas 5A",
 "id": "panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
   "backwardYaw": -169.25,
   "yaw": -73.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_tcap0",
  "this.overlay_8384E926_9AA5_F22E_41B8_7EB529EB8485"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B01DDA5E_A4B1_70CD_41DE_1433DF8020F3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_t.jpg",
 "label": "37.Kelas 3A",
 "id": "panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B65AC718_A4B1_7055_41D0_CC75DD0AF25F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1A62B55_A4B1_70DF_41D8_7FC71D0C23B1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1135BF6_A4B1_77DD_41D7_B9F2608DE8D7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -164.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B63176AE_A4B1_704D_41D8_B057CCE4365E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_t.jpg",
 "label": "13",
 "id": "panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_t.jpg",
 "partial": false,
 "label": "19",
 "id": "panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3",
   "backwardYaw": -62.49,
   "yaw": -86.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
   "backwardYaw": -83.4,
   "yaw": -3.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_tcap0",
  "this.overlay_6507F7D6_72C8_4C32_41C8_24E911014A65",
  "this.overlay_6AC26409_72F8_4C1E_41D1_ECB2B64276E1",
  "this.overlay_6A3E9D98_72F8_BC3E_41D0_29FA9D15C8D7",
  "this.overlay_65A47A3E_72F8_4472_41C2_84E2BB45FA82"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0283A93_A4B1_705B_41D9_96947A6D7911",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B615463C_A4B1_704D_41D7_EDEC28964027",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -163.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6415732_A4B1_7055_41DD_412BE831D2E2",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7C51857_A4B1_70DC_41E3_96E8F754585D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0A0B9D4_A4B1_73DD_41E3_3EED686B4CAD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_t.jpg",
 "partial": false,
 "label": "38.pertigaan",
 "id": "panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
   "backwardYaw": -38.37,
   "yaw": -93.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49",
   "backwardYaw": -3.44,
   "yaw": -178.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_tcap0",
  "this.overlay_8D5BDD10_9EED_500E_41E0_59F86836095B",
  "this.overlay_8AD89636_9EED_5072_41D2_F1E3EEA4F8D1",
  "this.overlay_8A7E95FF_9EE5_D3F3_41DA_770180AE6770"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_t.jpg",
 "partial": false,
 "label": "22.kelas 4B",
 "id": "panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD",
   "backwardYaw": -83.86,
   "yaw": -68.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_tcap0",
  "this.overlay_9641B55D_99A5_F21D_41B8_BECB1D4193C4"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_t.jpg",
 "partial": false,
 "label": "34.Depan Lab",
 "id": "panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
   "backwardYaw": -170.99,
   "yaw": 85.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4",
   "backwardYaw": 0.44,
   "yaw": 173.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_tcap0",
  "this.overlay_8EFE4DFE_9EA5_73F2_41E2_490D9745BCAA",
  "this.overlay_8FB56BEA_9EA5_5012_41D9_709916819C09",
  "this.overlay_8EAE329E_9EA4_D035_41C0_F6BBB799D390"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1035C13_A4B1_7054_41D3_283ED33BA298",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B73588F2_A4B1_71D5_41D0_98E6BB50A21C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 157.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0584AA5_A4B1_707F_41D9_26D1BFAEE200",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "thumbnailUrl": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_t.jpg",
 "partial": false,
 "label": "20221223_165054_215",
 "id": "panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638",
   "backwardYaw": -178.24,
   "yaw": -3.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "backwardYaw": 136.41,
   "yaw": -106.52,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_tcap0",
  "this.overlay_68B471C6_72C8_C412_41B4_DF066CA28FAF",
  "this.overlay_68D01571_72C8_4C0E_41D5_6600EB158BF7"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_t.jpg",
 "partial": false,
 "label": "21.depan kelas 4B",
 "id": "panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D",
   "backwardYaw": -68.32,
   "yaw": -83.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "backwardYaw": 174.91,
   "yaw": 175.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_tcap0",
  "this.overlay_89090C53_99AE_F265_41A5_D3E7C7203F7F",
  "this.overlay_89A35581_99E6_D2E2_41DE_610C37D5BAB8",
  "this.overlay_8BCB3688_99EB_DEE2_41CC_7667AE73C230"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6E54600_A4B1_7035_41E0_B17DAB499833",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2112DEF_A4B1_73CB_41C2_CDE0B9BAD436",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_t.jpg",
 "partial": false,
 "label": "12",
 "id": "panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "backwardYaw": 94.32,
   "yaw": -161.75,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_tcap0",
  "this.overlay_678EEE7F_72D9_BCF2_41DA_B9795FF2D4B3"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_t.jpg",
 "partial": false,
 "label": "05",
 "id": "panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
   "backwardYaw": 170.26,
   "yaw": 16.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "backwardYaw": 177.26,
   "yaw": -78.08,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_tcap0",
  "this.overlay_60CDDEC1_7292_9940_41D4_618A8D7724B1",
  "this.overlay_60E3E93F_7295_98C0_41B0_D52B4BF9E90A"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -43.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1F14BB2_A4B1_7054_4173_C27FA4F4B8E9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7A2280A_A4B1_7035_41D3_5DA4DFC6BF96",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_t.jpg",
 "partial": false,
 "label": "42.Kelas 6B",
 "id": "panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF",
   "backwardYaw": 168.76,
   "yaw": -2.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_tcap0",
  "this.overlay_893BEDE0_9EA5_500D_41E3_7FC6F2AC4718"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0D279F0_A4B1_73D4_41E2_39A8C0724B61",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2E75DCF_A4B1_73CB_41C4_D9EB21055320",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_t.jpg",
 "label": "17",
 "id": "panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B013DA4C_A4B1_70CC_41D8_404498709C35",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.32,
  "class": "PanoramaCameraPosition",
  "pitch": 4.91
 },
 "id": "panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2D5BD8E_A4B1_704D_41C3_09D099000A1F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 27.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1B59B37_A4B1_705C_41C4_836290596B05",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA",
   "camera": "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
   "camera": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "camera": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "camera": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
   "camera": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "camera": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63",
   "camera": "this.panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "camera": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
   "camera": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "camera": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD",
   "camera": "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5",
   "camera": "this.panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "camera": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32",
   "camera": "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
   "camera": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7",
   "camera": "this.panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C",
   "camera": "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
   "camera": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3",
   "camera": "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD",
   "camera": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D",
   "camera": "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "camera": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2",
   "camera": "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE",
   "camera": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
   "camera": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
   "camera": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E",
   "camera": "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
   "camera": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7",
   "camera": "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
   "camera": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330",
   "camera": "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
   "camera": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F",
   "camera": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB",
   "camera": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC",
   "camera": "this.panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638",
   "camera": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
   "camera": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5",
   "camera": "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF",
   "camera": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED",
   "camera": "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_57AE3635_5C1C_F452_41D5_F36674F411E5",
   "camera": "this.panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5",
   "camera": "this.panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49",
   "camera": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85",
   "camera": "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C",
   "camera": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80",
   "camera": "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "media": "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF",
   "camera": "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "media": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9",
   "camera": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "media": "this.panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C",
   "camera": "this.panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 0)",
   "media": "this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4",
   "camera": "this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_t.jpg",
 "label": "ruang_lab",
 "id": "panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/f/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/u/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/b/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/d/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/l/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_0/r/0/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F",
   "backwardYaw": 173.46,
   "yaw": 0.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.overlay_AAA4E090_A471_5055_41D7_DCA76966B39D"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_t.jpg",
 "partial": false,
 "label": "27. depan guru putri",
 "id": "panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
   "backwardYaw": 83.97,
   "yaw": 155.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
   "backwardYaw": -172.2,
   "yaw": 55.23,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E",
   "backwardYaw": -56.04,
   "yaw": 133.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_tcap0",
  "this.overlay_8FD683E9_9AAA_5622_41DF_B83EFB0DD11A",
  "this.overlay_8F5258CC_9AAA_7262_41D5_35FBF80B7D1D",
  "this.overlay_8C05F454_9AAB_D262_41D0_9E4A7E76FAEF"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_t.jpg",
 "partial": false,
 "label": "29. depan kelas 5A",
 "id": "panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7",
   "backwardYaw": -73.5,
   "yaw": -169.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
   "backwardYaw": 155.87,
   "yaw": 83.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
   "backwardYaw": 169.37,
   "yaw": -85.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_tcap0",
  "this.overlay_82BB62D3_9AAE_3666_41DE_6D25A100DA78",
  "this.overlay_82F922D4_9AAE_7662_41D8_D2D892C5FCCB",
  "this.overlay_838F8E46_9AAB_CE6E_41B3_7112CF34A406"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1339C30_A4B1_7055_41AF_FFD70CF42C28",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57A24502_5C1C_B436_41D3_71600706AE9C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0C2EA09_A4B1_7037_41D4_65355E617DC3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 53.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B62046EE_A4B1_71CD_41E0_D231B1C1DC2C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_t.jpg",
 "partial": false,
 "label": "K guru putra",
 "id": "panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "backwardYaw": -12.68,
   "yaw": 102.43,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_tcap0",
  "this.overlay_6B5D7AEC_72F8_4416_41A8_EB793B1D0381"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA",
   "camera": "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
   "camera": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "camera": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "camera": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
   "camera": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "camera": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63",
   "camera": "this.panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "camera": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
   "camera": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "camera": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD",
   "camera": "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5",
   "camera": "this.panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "camera": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32",
   "camera": "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
   "camera": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7",
   "camera": "this.panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C",
   "camera": "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
   "camera": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3",
   "camera": "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD",
   "camera": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D",
   "camera": "this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "camera": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2",
   "camera": "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE",
   "camera": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
   "camera": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
   "camera": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E",
   "camera": "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
   "camera": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7",
   "camera": "this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
   "camera": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330",
   "camera": "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
   "camera": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F",
   "camera": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB",
   "camera": "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC",
   "camera": "this.panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "media": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638",
   "camera": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "media": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
   "camera": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "media": "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5",
   "camera": "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "media": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF",
   "camera": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "media": "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED",
   "camera": "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "media": "this.panorama_57AE3635_5C1C_F452_41D5_F36674F411E5",
   "camera": "this.panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "media": "this.panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5",
   "camera": "this.panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "media": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49",
   "camera": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "media": "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85",
   "camera": "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "media": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C",
   "camera": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "media": "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80",
   "camera": "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "media": "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF",
   "camera": "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "media": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9",
   "camera": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "media": "this.panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C",
   "camera": "this.panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 0)",
   "media": "this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4",
   "camera": "this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.18,
  "class": "PanoramaCameraPosition",
  "pitch": -10.64
 },
 "id": "panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B76B097C_A4B1_70CC_41D6_F0D894D4123B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0B019B5_A4B1_705F_41D7_43C124105170",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B016156A_A4B1_70CA_41C4_C711F2CEB523",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6753764_A4B1_70FD_41CB_BE6A6EB40205",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0FBD521_A4B1_7074_41DA_4BE4BD7D375F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_t.jpg",
 "partial": false,
 "label": "28.K guru putri",
 "id": "panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
   "backwardYaw": 133.36,
   "yaw": -56.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_tcap0",
  "this.overlay_8DCA8E93_9AAE_4EE6_41D5_A118DB2A1342"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_t.jpg",
 "partial": false,
 "label": "32. .kelas 3B",
 "id": "panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
   "backwardYaw": -88.36,
   "yaw": 176.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_tcap0",
  "this.overlay_8192641D_9AE6_D21D_41CD_DFC0B619DE18"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7ED78A4_A4B1_707D_41D7_4C8617A7521F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B62DB704_A4B1_703D_41D1_FE2E4C45834F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_t.jpg",
 "partial": false,
 "label": "39.depan kelas 6a",
 "id": "panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638",
   "backwardYaw": -93.57,
   "yaw": -38.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5",
   "backwardYaw": 2.66,
   "yaw": 152.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF",
   "backwardYaw": 70.57,
   "yaw": -152.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_tcap0",
  "this.overlay_8A011509_9EA5_B01E_41D4_E3CB028811E9",
  "this.overlay_8A3BD05D_9EA4_D036_41C4_F266EC75FA3E",
  "this.overlay_88E2CE96_9EA4_B035_41D6_50930DFB89F1"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_t.jpg",
 "partial": false,
 "label": "14",
 "id": "panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "backwardYaw": -6.85,
   "yaw": -126.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF",
   "backwardYaw": 105.09,
   "yaw": -52.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
   "backwardYaw": 61.8,
   "yaw": -52.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
   "backwardYaw": 61.8,
   "yaw": -39.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32",
   "backwardYaw": -88.33,
   "yaw": -4.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_tcap0",
  "this.overlay_67EEC072_72D8_44F2_41D0_20D2863A064B",
  "this.overlay_67C98667_72C8_4C12_41B2_23BD20F48CF4",
  "this.overlay_67F7B14C_72C8_C416_41D2_329EF8F98530",
  "this.overlay_67DE49B7_72C9_C472_41C3_3F079702942C",
  "this.overlay_67A3C34C_72C8_C416_41D1_2B2B81A9653B",
  "this.overlay_83A66947_9F7F_7012_41C5_9DB48588BFE8"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7AE581F_A4B1_704B_41BD_EF9101504608",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7D95839_A4B1_7057_41D1_B3778E985F4E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_t.jpg",
 "partial": false,
 "label": "Kelas 2A",
 "id": "panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_tcap0",
  "this.overlay_8685E00D_9EAC_B016_41DD_67325A9C8980"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B185BB24_A4B1_707D_41D1_A0F9DC32A016",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B64E574F_A4B1_70CC_4181_619FDE35F5C9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_t.jpg",
 "partial": false,
 "label": "16",
 "id": "panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C",
   "backwardYaw": 103.96,
   "yaw": 152.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
   "backwardYaw": -3.07,
   "yaw": -83.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_tcap0",
  "this.overlay_64D37EB6_72C8_BC72_41D0_74894120D30B",
  "this.overlay_648E2BC7_72C9_C412_41A7_D38D1E129730"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_t.jpg",
 "partial": false,
 "label": "20.kelas 5B",
 "id": "panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3",
   "backwardYaw": -86.9,
   "yaw": -62.49,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_tcap0",
  "this.overlay_6A6E980F_72F8_4412_41C8_A2BE39BE7ADC"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_t.jpg",
 "partial": false,
 "label": "02",
 "id": "panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA",
   "backwardYaw": 175.79,
   "yaw": 1.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "backwardYaw": 177.26,
   "yaw": 176.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "backwardYaw": 177.26,
   "yaw": 176.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
   "backwardYaw": 177.26,
   "yaw": 1.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_tcap0",
  "this.overlay_616CF264_7295_A940_41D2_4A6C61912342",
  "this.overlay_66D19158_7296_AB40_41CA_FA7824305771"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 157.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B049FAC0_A4B1_7035_41D6_E58B5796EBE1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -43.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1D79B66_A4B1_70FD_41E3_F3EAC3E2EAE3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -113.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7214903_A4B1_703B_41B1_F4A409BE1136",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0F21A1B_A4B1_704B_41DE_672AB9A1FCA6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6044674_A4B1_70DD_41D9_8A658D872C1D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B003657B_A4B1_70CB_4171_3D40CAE913C6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2BB5D5F_A4B1_70CB_41C1_1B78B785A6B9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1942B0A_A4B1_7035_41C4_AF90407B2296",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2994D26_A4B1_707D_41E1_4756105D9C02",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B668D791_A4B1_7057_41E3_DFB03C3C915E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2A57D73_A4B1_70DB_41AB_8DAE8F6EFCC7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 19.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B602B663_A4B1_70F4_41B7_703B35044D8A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1C7CB88_A4B1_7035_41E0_F4BDC66365B8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B795D7B1_A4B1_7057_41B0_578754502980",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B78257C4_A4B1_703D_41C4_97828877BE90",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_t.jpg",
 "partial": false,
 "label": "06",
 "id": "panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "backwardYaw": 16.5,
   "yaw": 170.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "backwardYaw": -11.87,
   "yaw": -11.52,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_tcap0",
  "this.overlay_6124BDD1_729D_9B40_41A2_DF3646644105",
  "this.overlay_6140FCB7_729F_B9C0_41AD_E2DD016D2AD7"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B14F1CB7_A4B1_705B_41CE_E0F1808A19DE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B06B9AF2_A4B1_71D5_41CE_99903F359FAD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_t.jpg",
 "partial": false,
 "label": "25.perpustakaan",
 "id": "panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
   "backwardYaw": 66.68,
   "yaw": -4.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "backwardYaw": -2.98,
   "yaw": -164.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_tcap0",
  "this.overlay_8E4B1DF7_9A7A_322D_418D_F3A024BB4584",
  "this.overlay_8F283F5A_9AAA_CE67_4183_06BF252A29F3"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B09BE992_A4B1_7054_41C1_6782E59C0276",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 176.32,
    "targetPitch": 4.91,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7B457ED_A4B1_7FCC_41D5_26F9711D692B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -46.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7E31892_A4B1_7055_41D7_0EF9E00D27EB",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1793CDA_A4B1_71D5_41CD_4F46A7BEAE8A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_t.jpg",
 "partial": false,
 "label": "40.kelas 6A",
 "id": "panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
   "backwardYaw": 152.8,
   "yaw": 2.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_tcap0",
  "this.overlay_8893425C_9EBD_B035_416E_9DEA85014596"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B70B78D7_A4B1_71DC_41DE_8872346CEA72",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_t.jpg",
 "partial": false,
 "label": "31. Depan kelas  3B",
 "id": "panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
   "backwardYaw": 6.14,
   "yaw": -6.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66",
   "backwardYaw": -85.39,
   "yaw": 169.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330",
   "backwardYaw": 176.71,
   "yaw": -88.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_tcap0",
  "this.overlay_801EBBE1_9AA6_7625_41DE_8FD006309E4B",
  "this.overlay_807A8733_9AA6_FE25_41DE_DD49098B5D2B",
  "this.overlay_818D0A71_9ADA_3628_41AA_20611BD061CA"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_t.jpg",
 "partial": false,
 "label": "18",
 "id": "panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
   "backwardYaw": 152.37,
   "yaw": 103.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_tcap0",
  "this.overlay_659A86AB_72C8_4C12_41D1_4D52C01C7E47"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_t.jpg",
 "partial": false,
 "label": "09",
 "id": "panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
   "backwardYaw": 140.47,
   "yaw": 172.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80",
   "backwardYaw": 102.43,
   "yaw": -12.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "backwardYaw": 125.55,
   "yaw": -85.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_tcap0",
  "this.overlay_63DE9DA6_72C8_DC12_41C4_129475A3DD44",
  "this.overlay_63BF56F9_72C9_CDFE_41D3_9D222385EBF0",
  "this.overlay_6232ABD8_72C8_443E_41C2_7FFCD392A2C5"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0EFB54F_A4B1_70CB_41DA_0CF7A8A69A51",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B03FFA83_A4B1_703B_41DE_F301C2AB5AE0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_t.jpg",
 "partial": false,
 "label": "11",
 "id": "panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
   "backwardYaw": 15.77,
   "yaw": 136.63,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C",
   "backwardYaw": 1.44,
   "yaw": -160.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD",
   "backwardYaw": -161.75,
   "yaw": 94.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "backwardYaw": -126.71,
   "yaw": -6.85,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_tcap0",
  "this.overlay_6156A5E4_72D8_4C16_4197_F8B26746FBAE",
  "this.overlay_66C50B6E_72D9_C412_41CE_823CDB553DBB",
  "this.overlay_664C7C2C_72D8_5C16_41B3_CC69C3739475",
  "this.overlay_6642AD10_72D8_5C0E_41D3_50E384484602"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.5,
  "class": "PanoramaCameraPosition",
  "pitch": -9.41
 },
 "id": "panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0E24533_A4B1_705B_41E4_27D9E20F5C84",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B7F70874_A4B1_70DD_41B8_E04F48D6FD60",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6EFE618_A4B1_7055_41C3_BBCBB91FDA79",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_t.jpg",
 "partial": false,
 "label": "Depan kelas 2A",
 "id": "panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85",
   "backwardYaw": -175.29,
   "yaw": -176.52,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "backwardYaw": -160.38,
   "yaw": 1.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_tcap0",
  "this.overlay_87FA5AC7_9EAD_5012_41D2_56A861335E90",
  "this.overlay_87AEAE9E_9EAD_D035_41E0_90345A9EFBB9",
  "this.overlay_877B3C78_9EAD_50FE_41E3_97CE750BA40D"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B63E36DB_A4B1_71CB_41DD_09F37E4041D0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_t.jpg",
 "partial": false,
 "label": "24.kelas 4A",
 "id": "panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
   "backwardYaw": 79.5,
   "yaw": -67.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_tcap0",
  "this.overlay_89FF621F_9A65_D61D_41AC_C413D846D55C"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B618F64E_A4B1_70CD_41E4_413FD63DC2E0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.23,
  "class": "PanoramaCameraPosition",
  "pitch": -6.95
 },
 "id": "panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B613762A_A4B1_7075_41BC_8657AB5ABCD0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B753F91C_A4B1_704C_4198_AB54350BF206",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_t.jpg",
 "partial": false,
 "label": "01",
 "id": "panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
   "backwardYaw": 1.55,
   "yaw": 175.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
   "backwardYaw": 1.55,
   "yaw": 175.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0",
  "this.overlay_616330D8_7293_A940_41B7_2FA6AB14C741"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_t.jpg",
 "partial": false,
 "label": "04",
 "id": "panorama_57D1DCB2_5C1D_B456_41A2_421E04055889",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "backwardYaw": -78.08,
   "yaw": 177.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171",
   "backwardYaw": -78.08,
   "yaw": 2.13,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8",
   "backwardYaw": 176.68,
   "yaw": 177.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_tcap0",
  "this.overlay_604AC339_726D_A8C0_41D8_BB9524D347FD",
  "this.overlay_6305964B_7293_A940_41B2_97894D9F3D5D"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B15F3C8E_A4B1_704D_41E3_1CE84E46B3EA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1694D01_A4B1_7037_41CF_D027FE138AF0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2F6DDB7_A4B1_705B_41C6_EA1301F588AA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B71938B9_A4B1_7057_41DF_2D29F2B57203",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B13D3C50_A4B1_70D5_41D3_7067BC5AD65F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B63456C8_A4B1_7035_41C5_5D6F0937A10C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B75EA92F_A4B1_704C_41E0_7E5DCAC570EE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_t.jpg",
 "partial": false,
 "label": "15",
 "id": "panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "backwardYaw": -4.27,
   "yaw": -88.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_tcap0",
  "this.overlay_648B3AE7_72C8_4412_41D4_FECD24AF8FC8",
  "this.overlay_64BF1FBF_72C8_5C72_41DB_44CBD8E485FF"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B28B1D44_A4B1_703C_41E3_625F0BB2055C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B77A3961_A4B1_70F7_41D1_BAB218026F57",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_t.jpg",
 "partial": false,
 "label": "07",
 "id": "panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "backwardYaw": -85.55,
   "yaw": 125.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "backwardYaw": -85.55,
   "yaw": 125.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9",
   "backwardYaw": -22.97,
   "yaw": 96.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9",
   "backwardYaw": -22.97,
   "yaw": 125.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
   "backwardYaw": -11.52,
   "yaw": -11.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C",
   "backwardYaw": -11.52,
   "yaw": -11.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49",
   "backwardYaw": -106.52,
   "yaw": 136.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C_tcap0",
  "this.overlay_65BD6281_72B5_A9C0_41C7_D6AB2BC6AB6C",
  "this.overlay_6556D3E1_72AF_EF40_41BF_8742F12AC89E",
  "this.overlay_65675559_72AD_AB40_41B5_3C08CB9E6D21",
  "this.overlay_7DAF102D_72B8_4416_41B6_18A21B9092EE"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B12D4C6C_A4B1_70CC_41DC_1CFE9B936199",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_t.jpg",
 "partial": false,
 "label": "Depan kelas 1B1A",
 "id": "panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C",
   "backwardYaw": -176.52,
   "yaw": -175.29,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_tcap0",
  "this.overlay_871856F2_9EA4_D1F2_41CB_7393A2BC4A6B",
  "this.overlay_84DC17D6_9EA5_7035_41C7_4CF023C37F78"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_t.jpg",
 "label": "08",
 "id": "panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_t.jpg",
 "partial": false,
 "label": "23 depan kelas 4A",
 "id": "panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD",
   "backwardYaw": 175.5,
   "yaw": 174.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2",
   "backwardYaw": -67.99,
   "yaw": 79.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE",
   "backwardYaw": -164.76,
   "yaw": -2.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_tcap0",
  "this.overlay_8B19905C_99FA_3263_41DE_DB6CA5840386",
  "this.overlay_8B284F27_99FB_CE2D_41DC_E0208BE2AFA8",
  "this.overlay_8DB03108_99BA_33E3_41DD_3EB91220E2EE"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0E3FA34_A4B1_705D_41BA_4DC65C03E6A4",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_t.jpg",
 "partial": false,
 "label": "26. tangga menuju lantai 2 sebelah",
 "id": "panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "backwardYaw": -52.87,
   "yaw": 61.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2",
   "backwardYaw": 55.23,
   "yaw": -172.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_tcap0",
  "this.overlay_8F326490_9AAA_32E3_41E0_76058AEAD609",
  "this.overlay_8F4CA3F8_9AAD_F622_41DB_C5AF023B7E0B"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_t.jpg",
 "partial": false,
 "label": "41.Depan kelas 6B",
 "id": "panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED",
   "backwardYaw": -2.24,
   "yaw": 168.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3",
   "backwardYaw": -152.5,
   "yaw": 70.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_tcap0",
  "this.overlay_880CB307_9EA4_B013_41C1_A609FF44B01C",
  "this.overlay_88015795_9EA7_7036_41DD_B368EC4897D2"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_t.jpg",
 "partial": false,
 "label": "10",
 "id": "panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "backwardYaw": 172.21,
   "yaw": 140.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0",
   "backwardYaw": 136.63,
   "yaw": 15.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_tcap0",
  "this.overlay_608D90B7_72C8_C472_41D4_6B6CA31EAA8D",
  "this.overlay_6099C2C3_72C8_C412_41D5_C1965E6B8CED",
  "this.overlay_606F841F_72C8_4C32_41CF_6723375EF37D",
  "this.overlay_60FEFCDC_72D8_7C36_41B6_3F8C50BFB611"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_t.jpg",
 "label": "20221223_164554_508",
 "id": "panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B1E1EBD8_A4B1_77D5_41CE_A9D1543E685B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_t.jpg",
 "label": "36. depan kelas 3A",
 "id": "panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B0CE550D_A4B1_704F_41DA_F4D8152F8BEB",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_t.jpg",
 "partial": false,
 "label": "33.Depan Toilet",
 "id": "panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F",
   "backwardYaw": 85.91,
   "yaw": -170.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE",
   "backwardYaw": -4.8,
   "yaw": 66.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A",
   "backwardYaw": -6.54,
   "yaw": 6.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_tcap0",
  "this.overlay_90CAB1B8_9EAC_D07E_41CE_AFA4F0C1B197",
  "this.overlay_9175D36A_9EAF_D012_41DE_ED53DF6CD620",
  "this.overlay_8EA333AA_9EAC_B01D_4177_9E7F863A37FE"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B60F5690_A4B1_7055_41CD_1A327FFFC164",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B6627778_A4B1_70D5_41BF_3662DF14BA15",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2C54DA4_A4B1_707D_41C7_61D6F7F555F4",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_t.jpg",
 "label": "20221223_164359_854",
 "id": "panorama_57AE3635_5C1C_F452_41D5_F36674F411E5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 123.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B2010E0F_A4B1_704B_41B7_9BE468B3D470",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -76.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B74F494B_A4B1_70CB_41DF_C69D3951553E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B78817D5_A4B1_7FDF_41B7_117CA0553CE6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_t.jpg",
 "partial": false,
 "label": "kantor yayasan",
 "id": "panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C",
   "backwardYaw": 96.07,
   "yaw": -22.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_tcap0",
  "this.overlay_6AF00FB8_7295_97C0_41D3_7CC3B4C3E7C2",
  "this.overlay_82404AFA_9F64_B1FD_41D5_7BAE69A53FCA"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B00D9A71_A4B1_70D7_41E4_3EA75B4229AD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_B079FADA_A4B1_71D4_41BC_58209F3E1E1E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_t.jpg",
 "partial": false,
 "label": "Kantor TU",
 "id": "panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7",
   "backwardYaw": -52.87,
   "yaw": 105.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "overlays": [
  "this.panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_tcap0",
  "this.overlay_823EE568_9F7B_B01D_41D9_2FB59E630A10"
 ],
 "vfov": 180,
 "pitch": 0,
 "hfov": 360
},
{
 "shadow": false,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "width": "100%",
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 300,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "height": "100%",
 "layout": "absolute"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 641,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "backgroundOpacity": 0,
 "width": 550,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 34,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66, this.camera_B7ED78A4_A4B1_707D_41D7_4C8617A7521F); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -73.5,
   "hfov": 4.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8384E926_9AA5_F22E_41B8_7EB529EB8485",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.95,
   "yaw": -73.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE6687_5C1C_543E_4192_2CF6BCBDAAAC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A20E9D_5C1C_7452_41C5_2BB7E102EAA5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -86.9,
   "hfov": 5.08,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_0_0.png",
      "width": 92,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6507F7D6_72C8_4C32_41C8_24E911014A65",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.08,
   "yaw": -86.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 179.59,
   "hfov": 4.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6AC26409_72F8_4C1E_41D1_ECB2B64276E1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.94,
   "yaw": 179.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3, this.camera_B1135BF6_A4B1_77DD_41D7_B9F2608DE8D7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -86.9,
   "hfov": 5.08,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_2_0.png",
      "width": 92,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A3E9D98_72F8_BC3E_41D0_29FA9D15C8D7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.08,
   "yaw": -86.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA, this.camera_B1035C13_A4B1_7054_41D3_283ED33BA298); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -3.07,
   "hfov": 5.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_3_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65A47A3E_72F8_4472_41C2_84E2BB45FA82",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.32,
   "yaw": -3.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49, this.camera_B0E3FA34_A4B1_705D_41BA_4DC65C03E6A4); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -178.24,
   "hfov": 3.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D5BDD10_9EED_500E_41E0_59F86836095B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.48,
   "yaw": -178.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 80.29,
   "hfov": 4.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8AD89636_9EED_5072_41D2_F1E3EEA4F8D1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 80.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3, this.camera_B0F21A1B_A4B1_704B_41DE_672AB9A1FCA6); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -93.57,
   "hfov": 5.08,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_2_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A7E95FF_9EE5_D3F3_41DA_770180AE6770",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.08,
   "yaw": -93.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD, this.camera_B12D4C6C_A4B1_70CC_41DC_1CFE9B936199); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -68.32,
   "hfov": 11.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0_HS_0_0.png",
      "width": 207,
      "height": 209,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9641B55D_99A5_F21D_41B8_BECB1D4193C4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.43,
   "yaw": -68.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4, this.camera_B2C54DA4_A4B1_707D_41C7_61D6F7F555F4); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 173.46,
   "hfov": 3.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8EFE4DFE_9EA5_73F2_41E2_490D9745BCAA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.9,
   "yaw": 173.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -87.13,
   "hfov": 4.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8FB56BEA_9EA5_5012_41D9_709916819C09",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -87.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A, this.camera_B2D5BD8E_A4B1_704D_41C3_09D099000A1F); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 85.91,
   "hfov": 4.37,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_2_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8EAE329E_9EA4_D035_41C0_F6BBB799D390",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 85.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "height": 58,
 "visible": false,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C, this.camera_B1F14BB2_A4B1_7054_4173_C27FA4F4B8E9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -106.52,
   "hfov": 4.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68B471C6_72C8_C412_41B4_DF066CA28FAF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.43,
   "yaw": -106.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638, this.camera_B1C7CB88_A4B1_7035_41E0_F4BDC66365B8); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -3.44,
   "hfov": 5.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68D01571_72C8_4C0E_41D5_6600EB158BF7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.3,
   "yaw": -3.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -4.09,
   "hfov": 12.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_0_0.png",
      "width": 221,
      "height": 228,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89090C53_99AE_F265_41A5_D3E7C7203F7F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 12.31,
   "yaw": -4.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009, this.camera_B60F5690_A4B1_7055_41CD_1A327FFFC164); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 175.5,
   "hfov": 5.15,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_1_0.png",
      "width": 110,
      "height": 111,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89A35581_99E6_D2E2_41DE_610C37D5BAB8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.15,
   "yaw": 175.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE010D_5C1C_AC33_41D6_DFD684DF316D, this.camera_B6044674_A4B1_70DD_41D9_8A658D872C1D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -83.86,
   "hfov": 9.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_2_0.png",
      "width": 221,
      "height": 228,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8BCB3688_99EB_DEE2_41CC_7667AE73C230",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -83.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0, this.camera_B2A57D73_A4B1_70DB_41AB_8DAE8F6EFCC7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -161.75,
   "hfov": 5.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0_HS_0_0.png",
      "width": 120,
      "height": 120,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_678EEE7F_72D9_BCF2_41DA_B9795FF2D4B3",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -161.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C, this.camera_B7A2280A_A4B1_7035_41D3_5DA4DFC6BF96); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 16.5,
   "hfov": 4.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0_HS_0_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60CDDEC1_7292_9940_41D4_618A8D7724B1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.51,
   "yaw": 16.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D1DCB2_5C1D_B456_41A2_421E04055889, this.camera_B7AE581F_A4B1_704B_41BD_EF9101504608); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -78.08,
   "hfov": 4.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0_HS_1_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60E3E93F_7295_98C0_41B0_D52B4BF9E90A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -78.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF, this.camera_B1339C30_A4B1_7055_41AF_FFD70CF42C28); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.24,
   "hfov": 5.03,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_893BEDE0_9EA5_500D_41E3_7FC6F2AC4718",
 "data": {
  "label": "Arrow Blue Left"
 },
 "maps": [
  {
   "hfov": 5.03,
   "yaw": -2.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DF0A13_5C1F_DC56_41D2_7260ED5A30F7_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F, this.camera_B0C2EA09_A4B1_7037_41D4_65355E617DC3); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.44,
   "hfov": 25.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_1_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_AAA4E090_A471_5055_41D7_DCA76966B39D",
 "data": {
  "label": "Arrow Blue Left"
 },
 "maps": [
  {
   "hfov": 25.3,
   "yaw": 0.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A94CF7C9_A477_F037_41D0_0AA571C74EE4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC, this.camera_B2112DEF_A4B1_73CB_41C2_CDE0B9BAD436); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 55.23,
   "hfov": 4.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8FD683E9_9AAA_5622_41DF_B83EFB0DD11A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.99,
   "yaw": 55.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66, this.camera_B2E75DCF_A4B1_73CB_41C4_D9EB21055320); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 155.87,
   "hfov": 4.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F5258CC_9AAA_7262_41D5_35FBF80B7D1D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 155.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E, this.camera_B2010E0F_A4B1_704B_41B7_9BE468B3D470); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 133.36,
   "hfov": 9.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_2_0.png",
      "width": 207,
      "height": 207,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C05F454_9AAB_D262_41D0_9E4A7E76FAEF",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 9.1,
   "yaw": 133.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2, this.camera_B01DDA5E_A4B1_70CD_41DE_1433DF8020F3); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 83.97,
   "hfov": 4.67,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82BB62D3_9AAE_3666_41DE_6D25A100DA78",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.67,
   "yaw": 83.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AFE576_5C1D_B4DE_41C4_2D2F915134D7, this.camera_B013DA4C_A4B1_70CC_41D8_404498709C35); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -169.25,
   "hfov": 4.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82F922D4_9AAE_7662_41D8_D2D892C5FCCB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.23,
   "yaw": -169.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A, this.camera_B00D9A71_A4B1_70D7_41E4_3EA75B4229AD); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -85.39,
   "hfov": 4.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_2_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_838F8E46_9AAB_CE6E_41B3_7112CF34A406",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.75,
   "yaw": -85.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2, this.camera_B13D3C50_A4B1_70D5_41D3_7067BC5AD65F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 102.43,
   "hfov": 5.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B5D7AEC_72F8_4416_41A8_EB793B1D0381",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 5.02,
   "yaw": 102.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2, this.camera_B7E31892_A4B1_7055_41D7_0EF9E00D27EB); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -56.04,
   "hfov": 4.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DCA8E93_9AAE_4EE6_41D5_A118DB2A1342",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.92,
   "yaw": -56.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5B18_5C1C_7C52_41D5_692CBC03258E_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A, this.camera_B76B097C_A4B1_70CC_41D6_F0D894D4123B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 176.71,
   "hfov": 3.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0_HS_0_0.png",
      "width": 76,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8192641D_9AE6_D21D_41CD_DFC0B619DE18",
 "data": {
  "label": "Arrow Blue Left"
 },
 "maps": [
  {
   "hfov": 3.96,
   "yaw": 176.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5, this.camera_B7C51857_A4B1_70DC_41E3_96E8F754585D); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 152.8,
   "hfov": 3.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A011509_9EA5_B01E_41D4_E3CB028811E9",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 152.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF, this.camera_B7F70874_A4B1_70DD_41B8_E04F48D6FD60); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -152.5,
   "hfov": 4.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A3BD05D_9EA4_D036_41C4_F266EC75FA3E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.04,
   "yaw": -152.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3B371_5C1C_6CD2_41D6_5BC1DA1FD638, this.camera_B7D95839_A4B1_7057_41D1_B3778E985F4E); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -38.37,
   "hfov": 4.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_2_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88E2CE96_9EA4_B035_41D6_50930DFB89F1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": -38.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC, this.camera_B6EFE618_A4B1_7055_41C3_BBCBB91FDA79); this.mainPlayList.set('selectedIndex', 24); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -52.87,
   "hfov": 5.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67EEC072_72D8_44F2_41D0_20D2863A064B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.21,
   "yaw": -52.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 19.43,
   "hfov": 4.67,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_1_0.png",
      "width": 79,
      "height": 79,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67C98667_72C8_4C12_41B2_23BD20F48CF4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.67,
   "yaw": 19.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 54,
   "hfov": 4.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_2_0.png",
      "width": 79,
      "height": 79,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67F7B14C_72C8_C416_41D2_329EF8F98530",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0, this.camera_B003657B_A4B1_70CB_4171_3D40CAE913C6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -126.71,
   "hfov": 5.33,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_3_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67DE49B7_72C9_C472_41C3_3F079702942C",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 5.33,
   "yaw": -126.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32, this.camera_B615463C_A4B1_704D_41D7_EDEC28964027); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -4.27,
   "hfov": 5.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_4_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67A3C34C_72C8_C416_41D1_2B2B81A9653B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.19,
   "yaw": -4.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC, this.camera_B613762A_A4B1_7075_41BC_8657AB5ABCD0); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -39.26,
   "hfov": 5.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_5_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_83A66947_9F7F_7012_41C5_9DB48588BFE8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.22,
   "yaw": -39.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 100.03,
   "hfov": 4.47,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8685E00D_9EAC_B016_41DD_67325A9C8980",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.47,
   "yaw": 100.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E159_5C13_ACD3_41A9_D29B929E251C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3, this.camera_B77A3961_A4B1_70F7_41D1_BAB218026F57); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -83.4,
   "hfov": 5.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64D37EB6_72C8_BC72_41D0_74894120D30B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.11,
   "yaw": -83.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C, this.camera_B74F494B_A4B1_70CB_41DF_C69D3951553E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 152.37,
   "hfov": 4.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_648E2BC7_72C9_C412_41A7_D38D1E129730",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 4.98,
   "yaw": 152.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DF9CEE_5C1C_55F1_41C5_F7CC4B3654A3, this.camera_B6753764_A4B1_70FD_41CB_BE6A6EB40205); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -62.49,
   "hfov": 5.18,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A6E980F_72F8_4412_41C8_A2BE39BE7ADC",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 5.18,
   "yaw": -62.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEEF2C_5C1C_7472_41D2_CB3B1C7373C3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 176.68,
   "hfov": 4.65,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0_HS_2_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_616CF264_7295_A940_41D2_4A6C61912342",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.65,
   "yaw": 176.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 1.55,
   "hfov": 4.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0_HS_3_0.png",
      "width": 79,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66D19158_7296_AB40_41CA_FA7824305771",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.44,
   "yaw": 1.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171, this.camera_B6415732_A4B1_7055_41DD_412BE831D2E2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 170.26,
   "hfov": 4.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0_HS_0_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6124BDD1_729D_9B40_41A2_DF3646644105",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 170.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C, this.camera_B64E574F_A4B1_70CC_4181_619FDE35F5C9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -11.52,
   "hfov": 4.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0_HS_1_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6140FCB7_729F_B9C0_41AD_E2DD016D2AD7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -11.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2940B_5C1C_5436_4191_529B35BDC29C_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009, this.camera_B753F91C_A4B1_704C_4198_AB54350BF206); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -164.76,
   "hfov": 4.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E4B1DF7_9A7A_322D_418D_F3A024BB4584",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.48,
   "yaw": -164.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A, this.camera_B7214903_A4B1_703B_41B1_F4A409BE1136); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -4.8,
   "hfov": 4.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F283F5A_9AAA_CE67_4183_06BF252A29F3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.97,
   "yaw": -4.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3, this.camera_B1E1EBD8_A4B1_77D5_41CE_A9D1543E685B); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 2.66,
   "hfov": 5.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8893425C_9EBD_B035_416E_9DEA85014596",
 "data": {
  "label": "Arrow Blue Right"
 },
 "maps": [
  {
   "hfov": 5.06,
   "yaw": 2.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1CEBA_5C1C_5451_41D6_68B67B10C6E5_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3D823_5C1C_5C76_41D5_1B4ACDDF2C66, this.camera_B1694D01_A4B1_7037_41CF_D027FE138AF0); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 169.37,
   "hfov": 4.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_801EBBE1_9AA6_7625_41DE_8FD006309E4B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.48,
   "yaw": 169.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AFFF41_5C1D_D433_41B7_DE3BD1D01330, this.camera_B2994D26_A4B1_707D_41E1_4756105D9C02); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -88.36,
   "hfov": 4.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_807A8733_9AA6_FE25_41DE_DD49098B5D2B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -88.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A, this.camera_B1793CDA_A4B1_71D5_41CD_4F46A7BEAE8A); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.54,
   "hfov": 5.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_2_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_818D0A71_9ADA_3628_41AA_20611BD061CA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.04,
   "yaw": -6.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A1E74A_5C1F_F436_4181_E60C6C68AFEA, this.camera_B2F6DDB7_A4B1_705B_41C6_EA1301F588AA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 103.96,
   "hfov": 5.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_659A86AB_72C8_4C12_41D1_4D52C01C7E47",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 5.28,
   "yaw": 103.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE3BDF_5C1F_B3CE_41D6_8929856F123C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DCD8E7_5C1C_7DFF_41B8_8475378D2F80, this.camera_B0FBD521_A4B1_7074_41DA_4BE4BD7D375F); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -12.68,
   "hfov": 6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_0_0.png",
      "width": 109,
      "height": 132,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63DE9DA6_72C8_DC12_41C4_129475A3DD44",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 6,
   "yaw": -12.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E, this.camera_B0CE550D_A4B1_704F_41DA_F4D8152F8BEB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 172.21,
   "hfov": 5.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_1_0.png",
      "width": 90,
      "height": 99,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63BF56F9_72C9_CDFE_41D3_9D222385EBF0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.25,
   "yaw": 172.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C, this.camera_B0E24533_A4B1_705B_41E4_27D9E20F5C84); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -85.55,
   "hfov": 5.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_2_0.png",
      "width": 89,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6232ABD8_72C8_443E_41C2_7FFCD392A2C5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.23,
   "yaw": -85.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DC7DCD_5C1C_5432_41D1_6FEEF752DDFD, this.camera_B63E36DB_A4B1_71CB_41DD_09F37E4041D0); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 94.32,
   "hfov": 5.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6156A5E4_72D8_4C16_4197_F8B26746FBAE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.11,
   "yaw": 94.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7, this.camera_B62046EE_A4B1_71CD_41E0_D231B1C1DC2C); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.85,
   "hfov": 5.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66C50B6E_72D9_C412_41CE_823CDB553DBB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.26,
   "yaw": -6.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E, this.camera_B63176AE_A4B1_704D_41D8_B057CCE4365E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 136.63,
   "hfov": 5.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_2_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_664C7C2C_72D8_5C16_41B3_CC69C3739475",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.06,
   "yaw": 136.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C, this.camera_B63456C8_A4B1_7035_41C5_5D6F0937A10C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -160.38,
   "hfov": 4.87,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_3_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6642AD10_72D8_5C0E_41D3_50E384484602",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 4.87,
   "yaw": -160.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -86.93,
   "hfov": 3.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87FA5AC7_9EAD_5012_41D2_56A861335E90",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.04,
   "yaw": -86.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0, this.camera_B602B663_A4B1_70F4_41B7_703B35044D8A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 1.44,
   "hfov": 4.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87AEAE9E_9EAD_D035_41E0_90345A9EFBB9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.43,
   "yaw": 1.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85, this.camera_B618F64E_A4B1_70CD_41E4_413FD63DC2E0); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -176.52,
   "hfov": 3.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_2_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_877B3C78_9EAD_50FE_41E3_97CE750BA40D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.78,
   "yaw": -176.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009, this.camera_B15F3C8E_A4B1_704D_41E3_1CE84E46B3EA); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -67.99,
   "hfov": 5.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89FF621F_9A65_D61D_41AC_C413D846D55C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -67.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8, this.camera_B2BB5D5F_A4B1_70CB_41C1_1B78B785A6B9); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 175.79,
   "hfov": 4.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0_HS_1_0.png",
      "width": 80,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_616330D8_7293_A940_41B7_2FA6AB14C741",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 175.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE69D2_5C1D_FFD6_41B0_B16EC1960BB8, this.camera_B795D7B1_A4B1_7057_41B0_578754502980); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 177.26,
   "hfov": 4.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0_HS_0_0.png",
      "width": 79,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_604AC339_726D_A8C0_41D8_BB9524D347FD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 177.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A231BC_5C1C_6C51_41B0_EA36FA6FC171, this.camera_B668D791_A4B1_7057_41E3_DFB03C3C915E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 2.13,
   "hfov": 4.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0_HS_1_0.png",
      "width": 79,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6305964B_7293_A940_41B2_97894D9F3D5D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.41,
   "yaw": 2.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D1DCB2_5C1D_B456_41A2_421E04055889_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7, this.camera_B14F1CB7_A4B1_705B_41CE_E0F1808A19DE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -88.33,
   "hfov": 5.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_648B3AE7_72C8_4412_41D4_FECD24AF8FC8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.09,
   "yaw": -88.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 3.3,
   "hfov": 5.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64BF1FBF_72C8_5C72_41DB_44CBD8E485FF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.09,
   "yaw": 3.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF42AD_5C1F_AC73_41C6_0D3EFA490B32_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57A24502_5C1C_B436_41D3_71600706AE9C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9, this.camera_B0584AA5_A4B1_707F_41D9_26D1BFAEE200); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 96.07,
   "hfov": 4.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_0_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65BD6281_72B5_A9C0_41C7_D6AB2BC6AB6C",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 96.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9, this.camera_B049FAC0_A4B1_7035_41D6_E58B5796EBE1); this.mainPlayList.set('selectedIndex', 47); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 125.55,
   "hfov": 4.71,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_1_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6556D3E1_72AF_EF40_41BF_8742F12AC89E",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 4.71,
   "yaw": 125.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D2940B_5C1C_5436_4191_529B35BDC29C, this.camera_B06B9AF2_A4B1_71D5_41CE_99903F359FAD); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -11.87,
   "hfov": 4.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_2_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65675559_72AD_AB40_41B5_3C08CB9E6D21",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.6,
   "yaw": -11.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AEB097_5C1C_AC5E_41B3_5D19ACA63A49, this.camera_B1942B0A_A4B1_7035_41C4_AF90407B2296); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 136.41,
   "hfov": 4.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_3_0.png",
      "width": 80,
      "height": 70,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7DAF102D_72B8_4416_41B6_18A21B9092EE",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 136.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A24502_5C1C_B436_41D3_71600706AE9C_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.35,
   "hfov": 9.65,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0_HS_0_0.png",
      "width": 200,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_871856F2_9EA4_D1F2_41CB_7393A2BC4A6B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 9.65,
   "yaw": -6.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0_HS_0_0_0_map.gif",
      "width": 35,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE0B9D_5C1C_5C53_41D1_21857C39C50C, this.camera_B75EA92F_A4B1_704C_41E0_7E5DCAC570EE); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -175.29,
   "hfov": 3.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_84DC17D6_9EA5_7035_41C7_4CF023C37F78",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.99,
   "yaw": -175.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57DD4DCE_5C1C_B7CE_41C4_8A0683FDAE85_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D3C5F1_5C1C_D7D2_41D2_CB1D59794F63_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE0223_5C1C_EC76_41A0_1BF3D55572C2, this.camera_B70B78D7_A4B1_71DC_41DE_8872346CEA72); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 79.5,
   "hfov": 4.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8B19905C_99FA_3263_41DE_DB6CA5840386",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 79.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE, this.camera_B73588F2_A4B1_71D5_41D0_98E6BB50A21C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.98,
   "hfov": 5.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8B284F27_99FB_CE2D_41DC_E0208BE2AFA8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.25,
   "yaw": -2.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D51068_5C1C_ACF2_41C2_A45210F90EDD, this.camera_B71938B9_A4B1_7057_41DF_2D29F2B57203); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 174.91,
   "hfov": 4.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_2_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DB03108_99BA_33E3_41DD_3EB91220E2EE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.21,
   "yaw": 174.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D2D1EB_5C1C_EFF6_41CB_1788A25FA009_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7, this.camera_B62DB704_A4B1_703D_41D1_FE2E4C45834F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 61.8,
   "hfov": 4.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F326490_9AAA_32E3_41E0_76058AEAD609",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.99,
   "yaw": 61.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57DCFE33_5C1C_5457_41B0_03DD876FBCD2, this.camera_B65AC718_A4B1_7055_41D0_CC75DD0AF25F); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -172.2,
   "hfov": 4.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8F4CA3F8_9AAD_F622_41DB_C5AF023B7E0B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.82,
   "yaw": -172.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE5103_5C1C_AC36_41D2_B2C8810C4CAC_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE2148_5C1C_6C32_41CE_BA6DFC0BF3D3, this.camera_B1B59B37_A4B1_705C_41C4_836290596B05); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 70.57,
   "hfov": 3.86,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_880CB307_9EA4_B013_41C1_A609FF44B01C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.86,
   "yaw": 70.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D20923_5C1C_DC77_4170_2A474E1D5BED, this.camera_B185BB24_A4B1_707D_41D1_A0F9DC32A016); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 168.76,
   "hfov": 3.24,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88015795_9EA7_7036_41DD_B368EC4897D2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 3.24,
   "yaw": 168.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AEFC4F_5C1C_B4CE_41D5_1CDF5B3646FF_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 90.63,
   "hfov": 5.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_608D90B7_72C8_C472_41D4_6B6CA31EAA8D",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "hfov": 5.22,
   "yaw": 90.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A246C8_5C1C_F431_41CA_1C0A74F8C3F2, this.camera_B1A62B55_A4B1_70DF_41D8_7FC71D0C23B1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 140.47,
   "hfov": 5.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_1_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6099C2C3_72C8_C412_41D5_C1965E6B8CED",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.26,
   "yaw": 140.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AD9C13_5C1C_B456_41CC_B1D24746E1B0, this.camera_B1D79B66_A4B1_70FD_41E3_F3EAC3E2EAE3); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 15.77,
   "hfov": 5.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_2_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_606F841F_72C8_4C32_41CF_6723375EF37D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.11,
   "yaw": 15.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -64,
   "hfov": 5.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_3_0.png",
      "width": 100,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60FEFCDC_72D8_7C36_41B6_3F8C50BFB611",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.92,
   "yaw": -64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D017AA_5C1C_D471_41C7_FC9A6422338E_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D1D32A_5C1C_EC76_41B4_6733BB42CFA5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D249C6_5C1D_BC31_41D0_D8021208D1EB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57AE1CC7_5C1D_D43E_41C5_17865A199B6F, this.camera_B78257C4_A4B1_703D_41C4_97828877BE90); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -170.99,
   "hfov": 4.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_90CAB1B8_9EAC_D07E_41CE_AFA4F0C1B197",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -170.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D3C262_5C1D_ACF6_41B6_27B2F8B4920A, this.camera_B7B457ED_A4B1_7FCC_41D5_26F9711D692B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 6.14,
   "hfov": 4.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_1_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9175D36A_9EAF_D012_41DE_ED53DF6CD620",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.78,
   "yaw": 6.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D26376_5C1C_ACD1_41B2_7EAF8AA870CE, this.camera_B78817D5_A4B1_7FDF_41B7_117CA0553CE6); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 66.68,
   "hfov": 9.33,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_2_0.png",
      "width": 207,
      "height": 207,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8EA333AA_9EAC_B01D_4177_9E7F863A37FE",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 66.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D02CA4_5C1D_F472_41CF_25E5FDA3514A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE3635_5C1C_F452_41D5_F36674F411E5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57A24502_5C1C_B436_41D3_71600706AE9C, this.camera_B0EFB54F_A4B1_70CB_41DA_0CF7A8A69A51); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -22.97,
   "hfov": 7.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0_HS_0_0.png",
      "width": 150,
      "height": 150,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6AF00FB8_7295_97C0_41D3_7CC3B4C3E7C2",
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "hfov": 7.89,
   "yaw": -22.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -127.95,
   "hfov": 4.33,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0_HS_1_0.png",
      "width": 100,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_82404AFA_9F64_B1FD_41D5_7BAE69A53FCA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.33,
   "yaw": -127.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57D133AC_5C13_AC72_41B2_9A488CA28CD9_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5065B7CD_5C1D_D432_41D1_C25BD1C203CA_tcap0.png",
    "width": 512,
    "height": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_57D0E057_5C1F_ACDE_41D5_4B441E832BC7, this.camera_B016156A_A4B1_70CA_41C4_C711F2CEB523); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 105.09,
   "hfov": 3.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0_HS_0_0.png",
      "width": 89,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_823EE568_9F7B_B01D_41D9_2FB59E630A10",
 "data": {
  "label": "Arrow Blue Right"
 },
 "maps": [
  {
   "hfov": 3.94,
   "yaw": 105.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AE068B_5C1C_5436_41C0_649B9181AAAF_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "height": "100%",
 "layout": "absolute"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "height": "100%",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarWidth": 10,
 "right": "0%",
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 40,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 40,
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 40,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 110,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": false,
 "height": "85.959%",
 "layout": "vertical"
},
{
 "data": {
  "name": "white block"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 366,
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": 2,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "height": 78,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 8,
 "layout": "absolute",
 "shadowSpread": 1
},
{
 "data": {
  "name": "blue block"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 366,
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": 86,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "height": 46,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 7,
 "layout": "absolute",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 391,
 "minHeight": 1,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 0,
 "text": "LOREM IPSUM",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontSize": 61,
 "fontColor": "#000000",
 "fontStyle": "italic",
 "height": 75,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "backgroundOpacity": 0,
 "width": 385,
 "minHeight": 1,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "textShadowVerticalLength": 0,
 "textShadowHorizontalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 90,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontSize": 28,
 "fontColor": "#FFFFFF",
 "fontStyle": "italic",
 "height": 44,
 "textShadowOpacity": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "shadow": false,
 "fontWeight": "normal"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "shadow": false,
 "layout": "vertical"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "absolute",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "shadow": false,
 "layout": "vertical"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "absolute",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "vertical",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "15%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "shadow": false,
 "layout": "vertical"
},
{
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 80,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "maxHeight": 80,
 "cursor": "hand",
 "shadow": false
},
{
 "height": "25%",
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "minHeight": 30,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.jpg",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 40,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "maxHeight": 1095,
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "25%",
 "bottom": "25%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "layout": "vertical"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "height": "26.316%",
 "layout": "vertical"
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "image button menu"
 }
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 50,
 "minWidth": 460,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 20,
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "transparencyActive": false,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "75%"
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 140,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "minHeight": 1,
 "itemLabelGap": 7,
 "class": "ThumbnailGrid",
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "itemThumbnailHeight": 125,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "selectedItemLabelFontColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "height": "92%",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "shadow": false
},
{
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "shadow": false,
 "height": "100%"
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "transparencyActive": false,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "75%"
},
{
 "shadow": false,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "width": "100%",
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "height": "99.975%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "width": "55%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "width": "45%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 60,
 "minWidth": 460,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 20,
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "layout": "vertical"
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 50,
 "transparencyActive": false,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "75%"
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour Info"
 },
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "Tour Information",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Panorama List"
 },
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "label": "Panorama List",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Location"
 },
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedLabel": "Location",
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "Location",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Floorplan"
 },
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "Floorplan",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Photoalbum"
 },
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "Photoalbum",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "class": "Button",
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 10,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "Contact Information",
 "height": 50,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "blue line"
 },
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "height": 2,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": 78,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": 42,
 "maxWidth": 80,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "maxHeight": 80,
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "height": "100%",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "maxHeight": 1000,
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 300,
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 100,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 30,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "minHeight": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "36.14%"
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "minHeight": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "36.14%"
},
{
 "shadow": false,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "width": "100%",
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false
},
{
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "minHeight": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "right": 20,
 "minHeight": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxHeight": 60,
 "cursor": "hand",
 "shadow": false,
 "height": "10%"
},
{
 "height": "100%",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "maxWidth": 2000,
 "data": {
  "name": "Image40635"
 },
 "paddingTop": 0,
 "maxHeight": 1000,
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 520,
 "borderRadius": 0,
 "paddingBottom": 30,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 100,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "layout": "vertical"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "height": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "minWidth": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "shadow": false,
 "height": "100%"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "Button31015"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 50,
 "paddingBottom": 0,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadow": false,
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "shadow": false,
 "height": "46%"
},
{
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "75%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "height": "100%",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 1,
 "class": "Image",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "maxWidth": 200,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "maxHeight": 200,
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "minWidth": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "shadow": false,
 "height": "100%"
}],
 "minWidth": 20,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
