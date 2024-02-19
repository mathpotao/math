var tabnf = ['affines_e1', 'affines_e2', 'affines_e3', 'affines_e4', 'affines_q1'];

var tnf = ['href="affines_exercice1.html">Exercice 1</a>',
           'href="affines_exercice2.html">Exercice 2</a>',
           'href="affines_exercice3.html">Exercice 3</a>',
           'href="affines_exercice4.html">Exercice 4</a>',
           'href="affines_quiz.html">Quiz</a>'];

var nexnf = 5;

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
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
            }     
        }
        if (fnf == nexnf)
        {
            localStorage.setItem('affines',1);
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
}