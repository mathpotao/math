function fait(chaine)
{
    /* localStorage.clear(); */
    if(typeof localStorage!='undefined') 
    {
        nf = localStorage.getItem(chaine);
        if(nf==null) 
        {
            nf = 0;
            localStorage.setItem(chaine,nf);
        }
        if (nf == 1)
        {
            aff = "<span class='fait'>";
        }
        else
        {
            aff = "<span class='non_fait'>";
        }     
    }
    else
    {
        aff = "<span>";
    }
    document.write(aff);
}