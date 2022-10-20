// suit tanpa gambar

// var lagi = true;
// while (lagi) {
//   //input player
//   var p = prompt ('Selamat datang di permainan suit jawa.\nSilakan pilih (gajah/orang/semut)');

//   //pilihan komputer
//   var c = Math.random ();
//   if (c <= 0.34) {
//     c = 'semut';
//   } 
//   else if (c > 0.34 && c <= 0.67) {
//     c = 'orang';
//   } 
//   else {
//     c = 'gajah';
//   }

//   //rules
//   var hasil = '';
//   if (p == c) {
//     hasil = 'SERI';
//   }
//   else if (p == 'semut') {
//     /*if (c == 'orang') {
//       hasil = 'KALAH';
//     }
//     else {
//       hasil = 'MENANG';
//     }*/
//     hasil = (c == 'orang') ? 'KALAH' : 'MENANG';
//   }
//   else if (p == 'orang') {
//     hasil = (c == 'semut') ? 'MENANG' : 'KALAH';
//   }
//   else if (p == 'gajah') {
//     hasil = (c == 'orang') ? 'MENANG' : 'KALAH';
//   }
//   else {
//     hasil = 'memasukkan pilihan yang salah';
//   }

//   //hasil
//   alert ('Anda memilih ' + p + ' dan komputer memilih ' + c + '\nMaka hasilnya Anda ' + hasil +'!');

//   lagi = confirm('Apakah Anda ingin bermain lagi?');
// }

// alert ('Terimakasih sudah bermain.');







// suit dgn gambar
function getPilihanComputer () {
  const comp = Math.random();
  if (comp < .34) return 'gajah';
  if (comp > 0.34 && comp <= 0.67) return 'orang';
  return 'semut';
}


function getHasil (player, comp) {
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}


function putarGambar () {
  const imgComp = document.querySelector('.pilihan-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval (function() {
    if ((new Date().getTime() - waktuMulai) > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i =0;
  }, 200)
}


const pPlayer = document.querySelectorAll('#player div');
pPlayer.forEach(function(pil) {
  pil.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanPlayer, pilihanComputer);

    putarGambar();

    setTimeout (function() {
      const imgComp = document.querySelector('.pilihan-komputer');
      imgComp.setAttribute ('src', 'img/'+pilihanComputer+'.png');

      const info = document.querySelector('#info');
      info.innerHTML = hasil;
    }, 1000);    
  })
});


/*
const playerGajah = document.querySelector ('#player .gajah');
playerGajah.addEventListener('click', function(){
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerGajah.className;
  const hasil = getHasil(pilihanPlayer, pilihanComputer);

  const imgComp = document.querySelector('.pilihan-komputer');
  imgComp.setAttribute ('src', 'img/'+pilihanComputer+'.png');

  const info = document.querySelector('#info');
  info.innerHTML = hasil;
});


const playerOrang = document.querySelector ('#player .orang');
playerOrang.addEventListener('click', function(){
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerOrang.className;
  const hasil = getHasil(pilihanPlayer, pilihanComputer);

  const imgComp = document.querySelector('.pilihan-komputer');
  imgComp.setAttribute ('src', 'img/'+pilihanComputer+'.png');

  const info = document.querySelector('#info');
  info.innerHTML = hasil;
});


const playerSemut = document.querySelector ('#player .semut');
playerSemut.addEventListener('click', function(){
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerSemut.className;
  const hasil = getHasil(pilihanPlayer, pilihanComputer);

  const imgComp = document.querySelector('.pilihan-komputer');
  imgComp.setAttribute ('src', 'img/'+pilihanComputer+'.png');

  const info = document.querySelector('#info');
  info.innerHTML = hasil;
});
*/