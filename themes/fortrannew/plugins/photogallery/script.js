function photogallery_shop(link){
  var link=(typeof link!=='undefined')?link:'';
  if (link==''){
    var href=document.getElementsByClassName('photos_gallery_images_flates')[0].getAttribute('src');
  } else {
    var href=link;
  }
  document.getElementsByClassName('photogallery_field_img')[0].setAttribute('src',href);

  document.getElementsByClassName('photogallery_block')[0].style.display='block';
  if (document.getElementsByClassName('photogallery_field_img')[0].clientWidth>document.getElementsByClassName('photogallery_field_img')[0].clientHeight){
    document.getElementsByClassName('photogallery_field_img')[0].style.width='100%';
  } else {
    document.getElementsByClassName('photogallery_field_img')[0].style.height='100%';
  }
  var photogallery_width=document.getElementsByClassName('photogallery_field_img')[0].width;

  var photogallery_left_width=(window.innerWidth-document.getElementsByClassName('photogallery_field_img')[0].offsetLeft-document.getElementsByClassName('photogallery_field_img')[0].clientWidth)+'px';
  document.getElementsByClassName('left_photogallery_block')[0].width=photogallery_left_width;
  document.getElementsByClassName('right_photogallery_block')[0].width=photogallery_left_width;

  /*document.getElementsByClassName('back_shop')[0].classList.add('photogallery_block_display_none');*/
}

function photogallery_left(){
  var num_main_image = document.getElementsByClassName('photos_gallery_shop_mini_photos_active_flates')[0].firstElementChild.getAttribute('data-num');
  if (num_main_image>0){
    num_main_image--;
    var photos_gallery_shop_mini_photos_flates_arr=document.getElementsByClassName('photos_gallery_shop_mini_photos_flates');
    for (var i = 0; i < photos_gallery_shop_mini_photos_flates_arr.length; i++) {
      if (photos_gallery_shop_mini_photos_flates_arr[i].firstElementChild.getAttribute('data-num')==num_main_image){
        photos_gallery_shop_mini_photos_flates_arr[i].onclick();
        break;
      }
    }
    photogallery_shop();
  }
}

function photogallery_right(){
  var num_main_image = document.getElementsByClassName('photos_gallery_shop_mini_photos_active_flates')[0].firstElementChild.getAttribute('data-num');
  if (num_main_image<document.getElementsByClassName('photos_gallery_shop_mini_photos_flates').length){
    num_main_image++;
    var photos_gallery_shop_mini_photos_flates_arr=document.getElementsByClassName('photos_gallery_shop_mini_photos_flates');
    for (var i = 0; i < photos_gallery_shop_mini_photos_flates_arr.length; i++) {
      if (photos_gallery_shop_mini_photos_flates_arr[i].firstElementChild.getAttribute('data-num')==num_main_image){
        photos_gallery_shop_mini_photos_flates_arr[i].onclick();
        break;
      }
    }
    photogallery_shop();
  }
}

function close_photogallery_block(){
  document.getElementsByClassName('photogallery_block')[0].style.display='none';
  /*$('.back_shop').removeClass('photogallery_block_display_none');*/
}


/*function miniphotos_resize(){
  alert('resize');
  var width_all=$('.photos_gallery_shop_mini_all_flates').innerWidth()-$('.photos_gallery_shop_left_buttons_flates').innerWidth()-$('.photos_gallery_shop_right_buttons').innerWidth()-10;
    if ($('.photos_gallery_shop_mini_scroll_flates').width()>=420){
      $('.photos_gallery_shop_mini_scroll_flates').css('max-width',width_all+'px');
      $('.photos_gallery_shop_l_r_buttons_flates').css('display','block');
    } else {
      $('.photos_gallery_shop_mini_scroll_flates').css('max-width','420px');
      $('.photos_gallery_shop_l_r_buttons_flates').css('display','none');
    }
}*/

/*function click_button_right_shop(){
$('.photos_gallery_shop_mini_scroll_flates').scrollLeft($('.photos_gallery_shop_mini_scroll_flates').scrollLeft()+($('.photos_gallery_shop_mini_photos_flates').innerWidth()*2));
}*/

/*function click_button_left_shop(){
  alert('left');
$('.photos_gallery_shop_mini_scroll_flates').scrollLeft($('.photos_gallery_shop_mini_scroll_flates').scrollLeft()-($('.photos_gallery_shop_mini_photos_flates').innerWidth()*2));
}*/

function click_photos_mini(obj){
var href=obj.children[0].getAttribute('src');
document.getElementsByClassName('photos_gallery_images_flates')[0].setAttribute('src',href);
document.getElementsByClassName('photos_gallery_images_a_flates')[0].setAttribute('onclick','photogallery_shop(\''+href+'\');');
var photos_gallery_shop_mini_photos_flates_arr=document.getElementsByClassName('photos_gallery_shop_mini_photos_flates');
for (var i = 0; i < photos_gallery_shop_mini_photos_flates_arr.length; i++) {
  photos_gallery_shop_mini_photos_flates_arr[i].classList.remove('photos_gallery_shop_mini_photos_active_flates');
}
obj.classList.add('photos_gallery_shop_mini_photos_active_flates');
}



window.onload = function() {
  if (document.getElementsByClassName('photogallery_field_img')[0].clientWidth>document.getElementsByClassName('photogallery_field_img')[0].clientHeight){
    document.getElementsByClassName('photogallery_field_img')[0].style.width='100%';
  } else {
    document.getElementsByClassName('photogallery_field_img')[0].style.height='100%';
  }
  var obj_phoros_gallery_mini_arr=document.getElementsByClassName('photos_gallery_shop_mini_photos_flates');
  for (var i = 0; i < obj_phoros_gallery_mini_arr.length; i++) {
    obj_phoros_gallery_mini_arr[i].setAttribute('onclick','click_photos_mini(this);');
  }
};
