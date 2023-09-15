// core Module
// File System

const fs = require('fs');
const { resolve } = require('path');


// menuliskan string ke file (synchronous)
// fs.writeFileSync('tes.txt', 'Hello World secara synchronous')
// try{
//     fs.writeFileSync('test/tes.txt', 'Hello World secara synchronous')
// }
// catch (e) {
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('test/tes.txt', 'Hello World secara Asynchronous', (err) => {
//     console.log(err);
// })


// membaca isi file (synchronous)
// const data = fs.readFileSync('test/tes.txt', 'utf8')
// console.log(data);


// membaca isi file (Asynchronous)
// fs.readFile('test/tes.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// Readline
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
})

// membuat folder data jika belum ada
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika nelum ada
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath, '[]', 'utf8')
}

const tulispertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        })
    })
}


const main = async () =>{
    const nama = await tulispertanyaan('Masukkan nama anda : ')
    const email = await tulispertanyaan('Masukkan email anda : ')
    const noHP = await tulispertanyaan('Masukkan No HP anda : ')


    const contact = { nama, email, noHP };
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)
    
    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('Terimakasih telah memasukkan Data');

    rl.close();
}

main();

    

 

// rl.question('Masukkan nama anda : ', (nama) => {
//     console.log((`Terimakasih ${nama}`));
//     rl.close();
// })



// rl.question('Masukkan nama anda : ', (nama) => {  
//  rl.question('Masukkan nomor hp anda : ', (nomor) => {

//     const contact = { nama, nomor };
//     const file = fs.readFileSync('data/contacts.json', 'utf8')
//     const contacts = JSON.parse(file)
    
//     contacts.push(contact)

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//     console.log('Terimakasih telah memasukkan Data');

//     rl.close();
// })
// })    


