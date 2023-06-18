const container=document.querySelector(".container");
for(let index=0;index<30;index++)
{
  const colorcontainer=document.createElement("div");
  colorcontainer.classList.add("color-container");
  container.appendChild(colorcontainer);
}
const colorcontainera=document.querySelectorAll(".color-container");
generatecolor();
function  generatecolor()
{
  colorcontainera.forEach(
    (colorconta)=>{
      const newcolorcode=randomcolor();
colorconta.style.backgroundColor="#"+newcolorcode
      colorconta.innerText="#"+newcolorcode;
  });
}
function randomcolor()
{
  const chars="0123456789abcdef";
  const colorlength=6;
  let colorcode="";
  for(let i=0;i<6;i++)
  {
    const randomnum=Math.floor(Math.random() * chars.length); 
    colorcode+=chars.substring(randomnum,randomnum+1);
  }
  return colorcode;
}