function afficher_select(id_select, k)
{
    l = prop[k].length;
    aff = '<select class="menu2" id="'+ id_select +'l" name="n1" width="5">';
    aff = aff + '<option selected="selected"></option>';
    for (var i = 0; i < l; i++)
    {
        aff = aff + '<option>' + prop[k][i] + '</option>';
    }
    aff = aff + '</select>';
    span = document.getElementById(id_select);
    span.innerHTML = aff;
}

function verif1(id_select, id_span, i, j)
{
    reponse =  document.getElementById(id_select).value;
    span_ic = document.getElementById(id_span);
    if (reponse == rep[j][i])
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
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

function verif2(nom_form, id_span, j)
{
    l = tab[j].length;
    spm = document.forms[nom_form].querySelector(".spanmes");
    span_ic = document.getElementById(id_span);
    somme_juste = 0;
    for (i = 0; i < l; i++)
    {
        reponse =  document.getElementById(tab[j][i]).value;
        if (reponse == rep[j][i])
        {
            somme_juste++;
        }
    }
    if (somme_juste == l)
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        spm.innerHTML = "<b class='juste2'>Validé.</b>";
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        spm.innerHTML = "<b class='faux2'>Non validé.</b>";
    }
}

function verif_exo(chaine, n)
{
    tab_juste = document.querySelectorAll(".juste");
    m = document.querySelector(".span_exo");
    l = tab_juste.length;
    if (l == n)
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