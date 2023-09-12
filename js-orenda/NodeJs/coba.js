function cetakNama(nama){

   return `Halo, nama saya ${nama}`;

}

const PI = 3.14;

const mahaSiswa = {
   nama: 'Deo keldi Silaen',
   umur: 20,
   cetakMhs() {
      return `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`
   }
}

class Orang {
   constructor() {
     console.log('Objek orang telah dibuat!');    
   }
}




// module.exports.mahaSiswa = mahaSiswa;
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI; 
// module.exports.Orang = Orang;

// module.exports = {
//    cetakNama: cetakNama,
//    PI: PI,
//    mahaSiswa: mahaSiswa,
//    Orang: Orang
// }

module.exports = { cetakNama, PI, mahaSiswa, Orang };