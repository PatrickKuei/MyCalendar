var selmonth = document.getElementById("selMonth");
var selyear = document.getElementById("selYear");
var premonthBtn = document.getElementById("preMonth");
var nextmonthBtn = document.getElementById("nextMonth");
var optMonth = selmonth.options; //��month��option
var optYear = selyear.options; //��yeqr��option
var y = new Date().getFullYear(); //�����㤵�~�~��
var dm = new Date().getMonth(); //��e���-1 (1��O0)
var m = dm + 1; //���o��e���
var beginY = y - 3;
var date = document.getElementsByClassName("tDate");
var ddate = document.getElementsByClassName("dDate");
var tContent = document.getElementsByClassName("tContent");

/* var firstWeek = date[0].getElementsByTagName("td");
var secondWeek = date[1].getElementsByTagName("td");
var thirdWeek = date[2].getElementsByTagName("td");
var forthWeek = date[3].getElementsByTagName("td"); */

function daysInMonth(month, year) {
return new Date(year, month, 0).getDate(); //�ϥ�m
}//���Y�~�Y�릳�X��
function whichday(month, year){
return new Date(year, month, 1).getDay(); //�ϥ�dm
}//���Y�~�Y�몺�@��§���X

console.log(m,y,daysInMonth(m, y) + "��", "§��" + whichday(dm, y)); //���T���
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

for(var i = 0; i < tContent.length; i++){ //���C��tContent �[�Wid = 0~29 = tContent�����}�C��m
tContent[i].id=i;
}
var tConId //���o�C�Ӥ��e��l��id
function clickTCon(elem){
tConId = elem.id;
return tConId;
}

let yearArray = new Array(7); //�إ�data��Ʈw

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

function createCalendar(){ // �Ы�calendar
console.log("create success")
for(var i = 0; i < daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY); i++){
ddate[whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)+i].innerHTML = i+1;
}
for(var i = daysInMonth(optMonth.selectedIndex, optYear.selectedIndex + beginY), j = 1; i > 0, j <= whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY); i--, j++){
//console.log(i, j, whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY));
ddate[whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)-j].innerHTML = i;
}
//�q�@���P���X���e�@��}�l�˼ƶ�J�W�Ӥ��`�Ѽ�

/* var begindate = daysInMonth(optMonth.selectedIndex, optYear.selectedIndex + beginY) - whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY) + 1;
for(var i = 0; i < whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY); i++){
ddate[i].innerHTML = begindate + i;
} *///�q�Ĥ@��}�l��J�W�Ӥ��� (�W�Ӥ��`�Ѽ�-�Ӥ�@��§���X(§����=0)+1)

var lastdate = 42 - whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY) - daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY);
for(var i = 0; i < lastdate; i++){
ddate[42 - lastdate + i].innerHTML = i+1;
}//�N�̫�X���J�U�Ӥ���
console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "��",
"§��" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //��ܤ�,�~,�Ѽ�,�@��§���X

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


//--------------------------------------------------------------���e����������ssubmit���\��----------------------------------------------------------------------
var textcontent = document.getElementById("textArea");
function contentSubmit(){
yearArray[optYear.selectedIndex][optMonth.selectedIndex][tConId] = textcontent.value; //�NtextArea�ȫ��w��yearArray���I�U�h����l

localStorage.setItem("items", JSON.stringify(yearArray)); //�ഫyearArray�����r��A�s�blocalStorage��
const data = JSON.parse(localStorage.getItem("items")); //�NlocalStorage�������^�������ë��w��data
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
//-------------------------------------------------------------�Icontent div���X���e��J����---------------------------------------------------------------------------

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

//---------------------------------------------------------------�~����ܭ��ؤ��----------------------------------------------------------------
function selYFunction(){
createCalendar();
}

//---------------------------------------------------------------�����ܭ��ؤ��----------------------------------------------------------------
function selMFunction(){
createCalendar();
}

//-----------------------------------------------------------��l�@���P���X��J�Ӥ�����----------------------------------------------------------
createCalendar();
//---------------------------------------------------------------�U�Ӥ���s�\��---------------------------------------------------------------
nextmonthBtn.addEventListener('click', function() {
console.log("clickclick");

if(optMonth.selectedIndex < 11){ //�p��12�Ӥ�N+1, index�i������
optMonth.selectedIndex += 1;

/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "��",
"§��" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //��ܤ�,�~,�Ѽ�,�@��§���X */

//--------------------------------------------------------------���s�إߤU�Ӥ���--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------���s�إߵ���--------------------------------------------------------------


}else{ //�j��12�Ӥ�N�~+1�B���k0
optMonth.selectedIndex = 0;
if(optYear.selectedIndex < 6){
optYear.selectedIndex += 1;

//--------------------------------------------------------------���s�إߤU�Ӥ���--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------���s�إߵ���--------------------------------------------------------------

//console.log(optYear.selectedIndex);
}
/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "��",
"§��" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //��ܤ�,�~,�Ѽ�,�@��§���X */
}
//console.log(optMonth.selectedIndex+1);
});
//---------------------------------------------------------------�W�Ӥ���s�\��---------------------------------------------------------------
premonthBtn.addEventListener('click', function(){
console.log("clickclickclick");

if(optMonth.selectedIndex > 0){ //�j��1�Ӥ볣-1
optMonth.selectedIndex -= 1;
/* console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1,
optYear.selectedIndex + beginY) + "��",
"§��" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //��ܤ�,�~,�Ѽ�,�@��§���X */

//--------------------------------------------------------------���s�إߤW�Ӥ���--------------------------------------------------------------
createCalendar();
//-----------------------------------------------------------------���s�إߵ���--------------------------------------------------------------


}else{
optMonth.selectedIndex = 11; //�p��1��N�q12�}�l
if(optYear.selectedIndex > 0){
optYear.selectedIndex -= 1;

//--------------------------------------------------------------���s�إߤW�Ӥ���--------------------------------------------------------------
createCalendar();
//----------------------------------------------------------------���s�إߵ���--------------------------------------------------------------

//console.log(optYear.selectedIndex);
}
console.log(optMonth.selectedIndex+1,optYear.selectedIndex + beginY,daysInMonth(optMonth.selectedIndex+1, optYear.selectedIndex + beginY) + "��", "§��" + whichday(optMonth.selectedIndex, optYear.selectedIndex + beginY)); //���T���
}
//console.log(optMonth.selectedIndex+1);
});
//----------------------------------------------------------�]�m�e��3�Ӧ~�b�~��selector-------------------------------------------------------
for(var i = 0; i < optYear.length; i++){
optYear[i].innerHTML=beginY + i;
//console.log(i);
//console.log(optYear[i]);
}
//---------------------------------------------------------------�]�m���selector-------------------------------------------------------------
var nameMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for(var i = 0; i < optMonth.length; i++){
optMonth[i].innerHTML=nameMonth[i];
}
//---------------------------------------------------------------------END-------------------------------------------------------------------