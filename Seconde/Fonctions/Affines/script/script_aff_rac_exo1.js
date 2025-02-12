ta = [];
for (i = 0; i < 7; i++)
{
  ta.push(i);
}

nb_prop = 4;

q = "La racine de $f$ est : ";
m = "La racine est la valeur qui annule la fonction.";

tab_enonce = [
        ["Soit $f(x)=-2x+4$", q, m],
        ["Soit $f(x)=2x-5$",  q, m],
        ["Soit $f(x)=7-x$",  q, m],
        ["Soit $f(x)=x-9$",  q, m],
        ["Soit $f(x)=3x+6$", q, m],
        ["Soit $f(x)=8-2x$", q, m],
        ["Soit $f(x)=-4x+1$", q, m]
    ];

tab_prop = [
        ["$-2$", "$2$", "$4$", "$0,5$"],
        ["$5$", "$2$", "$2,5$", "$-5$"],
        ["$7$", "$1$", "$-7$", "$-1$"],
        ["$1$", "$-1$", "$-9$", "$9$"],
        ["$-6$", "$-3$", "$-2$", "$3$"],
        ["$2$", "$0,25$", "$8$", "$4$"],
        ["$0,25$", "$-4$", "$4$", "$1$"]
    ];

tab_rep = [1, 2, 0, 3, 2, 3, 0];

