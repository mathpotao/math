var tnf =  ['href="affines.html">Fonctions affines</a>',
            'href="polynomes.html">Polynômes</a>'];
            
var nexnf = 2;

function fait()
{
    affnf = "";
    for(knf=0;knf<nexnf;knf++)
    {
        affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
    }
    document.getElementById('nf').innerHTML = affnf;
}