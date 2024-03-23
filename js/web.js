// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('myAudio');

//     document.addEventListener('click', function () {
//         audio.play();
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');

    document.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() !== 'a') {
            audio.play();
        }
    });
});


