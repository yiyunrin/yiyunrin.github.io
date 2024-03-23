// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('myAudio');

//     document.addEventListener('click', function () {
//         audio.play();
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('myAudio');

//     document.addEventListener('click', function (event) {
//         if (event.target.tagName.toLowerCase() !== 'a') {
//             audio.play();
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var header = document.querySelector('header');

    document.addEventListener('click', function (event) {
        // 检查点击的元素是否在 header 内部或是 header 元素本身
        if (!header.contains(event.target)) {
            // 如果不在 header 内部，则播放音效
            audio.play();
        }
    });
});
