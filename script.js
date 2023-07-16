
document.addEventListener("DOMContentLoaded", function() {

    var video = document.getElementById("video");
    var playButton = document.querySelector(".play-button");
    var pauseButton = document.querySelector(".pause-button");
    

    playButton.addEventListener("click", function() {
      video.play();
            playButton.style.display = "none";
            pauseButton.style.display = "flex";
            pauseButton.style.display = "none";
     });
        
    // video.addEventListener("mouseover", function() {
    //   if (!video.paused) {
    //     pauseButton.style.display = "flex";
    //     playButton.style.display = "none";
    //   }else{
    //     pauseButton.style.display = "none";

    //   }
    // });

    // video.addEventListener("mouseout", function() {
    //   if (!video.paused) {
    //     pauseButton.style.display = "flex";
    //   }else{
    //     pauseButton.style.display = "none";
    //   }
    // });

    pauseButton.addEventListener("click", function() {
      video.pause();
      playButton.style.display = "flex";
      pauseButton.style.display = "none";
    });

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "hidden" && !video.paused) {
          video.pause();
          playButton.style.display  = "flex";
          pauseButton.style.display = "none";
        }else{
          isPreviewing = true;
          video.play();
          pauseButton.style.display = "flex";
          playButton.style.display  = "none";
      }
    });

      video.addEventListener("mouseover", function() {
        if (video.play) {
            if(video.currentTime >0){
                isPreviewing = true;
                video.currentTime = video.currentTime;
                video.play();
                pauseButton.style.display = "none";
                playButton.style.display  = "none";
            }
        }
      });
      window.addEventListener("wheel", function() {
        if (event.deltaY > 0) {
            isScrollingDown=true;
            video.play();
            } else {
            isScrollingDown = false;
            video.pause();
            }
      }); 
      video.addEventListener("mouseout", function() {
        if (!video.paused && !isPreviewing) {
            isPreviewing = true;
            video.play();
            video.currentTime =setTime(video.currentTime);
            pauseButton.style.display = "none";
            playButton.style.display  = "none";
        }
      });

  });
