function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbp; i++)
    {
        tnb[i]=0;
    }
    for (i=0; i<nbp; i++)
    {
        n = Math.floor(Math.random() * nbp);
        while (tnb[n]>0)
        {
            n = Math.floor(Math.random() * nbp);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        tnb[n]=1;
    }
    quest.innerHTML = code;
}



function verification(chaine, nb)
{
    somme = 0;
    tab = document.getElementsByName("sq");
    afrep = document.getElementById("message");
    for (question = 1; question <= nb; question++)
    {
        tableau_de_questions = document.forms['quizz'].elements['q'+question];
        mauvais = true;
        for(i = 0; i < tableau_de_questions.length; i++)
        {
            if (tableau_de_questions[i].checked && tableau_de_questions[i].value == "1")
            {
                somme++;
                mauvais = false;
                tab[question - 1].innerHTML = "<b class='juste'>&#10004;</b>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
        }
        if (mauvais)
        {
            tab[question - 1].innerHTML = "<b class='faux'>&#10060;</b>";
            init(question - 1);
        }
    }
    if (somme == nb)
    {
        afrep.innerHTML = "<b class='juste2'>"+"Quiz validé.</b>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem(chaine, 1);
        }
    }
    else
    {
        afrep.innerHTML="<b class='faux2'>Quiz non validé.</b>";
    }
}