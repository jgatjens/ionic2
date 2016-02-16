import {Page, Platform} from 'ionic/ionic';



@Page({
  templateUrl: 'build/pages/upload/upload.html'
})
export class UploadPage {

  constructor(platform: Platform) {


    console.log(platform.platforms());
    // Normalize the various vendor prefixed versions of getUserMedia.
    navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);
    // Actual device
    /*this.camera = navigator.camera;
    this.options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    };
    */
  }

  openCamera() {
    // Check that the browser supports getUserMedia.
    // If it doesn't show an alert, otherwise continue.
    if (navigator.getUserMedia) {
      // Request the camera.
      navigator.getUserMedia(
        // Constraints
        { video: true },
        // Success Callback
        function(localMediaStream) {

          debugger;
          // Get a reference to the video element on the page.
          var vid = document.getElementById('camera-stream');

          // Create an object URL for the video stream and use this
          // to set the video source.
          vid.src = window.URL.createObjectURL(localMediaStream);
        },

        // Error Callback
        function(err) {
          // Log the error to the console.
          console.log('The following error occurred when trying to use getUserMedia: ' + err);
        }
      );

    } else {
      alert('Sorry, your browser does not support getUserMedia');
    }
  }

  // actual device camera
  /*openCamera() {
    this.camera.getPicture(
      (imagePath) => {
        console.log(imagePath);
      },
      (error) => {
        console.log(error);
      }, this.options
    );
  }*/
}
