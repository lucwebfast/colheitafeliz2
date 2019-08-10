let inv = document.querySelector('div#mochila')
let terreno = document.querySelector('div#terreno')
let status = ['']

function pa(){  
if (status[0] == '') {
  status[0] = 'buraco'
  terreno.innerHTML = '<img src="disc/img/terrenoaberto.png" alt="terreno com buraco">' 
}

}

function cece(){
if (status[0] == 'buraco') {
  status[0] = 'cemente'
  terreno.innerHTML = '<img src="disc/img/terrenoabertocomsemente.png" alt="terreno com buraco com semente">' 
}
} 

function rega(){
if (status[0] == 'cemente') {
  status[0] = 'molhar'
  terreno.innerHTML = '<img src="disc/img/terrenomolhado.png" alt="terreno com buraco com semente">' 
}
}

function pegar(){
if (status[0] == 'molhar') {
  status[0] = 'colhido'
  terreno.innerHTML = '<img src="disc/img/terreno.png" alt="colhido">' 
  inv.innerHTML = '<img src="disc/img/cenoura.png" alt="cenoura colhida">'
}
} 
