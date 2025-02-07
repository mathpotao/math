function trier(ta)
{
    for (let i = ta.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ta[i], ta[j]] = [ta[j], ta[i]];
  }
}

trier(ta);

function afficher_enonce(num, localStorage)
{
    codeHTML = "";
    for (nq=1; nq<=num; nq++)
    {
        codeHTML = codeHTML + `
            <div class="form-container">
                <form id="f` + nq + `">
                    <div class="question">
                        <b> ` + nq + `. </b>
                        ` + tab_enonce[ta[nq]][0] + 
                        `<br> <p> ` + tab_enonce[ta[nq]][1] + `</p>`;
        for (i=0; i<nb_prop; i++)
        {
            codeHTML = codeHTML + 
                        `
                        <label class="radio-container">
                            <input type="radio" name="q1">` + tab_prop[ta[nq]][i] + `
                            <span class="checkmark"></span>
                        </label>
                        `;
        }
        codeHTML = codeHTML +
                    `
                    </div>
                    <span id='sp1' class='ic_rep'> &emsp; </span>
                    <input class="bouton1" type="button" value="Valider" onClick="verif('f` + nq + `', ` + nq + `)" />
                    <br>
                    <span class='juste2' id="sp2"> &ensp; </span>
                </form>
            </div>
        `;
        codeHTML = codeHTML +
                    `
                    <span id='m1'></span> <br>
                    `;
    }
    codeHTML = codeHTML +
                    `
                    <p>
                        <input id='bv' class="bouton2" type="button" value="Valider l'exercice" onClick="verif_exo(`
                        + localStorage +
                        `,`
                        + num + `)" />
                        <span class="span_exo"></span>
                    </p>
                    `;
    spanForm = document.getElementById('form');
    spanForm.innerHTML = codeHTML;
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