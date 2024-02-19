var rep = ["strictement décroissante", "strictement décroissante", "strictement croissante", "constante"];
var repon = ["", "", "", ""];
var tab_id = ['s1', 's2', 's3', 's4'];

no = 4;

function verif()
{
    somme = 0;
    for (var i = 0; i < no; i++)
    {
        repon[i] = document.getElementById(tab_id[i]).value;
        if (rep[i] == repon[i])
        {
            somme++;
        }
    }
    var m = document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML = "<span class='reponse_juste'> Bonne réponse ! Exercice validé.</span>";
        if(typeof localStorage != 'undefined') 
        {
            localStorage.setItem('affines_e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML = "<span class='reponse_fausse'>Certaines réponses sont mauvaises ! Recommencez !</span>";
    }
}