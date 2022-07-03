function mobile_nav_button_close(){
document.getElementsByClassName('mobile_nav')[0].style.right='-100%';
document.body.style.overflowY='auto';
document.body.style.position='relative';
document.getElementsByClassName('mobile_nav')[0].style.display='none';
}

function mobile_nav_button(){
document.getElementsByClassName('mobile_nav')[0].style.display='block';
document.body.style.overflowY='hidden';
document.body.style.position='fixed';
document.getElementsByClassName('mobile_nav')[0].style.right='0%';
}

function search(classer){
location.href='/search?search_str='+$('#'+classer).val();
}

function cabinet(){
  if (document.getElementsByClassName('panel_yprav_ul_ul')[0].style.display=='block'){
    document.getElementsByClassName('panel_yprav_ul_ul')[0].style.display='none';
  } else {
    document.getElementsByClassName('panel_yprav_ul_ul')[0].style.display='block';
  }
}
