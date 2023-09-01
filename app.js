var typed= new typed('.text',{
    String:['Frontend Developer', 'Python Developer', 'Web developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});




function showMenuItems(){
    const touch=document.getElementById('show');
    const menu=document.querySelector('.menu');
    menu.classList.toggle('menu-width');
    const toggled=menu.classList.contains('menu-width');
    touch.classList=toggled ? touch.innerHTML='X':touch.innerHTML='&equivDD;';
};

