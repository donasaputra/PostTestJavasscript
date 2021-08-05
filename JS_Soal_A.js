var rakBuku1 = prompt('Masukkan judul buku di Rak Buku 1 : ');
var rakBuku2 = prompt('Masukkan judul buku di Rak Buku 2 : ');
var rakBuku3 = prompt('Masukkan judul buku di Rak Buku 3 : ');
var rakBuku4 = prompt('Masukkan judul buku di Rak Buku 4 : ');
var rakBuku5 = prompt('Masukkan judul buku di Rak Buku 5 : ');

var rakBuku = [rakBuku1,rakBuku2,rakBuku3,rakBuku4,rakBuku5];
document.write('List Nama Buku','<br>');
document.write('Rak Buku 1 Judul Buku ',rakBuku[0],'<br>');
document.write('Rak Buku 2 Judul Buku ',rakBuku[1],'<br>');
document.write('Rak Buku 3 Judul Buku ',rakBuku[2],'<br>');
document.write('Rak Buku 4 Judul Buku ',rakBuku[3],'<br>');
document.write('Rak Buku 5 Judul Buku ',rakBuku[4],'<br>');


function PinjamBuku(){
    var pinjam = parseInt(prompt('Buku yang mau dipinjam adalah buku di Rak : ', '(pilih 1,2,3,4,5)'));
    
    if(UpdateBuku = pinjam){
        rakBuku[1-UpdateBuku] = 'kosong';
        document.write('List Update Buku','<br>');
        document.write('Rak Buku 1 Judul Buku ',rakBuku[0],'<br>');
        document.write('Rak Buku 2 Judul Buku ',rakBuku[1],'<br>');
        document.write('Rak Buku 3 Judul Buku ',rakBuku[2],'<br>');
        document.write('Rak Buku 4 Judul Buku ',rakBuku[3],'<br>');
        document.write('Rak Buku 5 Judul Buku ',rakBuku[4],'<br>');

    };
}

PinjamBuku();


