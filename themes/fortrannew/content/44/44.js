function basket_delete(ids,ids_parent){ // 1677,1382
  var basket=JSON.parse(getCookie('basket'));
  var k_ids_parent=-1; // индекс родительского эл-та
  var k_ids=-1; // индекс дочернего эл-та
  if (ids_parent!='-1'){
    /*---определить индекс родителя, дочернего эл-та, и удалить дочерний элемент---*/
    if (typeof basket['id']!=='undefined'){
      // поиск индекс родителя
      for (var i = 0; i < Object.keys(basket['id']).length; i++) {
        if (basket['id'][i]['prod']==ids_parent){
          k_ids_parent=i;
          break;
        }
      }


      // поиск индекса дочернего элемента
      if (typeof basket['id'][k_ids_parent]['services']!=='undefined'){
        if (Object.keys(basket['id'][k_ids_parent]['services']).length>0){
          for (var i = 0; i < Object.keys(basket['id'][k_ids_parent]['services']).length; i++) {
            if (basket['id'][k_ids_parent]['services'][i]==ids){
              k_ids=i;
              break;
            }
          }
        }
      }
    }

    //  проверка доступности элементов для удаления
    if ((k_ids_parent=='-1') || (k_ids=='-1')){
      alert('Элемент для удаления не найден!');
      return;
    }

    // удаление дочернего элемента
    var basket_new_elem=Object.values(basket['id'][k_ids_parent]['services']);
    basket_new_elem.splice(k_ids,1);
    basket['id'][k_ids_parent]['services']=Object.assign({},basket_new_elem);
    var basket_new_elem_count=Object.values(basket['count'][k_ids_parent]['services']);
    basket_new_elem_count.splice(k_ids,1);
    basket['count'][k_ids_parent]['services']=Object.assign({},basket_new_elem_count);
  } else {
    /*---определить индекс родителя, и удалить родительский эл-т со всеми дочерними---*/
    if (typeof basket['id']!=='undefined'){
      // поиск индекс родителя
      for (var i = 0; i < Object.keys(basket['id']).length; i++) {
        if (basket['id'][i]['prod']==ids){
          k_ids=i;
          break;
        }
      }
    }

    //  проверка доступности элементов для удаления
    if (k_ids=='-1'){
      alert('Элемент для удаления не найден!');
      return;
    }

    // удаление родительского элемента
    var basket_new_elem=Object.values(basket['id']);
    basket_new_elem.splice(k_ids,1);
    basket['id']=Object.assign({},basket_new_elem);
    var basket_new_elem_count=Object.values(basket['count']);
    basket_new_elem_count.splice(k_ids,1);
    basket['count']=Object.assign({},basket_new_elem_count);
  }

  setCookie('basket',JSON.stringify(basket));
  if (Object.keys(basket['id']).length<=0){
    deleteCookie('basket');
    location.reload();
  }
  if (ids_parent=='-1'){
    $('.products_tr_'+ids).remove();
  }
  basket_count_update();
  /*
  if (typeof basket['id']!=='undefined'){
    var k=0;
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      if (!((basket['id'][i]['prod']==ids)&&(action=='products'))){
        basket_new['id'][k]={};
        basket_new['count'][k]={};
        basket_new['id'][k]['prod']={};
        basket_new['count'][k]['prod']={};
        basket_new['id'][k]['prod']=basket['id'][i]['prod'];
        basket_new['count'][k]['prod']=basket['count'][i]['prod'];
        if (typeof basket['id'][i]['services']!=='undefined'){
          if (Object.keys(basket['id'][i]['services']).length>0){
            basket_new['id'][k]['services']={};
            basket_new['count'][k]['services']={};
            var k_services=0;
            for (var i2 = 0; i2 < Object.keys(basket['id'][i]['services']).length; i2++) {
              if (!((basket['id'][i]['services'][i2]==ids)&&(action=='services'))){
                basket_new['id'][k]['services'][k_services]=basket['id'][i]['services'][i2];
                basket_new['count'][k]['services'][k_services]=basket['count'][i]['services'][i2];
                k_services++;
              }
            }
          }
        }
        k++;
      }
    }
    setCookie('basket',JSON.stringify(basket_new));
    if (Object.keys(basket_new['id']).length<=0){
      deleteCookie('basket');
      location.reload();
    }
    if (action=='products'){
      $('.products_tr_'+ids).remove();
    }
    basket_count_update();
  }*/
}

function basket_plus(ids){
  var basket=JSON.parse(getCookie('basket'));
  if (typeof basket['id']!=='undefined'){
    var curr=0;
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      if (basket['id'][i]['prod']==ids){
        curr=i;
      }
    }
    basket['count'][curr]['prod']=parseInt((basket['count'][curr]['prod']!=='null')?basket['count'][curr]['prod']:'0')+parseInt('1');
    setCookie('basket',JSON.stringify(basket));
    basket_count_update();
  }
}

function basket_minus(ids){
  var basket=JSON.parse(getCookie('basket'));
  if (typeof basket['id']!=='undefined'){
    var curr=0;
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      if (basket['id'][i]['prod']==ids){
        curr=i;
      }
    }
    basket['count'][curr]['prod']=parseInt((basket['count'][curr]['prod']!=='null')?basket['count'][curr]['prod']:'1')-parseInt('1');
    if (basket['count'][curr]['prod']<=0){
      basket['count'][curr]['prod']='1';
    }
    setCookie('basket',JSON.stringify(basket));
    basket_count_update();
  }
}

function basket_change(ids){
  var basket=JSON.parse(getCookie('basket'));
  if (typeof basket['id']!=='undefined'){
    var curr=0;
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      if (basket['id'][i]['prod']==ids){
        curr=i;
      }
    }
    if ($('#basket_products_value_'+ids).val()>0){
      basket['count'][curr]['prod']=$('#basket_products_value_'+ids).val();
    }
    setCookie('basket',JSON.stringify(basket));
    basket_count_update();
  }
}

function basket_count_update(){
  var basket=JSON.parse(getCookie('basket'));
  var product_itog_all=0;
  if (typeof basket['id']!=='undefined'){
    for (var i = 0; i < Object.keys(basket['id']).length; i++) {
      var product_cena=$('#product_cena_'+basket['id'][i]['prod']).attr('data-cena');
      var product_itog=product_cena*basket['count'][i]['prod'];
      $('#basket_products_value_'+basket['id'][i]['prod']).val(basket['count'][i]['prod']);
      $('#product_itog_'+basket['id'][i]['prod']).html(product_itog+' руб.');
      product_itog_all+=parseFloat(product_itog);
      if (typeof basket['id'][i]['services']!=='undefined'){
        $('.products_tr_'+basket['id'][i]['prod']+' .services_itog_td').html('0 руб.');
        for (var i2 = 0; i2 < Object.keys(basket['id'][i]['services']).length; i2++) {
          var services_cena=$('.products_tr_'+basket['id'][i]['prod']+' #services_cena_'+basket['id'][i]['services'][i2]).attr('data-cena');
          var services_itog=services_cena*basket['count'][i]['services'][i2];
          $('.products_tr_'+basket['id'][i]['prod']+' #services_itog_'+basket['id'][i]['services'][i2]).html(services_itog+' руб.');
          product_itog_all+=parseFloat(services_itog);
        }
      }
    }
  }
  $('#product_itog_all').html(product_itog_all+' руб.');
}

function services_td_title_click(id_class_check){
  $('.'+id_class_check).click();
}

function services_td_check_click(ids_prod,ids_services){ // 1382, 1677
  // var checked_arr=$('.services_checkeder>.checked_default_div>.checked_default');
  // var summ=parseFloat($('.products_cena').attr('data-cena'));
  // $('.services_cena').removeClass('services_cena_active');
  // for (var i = 0; i < checked_arr.length; i++) {
    //   var checked_obj=$(checked_arr).eq(i);
    //   var checked_obj_id=$(checked_obj).parent('.checked_default_div').parent('.services_checkeder').attr('data-id');
    //   summ+=parseFloat($('.services_tbl_'+checked_obj_id).attr('data-cena'));
    //   $('.services_cena_id_'+checked_obj_id).addClass('services_cena_active');
    // }
    // $('.prod_serv_itogo').html(summ+' руб.');
    var basket=JSON.parse(getCookie('basket'));
    if (typeof basket['id']!=='undefined'){
      var curr_prod=-1;
      for (var i = 0; i < Object.keys(basket['id']).length; i++) {
        if (basket['id'][i]['prod']==ids_prod){
          curr_prod=i; // 2
        }
      }
      if (typeof basket['id'][curr_prod]['services']==='undefined'){
        basket['id'][curr_prod]['services']={};
        basket['count'][curr_prod]['services']={};
      }
      var curr_services=-1;
      for (var i = 0; i < Object.keys(basket['id'][curr_prod]['services']).length; i++) {
        if (basket['id'][curr_prod]['services'][i]==ids_services){
          curr_services=i;
        }
      }
      if (curr_services=='-1'){
        var k_services=Object.keys(basket['id'][curr_prod]['services']).length;
        basket['id'][curr_prod]['services'][k_services]=ids_services;
        basket['count'][curr_prod]['services'][k_services]='1';
        setCookie('basket',JSON.stringify(basket));
      } else {
        basket_delete(ids_services,ids_prod);
      }
      basket_count_update();
    }
  }

function payment_li_click(ids){
  $('.korbuyoplat').removeClass('payment_active');
  $('.korbuyoplat[data-id="'+ids+'"]').addClass('payment_active');
}

function save_contacts(param){
  var names=param['names'];
  var address=param['address'];
  var address_index=param['address_index'];
  var phone=param['phone'];
  var email=param['email'];
  var dopol=param['dopol'];
  var product_fizich=param['product_fizich'];
  var product_services=param['product_services'];
  var product_electron=param['product_electron'];
  var shag=param['shag'];

  if (((product_services=='1') || (product_electron=='1'))&&(email=='')){
    message_LCP('Поле "Email" обязательно для заполнения!','false');
    return;
  }
  if ((phone=='') && (email=='')){
    message_LCP('Укажите Email или телефон!','false');
    return;
  }
  $.ajax({
  url:"/themes/fortrannew/content/44/ajax-basket.php",
  type:"post",
  datatype:"JSON",
  data:{
    action:'save_contacts',
    shag:shag,
    names:names,
    address:address,
    address_index:address_index,
    phone:phone,
    email:email,
    dopol:dopol
  },
  success:function(data){
    if (data.errors=='true'){
      location.href=data.strings;
    } else {
      message_LCP(data.strings,'false');
    }
  },
  error:function(data){
  message_LCP('Ошибка AJAX!','false');
  }
  });
}




function save_delivery(param){
  var id_delivery=param['id_delivery'];
  var cena_delivery=param['cena_delivery'];
  var product_fizich=param['product_fizich'];
  var product_services=param['product_services'];
  var product_electron=param['product_electron'];
  var shag=param['shag'];

  if (id_delivery==''){
    message_LCP('Выберите один из способов доставки!','false');
    return;
  }

  $.ajax({
  url:"/themes/fortrannew/content/44/ajax-basket.php",
  type:"post",
  datatype:"JSON",
  data:{
    action:'save_delivery',
    shag:shag,
    id_delivery:id_delivery,
    cena_delivery:cena_delivery
  },
  success:function(data){
    if (data.errors=='true'){
      location.href=data.strings;
    } else {
      message_LCP(data.strings,'false');
    }
  },
  error:function(data){
  message_LCP('Ошибка AJAX!','false');
  }
  });
}






function save_payment(param){
  var id_payment=param['id_payment'];
  var product_fizich=param['product_fizich'];
  var product_services=param['product_services'];
  var product_electron=param['product_electron'];
  var shag=param['shag'];

  if (id_payment==''){
    message_LCP('Выберите один из способов оплаты!','false');
    return;
  }

  $.ajax({
  url:"/themes/fortrannew/content/44/ajax-basket.php",
  type:"post",
  datatype:"JSON",
  data:{
    action:'save_payment',
    shag:shag,
    id_payment:id_payment
  },
  success:function(data){
    if (data.errors=='true'){
      $('.content_html_zakaz').html(data.strings);
    } else {
      message_LCP(data.strings,'false');
    }
  },
  error:function(data){
  message_LCP('Ошибка AJAX!','false');
  }
  });
}
