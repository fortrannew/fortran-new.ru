function send_comment(param){
  var texts=param['texts'];
  var id_datas=param['id_datas'];
  if (texts==''){
    message_LCP('Напишите комментарий!','false');
    return;
  }

  function getXmlHttp(){
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (ee) {
      }
    }
    if (typeof XMLHttpRequest!='undefined') {
      return new XMLHttpRequest();
    }
  }

  var xhr = getXmlHttp();
  xhr.open("POST", "/themes/fortrannew/plugins/comment/ajax-comment.php", true);
  xhr.onreadystatechange = (function(){
    if (xhr.readyState != 4) return;
    clearTimeout(xhrTimeout);
    if (xhr.status == 200) {
      var data=JSON.parse(xhr.responseText);
      message_LCP(data.strings,'true');
      setTimeout(function () {
        location.reload();
      }, 3000);
      document.getElementById('comment_memo').value='';
    } else {
      message_LCP('Ошибка: '+xhr.statusText,'false');
      return;
    }
  });
  var obj_arr={
    action:'add_comment',
    texts:texts,
    id_datas:id_datas
  };
  if (typeof obj_arr==='object'){
    obj=JSON.stringify(obj_arr);
    obj=obj.replace(/":"/g,"=");
    obj=obj.replace(/","/g,"&");
    obj=obj.replace(/{"/g,"");
    obj=obj.replace(/"}/g,"");
  }
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset-UTF-8');
  xhr.send(obj);
  var xhrTimeout = setTimeout(function () {
    xhr.abort();
    handleError("Timeout");
  }, 10000);
}
