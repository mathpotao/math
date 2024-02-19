prop1 = ['"0" />5','"0" />3','"0" />-5','"0" />5/3','"1" />-3','"0" />3/5','"0" />-5/3','"0" />-3/5'];
prop2 = ['"0" />5','"0" />-5','"0" />45','"0" />-45','"1" />9','"0" />-9','"0" />5/9','"0" />9/5'];
prop3 = ['"0" />-18','"0" />3','"1" />18','"0" />-3','"0" />6','"0" />-6','"0" />2','"0" />-2'];
prop4 = ['"0" />42','"1" />14','"0" />-14','"0" />-42','"0" />6','"0" />-6','"0" />7','"0" />-7','"0" />21','"0" />-21'];
prop5 = ['"0" />-1','"1" />1','"0" />2','"0" />-2','"0" />0','"0" />1/2','"0" />-1/2','"0" />12','"0" />-12','"0" />4'];
prop = [prop1,prop2,prop3,prop4,prop5];
tq = ['q1', 'q2','q3','q4','q5'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"'];
tnb = [0,0,0,0,0,0,0,0];
nbp = 8;

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

function verification(nb)
{
    var somme=0;
    var tab = document.getElementsByName("sq");
    var afrep = document.getElementById("message");
    for (var question=1; question<=nb; question++)
    {
        var tableau_de_questions = document.forms['quizz'].elements['q'+question];
        var mauvais = true;
        for(var i=0; i<tableau_de_questions.length;i++)
	    {
	        if (tableau_de_questions[i].checked && tableau_de_questions[i].value=="1")
	        {
	            somme++;
                mauvais=false;
                tab[question-1].innerHTML="<b class='juste'>&#10004;</b>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
	    }
        if (mauvais)
        {
            tab[question-1].innerHTML="<b class='faux'>&#10060;</b>";
            init(question-1);
        }
    }
    if (somme==nb)
    {
        afrep.innerHTML="<span class='reponse_juste'>"+"Toutes les réponses sont correctes ! Quiz validé.";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('affines_q1',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
