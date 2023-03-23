
let array = [3,5,7,13,2,8,45];


for(let i in array)
{
    console.log(i);
}

for(let i in array)
{
    console.log(array[i]);
}


for(let i of array)
{
    console.log(i);
}


let user = 
{
    'ad':'sinan',
    'soyad': 'alagöz',

}

for(let i in user)
{
    console.log(`${i} : ${user[i]}`);
}



let sayilar =[];
for(let i =0; i<5; i++)
{
    sayilar.push(i);
}

let toplam =0;

for (let i of sayilar)
{
if(i%2==0) toplam +=i;
}

console.log(`toplam: ${toplam}`);