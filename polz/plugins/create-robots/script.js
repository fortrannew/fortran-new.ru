function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}




if (typeof $==='undefined'){
document.getElementById('form_all').style.display='none';
// Ошибка. jQuery не подключен!
include('/components/system/jquery/jquery-new/jquery.min.js');
}




var year_start=2000;
var toyearses = new Date();
var year_end=toyearses.getFullYear();

function new_list_for_formes(){
   for (var i = year_start; i <= year_end; i++) {
     toyearses_block='';
     toyearses_block+='<div class="i_block_table_all table_form">';
     toyearses_block+='<div class="i_block_table_row">';
     toyearses_block+='<div class="i_block_table column_1_3">';
     toyearses_block+='<input type="checkbox" name="chek_'+i+'" id="chek_'+i+'" class="checked_formes" '+((i==year_end)?'checked="checked"':'')+' >';
     toyearses_block+='</div>';
     toyearses_block+='<div class="i_block_table column_3">';
     toyearses_block+='<label for="chek_'+i+'" class="labeles">'+i+' год</label>';
     toyearses_block+='</div>';
     toyearses_block+='</div>';
     toyearses_block+='</div>';
     document.write(toyearses_block);
   }
}

function generation_for_formes(){
  var url=document.getElementById('URL').value;
  var sitemap1=document.getElementById('sitemap1').value;
  var sitemap2=document.getElementById('sitemap2').value;
  var sitemap3=document.getElementById('sitemap3').value;
  var sitemap4=document.getElementById('sitemap4').value;
  var url1=document.getElementById('URL1').value;
  var url2=document.getElementById('URL2').value;
  var url3=document.getElementById('URL3').value;
  var url4=document.getElementById('URL4').value;
  var vubor=document.getElementById('vubor_for_formeser').value;
  var checkeder=$('.checked_formes').serialize();
  $.ajax({
	url:"/polz/plugins/create-robots/ajax.php?generate=set",
	type:"post",
	datatype:"JSON",
	data:{
    url:url,
    sitemap1:sitemap1,
    sitemap2:sitemap2,
    sitemap3:sitemap3,
    sitemap4:sitemap4,
    url1:url1,
    url2:url2,
    url3:url3,
    url4:url4,
    vubor:vubor,
    checkeder:checkeder
	},
	success:function(data){
    if (data.error=='false'){
      $('#textarea_output').val(data.string);
      $('#form_output').css('display','block');
    } else {
      message_LCP(data.string,data.error);
    }
	},
	error:function(data){
	message_LCP('Ошибка',false);
	}
});
}

function CopyToClipboardFormes(elem) {
  	  // create hidden text element, if it doesn't already exist
      var targetId = "_hiddenCopyText_";
      var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
      var origSelectionStart, origSelectionEnd;
      if (isInput) {
          // can just use the original source element for the selection and copy
          target = elem;
          origSelectionStart = elem.selectionStart;
          origSelectionEnd = elem.selectionEnd;
      } else {
          // must use a temporary form element for the selection and copy
          target = document.getElementById(targetId);
          if (!target) {
              var target = document.createElement("textarea");
              target.style.position = "absolute";
              target.style.left = "-9999px";
              target.style.top = "0";
              target.id = targetId;
              document.body.appendChild(target);
          }
          target.textContent = elem.textContent;
      }
      // select the content
      var currentFocus = document.activeElement;
      target.focus();
      target.setSelectionRange(0, target.value.length);

      // copy the selection
      var succeed;
      try {
      	  succeed = document.execCommand("copy");
      } catch(e) {
          succeed = false;
      }
      // restore original focus
      if (currentFocus && typeof currentFocus.focus === "function") {
          currentFocus.focus();
      }

      if (isInput) {
          // restore prior selection
          elem.setSelectionRange(origSelectionStart, origSelectionEnd);
      } else {
          // clear temporary content
          target.textContent = "";
      }
      return succeed;
}
