let vatly;
let sinhhoc;
let hoahoc;
let r;
function nhap() {
    let  InHoaHoc=document.getElementById('hoahoc').value;
    hoahoc=parseFloat(InHoaHoc);
    let  InSinhHoc=document.getElementById('sinhhoc').value;
    sinhhoc=parseFloat(InSinhHoc);
    let  Invatly=document.getElementById('vatly').value;
    vatly=parseFloat(Invatly);
}
function diemtrungbinh() {
    nhap();
   let tb = ((vatly + hoahoc + sinhhoc) / 3);
    alert("Điểm trung bình là:" + tb);

}
function tongdiem() {
    let td=(vatly+sinhhoc+hoahoc);
    alert("Tổng điểm các môn là:" + td);


}
function chuyendoi(){
    let do0=document.getElementById("nhietdo").value;
    let nhiet=parseFloat(do0);
    let f=(9*nhiet)/5 +32;
    alert("Độ F là:" + f);
}
function tinhdientich() {
    let bankinh=document.getElementById("bankinh").value;
    r=parseFloat(bankinh);
    let S=3.14*(r*r);
    alert("Diện tích hình tròn là:" +S);

}
function tinhchuvi() {
    let C=2*3.14*r;
    alert("Chu Vi Hình Tròn là:"+C);

}