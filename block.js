 console.log("working!");

video_titles = $('a#video-title');

console.log(video_titles)
 for (elt of video_titles) {
     if (elt.textContent.includes("Food")){
        elt.textContent = "Don't click me!";
     };


 };
