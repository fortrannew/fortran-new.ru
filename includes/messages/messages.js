var message_arr=[]; // все блоки с сообщениями
var message_arr_count=0; // кол-во блоков с сообщениями
var message_arr_start=0; // первый доступный элемент массива
var message_timer_arr=[];
var message_timer_count=[];
var adder=0;
var deleter=0;

/*Настройки функции message_LCP*/
var current_elem_width='200px'; // Задать ширину блока
var current_elem_float='left'; // Расположить блок по левому или правому блоку ('left','right')
var current_elem_left='10px'; // При расположении по левому краю, задать отступ
var current_elem_right='40px'; // При расположении по правому краю, задать отступ
var current_elem_top='25'; // Задать отступ сверху (без 'px')
var current_elem_margin='5'; // Задать расстояние между блоками (без 'px')
var message_timer_pause='2000'; // пауза (1000=1сек)
/*End Настройки функции message_LCP*/

function message_LCP(message,bool){
/*Показ блока*/
document.getElementById('message_error_div').style.display='block';
document.getElementById('message_error_div').style[current_elem_float]=((current_elem_float)=='left'?current_elem_left:((current_elem_float)=='right'?current_elem_right:''));
// $('.message_error_div').css('display','block');
// $('.message_error_div').css(current_elem_float,((current_elem_float)=='left'?current_elem_left:((current_elem_float)=='right'?current_elem_right:'')));
/*End Показ блока*/

/*Проверка входных переменных*/
if (typeof message==='undefined'){
var message='';
}
if (typeof bool==='undefined'){
var bool='true';
}
/*End Проверка входных переменных*/

/*Создание элементов*/
var elem_color=(''+bool=='true')?'background:#006600':'background:#ff0000';
var elem='<div class="message_error_red" id="message_error_red'+message_arr_count+'" style="'+elem_color+';width:'+current_elem_width+';margin-bottom:'+current_elem_margin+';display:none;">'+message+'</div>';

document.getElementById('message_error_div').innerHTML = document.getElementById('message_error_div').innerHTML+elem;
// $('#message_error_div').append(elem);
message_arr_count++;
// current_elem=$('#message_error_red'+(message_arr_count-1));
var current_elem=document.getElementById("message_error_red"+(message_arr_count-1));
/*End Создание элементов*/

/*Изменение позиции*/
if (message_arr_start!=(message_arr_count-1)){
/*Остальные элементы*/
// var mes_offset_prev_top=message_arr[(message_arr_count-2)].top;
// var mes_offset_prev_height=(message_arr[(message_arr_count-2)].height);
// var curr_elem_top=parseFloat(mes_offset_prev_top)+parseFloat(mes_offset_prev_height)+parseFloat(current_elem_margin);
// var current_elem_height=current_elem.outerHeight();
var disp=current_elem.style.display;
current_elem.style.display='block';
var current_elem_height=current_elem.offsetHeight;
current_elem.style.display=disp;
// $(current_elem).css('top',curr_elem_top+'px');
/*End Остальные элементы*/
} else {
/*Первый элемент*/
// var curr_elem_top=current_elem_top;
// var current_elem_height=current_elem.outerHeight();
var disp=current_elem.style.display;
current_elem.style.display='block';
var current_elem_height=current_elem.offsetHeight;
current_elem.style.display=disp;
// $(current_elem).css('top',curr_elem_top+'px');
/*End Первый элемент*/
}
/*End Изменение позиции*/

/*Добавление нового блока*/
message_arr[(message_arr_count-1)]={
    elem:'message_error_red'+(message_arr_count-1),
    // top:curr_elem_top,
    timer:(parseInt(timer_count)+parseInt(message_timer_pause)),
    height: current_elem_height,
    display: 'none'
  };
/*End Добавление нового блока*/

// message_new_position();

message_new_position();

if (''+timer_enabled=='false'){
  ticks();
}
}

/*Для дальнейшего удаления блока*/
var timer_count=0;
var timer_enabled='false';
function ticks() {
timer_enabled='true';
timer_count=timer_count+10;
  if (timer_count>message_arr[message_arr_start].timer){
    if (adder==0){
  // message_timer_arr[message_arr_count-1]
  if (deleter==0){
      message_new_position_del();
  if (message_arr_start==message_arr_count){
    document.getElementById('message_error_div').style.display='none';
    // $('.message_error_div').css('display','none');
    timer_enabled='false';
  clearTimeout(message_timer);
} else {
  message_timer=setTimeout(ticks, 300);
}
} else {
  message_timer=setTimeout(ticks, 400);
}

} else {
  message_timer=setTimeout(ticks, 300);
}
  } else {
    message_timer=setTimeout(ticks, 10);
  }
}
/*End Для дальнейшего удаления блока*/




function message_new_position(){
  adder=1;
  var dfgdg=message_arr_count;
  for (var x = message_arr_start; x < message_arr_count; x++) {
    /*Изменение позиции*/
    if ((message_arr_start!=message_arr_count)&&(x>message_arr_start)){
    /*Остальные элементы*/
    var mes_offset_prev_top=message_arr[x-1].top;
    var mes_offset_prev_height=message_arr[x-1].height;
    var curr_elem_top=parseFloat(mes_offset_prev_top)+parseFloat(mes_offset_prev_height)+parseFloat(current_elem_margin);
    /*End Остальные элементы*/
    } else {
    /*Первый элемент*/
    var curr_elem_top=current_elem_top;
    /*End Первый элемент*/
    }
    /*End Изменение позиции*/

    /*Изменение блока*/
    message_arr[x].top=curr_elem_top;
    document.getElementById(message_arr[x].elem).style.top=curr_elem_top+'px';
    // $(message_arr[x].elem).css('top',curr_elem_top+'px');
    if (message_arr[x].display=='none'){
      message_arr[x].display='block';
      document.getElementById('message_error_red'+x).style.display='block';
      // $('#message_error_red'+x).show('slide', {direction: current_elem_float}, 100);
      /*Добавление анимации*/
      // document.getElementById('message_error_red'+x).style.display='block';
      document.getElementById('message_error_red'+x).style.transition='all 0.3s';
      // $('#message_error_red'+x).css('transition','all 0.3s');
      /*End Добавление анимации*/
      setTimeout(function () {
        if (dfgdg==message_arr_count){
        adder=0;
      }
    }, 300);
  }
    /*End Изменение блока*/
  }
}

function message_new_position_del(){
  deleter=1;
  document.getElementById(message_arr[message_arr_start].elem).style.display='none';
  // $(message_arr[message_arr_start].elem).hide();
  message_arr_start++;
  y=message_arr_count;
  for (var x = message_arr_start; x < y; x++) {
    /*Изменение позиции*/
    if ((message_arr_start!=y)&&(x>message_arr_start)){
    /*Остальные элементы*/
    var mes_offset_prev_top=message_arr[x-1].top;
    var mes_offset_prev_height=message_arr[x-1].height;
    var curr_elem_top=parseFloat(mes_offset_prev_top)+parseFloat(mes_offset_prev_height)+parseFloat(current_elem_margin);
    /*End Остальные элементы*/
    } else {
    /*Первый элемент*/
    var curr_elem_top=current_elem_top;
    /*End Первый элемент*/
    }
    /*End Изменение позиции*/

    /*Изменение блока*/
    message_arr[x].top=curr_elem_top;
    document.getElementById(message_arr[x].elem).style.top=curr_elem_top+'px';
    // $(message_arr[x].elem).css('top',curr_elem_top+'px');
    /*End Изменение блока*/
  }
  setTimeout(function () {
    deleter=0;
  }, 400);
}
