function trier(ta)
{
    for (let i = ta.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ta[i], ta[j]] = [ta[j], ta[i]];
  }
}

trier(ta);

function afficher_enonce(id_span, i, j)
{
    document.getElementById(id_span).innerHTML = tab_prop[ta[i]][j];
}

function afficher_enonce3(num, id_span, tab_e)
{
    t = tab_e
    nq = num + 1;
    formHTML = `
        <div class="form-container">
            <form id="f` + num + `">
                <div class="question">
                    <b> ` + nq + `. </b>
                    ` + tab_enonce[ta[num]][0] + 
                    `<br> <p> ` + tab_enonce[ta[num]][1] + `</p>
                    <label class="radio-container">
                        <input type="radio" name="q1">` + tab_prop[ta[num]][0] + `
                        <span class="checkmark"></span>
                    </label>
                    <label class="radio-container">
                        <input type="radio" name="q1">` + tab_prop[ta[num]][1] + `
                        <span class="checkmark"></span>
                    </label>
                    <label class="radio-container">
                        <input type="radio" name="q1">` + tab_prop[ta[num]][2] + `
                        <span class="checkmark"></span>
                    </label>
                    <label class="radio-container">
                        <input type="radio" name="q1">` + tab_prop[ta[num]][3] + `
                        <span class="checkmark"></span>
                    </label>
                </div>
                <span id='sp1' class='ic_rep'> &emsp; </span>
                <input class="bouton1" type="button" value="Valider" onClick="verif('f` + num + `', ` + num + `)" />
                <br>
                <span class='juste2' id="sp2"> &ensp; </span>
            </form>
        </div>
    `;
    spanForm = document.getElementById(id_span);
    spanForm.innerHTML = formHTML;
}


function verif(nom_form,  k)
{
    form = document.forms[nom_form];
    tab_radio = form.querySelectorAll('input[name="q1"][type="radio"]');
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    if (tab_radio[tab_rep[ta[k]]].checked)
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = `<b class='juste'>Bonne réponse !</b>`;
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        mes_err = `<b class="faux2">` + tab_enonce[ta[k]][2] + `</b>`;
        span_mes.innerHTML = mes_err;
    }
}


function verif_exo(chaine, n)
{
    tab_juste = document.querySelectorAll(".juste");
    m = document.querySelector(".span_exo");
    l = tab_juste.length;    
    bout = document.getElementById('bv');
    if (l == 2 * n)
    {
        m.innerHTML = "<b class='juste2'>Exercice validé.</b>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem(chaine, 1);
            bout.style.backgroundColor = "green";

        }
    }
    else
    {
        m.innerHTML = "<b class='faux2'>Exercice non validé.</b>";
        bout.style.backgroundColor = "red";
    }
}