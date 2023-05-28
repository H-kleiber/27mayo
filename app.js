/* ------------------- reto 1*------------------------------------*/

const title_drop=document.querySelector('.title_drop');
const section_drop=document.querySelector('.section_drop')

title_drop.addEventListener('click',()=>{

section_drop.classList.forEach(element => {
    if(element=='caja1'){
        section_drop.classList.remove('caja1')
    }else{
        section_drop.classList.add('caja1')
    }
});
})


/* ------------------- --------------------------------------------/
/* -------------------reto 2 ------------------------------------*/

 const title=document.getElementById("title1");
 const title2=document.getElementById("title2");
 const title3=document.getElementById("title3");
 const parrafo1=document.getElementById("parrafo1");
 const parrafo2=document.getElementById("parrafo2");
 const parrafo3=document.getElementById("parrafo3");


 title.addEventListener('click',()=>{
    parrafo1.classList.toggle('is_active')
 })
 title2.addEventListener('click',()=>{
    parrafo2.classList.toggle('is_active')
 })
 title3.addEventListener('click',()=>{
    parrafo3.classList.toggle('is_active')
 })
/* ------------------- ------------------------------------*/


/*-----------------reto 3--------------------------------------------------*/



const ventana=document.querySelector('.ventana');
const aside=document.querySelector('.aside')
ventana.addEventListener('click',()=>{

   document.querySelectorAll('aside').forEach(element => {

    if (element.childNodes.length===0){
        let html=document.createElement('section')
        let section=document.createElement('section')
        let div=document.createElement('input')
        div.setAttribute('placeholder','title model')
        let div2=document.createElement('input')
        div2.setAttribute('placeholder','modal body text goes here')
        let section2=document.createElement('section')
        let item1=document.createElement('button')
        item1.textContent='Close'
        let item2=document.createElement('button')
        item2.textContent='Save changes'
        html.classList.add('form')
        div.classList.add('div1')
        div2.classList.add('div2')
        section.classList.add('sectionform')
        section2.classList.add('sectionform2')
        item1.classList.add('item1')
        item2.classList.add('item2')
        html.appendChild(section)
        section.appendChild(div)
        section.appendChild(div2)
        section.appendChild(section2)
        section2.appendChild(item1)
        section2.appendChild(item2)
        aside.appendChild(html)
        ventana.setAttribute("disabled", "")

        document.querySelector('.item1').addEventListener('click',(e)=>{
            const el=e.target;
            const lis=el.parentNode, lit=lis.parentNode,sect=lit.parentNode ,padre=sect.parentNode;
            padre.removeChild(sect)
            ventana.removeAttribute("disabled")
        })
    }else{
       ventana.setAttribute("disabled", "")
    } 
   });
    
});
