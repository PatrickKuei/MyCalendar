var selmonth = document.getElementById("selMonth");
var selyear = document.getElementById("selYear");
var premonthBtn = document.getElementById("preMonth");
var nextmonthBtn = document.getElementById("nextMonth");
var optMonth = selmonth.options; //取month的option
var optYear = selyear.options; //取yeqr的option
var y = new Date().getFullYear(); //取完整今年年份
var dm = new Date().getMonth(); //當前月份-1 (1月是0)
var m = dm + 1; //取得當前月份
var beginY = y - 3;
var date = document.getElementsByClassName("tDate");
var ddate = document.getElementsByClassName("dDate");
var tContent = document.getElementsByClassName("tContent");

/* var firstWeek = date[0].getElementsByTagName("td");
var secondWeek = date[1].getElementsByTagName("td");
var thirdWeek = date[2].getElementsByTagName("td");
var forthWeek = date[3].getElementsByTagName("td"); */

function daysInMonth(month, year) {
return new Date(year, month, 0).getDate(); //使用m
}//找到某年某月有幾天
function whichday(month, year){
return new Date(year, month, 1).getDay(); //使用dm
}//找到某年某月的一號禮拜幾

console.log(m,y,daysInMonth(m, y) + "天", "禮拜" + whichday(dm, y)); //正確顯示
var whichDay = whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY);
var howmanyDays = daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY);
//console.log(y);
//console.log(nextmonthBtn);
//console.log(premonthBtn);
//console.log(selyear);
//console.log(selmonth[4]);
//var monthindex = optMonth.selectedIndex;
//console.log(optMonth.selectedIndex+1); //=m =dm+1
//console.log(optYear.selectedIndex + beginY); //=y
//console.log(optMonth);
//console.log(optYear);
//console.log(optYear.length);

for(var i = 0; i < tContent.length; i++){ //為每個tContent 加上id = 0~29 = tContent本身陣列位置
tContent[i].id=i;
}
var tConId //取得每個內容格子的id
function clickTCon(elem){
tConId = elem.id;
return tConId;
}

let yearArray = new Array(7); //建立data資料庫

for(var i = 0; i < yearArray.length; i++){
monthArray = new Array(12);
for(var j = 0; j < monthArray.length; j++){
dateArray = new Array (30);
for(var k = 0; k < tContent.length; k++){
dateArray[k] = " ";
}
monthArray[j] = dateArray;
}
yearArray[i] = monthArray;
}
if(localStorage.getItem('items')){
yearArray = JSON.parse(localStorage.getItem('items'));
console.log(yearArray);
}else{
console.log("nothing in storage");
}

function createCalendar(){ // 創建calendar
console.log("create success")
for(var i = 0; i < daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY); i++){
ddate[whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)+i].innerHTML = i+1;
}
for(var i = daysInMonth(optMonth.selectedIndex, optYear.selectedIndex + beginY), j = 1; i > 0, j <= whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY); i--, j++){
//console.log(i, j, whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY));
ddate[whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)-j].innerHTML = i;
}
//從一號星期幾的前一格開始倒數填入上個月總天數

/* var begindate = daysInMonth(optMonth.selectedIndex, optYear.selectedIndex + beginY) - whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY) + 1;
for(var i = 0; i < whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY); i++){
ddate[i].innerHTML = begindate + i;
} *///從第一格開始填入上個月日期 (上個月總天數-該月一號禮拜幾(禮拜日=0)+1)

var lastdate = 42 - whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY) - daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY);
for(var i = 0; i < lastdate; i++){
ddate[42 - lastdate + i].innerHTML = i+1;
}//將最後幾格填入下個月日期
console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "天",
"禮拜" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //顯示月,年,天數,一號禮拜幾

for(var i = 0; i < tContent.length; i++){
tContent[i].innerHTML = yearArray[optYear.selectedIndex][optMonth.selectedIndex][i];
}

/* for(var i = 0; i < optYear.length; i++){
for (var j = 0; j < optMonth.length; j++){
for (var k = 0; k < tContent.length; k++){
yearArray[i][j][k];
}
}
} */
}

//localStorage.setItem("lastname", "Smith"); //store
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");


//--------------------------------------------------------------內容視窗提交按鈕submit的功能----------------------------------------------------------------------
var textcontent = document.getElementById("textArea");
function contentSubmit(){
yearArray[optYear.selectedIndex][optMonth.selectedIndex][tConId] = textcontent.value; //將textArea值指定給yearArray的點下去的格子

localStorage.setItem("items", JSON.stringify(yearArray)); //轉換yearArray內成字串再存在localStorage內
const data = JSON.parse(localStorage.getItem("items")); //將localStorage的資料轉回原類型並指定給data
//itemsArray.push(textcontent.value);
//localStorage.setItem("items", JSON.stringify(yearArray));
/* data.forEach(item => {
console.log("stored" + item);
}); */
//console.log(data[optYear.selectedIndex][optMonth.selectedIndex]);
//localStorage.clear();

tContent[tConId].innerHTML = yearArray[optYear.selectedIndex][optMonth.selectedIndex][tConId];
//console.log(textcontent);
//console.log(yearArray);
tConDiv.style.display = "none";
}
//-------------------------------------------------------------點content div跳出內容輸入視窗---------------------------------------------------------------------------

var tConDiv = document.getElementById("textDiv");
//console.log(tContent);
//console.log(tConDiv);

for(var i = 0; i < tContent.length; i++){
tContent[i].addEventListener('click', function(){
console.log("clickclick");
tConDiv.style.display = "block";
textcontent.value = tContent[tConId].innerHTML;
});
}

//---------------------------------------------------------------年份選擇重建日期----------------------------------------------------------------
function selYFunction(){
createCalendar();
}

//---------------------------------------------------------------月份選擇重建日期----------------------------------------------------------------
function selMFunction(){
createCalendar();
}

//-----------------------------------------------------------初始一號星期幾輸入該月日期數----------------------------------------------------------
createCalendar();
//---------------------------------------------------------------下個月按鈕功能---------------------------------------------------------------
nextmonthBtn.addEventListener('click', function() {
console.log("clickclick");

if(optMonth.selectedIndex < 11){ //小於12個月就+1, index可等於月份
optMonth.selectedIndex += 1;

/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "天",
"禮拜" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //顯示月,年,天數,一號禮拜幾 */

//--------------------------------------------------------------重新建立下個月日期--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------重新建立結束--------------------------------------------------------------


}else{ //大於12個月就年+1且月歸0
optMonth.selectedIndex = 0;
if(optYear.selectedIndex < 6){
optYear.selectedIndex += 1;

//--------------------------------------------------------------重新建立下個月日期--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------重新建立結束--------------------------------------------------------------

//console.log(optYear.selectedIndex);
}
/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "天",
"禮拜" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //顯示月,年,天數,一號禮拜幾 */
}
//console.log(optMonth.selectedIndex+1);
});
//---------------------------------------------------------------上個月按鈕功能---------------------------------------------------------------
premonthBtn.addEventListener('click', function(){
console.log("clickclickclick");

if(optMonth.selectedIndex > 0){ //大於1個月都-1
optMonth.selectedIndex -= 1;
/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "天",
"禮拜" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //顯示月,年,天數,一號禮拜幾 */

//--------------------------------------------------------------重新建立上個月日期--------------------------------------------------------------
createCalendar();
//-----------------------------------------------------------------重新建立結束--------------------------------------------------------------


}else{
optMonth.selectedIndex = 11; //小於1月就從12開始
if(optYear.selectedIndex > 0){
optYear.selectedIndex -= 1;

//--------------------------------------------------------------重新建立上個月日期--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------重新建立結束--------------------------------------------------------------

//console.log(optYear.selectedIndex);
}
console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY) + "天", "禮拜" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //正確顯示
}
//console.log(optMonth.selectedIndex+1);
});
//----------------------------------------------------------設置前後3個年在年份selector-------------------------------------------------------
for(var i = 0; i < optYear.length; i++){
optYear[i].innerHTML=beginY + i;
//console.log(i);
//console.log(optYear[i]);
}
//---------------------------------------------------------------設置月份selector-------------------------------------------------------------
var nameMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for(var i = 0; i < optMonth.length; i++){
optMonth[i].innerHTML=nameMonth[i];
}
//---------------------------------------------------------------------END-------------------------------------------------------------------