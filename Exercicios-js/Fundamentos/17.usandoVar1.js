{ 
    { 
        { 
            { 
                var sera = 'Será???'
                // console.log(sera) //em muitas linguagens a variavel só ficará visivel quando dentro do bloco
            }
         
        }
     
    }
}

console.log(sera) // vísivel mesmo fora do bloco/escopo, mas se fosse função não ficaria

function teste(){
    var local = 123
    console.log(local) // console dentro da function mostra a variavel, não é uma variavel global

}

teste()
//console.log(local) // não está visivel, pois a variavel está dentro do escopo da function e não fora
