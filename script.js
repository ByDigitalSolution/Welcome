(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CD968250_D407_7C2D_41E5_3D3B83812E18, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CD968250_D407_7C2D_41E5_3D3B83812E18, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_CD968250_D407_7C2D_41E5_3D3B83812E18",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_C8AE1C81_C499_C927_41E4_ACF17222B10A.ogg",
  "mp3Url": "media/audio_C8AE1C81_C499_C927_41E4_ACF17222B10A.mp3"
 },
 "class": "MediaAudio",
 "id": "audio_C8AE1C81_C499_C927_41E4_ACF17222B10A",
 "data": {
  "label": "DJ Excafino Makossa"
 }
},
{
 "idleSequence": "this.sequence_CDBFD282_D407_7C2D_4187_0C8B5C53892F",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 116,
  "yaw": 23.88,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": "this.sequence_CDBFD282_D407_7C2D_4187_0C8B5C53892F",
 "id": "camera_CDBFC282_D407_7C2D_41E8_7E4AD600FB64",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 116,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_CAAADC70_C488_C9E6_41DB_4864E076C27E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_CD957250_D407_7C2D_41E2_A221B9DBA50C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_CD957250_D407_7C2D_41E2_A221B9DBA50C, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_CD957250_D407_7C2D_41E2_A221B9DBA50C",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_camera"
  },
  "this.PanoramaPlayListItem_CD8C8259_D407_7CDF_41C4_C16680FE3765",
  {
   "media": "this.panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_camera"
  },
  {
   "media": "this.panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F",
   "camera": "this.panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0"
  }
 ],
 "hfovMin": "120%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_CA98B792_C489_C72A_41C1_E1330EF460AE",
 "thumbnailUrl": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_t.jpg",
 "label": "1921iq6-a-room-that-has-a-umbrella-in-her-hand",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C23AD92D_D0E7_7BD5_41E4_4BC48D2D8A6E",
  "this.overlay_C143FC28_D0E7_19C5_41E7_A07B430E25BC",
  "this.overlay_C11781DC_D0E1_6A47_41CC_88CD59B58424",
  "this.overlay_C7FD4459_D0A1_291B_41E6_20DE76CDFAA2",
  "this.overlay_DE8C1AB4_D3EC_8272_41E2_DEA851CDDD1A",
  "this.overlay_DA5DC00D_D400_FC37_41D1_2F63C6572E79",
  "this.overlay_DAA08A20_D400_8C6D_41D1_F089980FC4CB",
  "this.overlay_DAB61FAC_D400_8475_41D8_914DF84A3E95"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_camera"
  },
  {
   "media": "this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_camera"
  },
  {
   "media": "this.panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_camera"
  },
  {
   "media": "this.panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9"
  }
 ],
 "hfovMin": "150%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0",
 "thumbnailUrl": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_t.jpg",
 "label": "goCBT Global Summit (VR)",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "vfov": 180,
 "audios": [
  "this.audio_C094E69A_D0E1_36F4_41E5_F8EB9A964EDD"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_C9DEB257_C487_B92B_41D1_C1D85FC8827A",
  "this.overlay_C91E6D83_C488_4B2B_41E6_34C9703DBDE7",
  "this.overlay_CAB5D3AC_C489_BF7D_41CB_8B6F2C2352F3",
  "this.overlay_CA5B14F8_C488_BAE6_41D3_10D8AB12ACEE",
  "this.overlay_CA3A67EB_C4B8_46FB_4186_34ACC548FBCB",
  "this.overlay_CAFEA1C8_C4B8_BB25_41D3_C77DC57F7A16",
  "this.overlay_CA0B1105_C4B8_BB2E_41B6_CE7CE6A8922D",
  "this.overlay_CB29D59A_C4B8_7B5A_41E6_37B4A40A0639",
  "this.overlay_CABBDD8C_C4B9_CB3D_41E3_6CEBDB14B489",
  "this.overlay_CB4B641F_C4B8_595B_41D1_20B9CE275A5B",
  "this.overlay_CA7190C3_C4B8_B92B_41E3_C154CEE18B2C",
  "this.overlay_CAEA31D0_C4BB_BB25_41DE_38D380592A69",
  "this.overlay_CA563096_C4BB_F92A_41A4_E41170EFBD77",
  "this.overlay_CAC1EF27_C4B8_476B_41E8_6D210E574CCE",
  "this.overlay_CA8094E2_C4B8_DAE5_41D6_5284F78DC835",
  "this.overlay_CA45B4CB_C4B8_593B_41E6_075D1A53F743",
  "this.overlay_CA883B73_C4B8_4FEB_41E0_BFDCE0570C28",
  "this.overlay_CA6A15AE_C4B9_DB7D_41C9_3118CA8528FB",
  "this.overlay_CA70D3E5_C4B8_BEEF_41D8_DB25A36C6FA1",
  "this.overlay_CA905E18_C4B8_C926_41E7_9223731A7BBC",
  "this.overlay_CA86DC9B_C4B8_C95A_41D6_A7D50E77D23D",
  "this.overlay_CA68ABAD_C4B8_4F7F_41E2_B3A0022DDCEB",
  "this.overlay_CAB605CA_C488_5B25_41D2_FAA1832FACC2",
  "this.overlay_CB06203F_C488_595A_41E1_C026754BD3C5",
  "this.overlay_CA94D0A1_C489_D967_41DC_209BF68EC408",
  "this.overlay_CAE60C1E_C489_C95A_41CB_9D8D753B1716",
  "this.overlay_CB0E826E_C488_59FD_41E4_EA6ADEEC7240",
  "this.overlay_CA9381F4_C488_BAED_41B4_FC643480E01A",
  "this.overlay_CA124796_C488_472D_41A6_E7AC2E589776",
  "this.overlay_CAF97743_C488_472B_41BF_D60CD0F5D8C2",
  "this.overlay_CB2206E8_C488_46E5_41E3_9346A236081E",
  "this.overlay_CB874DE6_C489_CAED_41E1_9304C863DB9B",
  "this.overlay_CB5CB9B9_C488_4B67_41E6_88541E109BB2",
  "this.overlay_CBBBB14D_C488_BB3E_41D9_B7C4FB0D894A",
  "this.overlay_CBFC29B2_C48B_CB65_41B4_D0AA69D3A4FF",
  "this.overlay_CAC9BBEC_C488_4EFD_41D8_05A9253FAAED",
  "this.overlay_CB21D823_C487_C96B_41E7_1531EA513113",
  "this.overlay_CB274E98_C487_C925_41B3_DBB9F3BF0068",
  "this.overlay_CB3C1484_C487_D92E_41E1_2D43A26E2BE3",
  "this.overlay_CB32AC22_C487_C965_41C4_729EB61238FB",
  "this.overlay_CB091332_C487_FF6A_41E7_6F7D7B876136",
  "this.overlay_CB0E986E_C487_C9FD_41D6_9B019E90A004",
  "this.overlay_CB1E6344_C487_DF2E_41CE_8696616F18E7",
  "this.overlay_CB69DB6C_C487_CFFE_41C4_32FA7EFA8E4E",
  "this.overlay_C0436989_D0E3_1A42_4199_2CFEC424CFF1",
  "this.overlay_C24DC36E_D0E3_2EDE_41C7_2D96B7121569",
  "this.overlay_C042CBDC_D0E1_3E3A_41CE_C48EA53552A5",
  "this.overlay_C09E71D6_D0EF_2A05_41DF_01BEDA0FA905",
  "this.overlay_C11B1477_D0A3_69A2_41E3_AC64677F0F6F",
  "this.overlay_C17673C1_D0A3_EEDC_41AE_2F88725BE698",
  "this.overlay_C1E34DB9_D0A3_7AAB_41E4_2140B99CE3AE",
  "this.overlay_C1C94EA5_D0A3_1959_41E3_E37F0B591081",
  "this.overlay_C1E8316A_D0BF_6B0C_41DB_CDD95CB9E986",
  "this.overlay_C3D53F19_D3D5_8232_41D6_95C2E186384D",
  "this.overlay_DAA114B4_D400_8456_41C7_E317E9B4255B",
  "this.overlay_DAA0A2B4_D403_9C56_41DA_55C412054F49"
 ]
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "class": "Video",
 "label": "goCBT Demo Day",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11_t.jpg",
 "width": 1080,
 "loop": false,
 "id": "video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11",
 "height": 1920,
 "video": {
  "width": 720,
  "height": 1280,
  "class": "VideoResource",
  "mp4Url": "media/video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA98B792_C489_C72A_41C1_E1330EF460AE"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9",
 "thumbnailUrl": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_t.jpg",
 "label": "Classroom",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C10466B4_D09F_36FB_41D6_FC26C82D047E",
  "this.overlay_C1DC8C06_D09F_19A6_41B5_2CBC118845AF",
  "this.overlay_C16BB8EE_D0A1_3A99_41CA_2097F5E86740",
  "this.overlay_C1620F54_D0A3_178C_41BB_175AC329670B",
  "this.overlay_C1C41D88_D0A1_1A89_41C4_6F4DCE99D45C",
  "this.overlay_C1142CC8_D0A1_7AF6_41E0_85FD373EFCF4",
  "this.overlay_C212A364_D0A7_2FB3_41E3_DD18E7F52E0C",
  "this.overlay_C1446014_D0A1_296A_41D1_B89BE05028E8"
 ]
},
{
 "hfovMin": "150%",
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
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
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "2l6s18ot-a-living-room-filled-with-furniture-and-a-fireplace",
 "id": "panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F",
 "thumbnailUrl": "media/panorama_CF9DCFC7_C498_472B_41DB_77E99AE8E13F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_C094E69A_D0E1_36F4_41E5_F8EB9A964EDD.ogg",
  "mp3Url": "media/audio_C094E69A_D0E1_36F4_41E5_F8EB9A964EDD.mp3"
 },
 "class": "PanoramaAudio",
 "id": "audio_C094E69A_D0E1_36F4_41E5_F8EB9A964EDD",
 "data": {
  "label": "goCBT Intro Africa's shift to secure digital exams"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "Video",
 "label": "School students using laptop",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_CAAADC70_C488_C9E6_41DB_4864E076C27E_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_CAAADC70_C488_C9E6_41DB_4864E076C27E",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_CAAADC70_C488_C9E6_41DB_4864E076C27E.mp4"
 }
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "width": 550,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": 34,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 330,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_C3909DFE_D400_87D2_41C8_5B771CEB693B",
  "this.Label_CC0D12E9_D401_9DFF_41D9_73510E89BF5B"
 ],
 "id": "Container_CC7D7B44_D400_8C35_41D2_AC0058D5F68C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.27,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "73.007%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "14.308%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container14602"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_CDBFD282_D407_7C2D_4187_0C8B5C53892F",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "media": "this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0",
 "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_camera",
 "id": "PanoramaPlayListItem_CD8C8259_D407_7CDF_41C4_C16680FE3765"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "items": [
  {
   "hfov": 5.17,
   "image": "this.AnimatedImageResource_C29A4FC6_D0AF_16CC_41D4_03A21A782EA4",
   "pitch": -11.13,
   "yaw": -51.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C23AD92D_D0E7_7BD5_41E4_4BC48D2D8A6E",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.17,
   "yaw": -51.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0, this.camera_CDBFC282_D407_7C2D_41E8_7E4AD600FB64); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.14,
   "image": "this.AnimatedImageResource_C639BE5F_D403_84D2_41B5_4ACEE35E5E94",
   "pitch": -2.92,
   "yaw": -54.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C143FC28_D0E7_19C5_41E7_A07B430E25BC",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.14,
   "yaw": -54.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "items": [
  {
   "hfov": 18.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_2_0.png",
      "width": 417,
      "height": 316,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "yaw": -62.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C11781DC_D0E1_6A47_41CC_88CD59B58424",
 "data": {
  "label": "goCBT Summit Hall"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.12,
   "yaw": -62.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_2_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.openLink('http://gocbt.gemquests.com', '_top')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_3_0.png",
      "width": 578,
      "height": 201,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.07,
   "yaw": -0.19
  }
 ],
 "id": "overlay_C7FD4459_D0A1_291B_41E6_20DE76CDFAA2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.22,
   "yaw": -0.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_3_0_0_map.gif",
      "width": 46,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_CAAADC70_C488_C9E6_41DB_4864E076C27E.mp4"
 },
 "hfov": 26.16,
 "id": "overlay_DE8C1AB4_D3EC_8272_41E2_DEA851CDDD1A",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DE8C1AB4_D3EC_8272_41E2_DEA851CDDD1A_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 25.93,
 "useHandCursor": true,
 "yaw": -1.29,
 "rotationY": 0.88,
 "roll": -0.19,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "vfov": 14.72,
 "distance": 50,
 "rotationX": -25.14,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_4_0.png",
      "width": 285,
      "height": 317,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.03,
   "yaw": -53.01
  }
 ],
 "id": "overlay_DA5DC00D_D400_FC37_41D1_2F63C6572E79",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.17,
   "yaw": -53.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_5_0.png",
      "width": 869,
      "height": 507,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.8,
   "yaw": -94.89
  }
 ],
 "id": "overlay_DAA08A20_D400_8C6D_41D1_F089980FC4CB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.25,
   "yaw": -94.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_6_0.png",
      "width": 653,
      "height": 371,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.34,
   "yaw": -0.78
  }
 ],
 "id": "overlay_DAB61FAC_D400_8475_41D8_914DF84A3E95",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.33,
   "yaw": -0.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_6_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.06,
   "image": "this.AnimatedImageResource_D4CAAAD4_C4F8_492D_41E2_F9E0AE6E0730",
   "pitch": 1.02,
   "yaw": -43.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9DEB257_C487_B92B_41D1_C1D85FC8827A",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.06,
   "yaw": -43.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_1_0.png",
      "width": 256,
      "height": 270,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.98,
   "roll": 0,
   "yaw": -31.83
  }
 ],
 "id": "overlay_C91E6D83_C488_4B2B_41E6_34C9703DBDE7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.74,
   "yaw": -31.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_1_1_0_map.gif",
      "width": 128,
      "height": 135,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.2,
   "image": "this.AnimatedImageResource_D4CD2AD7_C4F8_492B_41E5_E88A51D5F92B",
   "pitch": -5.96,
   "yaw": -99.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAB5D3AC_C489_BF7D_41CB_8B6F2C2352F3",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.2,
   "yaw": -99.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.23,
   "image": "this.AnimatedImageResource_D4CDEAD7_C4F8_492B_41E6_2D0406600388",
   "pitch": -31.09,
   "yaw": -135.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA5B14F8_C488_BAE6_41D3_10D8AB12ACEE",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -135.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.57,
   "image": "this.AnimatedImageResource_D4CDAAD8_C4F8_4925_41D5_17B9AE13D9F1",
   "pitch": -42.22,
   "yaw": -91.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA3A67EB_C4B8_46FB_4186_34ACC548FBCB",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.57,
   "yaw": -91.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.06,
   "image": "this.AnimatedImageResource_D4CC7ADD_C4F8_4EDF_41D5_98374D7C77C1",
   "pitch": -32.36,
   "yaw": -89.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAFEA1C8_C4B8_BB25_41D3_C77DC57F7A16",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": -89.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.39,
   "image": "this.AnimatedImageResource_D4CC2ADE_C4F8_4EDD_41D3_2781EEBB89FF",
   "pitch": -20.27,
   "yaw": -112.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA0B1105_C4B8_BB2E_41B6_CE7CE6A8922D",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.39,
   "yaw": -112.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.04,
   "image": "this.AnimatedImageResource_D4CCEADE_C4F8_4EDD_41D0_FC03E0214DFD",
   "pitch": -10.41,
   "yaw": -136.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB29D59A_C4B8_7B5A_41E6_37B4A40A0639",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.04,
   "yaw": -136.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.13,
   "image": "this.AnimatedImageResource_D4CCBADE_C4F8_4EDD_41A0_34F16593D550",
   "pitch": -8.19,
   "yaw": -117.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CABBDD8C_C4B9_CB3D_41E3_6CEBDB14B489",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.13,
   "yaw": -117.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.71,
   "image": "this.AnimatedImageResource_D4CF0ADF_C4F8_4EDB_41D6_6EBB451B3812",
   "pitch": -16.14,
   "yaw": -82.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB4B641F_C4B8_595B_41D1_20B9CE275A5B",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.71,
   "yaw": -82.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.1,
   "image": "this.AnimatedImageResource_D4CF2AE0_C4F8_4EE5_41D2_30CE2D9DAC4E",
   "pitch": -38.95,
   "yaw": 90.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA7190C3_C4B8_B92B_41E3_C154CEE18B2C",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.1,
   "yaw": 90.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.38,
   "image": "this.AnimatedImageResource_D4CF9AE0_C4F8_4EE5_41D7_89375B1727A6",
   "pitch": -20.44,
   "yaw": 83.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAEA31D0_C4BB_BB25_41DE_38D380592A69",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.38,
   "yaw": 83.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_D4CE4AE0_C4F8_4EE5_41E7_CFA690CF9EB1",
   "pitch": -28.93,
   "yaw": 87.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA563096_C4BB_F92A_41A4_E41170EFBD77",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 87.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.01,
   "image": "this.AnimatedImageResource_D4CE7AE1_C4F8_4EE7_41BF_EF4E3EEE6244",
   "pitch": -11.11,
   "yaw": 91.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAC1EF27_C4B8_476B_41E8_6D210E574CCE",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.01,
   "yaw": 91.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.29,
   "image": "this.AnimatedImageResource_D4CEEAE1_C4F8_4EE7_41D9_480388A8A0E7",
   "pitch": -30.6,
   "yaw": 132.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA8094E2_C4B8_DAE5_41D6_5284F78DC835",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 132.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.44,
   "image": "this.AnimatedImageResource_D4CEAAE1_C4F8_4EE7_41D6_B15E703CA084",
   "pitch": -19.74,
   "yaw": 108.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA45B4CB_C4B8_593B_41E6_075D1A53F743",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.44,
   "yaw": 108.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.04,
   "image": "this.AnimatedImageResource_D4C15AE1_C4F8_4EE7_41E7_3E5C1BD31E7C",
   "pitch": -10.55,
   "yaw": 132.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA883B73_C4B8_4FEB_41E0_BFDCE0570C28",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.04,
   "yaw": 132.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_16_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.15,
   "image": "this.AnimatedImageResource_D4CFAAE2_C4F8_4EE5_41DB_11A693A7D735",
   "pitch": -7.77,
   "yaw": 114.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA6A15AE_C4B9_DB7D_41C9_3118CA8528FB",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.15,
   "yaw": 114.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_17_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.24,
   "image": "this.AnimatedImageResource_D4CE6AE2_C4F8_4EE5_41E4_B7A581B1D2BF",
   "pitch": -4.15,
   "yaw": 141.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA70D3E5_C4B8_BEEF_41D8_DB25A36C6FA1",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.24,
   "yaw": 141.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_18_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.28,
   "image": "this.AnimatedImageResource_D4CE1AE2_C4F8_4EE5_41E5_99B692EB0B05",
   "pitch": -0.11,
   "yaw": 122.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA905E18_C4B8_C926_41E7_9223731A7BBC",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": 122.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_19_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": "this.AnimatedImageResource_D4CE8AE2_C4F8_4EE5_41E4_E75A182D1988",
   "pitch": -14.17,
   "yaw": 147.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA86DC9B_C4B8_C95A_41D6_A7D50E77D23D",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.84,
   "yaw": 147.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_20_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.53,
   "image": "this.AnimatedImageResource_D4C14AE3_C4F8_4EEB_41D5_E536FE89A6FA",
   "pitch": -37.1,
   "yaw": 0.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA68ABAD_C4B8_4F7F_41E2_B3A0022DDCEB",
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.53,
   "yaw": 0.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_21_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_22_0.png",
      "width": 229,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.39,
   "yaw": 77.61
  }
 ],
 "id": "overlay_CAB605CA_C488_5B25_41D2_FAA1832FACC2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 17.85,
   "yaw": 77.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_22_0_0_map.gif",
      "width": 48,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_23_0.png",
      "width": 230,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.91,
   "yaw": 72.99
  }
 ],
 "id": "overlay_CB06203F_C488_595A_41E1_C026754BD3C5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 19.29,
   "yaw": 72.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_23_0_0_map.gif",
      "width": 46,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_24_0.png",
      "width": 237,
      "height": 81,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.33,
   "yaw": 80.06
  }
 ],
 "id": "overlay_CA94D0A1_C489_D967_41DC_209BF68EC408",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 16.3,
   "yaw": 80.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_24_0_0_map.gif",
      "width": 46,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_25_0.png",
      "width": 225,
      "height": 75,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82,
   "yaw": 81.73
  }
 ],
 "id": "overlay_CAE60C1E_C489_C95A_41CB_9D8D753B1716",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 19.99,
   "yaw": 81.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_25_0_0_map.gif",
      "width": 48,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_26_0.png",
      "width": 204,
      "height": 71,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.67,
   "yaw": 99.79
  }
 ],
 "id": "overlay_CB0E826E_C488_59FD_41E4_EA6ADEEC7240",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 17.21,
   "yaw": 99.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_26_0_0_map.gif",
      "width": 45,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_27_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.38,
   "yaw": 126.67
  }
 ],
 "id": "overlay_CA9381F4_C488_BAED_41B4_FC643480E01A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 11.3,
   "yaw": 126.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_27_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_28_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.11,
   "yaw": -85.97
  }
 ],
 "id": "overlay_CA124796_C488_472D_41A6_E7AC2E589776",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 9.72,
   "yaw": -85.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_28_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_29_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.59,
   "yaw": -83.66
  }
 ],
 "id": "overlay_CAF97743_C488_472B_41BF_D60CD0F5D8C2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 11.04,
   "yaw": -83.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_29_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_30_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.2,
   "yaw": -76.51
  }
 ],
 "id": "overlay_CB2206E8_C488_46E5_41E3_9346A236081E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 12.58,
   "yaw": -76.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_30_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_31_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.2,
   "yaw": -105.97
  }
 ],
 "id": "overlay_CB874DE6_C489_CAED_41E1_9304C863DB9B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": -105.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_31_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_32_0.png",
      "width": 145,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.3,
   "yaw": -129.22
  }
 ],
 "id": "overlay_CB5CB9B9_C488_4B67_41E6_88541E109BB2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": -129.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_32_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "items": [
  {
   "hfov": 32.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_33_0.png",
      "width": 454,
      "height": 83,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.67,
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CBBBB14D_C488_BB3E_41D9_B7C4FB0D894A",
 "data": {
  "label": "Exit Room"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 32.39,
   "yaw": 0.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_33_0_map.gif",
      "width": 87,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.49,
   "image": "this.AnimatedImageResource_C5049C1E_D403_8455_41CF_AF34DBBBDDFB",
   "pitch": 7.02,
   "yaw": -177.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CBFC29B2_C48B_CB65_41B4_D0AA69D3A4FF",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.49,
   "yaw": -177.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_34_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_CAAADC70_C488_C9E6_41DB_4864E076C27E.mp4"
 },
 "hfov": 38.61,
 "id": "overlay_CAC9BBEC_C488_4EFD_41D8_05A9253FAAED",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_CAC9BBEC_C488_4EFD_41D8_05A9253FAAED_t.jpg",
    "width": 1280,
    "height": 720,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.71,
 "useHandCursor": false,
 "yaw": -0.51,
 "rotationY": 1.22,
 "roll": 0.21,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "vfov": 21,
 "distance": 50,
 "rotationX": -4.98,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -4.71,
 "id": "overlay_CB21D823_C487_C96B_41E7_1531EA513113",
 "pitch": 15.05
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 46.08,
 "id": "overlay_CB274E98_C487_C925_41B3_DBB9F3BF0068",
 "pitch": 49.45
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -109.15,
 "id": "overlay_CB3C1484_C487_D92E_41E1_2D43A26E2BE3",
 "pitch": 45.77
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -163.62,
 "id": "overlay_CB32AC22_C487_C965_41C4_729EB61238FB",
 "pitch": 35.94
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 149.69,
 "id": "overlay_CB091332_C487_FF6A_41E7_6F7D7B876136",
 "pitch": 66.66
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 113.65,
 "id": "overlay_CB0E986E_C487_C9FD_41D6_9B019E90A004",
 "pitch": 31.84
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -71.47,
 "id": "overlay_CB1E6344_C487_DF2E_41CE_8696616F18E7",
 "pitch": 33.07
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -9.22,
 "id": "overlay_CB69DB6C_C487_CFFE_41C4_32FA7EFA8E4E",
 "pitch": 59.28
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_36_0.png",
      "width": 135,
      "height": 43,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.25,
   "yaw": -112.23
  }
 ],
 "id": "overlay_C0436989_D0E3_1A42_4199_2CFEC424CFF1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.03,
   "yaw": -112.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_36_0_0_map.gif",
      "width": 50,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_37_0.png",
      "width": 135,
      "height": 43,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.16,
   "yaw": -130.97
  }
 ],
 "id": "overlay_C24DC36E_D0E3_2EDE_41C7_2D96B7121569",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.97,
   "yaw": -130.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_37_0_0_map.gif",
      "width": 50,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.openLink('http://gocbt.gemquests.com/login', '_top')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_39_0.png",
      "width": 219,
      "height": 73,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05,
   "yaw": -45.18
  }
 ],
 "id": "overlay_C042CBDC_D0E1_3E3A_41CE_C48EA53552A5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.58,
   "yaw": -45.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_39_0_0_map.gif",
      "width": 48,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 40.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_40_0.png",
      "width": 454,
      "height": 71,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.8,
   "yaw": -147.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C09E71D6_D0EF_2A05_41DF_01BEDA0FA905",
 "data": {
  "label": "VIew Practice Center"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "hfov": 40.73,
   "yaw": -147.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_40_0_map.gif",
      "width": 102,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "video": {
  "width": 720,
  "height": 1280,
  "class": "VideoResource",
  "mp4Url": "media/video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11.mp4"
 },
 "hfov": 17.71,
 "id": "overlay_C11B1477_D0A3_69A2_41E3_AC64677F0F6F",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_C11B1477_D0A3_69A2_41E3_AC64677F0F6F_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.68,
 "useHandCursor": false,
 "yaw": 48.9,
 "rotationY": -17.34,
 "roll": 2.42,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "vfov": 26.93,
 "distance": 50,
 "rotationX": 16.69,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_41_0.png",
      "width": 202,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.78,
   "yaw": 48.94
  }
 ],
 "id": "overlay_C17673C1_D0A3_EEDC_41AE_2F88725BE698",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.07,
   "yaw": 48.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_41_0_0_map.gif",
      "width": 53,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.openLink('https://wa.me/p/26836847129263041/2348157505037', '_top')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_42_0.png",
      "width": 167,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "yaw": 35.2
  }
 ],
 "id": "overlay_C1E34DB9_D0A3_7AAB_41E4_2140B99CE3AE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.99,
   "yaw": 35.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_42_0_0_map.gif",
      "width": 48,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.openLink('http://gocbt.gemquests.com/', '_top')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_43_0.png",
      "width": 181,
      "height": 59,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.33,
   "yaw": 62.87
  }
 ],
 "id": "overlay_C1C94EA5_D0A3_1959_41E3_E37F0B591081",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 62.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_43_0_0_map.gif",
      "width": 49,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_45_0.png",
      "width": 167,
      "height": 57,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.45,
   "yaw": -31.39
  }
 ],
 "id": "overlay_C1E8316A_D0BF_6B0C_41DB_CDD95CB9E986",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.03,
   "yaw": -31.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_45_0_0_map.gif",
      "width": 46,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.openLink('http://bydigitalsolution.github.io/goCBT-Trainer-Reg-Portal/', '_top')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_46_0.png",
      "width": 291,
      "height": 66,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9,
   "yaw": 0.06
  }
 ],
 "id": "overlay_C3D53F19_D3D5_8232_41D6_95C2E186384D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.95,
   "yaw": 0.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_46_0_0_map.gif",
      "width": 70,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 53.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_47_0.png",
      "width": 591,
      "height": 325,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.81,
   "yaw": -83.9
  }
 ],
 "id": "overlay_DAA114B4_D400_8456_41C7_E317E9B4255B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 53.22,
   "yaw": -83.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_47_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 40.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_48_0.png",
      "width": 606,
      "height": 930,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.37,
   "yaw": -152.27
  }
 ],
 "id": "overlay_DAA0A2B4_D403_9C56_41DA_55C412054F49",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 40.97,
   "yaw": -152.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_48_0_0_map.gif",
      "width": 16,
      "height": 24,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.47,
   "image": "this.AnimatedImageResource_C2969FD1_D0AF_16C4_41D1_30FD77B09E2F",
   "pitch": -25.77,
   "yaw": 161.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C10466B4_D09F_36FB_41D6_FC26C82D047E",
 "data": {
  "label": "Circle Point 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.47,
   "yaw": 161.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "items": [
  {
   "hfov": 51.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_1_0.png",
      "width": 937,
      "height": 284,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.85,
   "yaw": 165.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C1DC8C06_D09F_19A6_41B5_2CBC118845AF",
 "data": {
  "label": "Exit Lab"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 51.86,
   "yaw": 165.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_1_0_map.gif",
      "width": 52,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_2_0.png",
      "width": 656,
      "height": 263,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 25.26,
   "roll": 0,
   "yaw": 6.62
  }
 ],
 "id": "overlay_C16BB8EE_D0A1_3A99_41CA_2097F5E86740",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.95,
   "yaw": 6.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_2_1_0_map.gif",
      "width": 200,
      "height": 79,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 25.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_3_0.png",
      "width": 557,
      "height": 95,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 25.42,
   "yaw": 8.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C1620F54_D0A3_178C_41BB_175AC329670B",
 "data": {
  "label": "SMART Class is Offline"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.19,
   "yaw": 8.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_3_0_map.gif",
      "width": 93,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 25.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_4_0.png",
      "width": 276,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.64,
   "yaw": -9.82
  }
 ],
 "id": "overlay_C1C41D88_D0A1_1A89_41C4_6F4DCE99D45C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.09,
   "yaw": -9.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_4_0_0_map.gif",
      "width": 55,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_5_0.png",
      "width": 241,
      "height": 81,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14,
   "yaw": 8.51
  }
 ],
 "id": "overlay_C1142CC8_D0A1_7AF6_41E0_85FD373EFCF4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.03,
   "yaw": 8.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_5_0_0_map.gif",
      "width": 47,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_6_0.png",
      "width": 243,
      "height": 83,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.07,
   "yaw": 25.58
  }
 ],
 "id": "overlay_C212A364_D0A7_2FB3_41E3_DD18E7F52E0C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.14,
   "yaw": 25.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_6_0_0_map.gif",
      "width": 46,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "video": {
  "width": 720,
  "height": 1280,
  "class": "VideoResource",
  "mp4Url": "media/video_C28FE50B_D0A7_2B7C_41E9_571F7AE48C11.mp4"
 },
 "hfov": 35.49,
 "id": "overlay_C1446014_D0A1_296A_41D1_B89BE05028E8",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_C1446014_D0A1_296A_41D1_B89BE05028E8_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.64,
 "useHandCursor": false,
 "yaw": 75.21,
 "rotationY": -15.85,
 "roll": 2.44,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "vfov": 43.14,
 "distance": 50,
 "rotationX": -23.99,
 "blending": 0,
 "data": {
  "label": "Video"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 2,
 "contentOpaque": false,
 "shadowBlurRadius": 7,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "height": 78,
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "white block"
 },
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 86,
 "contentOpaque": false,
 "shadowBlurRadius": 7,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "height": 46,
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "blue block"
 },
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "fontColor": "#000000",
 "horizontalAlign": "left",
 "width": 391,
 "borderSize": 0,
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "shadow": false,
 "paddingRight": 0,
 "top": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "fontSize": 61,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 75,
 "class": "Label",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "propagateClick": true,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "width": 385,
 "borderSize": 0,
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "shadow": false,
 "paddingRight": 0,
 "top": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "fontSize": 28,
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "class": "Label",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "propagateClick": true,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "paddingLeft": 0,
 "textShadowHorizontalLength": 0
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
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
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "91.304%",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 66,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": 0,
 "width": 330,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "maxHeight": 400,
 "maxWidth": 400,
 "id": "Image_C3909DFE_D400_87D2_41C8_5B771CEB693B",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "10.422%",
 "minHeight": 1,
 "url": "skin/Image_C3909DFE_D400_87D2_41C8_5B771CEB693B.gif",
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "38.5%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image14764"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "fontFamily": "Arial",
 "height": "47.826%",
 "id": "Label_CC0D12E9_D401_9DFF_41D9_73510E89BF5B",
 "fontColor": "#000000",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "text": "You can SWIPE LEFT, RIGHT, UP & DOWN, CLICK on animations.",
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "2.5vmin",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "fontStyle": "normal",
 "class": "Label",
 "paddingBottom": 0,
 "data": {
  "name": "Label14958"
 },
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C29A4FC6_D0AF_16CC_41D4_03A21A782EA4",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CA98B792_C489_C72A_41C1_E1330EF460AE_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C639BE5F_D403_84D2_41B5_4ACEE35E5E94",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_0_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CAAAD4_C4F8_492D_41E2_F9E0AE6E0730",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_2_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CD2AD7_C4F8_492B_41E5_E88A51D5F92B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_3_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CDEAD7_C4F8_492B_41E6_2D0406600388",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_4_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CDAAD8_C4F8_4925_41D5_17B9AE13D9F1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_5_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CC7ADD_C4F8_4EDF_41D5_98374D7C77C1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_6_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CC2ADE_C4F8_4EDD_41D3_2781EEBB89FF",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_7_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CCEADE_C4F8_4EDD_41D0_FC03E0214DFD",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_8_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CCBADE_C4F8_4EDD_41A0_34F16593D550",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_9_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CF0ADF_C4F8_4EDB_41D6_6EBB451B3812",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_10_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CF2AE0_C4F8_4EE5_41D2_30CE2D9DAC4E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_11_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CF9AE0_C4F8_4EE5_41D7_89375B1727A6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_12_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CE4AE0_C4F8_4EE5_41E7_CFA690CF9EB1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_13_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CE7AE1_C4F8_4EE7_41BF_EF4E3EEE6244",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_14_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CEEAE1_C4F8_4EE7_41D9_480388A8A0E7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_15_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CEAAE1_C4F8_4EE7_41D6_B15E703CA084",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_16_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4C15AE1_C4F8_4EE7_41E7_3E5C1BD31E7C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_17_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CFAAE2_C4F8_4EE5_41DB_11A693A7D735",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_18_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CE6AE2_C4F8_4EE5_41E4_B7A581B1D2BF",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_19_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CE1AE2_C4F8_4EE5_41E5_99B692EB0B05",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_20_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4CE8AE2_C4F8_4EE5_41E4_E75A182D1988",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_1_HS_21_0.png",
   "width": 1200,
   "height": 930,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D4C14AE3_C4F8_4EEB_41D5_E536FE89A6FA",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C92364F2_C49B_DAE5_41CC_BBDE94D4C1A0_0_HS_34_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C5049C1E_D403_8455_41CF_AF34DBBBDDFB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_C00D0EE4_D0E1_162B_41DF_C2B94FBCE6B9_1_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C2969FD1_D0AF_16C4_41D1_30FD77B09E2F",
 "frameDuration": 41
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter('https://www.bydigitalsolution.io/Welcome')",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook('https://www.bydigitalsolution.io/Welcome')",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 36,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "90%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "right": 9,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "height": "92%",
 "class": "ThumbnailGrid",
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "shadow": false,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "shadow": false,
 "paddingRight": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": true,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "55%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "45%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 60,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 40,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 40,
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "right": 20,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "right": 10,
 "borderSize": 0,
 "width": "14.22%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "right": 20,
 "borderSize": 0,
 "width": "10%",
 "minHeight": 50,
 "shadow": false,
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "scaleMode": "fit_inside",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 30,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "shadow": false,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 40,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "height": "25%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image Company"
 },
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "26%",
 "contentOpaque": false,
 "bottom": "26%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 130,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "HTMLText",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.4vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.71vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.8vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 180,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "2.39vh",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "borderRadius": 50,
 "height": 50,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "46%",
 "class": "HTMLText",
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.4vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "shadowSpread": 1,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goAPPs >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "shadowSpread": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "ROOMS >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Inserdt Text",
 "layout": "horizontal",
 "data": {
  "name": "Button Location"
 },
 "shadowSpread": 1,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "AMENITIES >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "SPORTS AREA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowSpread": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "SWIMMING POOL >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "shadowSpread": 1,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "RESTAURANTS >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "width": 40,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 78,
 "class": "HTMLText",
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 56,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goCBT",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_CD8C8259_D407_7CDF_41C4_C16680FE3765, 23.877551020408163, -3.673469387755102);; this.mainPlayList.set('selectedIndex', 1)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "goMETRO",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Reception",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goHOTELS",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goCHOPS",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goSHOP",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.openLink('https://bydigitalsolution.github.io/goSTORES', '_top')",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "30px",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goTRAVELS",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goNAVIG8",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "goMEDIC",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Garden",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "width": "100%",
 "iconHeight": 30,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "75%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "HTMLText",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Info"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Video"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "borderRadius": 0,
 "height": 50,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand"
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_CC7D7B44_D400_8C35_41D2_AC0058D5F68C"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "overflow": "visible",
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "minWidth": 20,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "existsKey": function(key){  return key in window; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "contentOpaque": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "layout": "absolute",
 "paddingLeft": 0
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
