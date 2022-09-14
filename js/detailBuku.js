document.getElementById('tombol-plus').addEventListener("click", add);
document.getElementById('tombol-min').addEventListener("click", min);
function add(){
    let angka = document.getElementById('angka-beli').innerHTML;
    if(angka == 1){
        satuan = document.getElementById('angka').innerHTML;
    }
    console.log(satuan);   
    angka++;
    let harga = angka*satuan;
    document.getElementById('angka').innerHTML = harga;
    document.getElementById('angka-beli').innerHTML = angka;
}
function min(){
    let angka = document.getElementById('angka-beli').innerHTML;
    if(angka == 1){
        satuan = document.getElementById('angka').innerHTML;
    }
    console.log(satuan);   
    if(angka >= 2){
        angka--;
    }
    let harga = angka*satuan;
    document.getElementById('angka').innerHTML = harga;
    document.getElementById('angka-beli').innerHTML = angka;

}