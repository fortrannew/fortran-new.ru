function lcp_checked_img(obj,param){
  var checked=param['checked'];
  if (checked=='checked_change'){
    checked=(obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.contains('checked_default')===true)?'false':'true';
  }
  if (checked=='true'){
    obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.remove('nochecked_default');
    obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.add('checked_default');
  } else
  if (checked=='false'){
    obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.remove('checked_default');
    obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.add('nochecked_default');
  } else
  if (checked=='has_checked'){
    return (obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.contains('checked_default')===true)?'true':'false';
  }
}
