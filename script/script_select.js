tab_rep = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

function afficher_select(nom_form, n)
{
    
    aff = '<select class="menu2" id="sel" name="n1" width="5">';
    aff = aff + '<option selected="selected"></option>';
    for (var i = 0; i < n; i++)
    {
        aff = aff + '<option>' + tab_rep[i] + '</option>';
    }
    aff = aff + '</select>';
    form = document.forms[nom_form];
    span = form.querySelector("#spl");
    span.innerHTML = aff;
}

function verif1(nom_form, k, message_err)
{
    form = document.forms[nom_form];
    reponse =  form.querySelector("#sel").value;
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    bout = form.querySelector(".bouton1");
    if (reponse == tab_rep[k])
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = "<b class='juste'>Bonne réponse !</b>";
        bout.style.color = "green";
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        span_mes.innerHTML = "<b class='faux2'>" + message_err + "</b>";
        bout.style.color = "red";
    }
}


function verif2(nom_form,  k, message_err)
{
    form = document.forms[nom_form];
    tab_radio = form.querySelectorAll('input[name="q1"][type="radio"]');
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    if (tab_radio[k].checked)
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = "<b class='juste'>Bonne réponse !</b>";
        bout.style.color = "green";
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        span_mes.innerHTML = "<b class='faux2'>" + message_err + "</b>";
        bout.style.color = "red";
    }
}


function verif(nom_form, j)
{
    l = tab[j].length;
    spm = document.forms[nom_form].querySelector(".spanmes");
    for (i = 0; i < l; i++)
    {
        verif1(tab[j][i][0], tab[j][i][1], i, j);
    }
    tab_juste = document.forms[nom_form].querySelectorAll(".juste");
    somme_juste = tab_juste.length;
    if (somme_juste == l)
    {
        spm.innerHTML = "<b class='juste2'>Validé.</b>";
    }
    else
    {
        spm.innerHTML = "<b class='faux2'>Non validé.</b>";
    }
}


function verif_exo(chaine, n)
{
    tab_juste = document.querySelectorAll(".juste");
    m = document.querySelector(".span_exo");
    l = tab_juste.length;
    if (l == 2 * n)
    {
        m.innerHTML = "<b class='juste2'>Exercice validé.</b>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem(chaine, 1);
        }
    }
    else
    {
        m.innerHTML = "<b class='faux2'>Exercice non validé.</b>";
    }
}