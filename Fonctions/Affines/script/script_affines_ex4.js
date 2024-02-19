var prop = [["4", "+", "-"], ["-1", "-", "+"], ["7", "+", "-"], ["0", "-", "+"]];

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    for (var i = 0; i < 3; i++)
    {
        repon = repo[i].value;
        repon = repon.toLowerCase();
        repon = repon.replace(/ /g,"");
        repon = repon.replace(/,/g,".");
        repo[i] = repon;
    }
    somme = 0;
    for (var i = 0; i < 3 ; i++)
    {
        if (repo[i].value == prop[ind][i])
        {
            somme++;
        }
    }
    if (somme == 3)
    {
        sp1.innerHTML = "<b class='juste'>&#10004;</b>";
        sp2.innerHTML = "<span class='reponse_juste'>Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML = "<b class='faux'>&#10060;</b>";
        sp2.innerHTML = "<span class='reponse_fausse'>Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif_exo(no)
{
    var tab = document.querySelectorAll(".juste");    
    var m = document.querySelector(".reponse");
    if (tab.length == no)
    {
        m.innerHTML = "<span class='reponse_juste'> Toutes les réponses sont correctes ! Exercice validé.</span>";
        if(typeof localStorage != 'undefined') 
        {
            localStorage.setItem('affines_e4',1);
            fait();
        }
    }
    else
    {
        m.innerHTML = "<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

