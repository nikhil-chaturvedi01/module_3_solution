const menubar =document.getElementById('menu_bar');
const closebar =document.getElementById('closebar');
const openbar =document.getElementById('openbar');

if(openbar){
    openbar.addEventListener('click',()=>{
        menubar.classList.add('show-menu');
    })
}
if(closebar){
    closebar.addEventListener('click',()=>{
        menubar.classList.remove('show-menu');
    })

}