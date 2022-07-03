function accvhodbut(){
  $.ajax({
    url:"/autorization/ajax.php",
    type:"post",
    datatype:"JSON",
    data:{
      email:$('#emailj').val(),
      password:$('#passjes').val(),
      ini:$('#ini').val(),
    },
    success:function(data){
      if (data.errors=='true'){
        $('#passjes').val('');
        $('#ini').val('');
        location.href=data.strings;
      } else {
        message_LCP(data.strings,'false');
        $('#passjes').val('');
      }
    },
    error:function(data){
      message_LCP('Ошибка','false');
    }
  });
}

function accvosstbut(param){
  var email=param['email'];
  if (email==''){
    message_LCP('Укажите Вашу электронную почту!','false');
    return;
  }
  $.ajax({
    url:"/autorization/ajax-vosst.php",
    type:"post",
    datatype:"JSON",
    data:{
      action:'accvosstbut',
      email:email
    },
    success:function(data){
      if (data.errors=='true'){
        popup_vosst_close();
        message_LCP(data.strings,'true');
        eval(data.functions)(data.param_arr[0],data.param_arr[1],data.param_arr[2]);
      } else {
        message_LCP(data.strings,'false');
      }
    },
    error:function(data){
      message_LCP('Ошибка','false');
    }
  });
}

function accvosstsmeenbut(param){
  var email=param['email'];
  var pass=param['pass'];
  var vosst=param['vosst'];
  var auth=param['auth'];
  if ((email=='')||(vosst=='')||(auth=='')){
    message_LCP('Пользователь не найден!','false');
    return;
  }
  if (pass==''){
    message_LCP('Укажите новый пароль!','false');
    return;
  }
  $.ajax({
    url:'/autorization/ajax-vosst.php?auth='+auth,
    type:'post',
    datatype:'JSON',
    data:{
      action:'accvosstsmeenbut',
      email:email,
      pass:pass,
      vosst:vosst,
      auth:auth
    },
    success:function(data){
      if (data.errors=='true'){
        setTimeout(function () {
          location.href='/lcp-admin/';
        }, 1000);
        message_LCP(data.strings,'true');
        eval(data.functions)(data.param_arr[0]);
      } else {
        message_LCP(data.strings,'false');
      }
    },
    error:function(data){
      message_LCP('Ошибка','false');
    }
  });
}

function accregbut(param){
  var name=param['name'];
  var family=param['family'];
  var otchest=param['otchest'];
  var phone=param['phone'];
  var email=param['email'];
  var pass=param['pass'];
  var pass2=param['pass2'];
  if ((name=='')||(email=='')||(pass=='')||(pass2=='')){
    message_LCP('Укажите все обязательные поля! Они указаны звездочкой (*)','false');
    return;
  }
  if (pass!=pass2){
    message_LCP('Пароли не совпадают! Попробуйте ввести их еще раз!','false');
    return;
  }
  $.ajax({
    url:'/autorization/ajax-reg.php',
    type:'post',
    datatype:'JSON',
    data:{
      action:'accregbut',
      name:name,
      family:family,
      otchest:otchest,
      phone:phone,
      email:email,
      pass:pass
    },
    success:function(data){
      if (data.errors=='true'){
        message_LCP(data.strings,'true');
        setTimeout(function () {
          location.href='/lcp-admin/';
        }, 2000);
      } else {
        message_LCP(data.strings,'false');
      }
    },
    error:function(data){
      message_LCP('Ошибка','false');
    }
  });
}
