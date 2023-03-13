var list = [
    {
        name: 'getHtml',
        definition: function () {
            console.log('getHtml');
        }
    },

    {
        name: 'getMutation',
        definition: function () {
            console.log('getMutation');

        }
    },

    {
        name: 'getSnapshottedUrls',
        definition: function () {
            console.log('getSnapshottedUrls');
        }
    },

    {
        name: 'isLongRecording',
        definition: function () {
            console.log('isLongRecording');
        }
    },



];

var body = document.querySelector("body");

list.map((obj) => {
    var button = document.createElement("button");
    button.innerHTML = obj.name;

    body.appendChild(button);

    button.addEventListener("click", function () {
        obj.definition();//post message
    });
})







// let obj = {

//     getHtml: function () {
//         console.log('getHtml')

//     },
//     getMutations: function () {
//         console.log('getMutations')

//     },
//     getSnapshottedUrls: function () {
//         console.log('getSnapshottedUrls')

//     },
//     isLongRecording: function () {
//         console.log('isLongRecording')

//     }
// }


// document.getElementById("fun1").addEventListener('click', (e) => {
//     obj.getHtml();
// });
// document.getElementById("fun2").addEventListener('click', (e) => {
//     obj.getHtml();
// });
// document.getElementById("fun3").addEventListener('click', (e) => {
//     obj.getHtml();
// });
// document.getElementById("fun4").addEventListener('click', (e) => {
//     obj.getHtml();
// });


