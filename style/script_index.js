var tabnf = ['web','gl','int','ima','c5','c6','c7','c8','c9', 'c10'];

var tnf = ['href="Chapitre1/chapitre_web.html">Chapitre 1</a>',
           'href="Chapitre2/chapitre_gl.html">Chapitre 2</a>',
           'href="Chapitre3/chapitre_int.html">Chapitre 3</a>',
           'href="Chapitre4/chapitre_ima.html">Chapitre 4</a>',
           'href="Chapitre5/chapitre_don.html">Chapitre 5</a>',
           'href="Chapitre6/chapitre_int2.html">Chapitre 6</a>',
           'href="Chapitre7/chapitre_ie.html">Chapitre 7</a>',
           'href="Chapitre8/chapitre_bin.html">Chapitre 8</a>',
           'href="Chapitre9/chapitre_rs.html">Chapitre 9</a>',
           'href="Tableur/tableur.html">Tableur</a>'];

var nexnf = 10;

function fait()
{
    if(typeof localStorage!='undefined') 
    {
        affnf = "";
        fnf = 0;
        for(knf=0;knf<nexnf;knf++)
        {
            var nf = localStorage.getItem(tabnf[knf]);
            if(nf!=null) 
            {
                nf = parseInt(nf);
            } 
            else 
            {
                nf = 0;
                localStorage.setItem(tabnf[knf],nf);
            }
            if (nf == 1)
            {
                affnf = affnf + "<li><a class='li2' "+tnf[knf]+"</li>";
                fnf++;
            }
            else
            {
                affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>";
            }     
        }
    }
    else
    {
        affnf = "";
        for(knf=0;knf<nexnf;knf++)
        {
            affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
        }
    }
    document.getElementById('nf').innerHTML = affnf;
    document.getElementById('nf2').innerHTML = affnf;
}