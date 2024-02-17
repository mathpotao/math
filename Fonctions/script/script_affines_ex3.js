var prop = ["2", "3", "-1", "4", "-0.5", "-3.2", "7", "0"];

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/,/g,".");
    if (repon == prop[ind])
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
            localStorage.setItem('affines_e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML = "<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

