function edit_tabs(id_obj){
  var id_obj=(typeof id_obj!=='undefined')?id_obj:'';
  var block_tabs_content_arr=document.querySelectorAll('.block_tabs_content>div');
  for (var i = 0; i < block_tabs_content_arr.length; i++) {
    block_tabs_content_arr[i].style.display='none';
  }
  document.querySelectorAll('.'+id_obj)[0].style.display='block';
  var block_tabs_ul_arr=document.querySelectorAll('.block_tabs_ul>div');
  for (var i = 0; i < block_tabs_ul_arr.length; i++) {
    block_tabs_ul_arr[i].classList.remove('block_tabs_li_active');
  }
  document.querySelectorAll('.'+id_obj+'_li')[0].classList.add('block_tabs_li_active');
}

function char_all(){
  if (document.getElementsByClassName('char_all_down')[0].style.display=='none'){
    document.getElementsByClassName('char_all_down')[0].style.display='inline-block';
    document.getElementsByClassName('char_all_up')[0].style.display='none';
    document.getElementsByClassName('char_hidden_tr')[0].classList.add('char_hidden');
  } else {
    document.getElementsByClassName('char_all_down')[0].style.display='none';
    document.getElementsByClassName('char_all_up')[0].style.display='inline-block';
    document.getElementsByClassName('char_hidden_tr')[0].classList.remove('char_hidden');
  }
}

function services_td_title_click(id_class_check){
  document.getElementsByClassName(id_class_check)[0].onclick();
}

function services_td_check_click(){
  var checked_arr=document.querySelectorAll('.services_checkeder>.checked_default_div>.checked_default');
  var summ=parseFloat(document.getElementsByClassName('products_cena')[0].getAttribute('data-cena'));
  document.getElementsByClassName('services_cena')[0].classList.remove('services_cena_active');
  for (var i = 0; i < checked_arr.length; i++) {
    var checked_obj=checked_arr[i];
    var checked_obj_id=checked_obj.parentNode.parentNode.getAttribute('data-id');
    /*$(checked_obj).parent('.checked_default_div').parent('.services_checkeder').attr('data-id');*/
    summ+=parseFloat(document.getElementsByClassName('services_tbl_'+checked_obj_id)[0].getAttribute('data-cena'));
    document.getElementsByClassName('services_cena_id_'+checked_obj_id)[0].classList.add('services_cena_active');
  }
  document.getElementsByClassName('prod_serv_itogo')[0].innerHTML=summ+' руб.';
}
