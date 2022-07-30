function _openMenu(){
    document.getElementById('navMobe').style.height='254px'
    document.getElementById('navMobe').style.opacity='1'
    document.getElementsByClassName('openM')[0].style.opacity='0'
    document.getElementsByClassName('closeM')[0].style.opacity='1'
}
function _closeMenu(){
    document.getElementById('navMobe').style.height='2px'
    document.getElementById('navMobe').style.opacity='0'
    document.getElementsByClassName('openM')[0].style.opacity='1'
    document.getElementsByClassName('closeM')[0].style.opacity='0'
}

function popup (){
    document.getElementsByClassName ('ins')[0].style.transform='translate(-30px,-100px)'
    document.getElementsByClassName ('lin')[0].style.transform='translate(100px,-30px)'
    document.getElementsByClassName ('git')[0].style.transform='translate(-150px,-30px)'
    document.getElementsByClassName ('erase')[0].style.transform='translate(-30px,40px)'
}
function _close (){
    document.getElementsByClassName ('ins')[0].style.transform='translate(-30px,-30px)'
    document.getElementsByClassName ('lin')[0].style.transform='translate(-30px,-30px)'
    document.getElementsByClassName ('git')[0].style.transform='translate(-30px,-30px)'
    document.getElementsByClassName ('erase')[0].style.transform='translate(-30px,-30px)'
}


