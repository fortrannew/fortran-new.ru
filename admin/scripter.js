/* Автоматический вход в систему при нажатии на "Enter" */
function runScript(e) {
    if (e.keyCode == 13) {
        document.getElementById("vhoddinn").click();
        return false;
    }
}
/* Конец автоматического входа в систему при нажатии на "Enter" */

/* Автоматический вход в систему при заказах при нажатии на "Enter" */
function runScript2(e) {
    if (e.keyCode == 13) {
        document.getElementById("vhoddinn2").click();
        return false;
    }
}
/* Конец автоматического входа в систему при заказах при нажатии на "Enter" */

/* Автоматическое нажатие на любую кнопку с идентификатором */
function runScriptEnter(classer,e) {
    if (e.keyCode == 13) {
        document.getElementById(classer).click();
        return false;
    }
}
/* Конец Автоматическое нажатие на любую кнопку с идентификатором */


// /*--------------POPUP--------------*/
//
// /* Закрытие окна Войти*/
// function accauntvhodclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntvhodmaintbl').style.width='0';
// document.getElementById('accauntvhodmaintbl').style.height='0';
// document.getElementById('accauntvhodmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Войти*/
//
// /* Открытие окна Войти */
// function accauntvhod(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntvhodmaintbl').style.width='100%';
// document.getElementById('accauntvhodmaintbl').style.height='100%';
// document.getElementById('accauntvhodmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Войти */
//
// /* Закрытие окна Войти для заказов */
// function accauntvhod2close(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntvhod2maintbl').style.width='0';
// document.getElementById('accauntvhod2maintbl').style.height='0';
// document.getElementById('accauntvhod2maintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Войти для заказов */
//
// /* Открытие окна Войти для заказов */
// function accauntvhod2(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntvhod2maintbl').style.width='100%';
// document.getElementById('accauntvhod2maintbl').style.height='100%';
// document.getElementById('accauntvhod2maintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Войти для заказов */
//
// /* Закрытие окна Регистрация*/
// function accauntregclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntregmaintbl').style.width='0';
// document.getElementById('accauntregmaintbl').style.height='0';
// document.getElementById('accauntregmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Регистрация*/
//
// /* Открытие окна Регистрация */
// function accauntreg(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntregmaintbl').style.width='100%';
// document.getElementById('accauntregmaintbl').style.height='100%';
// document.getElementById('accauntregmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Регистрация */
//
// /* Закрытие окна Восстановление пароля*/
// function accauntresclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntresmaintbl').style.width='0';
// document.getElementById('accauntresmaintbl').style.height='0';
// document.getElementById('accauntresmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Восстановление пароля*/
//
// /* Открытие окна Восстановление пароля */
// function accauntres(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntresmaintbl').style.width='100%';
// document.getElementById('accauntresmaintbl').style.height='100%';
// document.getElementById('accauntresmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Восстановление пароля */
//
// /* Закрытие окна Корзина*/
// function accauntkorclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntkormaintbl').style.width='0';
// document.getElementById('accauntkormaintbl').style.height='0';
// document.getElementById('accauntkormaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Корзина*/
//
// /* Открытие окна Корзина */
// function accauntkor(imgurlssul,title,cena){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntkormaintbl').style.width='100%';
// document.getElementById('accauntkormaintbl').style.height='100%';
// document.getElementById('accauntkormaintd').style.display='block';
// if (imgurlssul!=null){
// document.getElementById('accauntbuyimg').src=imgurlssul;
// } else {
// document.getElementById('accauntbuyimg').src=imgurlssul;
// }
// document.getElementById('accauntbuytitle').innerHTML=title;
// if ((cena==null)&&(cena!=0)){
// document.getElementById('accauntbuycena').innerHTML='Цена не указана';
// } else {
// document.getElementById('accauntbuycena').innerHTML='Цена:&emsp;<scan style="font-size:30px">'+cena+'</scan>&emsp;руб.';
// }
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Корзина */
//
// /* Закрытие окна Заявка на звонок*/
// function accauntzvonclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntzvonmaintbl').style.width='0';
// document.getElementById('accauntzvonmaintbl').style.height='0';
// document.getElementById('accauntzvonmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Заявка на звонок*/
//
// /* Открытие окна Заявка на звонок */
// function accauntzvon(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntzvonmaintbl').style.width='100%';
// document.getElementById('accauntzvonmaintbl').style.height='100%';
// document.getElementById('accauntzvonmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Заявка на звонок */
//
// /* Открытие окна Заказать звонок */
// function accauntzvontitl(title){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntzvonmaintbl').style.width='100%';
// document.getElementById('accauntzvonmaintbl').style.height='100%';
// document.getElementById('accauntzvonmaintd').style.display='block';
// document.getElementById('adreszvon').value=title;
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Заявка на звонок */
//
// /* Закрытие окна Города*/
// function accauntgorodclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntgorodmaintbl').style.width='0';
// document.getElementById('accauntgorodmaintbl').style.height='0';
// document.getElementById('accauntgorodmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Города*/
//
// /* Открытие окна Города */
// function accauntgorod(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntgorodmaintbl').style.width='100%';
// document.getElementById('accauntgorodmaintbl').style.height='100%';
// document.getElementById('accauntgorodmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Города */
//
// /* Закрытие окна Написать отзыв*/
// function accauntotzuvclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntotzuvmaintbl').style.width='0';
// document.getElementById('accauntotzuvmaintbl').style.height='0';
// document.getElementById('accauntotzuvmaintd').style.display='none';
// $('#htmls').addClass("htmls");
// $('#htmls').removeClass("htmlsno");
// }
// /* End Закрытие окна Написать отзыв*/
//
// /* Открытие окна Написать отзыв */
// function accauntotzuv(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntotzuvmaintbl').style.width='100%';
// document.getElementById('accauntotzuvmaintbl').style.height='100%';
// document.getElementById('accauntotzuvmaintd').style.display='block';
// $('#htmls').addClass("htmlsno");
// $('#htmls').removeClass("htmls");
// }
// /* End Открытие окна Написать отзыв */
//
//
//
//
//
// /* Закрытие окна Форма для JAVASCRIPT*/
function accauntmessclose(){
document.getElementById('zatemnenie').style.display='none';
document.getElementById('accauntmessmaintbl').style.width='0';
document.getElementById('accauntmessmaintbl').style.height='0';
document.getElementById('accauntmessmaintd').style.display='none';
}
// /* End Закрытие окна Форма для JAVASCRIPT*/
//
// /* Открытие окна Форма для JAVASCRIPT */
function accauntmess(title,mess){
document.getElementById("zagolovokj").innerHTML=title;
document.getElementById("messj").innerHTML=mess;
document.getElementById('zatemnenie').style.display='block';
document.getElementById('accauntmessmaintbl').style.width='100%';
document.getElementById('accauntmessmaintbl').style.height='100%';
document.getElementById('accauntmessmaintd').style.display='block';
}
// /* End Открытие окна Форма для JAVASCRIPT */
//
// /* Открытие окна Форма для JAVASCRIPT добавление новой характеристики */
// function accauntpopupjas(){
// document.getElementById('zatemnenie2').style.display='block';
// document.getElementById('accauntpopupjasmaintbl').style.width='100%';
// document.getElementById('accauntpopupjasmaintbl').style.height='100%';
// document.getElementById('accauntpopupjasmaintd').style.display='block';
// }
// /* End Открытие окна Форма для JAVASCRIPT добавление новой характеристики */
//
// /* Закрытие окна Форма для JAVASCRIPT добавление новой характеристики */
// function accauntpopupjasclose(){
// document.getElementById('zatemnenie2').style.display='none';
// document.getElementById('accauntpopupjasmaintbl').style.width='0';
// document.getElementById('accauntpopupjasmaintbl').style.height='0';
// document.getElementById('accauntpopupjasmaintd').style.display='none';
// }
// /* End Закрытие окна Форма для JAVASCRIPT добавление новой характеристики */
//
// /* Закрытие окна подтверждающая Форма для JAVASCRIPT добавление новой характеристики*/
// function accauntmesshclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntmesshmaintbl').style.width='0';
// document.getElementById('accauntmesshmaintbl').style.height='0';
// document.getElementById('accauntmesshmaintd').style.display='none';
// }
// /* End Закрытие окна подтверждающая Форма для JAVASCRIPT добавление новой характеристики*/
//
// /* Открытие окна подтверждающая Форма для JAVASCRIPT добавление новой характеристики */
// function accauntmessh(title,mess){
// document.getElementById("zagolovokjh").innerHTML=title;
// document.getElementById("messjh").innerHTML=mess;
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntmesshmaintbl').style.width='100%';
// document.getElementById('accauntmesshmaintbl').style.height='100%';
// document.getElementById('accauntmesshmaintd').style.display='block';
// }
// /* End Открытие окна подтверждающая Форма для JAVASCRIPT добавление новой характеристики */
//
//
//
//
//
//
// /* Закрытие окна с других сайтов*/
// function accauntwinsclose(){
// document.getElementById('zatemnenie').style.display='none';
// document.getElementById('accauntwinsmaintbl').style.width='0';
// document.getElementById('accauntwinsmaintbl').style.height='0';
// document.getElementById('accauntwinsmaintd').style.display='none';
// }
// /* End Закрытие окна с других сайтов*/
//
// /* Открытие окна с других сайтов */
// function accauntwins(){
// document.getElementById('zatemnenie').style.display='block';
// document.getElementById('accauntwinsmaintbl').style.width='100%';
// document.getElementById('accauntwinsmaintbl').style.height='100%';
// document.getElementById('accauntwinsmaintd').style.display='block';
// }
// /* End Открытие окна с других сайтов */
//
//
//
//
//
// /* Входим на сайт */
// function accvhodbut(vasd,statt){
// document.getElementById("naformvhod").innerHTML="<input type='hidden' value='"+vasd+"' name='ini'>";
// if (statt=='44'){
// document.getElementById('vhoddin').action='/login/accauntss.php';
// } else
// if (statt=='45'){
// /*document.getElementById('nexin').action='/login/currnombronavtoriz.php';
// document.getElementById('nexin').submit();
// exit;*/
// document.getElementById('vhoddin').action='/login/accaunts.php';
// } else {
// document.getElementById('vhoddin').action='/login/accaunts.php';
// }
// document.getElementById('vhoddin').submit();
// }
// /* End Входим на сайт */
//
// /* Регистрируемся на сайте */
// function accregbut(vasd){
// document.getElementById("naformvhod").innerHTML="<input type='hidden' value='"+vasd+"' name='ini'>";
// document.getElementById('reggin').action='/login/reg.php';
// if (document.getElementById('pass2').value!=document.getElementById('pass').value){
// document.getElementById('prover').innerHTML='<span class=neverno>Пароли не совпадают!</span>';
// alert('Пароли не совпадают!');
// } else
// if (document.getElementById('name').value==''){
// alert('Заполните поле Имя!');
// } else
// if (document.getElementById('emailes').value==''){
// alert('Заполните поле Email!');
// } else
// if (document.getElementById('pass').value==''){
// alert('Заполните поле Пароль!');
// } else
// if (document.getElementById('telefon').value==''){
// alert('Заполните поле Телефон!');
// } else {
// document.getElementById('reggin').submit();
// }
// }
// /* End Регистрируемся на сайте */
//
// /* Регистрируемся на сайте при покупке товара */
// function accregbuts(vasd){
// document.getElementById("naformvhod").innerHTML="<input type='hidden' value='"+vasd+"' name='ini'>";
// document.getElementById('menufilderpost').action='/login/regnasaite.php';
// if (document.getElementById('pass2s').value!=document.getElementById('passs').value){
// document.getElementById('provers').innerHTML='<span class=neverno>Пароли не совпадают!</span>';
// alert('Пароли не совпадают!');
// } else
// if (document.getElementById('names').value==''){
// alert('Заполните поле Имя!');
// } else
// if (document.getElementById('emailess').value==''){
// alert('Заполните поле Email!');
// } else
// if (document.getElementById('passs').value==''){
// alert('Заполните поле Пароль!');
// } else {
// document.getElementById('menufilderpost').method='post';
// document.getElementById('menufilderpost').submit();
// }
// }
// /* End Регистрируемся на сайте при покупке товара */
//
// /* Восстаналиваем пароль */
// function accvostbut(){
// document.getElementById('vosttin').action='/login/res.php';
// document.getElementById('vosttin').submit();
// }
// /* End Входим на сайт */
//
// /* Комментируем */
// function accotzuvbut(){
// document.getElementById('otzuvdin').submit();
// }
// /* End Комментируем */




/*При добавлении товара выбрать категорию*/
function kategpagеtov(){
if (document.getElementById('kategpag').value!='1'){
document.getElementById('podkategpagl').style.display='block';

while (document.getElementById('podkategpag').length>1){
document.getElementById('podkategpag').remove(document.getElementById('podkategpag').length-1);
}
var ii=0;
while (ii<=9999){
ii++;
if (ty1[document.getElementById('kategpag').value][ii]!=null){
option = document.createElement("option");
option.text = ty2[document.getElementById('kategpag').value][ii];
option.value = ty1[document.getElementById('kategpag').value][ii];
document.getElementById('podkategpag').add(option);
}
}



} else {
document.getElementById('podkategpagl').style.display='none';
while (document.getElementById('podkategpag').length>1){
document.getElementById('podkategpag').remove(document.getElementById('podkategpag').length-1);
}
}
}
/*Конец При добавлении товара выбрать категорию*/

/*При добавлении статьи выбрать категорию*/
function kategstatei(){
if (document.getElementById('kategpag').value!='1'){
document.getElementById('podkategpagl').style.display='block';

while (document.getElementById('podkategpag').length>1){
document.getElementById('podkategpag').remove(document.getElementById('podkategpag').length-1);
}
var ii=0;
while (ii<=10000){
ii++;
if ((ty3[ii]!=null)&&(ty3[ii]==document.getElementById('kategpag').value)){
option = document.createElement("option");
option.text = ty2[ii];
option.value = ty1[ii];
document.getElementById('podkategpag').add(option);
}
}



} else {
document.getElementById('podkategpagl').style.display='none';
while (document.getElementById('podkategpag').length>1){
document.getElementById('podkategpag').remove(document.getElementById('podkategpag').length-1);
}
}
}
/*Конец При добавлении статьи выбрать категорию*/

function uffcheck($i){
document.getElementById('ufchek1').checked=false;
document.getElementById('ufchek2').checked=false;
document.getElementById('ufchek3').checked=false;
document.getElementById('ufchek4').checked=false;
document.getElementById('ufchek'+$i).checked=true;
}

function podpiskaacc(){
if (document.getElementById('podpiskanew').checked==true){
document.getElementById('podpiskanew').checked=false;
} else {
document.getElementById('podpiskanew').checked=true;
}
document.getElementById("naformpodp").innerHTML="<input type='hidden' value='yes' name='podp'>";
document.getElementById('podp').submit();
}

if (typeof $!=='undefined'){
if (typeof($("#datepicker").datepicker)==='function'){
$(function() {$( "#datepicker" ).datepicker({
dateFormat: "dd M yy",
monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'],
     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
     firstDay: 1
});})
}
}

function filterpost(caterr,sortv,pageid){
if (sortv!=''){
document.getElementById('sortv').value=sortv;
}
if (pageid!=''){
document.getElementById('pageid').value=pageid;
}
document.getElementById('menufilderpost').method='get';
document.getElementById('menufilderpost').submit();
}

function filterpostclear(caterr){
location.href=caterr;
}
