
let ogr1_ad = 'Ada';
let ogr1_soyad ='Bilgi';
let ogr1_dogumTarihi = '2010';
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3)/3; 


let ogr2_ad = 'Yiğit';
let ogr2_soyad ='Bilgi';
let ogr2_dogumTarihi = 2012;
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;

let year = new Date().getFullYear();

let ogr1_yas = year - ogr1_dogumTarihi;


console.log(year);
console.log(ogr1_yas);
console.log(ogr1_ad+' '+ogr1_soyad+' ortalama: '+ogr1_ortalama);
console.log(typeof ogr1_ortalama);
console.log(ogr1_ad+' '+ogr1_soyad+' ortalama: '+parseFloat(ogr1_ortalama) );
console.log(ogr1_ad+' '+ogr1_soyad+' ortalama: '+parseInt(ogr1_ortalama) );
console.log(ogr1_ad+' '+ogr1_soyad+' basari durumu: ' + ( ogr1_ortalama > 50));