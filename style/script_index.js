var tnf = ['href="Fonctions/fonctions.html">Fonctions</a>',
           'href="Suites/suites.html">Suites</a>'];

var nexnf = 2;

function fait()
{
    affnf = "";
    for(knf=0;knf<nexnf;knf++)
    {
        affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
    }
    document.getElementById('nf').innerHTML = affnf;
    document.getElementById('nf2').innerHTML = affnf;
}