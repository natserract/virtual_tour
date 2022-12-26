document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  var viewer;

  /** Panelleum */
  function pannellum_init() {
    viewer = pannellum.viewer("panorama", {
      default: {
        firstScene: "scnene_id_1",
        sceneFadeDuration: 1000,
      },
      autoLoad: true,
      autoRotate: -2,
      showControls: false,

      scenes: {
        // Scene 1
        scnene_id_1: {
          title: "Gang taman",
          hfov: 200,
          pitch: -10,
          yaw: 1,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/01.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064170061",
          hotSpots: [
            {
              pitch: -2.1,
              yaw: 132.9,
              type: "scene",
              text: "Gang taman 2",
              sceneId: "scnene_id_2",
            },
          ],
        },

        // Scene 2
        scnene_id_2: {
          title: "Gang taman 2",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/02.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064169453",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Gang taman 3",
              sceneId: "scnene_id_3",
              targetYaw: -23,
              targetPitch: 2,
            },
          ],
        },

        // Scene 3
        scnene_id_3: {
          title: "Gang taman 3",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/03.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064169958",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Gang taman 4",
              sceneId: "scnene_id_4",
              targetYaw: -23,
              targetPitch: 2,
            },
          ],
        },

        // Scene 4
        scnene_id_4: {
          title: "Gang taman 4",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/04.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064133362",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Gang taman 5",
              sceneId: "scnene_id_5",
              targetYaw: -23,
              targetPitch: 2,
            },
          ],
        },
        
        // Scene 4
        scnene_id_4: {
          title: "Gang taman 5",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/05.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064149246",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Gang taman 6",
              sceneId: "scnene_id_5",
              targetYaw: -23,
              targetPitch: 2,
            },
          ],
        },


        // Scene 5
        scnene_id_5: {
          title: "Gang taman 6",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama:
            "https://ik.imagekit.io/2nnk1shfi/360/06.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672064148985",
        },
      },

      hotSpotDebug: true,
    });

    // viewer.addHotSpot({
    //   pitch: -9.4,
    //   yaw: 222.6,
    //   type: "info",
    //   createTooltipFunc: hotspot,
    //   createTooltipArgs: "Art Museum Drive",
    // });

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
  $(document).on("click", "[data-panelleum-scene]", function (e) {
    const target = e.currentTarget;
    const sceneId = target.getAttribute("data-panelleum-scene");

    // Navigate to new scene based on scene id
    viewer.loadScene(sceneId);

    // Close the lightbox
    globalContentLightbox.close();
  });

  // Handle audio controls
  var player = document.getElementById("sound");

  // Handle default play audio
  const audioPlay = localStorage.getItem("audioPlay");

  if (player) {
    const audioIcon = $("#audioControl").children();

    if (audioPlay == "true") {
      player.play();

      $(audioIcon).toggleClass("bi-volume-up-fill", true);
      $(audioIcon).toggleClass("bi-volume-off-fill", false);
    } else {
      player.pause();
      $(audioIcon).toggleClass("bi-volume-up-fill", false);
      $(audioIcon).toggleClass("bi-volume-off-fill", true);
    }
  }

  $("#audioControl").click(function () {
    const el = this.children[0];
    $(el).toggleClass("bi-volume-up-fill");
    $(el).toggleClass("bi-volume-off-fill");

    const isPlay = $(el).hasClass("bi-volume-up-fill");
    localStorage.setItem("audioPlay", isPlay);

    if (isPlay) {
      player.play();
    } else {
      player.pause();
    }
  });

  const glightbox = GLightbox({
    selector: ".glightboxInfo",
  });

  function hotspot(hotSpotDiv, args) {
    $(hotSpotDiv).addClass("glightboxInfo");
    console.log("el", args);

    // TODO: validate condition by args <-> createTooltipArgs
    $(hotSpotDiv).click(function (el) {
      glightbox.insertSlide({
        href: "https://purasakenan.netlify.app/media/popup_5FB150E4_4DC8_8D37_41B5_D220740FD2EF_0_3.png?v=1659166195603",
        width: "90vw",
      });
      // https://purasakenan.netlify.app/media/popup_597171A6_4DC8_8F33_41CE_867809C76D95_0_3.png?v=1659166195603
      glightbox.open();
    });
  }
});
