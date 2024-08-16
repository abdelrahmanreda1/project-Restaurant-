let btn=document.getElementById('top');

window.onscroll= function()
{
  if(scrollY >= 1000)
  {
    btn.style.display='block'
  }
  else
  {
    btn.style.display='none'
  }
}

btn.onclick= function()
{
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}