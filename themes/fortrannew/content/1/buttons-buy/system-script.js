function korzina_button_buy(ids){
  var basket=JSON.parse(getCookie('basket'));
  var basket_index={};
  if (typeof basket['id']!=='undefined'){
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      basket_index[basket['id'][i]]=i+1;
    }
  }
  if (typeof basket_index[ids]==='undefined'){
    if (basket<=0){
      // создать массив
      var basket={};
      basket['id']={};
      basket['count']={};
      basket['id'][0]={};
      basket['count'][0]={};
      basket['id'][0]['prod']=ids;
      basket['count'][0]['prod']='1';
      if (document.getElementsByClassName('checked_default_all').length>0){
        var serv_k=0;
        basket['id'][0]['services']={};
        basket['count'][0]['services']={};
        for (var i = 0; i < document.getElementsByClassName('checked_default_all').length; i++) {
          var chech_services_obj=document.getElementsByClassName('checked_default_all')[i];
          if (chech_services_obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.contains('checked_default')===true){
            basket['id'][0]['services'][serv_k]=chech_services_obj.getAttribute('data-id');
            basket['count'][0]['services'][serv_k]='1';
            serv_k++;
          }
        }
      }
      setCookie('basket',JSON.stringify(basket));
    } else {
      // добавить в массив
      var basket_count=Object.keys(basket['id']).length;
      basket['id'][basket_count]={};
      basket['count'][basket_count]={};
      basket['id'][basket_count]['prod']=ids;
      basket['count'][basket_count]['prod']='1';
      if (document.getElementsByClassName('checked_default_all').length>0){
        var serv_k=0;
        basket['id'][basket_count]['services']={};
        basket['count'][basket_count]['services']={};
        for (var i = 0; i < document.getElementsByClassName('checked_default_all').length; i++) {
          var chech_services_obj=document.getElementsByClassName('checked_default_all')[i];
          if (chech_services_obj.getElementsByClassName('checked_default_div')[0].getElementsByClassName('facheck')[0].classList.contains('checked_default')===true){
            basket['id'][basket_count]['services'][serv_k]=chech_services_obj.getAttribute('data-id');
            basket['count'][basket_count]['services'][serv_k]='1';
            serv_k++;
          }
        }
      }
      setCookie('basket',JSON.stringify(basket));
    }
  } else {
    location.href='/trash/';
  }
}

function korzina_button_show(id_button_show){
  var buttons_arr=document.querySelectorAll('[data-class="buttons_arr"]');
  for (var i = 0; i < buttons_arr.length; i++) {
    buttons_arr[i].style.display='none';
  }
  document.querySelectorAll('[data-class-basket="'+id_button_show+'"]')[0].style.display='block';
}

function get_count_basket(){
  var basket=JSON.parse(getCookie('basket'));
  if ((basket=='') || (typeof basket==='undefined')){
    return 0;
  } else {
    return Object.keys(basket['id']).length;
  }
  return 0;
}
