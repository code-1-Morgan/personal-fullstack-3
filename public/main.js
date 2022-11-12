//I recieved help from Void, Will, Shawna, Pedro, Vikiana, Sarah, and Ty
// document.querySelector('form').addEventListener('submit', getChordPic)
var trash = document.getElementsByClassName("fa-trash-o");
var see = document.getElementsByClassName("fa-eye");

// function getChordPic(){
//   const root = document.getElementById("#rootSelect").value;
//   console.log('root select')
//   if(root === 'a'){
//     document.querySelector('#a').classList.src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/a-chord-diagram.png'
//   }else if(root === 'b'){
//     document.querySelector('.b').classList.remove('d-none')
//   }else if(root === 'c'){
//     document.querySelector('.c').classList.remove('d-none')
//   }else if(root === 'd'){
//     document.querySelector('.d').classList.remove('d-none')
//   }else if(root === 'e'){
//     document.querySelector('.e').classList.remove('d-none')
//   }else if(root === 'f'){
//     document.querySelector('.f').classList.remove('d-none')
//   }else{
//     document.querySelector('.g').classList.remove('d-none')
//   }
// }

Array.from(see).forEach(function(element) {
      element.addEventListener('click', function(){
        const root = this.parentNode.parentNode.childNodes[1].innerText
        const see = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        // const image = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('see', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'root': root,
            'see': see,
            // 'image': image
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          if(root === 'a'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/a-chord-diagram.png'
          }else if(root === 'b'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/b-chord-4.png'
          }else if(root === 'c'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/c-chord-1.png.webp'
          }else if(root === 'd'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/d-chord.png.webp'
          }else if(root === 'e'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/e-chord.png.webp'
          }else if(root === 'f'){
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/f-chord-2.png.webp'
          }else{
            document.querySelector('img').src = 'https://www.guitarlessons.org/wp-content/uploads/2022/07/g-chord-1.png.webp'
          }
          // window.location.reload(true)
        })
      });
});

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
