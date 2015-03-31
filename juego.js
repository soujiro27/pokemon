var turno=0;
var pikachu={
	'ataque':0,
	'defensa':0,
	'vida':100,
	'win':function(){console.log("pikacgu Gano!!!")}
}

var jigli={
	'ataque':0,
	'defensa':0,
	'vida':100,
	'win':function(){console.log("jigli Gano!!!")}
}

$(document).on('ready',carga);

function carga()
{
$('article.puntosPikachu button').on('click',pasaPuntos);
$('article.puntosJiglipuff button').on('click',pasaPuntosJigli);
$('#turno').on('click',creaTurnos);
}


function pasaPuntos() 
{
var confirmacion=confirm("estas seguro de estos datos");
if (confirmacion==true) {
pikachu.ataque=$('article.puntosPikachu input#ataque').val();
pikachu.defensa=$('article.puntosPikachu input#defensa').val();

$('.puntosPikachu .puntosAtaque').text(pikachu.ataque);
$('.puntosPikachu .puntosDefensa').text(pikachu.defensa);


$('article.puntosPikachu input#ataque').prop('disabled',true);
$('article.puntosPikachu input#defensa').prop('disabled',true);
}

}

function pasaPuntosJigli()
{
	var confirmacion=confirm("estas seguro de estos datos");
if (confirmacion==true) {
jigli.ataque=$('article.puntosJiglipuff input#ataque').val();
jigli.defensa=$('article.puntosJiglipuff input#defensa').val();

$('.puntosJiglipuff .puntosAtaque').text(jigli.ataque);
$('.puntosJiglipuff .puntosDefensa').text(jigli.defensa);


$('article.puntosJiglipuff input#ataque').prop('disabled',true);
$('article.puntosJiglipuff input#defensa').prop('disabled',true);
}
}


function creaTurnos()
{
	//turno=Math.random();
	//turno=Math.round(turno);
	turno=Math.round(Math.random());
	console.log(turno);
}