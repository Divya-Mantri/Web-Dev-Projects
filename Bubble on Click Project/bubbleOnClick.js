
document.body.addEventListener('click',(event)=>
{
    //Creating Element Div
    const element= document.createElement('div');
    element.innerHTML='Hey';
        
    //Creating id of that element div as bubble 
    const attribute=document.createAttribute('class');
    attribute.value="bubble";
    element.setAttributeNode(attribute);
    
    //Adding it to the body
    const parent=document.body;
    parent.appendChild(element);

    const color=["White","Violet","Indigo","blue","green","yellow","orange","red"];
    const random=Math.floor(Math.random()*color.length);

    element.style.color= color[random];

     
    const x = event.clientX;
    const y = event.clientY;

    element.style.left=`${x-50}px`;
    element.style.top=`${y-50}px`;

    setTimeout(()=>
    {document.querySelector('.bubble').remove()},5000);
})
