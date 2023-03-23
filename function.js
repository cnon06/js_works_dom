function selamlama(msg)
{
    console.log(msg);
}

selamlama('sinem');

function getAge(birthDate)
{

return (new Date().getFullYear()) - birthDate;
}

console.log(getAge(1980));


function topla()
{
    topla =0;
    for(let i of arguments)
    {
            topla +=i;
    }
    return topla;
}


console.log(`Topla: ${topla(1,2,3,4)}`);


var isim ='ahmet';

if(true)
{
    let isim ='mehmet';
    console.log(isim);
}

console.log(isim);