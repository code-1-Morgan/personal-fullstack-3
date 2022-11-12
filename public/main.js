//I recieved help from Void, Will, Shawna, Pedro, Vikiana, Sarah, and Ty
document.querySelector('form').addEventListener('submit', getChordPic)
var trash = document.getElementsByClassName("fa-trash-o");

function getChordPic(){
  const root = document.getElementById("#rootSelect").value;
  if(root === 'a'){
    document.querySelector('.a').classList.remove('hidden')
  }else if(root === 'b'){
    document.querySelector('.a').classList.remove('hidden')
  }else if(root === 'c'){
    document.querySelector('.a').classList.remove('hidden')
  }else if(root === 'd'){
    document.querySelector('.a').classList.remove('hidden')
  }else if(root === 'e'){
    document.querySelector('.a').classList.remove('hidden')
  }else if(root === 'f'){
    document.querySelector('.a').classList.remove('hidden')
  }else{
    document.querySelector('.a').classList.remove('hidden')
  }
}

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('thumbUp', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const root = this.parentNode.parentNode.childNodes[1].innerText
//     const sign = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('thumbDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'root': root,
//         'sign': sign,
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const root = this.parentNode.parentNode.childNodes[1].innerText
        const sign = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'root': root,
            'sign': sign
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
