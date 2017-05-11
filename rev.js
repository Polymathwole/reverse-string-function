module.exports=
{
reverseString:(sentence)=>
    {
        let reverse="";

        if (sentence==="")
            return null;

        for(let count=sentence.length-1;count>=0;--count)
            reverse+=sentence[count];

        if (sentence===reverse)
            return true;

        return reverse;       
    }
}