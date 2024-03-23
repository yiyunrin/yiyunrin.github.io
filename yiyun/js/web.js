document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');

    document.addEventListener('click', function () {
        audio.play();
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     var trailElements = [];

//     document.addEventListener('mousemove', function (event) {
//         var trail = document.createElement('div');
//         trail.classList.add('trail');
//         trail.style.left = (event.pageX - 5) + 'px';
//         trail.style.top = (event.pageY - 5) + 'px';
//         document.body.appendChild(trail);
//         trailElements.push(trail);

//         setTimeout(function () {
//             document.body.removeChild(trail);
//             trailElements.splice(trailElements.indexOf(trail), 1);
//         }, 100);
//     });
// });




