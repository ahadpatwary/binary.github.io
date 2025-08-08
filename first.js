let  countries = ['DECIMAL TO BINARY','DECIMAL TO OCTAL','DECIMAL TO HEXADECIMAL','DECIMAL TO BINARY WITH POINT','DECIMAL TO OCTAL WITH POINT','DECIMAL TO HEXADECIMAL WITH POINT','BINARY TO DECIMAL','BINARY TO OCTAL','BINARY TO HEXADECIMAL','BINARY TO DECIMAL WITH POINT','BINARY TO OCTAL WITH POINT','BINARY TO HEXADECIMAL WITH POINT','OCTAL TO DECIMAL','OCTAL TO BINARY','OCTAL TO HEXADECIMAL','OCTAL TO DECIMAL WITH POINT','OCTAL TO BINARY WITH POINT','OCTAL TO HEXADECIMAL WITH POINT','HEXADECIMAL TO DECIMAL','HEXADECIMAL TO BINARY','HEXADECIMAL TO OCTAL','HEXADECIMAL TO DECIMAL WITH POINT','HEXADECIMAL TO BINARY WITH POINT','HEXADECIMAL TO OCTAL WITH POINT','BINARY + BINARY','BINARY + BINARY(WITHPOINT)','OCTAL + OCTAL','OCTAL + OCTAL(WITHPOINT)','HEXADECIMAL + HEXADECIMAL','HEXADECIMAL + HEXADECIMAL(WITHPOINT)'];
const bar=document.querySelector('#bar');
const icon=document.querySelector('#icon');
const menu=document.querySelector('#menu');
const text=document.querySelector('#text');
const form=document.querySelector('#form');
const input=document.querySelectorAll('.input');
const button=document.querySelectorAll('button');
const output=document.querySelector('#finalAns');
const note1=document.querySelector('#note1');
const note=document.querySelector('#note');
const form1=document.querySelector('#form0');
let input1=document.querySelector('#input');
let ul=document.createElement('ul');
input1.setAttribute('autocomplete', 'off');
input.value=null;
ahad(input1,countries)
let k=0;
function ahad(input,arr)
{
    input.addEventListener('input',(e)=>
    {
        k=-1;
        ul.remove();
        let val=input.value.trim();
        ul=document.createElement('ul');
        input.before(ul);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && val!=='') 
            {
                ul.classList.add('newClass');
                li=document.createElement('li');
                ul.appendChild(li);
                li.innerHTML=`<b><u>${arr[i].substr(0,val.length)}</u></b><span>${arr[i].substr(val.length,arr[i].length)}</span>`;
                li.classList.add('newClass1'); 
            }
        }
    })

    input.addEventListener("keydown", (e)=> {
        if(e.keyCode == 40)
        {
            k++;
            if(k>=ul.childNodes.length)
            {
                k=0;
            }
            ul.childNodes[k].style.border='2px solid red';
            for(let i=0;i<ul.childNodes.length;i++)
            {
                if(ul.childNodes[k]!==ul.childNodes[i])
                {
                    ul.childNodes[i].style.border='none';
                }

            }
        }
        if(e.keyCode==38)
        {
            k--;
            if(k<0)
            {
                k=ul.childNodes.length-1;
            }
            ul.childNodes[k].style.border='2px solid red';
            for(let i=0;i<ul.childNodes.length;i++)
            {
                if(ul.childNodes[k]!==ul.childNodes[i])
                {
                    ul.childNodes[i].style.border='none';
                }

            }
        }
        if(e.keyCode==13 && k!=-1) 
        {
            e.preventDefault();
            input.value=(ul.childNodes[k].childNodes[0].childNodes[0].innerHTML+ul.childNodes[k].childNodes[1].innerHTML);
            ul.childNodes[k].style.border='none';
            form1[1].click();
            ul.remove();
        }
        form1.addEventListener('submit',(e)=>{
            e.preventDefault();
            ul.remove();
        })

    });

    document.addEventListener("click", (e)=> {

        if(e.target.tagName=='LI')
        {
            input.value=e.target.childNodes[0].childNodes[0].innerHTML+e.target.childNodes[1].innerHTML;
            ul.remove();
        }
        if(e.target.tagName=='SPAN')
        {
            input.value=e.target.previousElementSibling.childNodes[0].innerHTML+e.target.innerHTML;
            ul.remove();
        }
        if(e.target.tagName=='U')
        {
            input.value=e.target.innerHTML+e.target.parentElement.nextElementSibling.innerHTML;
            ul.remove();
        }

    });
}



note1.setAttribute('spellcheck', 'false');
let ext=0;
let ext1=0;
input[0].setAttribute('autocomplete', 'off');
icon.addEventListener('click',function ahad(e){
    form1.style.cssText='display:none;'
    bar.style.width='350px';
    bar.style.transition='width 3s ease';
    menu.style.transition='all 2.8s ease';
    let el=document.createElement('div');
    el.innerHTML='<p>X</P>';
    bar.append(el);
    bar.classList.add('icon1');
    menu.style.left='10px';
    el.classList.add('cros');
    bar.lastChild.addEventListener('click',function akbor(e){
        setTimeout(()=>{
            form1.style.cssText='display:auto';
        },3000)
        menu.style.left='-350px';
        bar.removeChild(el);
        bar.style.width='40px';
        icon.addEventListener('click',ahad);
    })
    icon.removeEventListener('click',ahad);
})


let point=true;
form.addEventListener('input',(e)=>{
    e.target.value=e.target.value.toUpperCase();
})

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    form1[0].value=form1[0].value.toUpperCase();
    countries.forEach((valuee)=>{
        if(form1[0].value==valuee)
        {
            text.innerHTML=form1[0].value;
            robot();
            form1[0].value=null;
        }
    })
})


button.forEach(val=>{
    val.addEventListener('click',function komola(){
        text.innerHTML=val.childNodes[1].innerHTML;
        robot();
    })
})
      

function robot()
{
    if(text.innerHTML=='BINARY + BINARY' ||text.innerHTML=='OCTAL + OCTAL'|| text.innerHTML=='HEXADECIMAL + HEXADECIMAL'|| text.innerHTML=='BINARY - BINARY'|| text.innerHTML=='OCTAL - OCTAL'|| text.innerHTML=='HEXADECIMAL - HEXADECIMAL'|| text.innerHTML=='BINARY + BINARY(WITHPOINT)' ||text.innerHTML=='OCTAL + OCTAL(WITHPOINT)'|| text.innerHTML=='HEXADECIMAL + HEXADECIMAL(WITHPOINT)'|| text.innerHTML=='BINARY - BINARY(WITHPOINT)'|| text.innerHTML=='OCTAL - OCTAL(WITHPOINT)'|| text.innerHTML=='HEXADECIMAL - HEXADECIMAL(WITHPOINT)' )
    {
        if(point)
        {
            input[0].style.cssText='display:none;';
            input[1].style.cssText='display:none;';
            for(let i=0;i<2;i++)
            {
                let el=document.createElement('input');
                form.append(el);
                el.style.cssText='margin:3px; height:40px; border-radius:30px; outline:none; padding-left:20px';
                el.setAttribute('placeholder', 'GIVE ME VALID VALUE');
            }
            let el=document.createElement('input');
            form.append(el);
            el.setAttribute('type','submit');
            el.setAttribute('value','SUBMIT');
            el.style.cssText='margin:3px; height:40px; border-radius:30px; width:60px'
            point=false;
        }
    
    }
    else
    {
        if(!point)
        {
        input[0].style.cssText='display:auto;';
        input[1].style.cssText='display:auto;';
        form[4].remove();
        form[3].remove();
        form[2].remove();
        }
        point=true;
    }
        
}
        
input[0].addEventListener('dblclick',(e)=>{
    input[0].value=null;
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let value=input[0].value;
    abid(value);
})
function abid(value)
{

   //...............................DECIMAL TO ______......................


    if(text.innerHTML=='DECIMAL TO BINARY')
    {
        let out=decimalToBOH(value,2);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='DECIMAL TO BINARY WITH POINT')
    {
        let out=decimalToBOHWithPoint(value,2);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='DECIMAL TO OCTAL')
    {
        let out=decimalToBOH(value,8);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='DECIMAL TO OCTAL WITH POINT')
    {
        let out= decimalToBOHWithPoint(value,8);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='DECIMAL TO HEXADECIMAL')
    {
        let out=decimalToBOH(value,16);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='DECIMAL TO HEXADECIMAL WITH POINT')
    {
        let out=decimalToBOHWithPoint(value,16);
        output.innerHTML=out;
    }


        
    //...........................________TO DECIMAL..........................


    else if(text.innerHTML=='BINARY TO DECIMAL')
    {
        let out=BOHToDecimal(value,2);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='BINARY TO DECIMAL WITH POINT')
    {
        let out=BOHToDecimalWithPoint(value,2);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='OCTAL TO DECIMAL')
    {
        let out=BOHToDecimal(value,8);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='OCTAL TO DECIMAL WITH POINT')
    {
        let out=BOHToDecimalWithPoint(value,8);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='HEXADECIMAL TO DECIMAL')
    {
        let out=BOHToDecimal(value,16);
        output.innerHTML=out;
    }
    else if(text.innerHTML=='HEXADECIMAL TO DECIMAL WITH POINT')
    {
        let out=BOHToDecimalWithPoint(value,16);
        output.innerHTML=out;
    }




    else if(text.innerHTML=='BINARY TO OCTAL')
    {
        let anss=binaryToOctal(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='BINARY TO OCTAL WITH POINT')
    {
        let anss=binaryToOctalWithPoint(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='BINARY TO HEXADECIMAL')
    {
        let anss=binaryToHex(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='BINARY TO HEXADECIMAL WITH POINT')
    {
        let anss=binaryToHexWithPoint(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='OCTAL TO BINARY')
    {
        let anss=octalToBinary(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='OCTAL TO BINARY WITH POINT')
    {
        let anss=octalToBinaryWithPoint(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='HEXADECIMAL TO BINARY')
    {
        let anss=hexadecimalToBinary(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='HEXADECIMAL TO BINARY WITH POINT')
    {
        let anss=hexadecimalToBinaryWithPoint(value);
        output.innerHTML=anss;
    }
    else if(text.innerHTML=='OCTAL TO HEXADECIMAL')
    {
        let ans=octalToBinary(value);
        let ans1=binaryToHex(ans);
        output.innerHTML=ans1;
    }
    else if(text.innerHTML=='OCTAL TO HEXADECIMAL WITH POINT')
    {
        let ans=octalToBinaryWithPoint(value);
        let ans1=binaryToHexWithPoint(ans);
        output.innerHTML=ans1;
    }
    else if(text.innerHTML=='HEXADECIMAL TO OCTAL')
    {
        let ans=hexadecimalToBinary(value);
        let ans1=binaryToOctal(ans);
        output.innerHTML=ans1;
    }
    else if(text.innerHTML=='HEXADECIMAL TO OCTAL WITH POINT')
    {
        let ans=hexadecimalToBinaryWithPoint(value);
        let ans1=binaryToOctalWithPoint(ans);
        output.innerHTML=ans1;
    }





    else if(text.innerHTML=='BINARY + BINARY')
    {
        let {outt,outt1}= result(form[2].value,form[3].value);
        let ans=binaryJog(outt,outt1);   
        output.innerHTML=`(${ext}) ${ans}`;
        ext=0;
    }
    else if(text.innerHTML=='BINARY + BINARY(WITHPOINT)')
    {
        let {out,out1}= result1(form[2].value.split('.')[1],form[3].value.split('.')[1]);
        let ans=binaryJog(out,out1);
        let {outt,outt1}=result(form[2].value.split('.')[0],form[3].value.split('.')[0]);
        let ans1=binaryJog(outt,outt1);
        output.innerHTML=`(${ext}) ${ans1}.${ans}`;
        ext=0;
    }
    else if(text.innerHTML=='BINARY - BINARY')
    {
        let {outt,outt1}= result(form[2].value,form[3].value);
        let ans=binaryBiyog(outt,outt1);   
        output.innerHTML=`(${ext1}) ${ans}`;
        ext1=0;
    }
    else if(text.innerHTML=='BINARY - BINARY(WITHPOINT)')
    {
        let {out,out1}= result1(form[2].value.split('.')[1],form[3].value.split('.')[1]);
        let ans=binaryBiyog(out,out1);
        let {outt,outt1}=result(form[2].value.split('.')[0],form[3].value.split('.')[0]);
        let ans1=binaryBiyog(outt,outt1);
        output.innerHTML=`(${ext1}) ${ans1}.${ans}`;
        ext1=0;
    }
    else if(text.innerHTML=='OCTAL + OCTAL')
    {
        console.log(form[2].value,form[3].value);
        let ans=octalToBinary(form[2].value);
        let ans1=octalToBinary(form[3].value);
        let {outt,outt1}= result(ans,ans1);
        console.log(outt,outt1);
        let anss=binaryJog(outt,outt1);
        let anss1=binaryToOctal(ext+anss);
        console.log(ans,anss1);
        output.innerHTML=anss1;
        ext=0;
    }
    else if(text.innerHTML=='OCTAL + OCTAL(WITHPOINT)')
    {
        let an=octalToBinaryWithPoint(form[2].value);
        let an1=octalToBinaryWithPoint(form[3].value);
        let {out,out1}= result1(an.split('.')[1],an1.split('.')[1]);
        let ans=binaryJog(out,out1);
        let {outt,outt1}=result(an.split('.')[0],an1.split('.')[0]);
        let ans1=binaryJog(outt,outt1);
        let anss=ext+ans1+'.'+ans;
        let anss1=binaryToOctalWithPoint(anss);
        output.innerHTML=anss1;
        ext=0;
    } 
    else if(text.innerHTML=='OCTAL - OCTAL')
    {
        let ans=octalToBinary(form[2].value);
        let ans1=octalToBinary(form[3].value);
        let {outt,outt1}= result(ans,ans1);
        let anss=binaryBiyog(outt,outt1);
        let anss1=binaryToOctal(ext1+anss);
        output.innerHTML=anss1;
        ext1=0;
    }
    else if(text.innerHTML=='OCTAL - OCTAL(WITHPOINT)')
    {
        let an=octalToBinaryWithPoint(form[2].value);
        let an1=octalToBinaryWithPoint(form[3].value);
        let {out,out1}= result1(an.split('.')[1],an1.split('.')[1]);
        let ans=binaryBiyog(out,out1);
        let {outt,outt1}=result(an.split('.')[0],an1.split('.')[0]);
        let ans1=binaryBiyog(outt,outt1);
        let anss=ext1+ans1+'.'+ans;
        let anss1=binaryToOctalWithPoint(anss);
        output.innerHTML=anss1;
        ext1=0;
    }
    else if(text.innerHTML=='HEXADECIMAL + HEXADECIMAL')
    {
        let ans=hexadecimalToBinary(form[2].value);
        let ans1=hexadecimalToBinary(form[3].value);
        let {outt,outt1}= result(ans,ans1);
        let anss=binaryJog(outt,outt1);
        let anss1=binaryToHex(ext+anss);
        output.innerHTML=anss1;
        ext=0;
    }
    else if(text.innerHTML=='HEXADECIMAL - HEXADECIMAL')
    {
        let ans=hexadecimalToBinary(form[2].value);
        let ans1=hexadecimalToBinary(form[3].value);
        let {outt,outt1}= result(ans,ans1);
        let anss=binaryBiyog(outt,outt1);
        let anss1=binaryToHex(ext1+anss);
        output.innerHTML=ext1+anss1;
        ext1=0;
    }
    else if(text.innerHTML=='HEXADECIMAL + HEXADECIMAL(WITHPOINT)')
    {
        let an=hexadecimalToBinaryWithPoint(form[2].value);
        let an1=hexadecimalToBinaryWithPoint(form[3].value);
        let {out,out1}= result1(an.split('.')[1],an1.split('.')[1]);
        let ans=binaryJog(out,out1);
        let {outt,outt1}=result(an.split('.')[0],an1.split('.')[0]);
        let ans1=binaryJog(outt,outt1);
        let anss=ext1+ans1+'.'+ans;
        let anss1=binaryToHexWithPoint(anss);
        output.innerHTML=anss1;
        ext1=0;
    }
    else if(text.innerHTML=='HEXADECIMAL - HEXADECIMAL(WITHPOINT)')
    {
        let an=hexadecimalToBinaryWithPoint(form[2].value);
        let an1=hexadecimalToBinaryWithPoint(form[3].value);
        let {out,out1}= result1(an.split('.')[1],an1.split('.')[1]);
        let ans=binaryBiyog(out,out1);
        let {outt,outt1}=result(an.split('.')[0],an1.split('.')[0]);
        let ans1=binaryBiyog(outt,outt1);
        let anss=ext1+ans1+'.'+ans;
        let anss1=binaryToHexWithPoint(anss);
        output.innerHTML=anss1;
        ext1=0;
    }
}





function binaryToHex(value)
{
    let str=value.split(".")[0];
    let ans='';
    let ans1='';
    for(let i=str.length-1;i>=0;i=i-4)
    {
        ans='';
        for(let j=i-3;j<=i;j++)
        {
            if(str[j]==undefined)
            {
                continue;
            }
            ans+=str[j];
        }
        while(ans.length<4)
        {
            ans="0"+ans;
        }
        hex.forEach((val,id)=>{
            if(val==ans)
            {
                if(id>9)
                {
                    let id1= String.fromCharCode(id+55);
                    ans1=id1+ans1;
                }
                else
                {
                    ans1=id+ans1;
                }
            }
        })
    }
    return ans1;
}

function binaryToHexWithPoint(value)
{
    let anss=binaryToHex(value);
    let str=value.split(".")[1];
    let ans='';
    let ans1='';
    for(let i=0;i<str.length;i=i+4)
    {
        ans='';
        for(let j=i;j<=i+3;j++)
        {
            if(str[j]==undefined)
            {
                continue;
            }
            ans+=str[j];
        }
        while(ans.length<4)
        {
            ans=ans+'0';
        }
        hex.forEach((val,id)=>{
            if(val==ans)
            {
                if(id>9)
                {
                    let id1= String.fromCharCode(id+55);
                    ans1=ans1+id1;
                }
                else
                {
                    ans1=ans1+id;
                }
            }
        })
    }
    return anss+'.'+ans1;
}

function binaryToOctal(value)
{
    let str=value.split(".")[0];
    let ans='';
    let ans1='';
    for(let i=str.length-1;i>=0;i=i-3)
    {
        ans='';
        for(let j=i-2;j<=i;j++)
        {
            if(str[j]==undefined)
            {
                continue;
            }
            ans+=str[j];
        }
        while(ans.length<3)
        {
            ans="0"+ans;
        }
        oct.forEach((val,id)=>{
            if(val==ans)
            {
                ans1=id+ans1;
            }
        })
    }
    return ans1;
}

function binaryToOctalWithPoint(value)
{
    let anss=binaryToOctal(value);
    let str=value.split(".")[1];
    let ans='';
    let ans1='';
    for(let i=0;i<str.length;i=i+3)
    {
        ans='';
        for(let j=i;j<=i+2;j++)
        {
            if(str[j]==undefined)
            {
                continue;
            }
            ans+=str[j];
        }
        while(ans.length<3)
        {
            ans=ans+'0';
        }
        oct.forEach((val,id)=>{
            if(val==ans)
            {
                ans1=ans1+id;
            }
        })
    }
    return anss+'.'+ans1;
}

function octalToBinary(value)
{
    let ans='';
    for(i of value)
    {
        ans=ans+oct[Number(i)];
    }
    return ans;
}

function octalToBinaryWithPoint(value)
{
    let str=value.split('.')[0];
    let ans='';
    for(let i of str)
    {
        ans=ans+oct[Number(i)];
    }
    let str1=value.split('.')[1];
    let ans1='';
    for(let i of str1)
    {  
        ans1=ans1+oct[Number(i)];
    }
    return ans+'.'+ans1;
}

function hexadecimalToBinary(value)
{
    let ans='';
    for(i of value)
    {
        if(i=='A' ||i=='B' ||i=='C' ||i=='D' ||i=='E' ||i=='F' )
        {
            i=i.charCodeAt(0)-55;
        }
        ans=ans+hex[Number(i)];
    }
    return ans;
}

function hexadecimalToBinaryWithPoint(value)
{
    let str=value.split('.')[0];
    let ans='';
    for(let i of str)
    {
        if(i=='A' ||i=='B' ||i=='C' ||i=='D' ||i=='E' ||i=='F' )
        {
            i=i.charCodeAt(0)-55;
        }
        ans=ans+hex[Number(i)];
    }
    let str1=value.split('.')[1];
    let ans1='';
    for(let i of str1)
    {  
        if(i=='A' ||i=='B' ||i=='C' ||i=='D' ||i=='E' ||i=='F' )
        {
            i=i.charCodeAt(0)-55;
        }
        ans1=ans1+hex[Number(i)];
    }
    return ans+'.'+ans1;
}




//...............................DECIMAL TO ______......................

function decimalToBOH(value,kk)
{
    let c='';
    let n= BigInt(value);
    
    while(n>0)
    {
        let k=(n% BigInt(kk));
        if(k>9)
        {
            let m=String(k+BigInt(55));
            k=(String.fromCharCode(Number(m)));
        }
        c=c+String(k);
        n=(n/BigInt(kk));
    }
    let s=c.length;
    let m='';
    for(let i=s-1;i>=0;i--){
        m=m+c[i];
    }
    return m;
}

function decimalToBOHWithPoint(value,kk)
{

    let valuee=value.split('.')[0];
    let anss=decimalToBOH(valuee,kk);
    
    let ans='';
    let str=`0.${value.split('.')[1]}`;
    console.log(str);
   
    for(let i=0;i<14;i++)
    {
        let ans1=parseInt((Number(str)*kk));
        if(ans1>9)
        {
            ans1= String.fromCharCode(ans1+55);
        }
        ans=ans+ ans1;
        str='0'+'.'+String(Number(str)*kk).split('.')[1];
        console.log(str);
    }
    return anss+'.'+ans;
}



//...........................________TO DECIMAL..........................
function BOHToDecimal(value,kk)
{
    let ans=0n;
    let str=value.split('.')[0];
    let m=str.length;
    for(i of str)
    {
        if(i=='A' ||i=='B' ||i=='C' ||i=='D' ||i=='E' ||i=='F')
        {
            i=i.charCodeAt(0)-55;
        }
        m--;
        ans=ans+BigInt(Number(i)*(kk**m));
    }
    return ans;
}

function BOHToDecimalWithPoint(value,kk)
{
    let ans=BOHToDecimal(value,kk);
    let ans1=binaryToWith(value,kk);
    let str=String(ans1);
    let str1=str.split(".")[1];
    let totalAns=String(ans)+'.'+str1;
    return totalAns;
}



//.................................EXTRA PART.............................

function binaryToWith(value,kk)
{
    let m=0;
    let ans=0;
    let str=value.split(".")[1];
    for(i of str)
    {
        if(i=='A' ||i=='B' ||i=='C' ||i=='D' ||i=='E' ||i=='F')
        {
            i=i.charCodeAt(0)-55;
        }
        m--;
        ans=ans+(Number(i)*(kk**m));
    }
    return ans;
    
}

function result(outt,outt1)
{
    if(outt.length>outt1.length)
    {
        while(outt.length!=outt1.length)
        {
            outt1='0'+outt1;
        }
    }
    else 
    {
        while(outt.length!=outt1.length)
        {
            outt='0'+outt;
        }
    }
    return {outt,outt1};

}

function result1(out,out1)
{
    if(out.length>out1.length)
    {
        while(out.length!=out1.length)
        {
            out1=out1+'0';
        }
    }
    else 
    {
        while(out.length!=out1.length)
        {
            out=out+'0';
        }
    }
    return {out,out1};
}

function binaryJog(out,out1)
{
    console.log('a',out,out1);
    let ans='';
  
    for(let i=out.length-1;i>=0;i--)
    {
        if(out[i]==0 && out1[i]==0)
        {
            if(ext)
            {
                ans='1'+ans;
                ext=0;
            }
            else
            {
                ans='0'+ans;
            }
        }
        else if((out[i]==0 && out1[i]==1) || (out[i]==1 && out1[i]==0))
        {
            if(ext)
            {
                ans='0'+ans;
                ext=1;
            }
            else
            {
                ans='1'+ans;
            }
        }
        else
        {
            if(ext)
            {
                ans='1'+ans;
                ext=1;
            }
            else
            {
                ans='0'+ans;
                ext=1;
            }
        }
    } 
    return ans ;
}

function binaryBiyog(out,out1)
{
    let ans='';
     
    for(let i=out.length-1;i>=0;i--)
    {
        if(out[i]==0 && out1[i]==0)
        {
            if(ext1==0)
            {
                ans='0'+ans;        
            }
            else
            {
                ans='1'+ans; 
            }
        }
        else if(out[i]==0 && out1[i] ==1)
        {
            if(ext1==0)
            {
                ans='1'+ans;
                ext1=1;
            }
            else
            {
                ans='0'+ans;
                ext1=1;
            }
        }
        else if(out[i]==1 && out1[i]==0)
        {
            if(ext1==0)
            {
                ans='1'+ans;
            }
            else
            {
                ans='0'+ans;
                ext1=0;
            }
        }
        else
        {
            if(ext1==0)
            {
                ans='0'+ans;
            }
            else
            {
                ans='1'+ans;
            }
        }
    }

    return ans ;
}


let hex=['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001','1010','1011','1100','1101','1110','1111'];
let oct=['000','001','010','011','100','101','110','111'];