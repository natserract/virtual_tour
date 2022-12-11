document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  var viewer;

  /** Panelleum */
  function pannellum_init() {
    viewer = pannellum.viewer("panorama", {
      default: {
        firstScene: "circle",
        sceneFadeDuration: 1000,
      },
      autoLoad: true,
      "autoRotate": -2,
      showControls: false,

      scenes: {
        circle: {
          title: "Area Parkir",
          hfov: 110,
          pitch: -3,
          yaw: 117,
          type: "equirectangular",
          panorama: "https://pannellum.org/images/bma-1.jpg",
          hotSpots: [
            {
              pitch: -2.1,
              yaw: 132.9,
              type: "scene",
              text: "Spring House or Dairy",
              sceneId: "house",
            },
          ],
        },

        house: {
          title: "Spring House or Dairy",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama: "https://pannellum.org/images/bma-1.jpg",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Mason Circle",
              sceneId: "circle",
              targetYaw: -23,
              targetPitch: 2,
            },
          ],
        },
      },
    });

    pannellum_custom_controls(viewer);
  }

  function pannellum_custom_controls(viewer) {
    document.getElementById("pan-up").addEventListener("click", function (e) {
      viewer.setPitch(viewer.getPitch() + 10);
    });
    document.getElementById("pan-down").addEventListener("click", function (e) {
      viewer.setPitch(viewer.getPitch() - 10);
    });
    document.getElementById("pan-left").addEventListener("click", function (e) {
      viewer.setYaw(viewer.getYaw() - 10);
    });
    document
      .getElementById("pan-right")
      .addEventListener("click", function (e) {
        viewer.setYaw(viewer.getYaw() + 10);
      });
    document.getElementById("zoom-in").addEventListener("click", function (e) {
      viewer.setHfov(viewer.getHfov() - 10);
    });
    document.getElementById("zoom-out").addEventListener("click", function (e) {
      viewer.setHfov(viewer.getHfov() + 10);
    });
    document
      .getElementById("fullscreen")
      .addEventListener("click", function (e) {
        viewer.toggleFullscreen();
      });
  }

  window.addEventListener("load", () => {
    pannellum_init();
  });

  // Easy ways with jquery
  $(document).on('click', "[data-panelleum-scene]", function(e) {
    const target = e.currentTarget;
    const sceneId = target.getAttribute('data-panelleum-scene')
    
    // Navigate to new scene based on scene id
    viewer.loadScene(sceneId)

    // Close the lightbox
    globalContentLightbox.close()
  })
});
