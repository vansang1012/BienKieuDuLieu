let vatly;
let hoahoc;
let sinhhoc;

function Nhap() {
    inputVatLy = prompt("Mời bạn nhập vào điểm vật lý");
    inputHoaHoc = prompt("Mời bạn nhập vào điểm hóa học");
    inputSinhHoc = prompt("Mời bạn nhập vào điểm sinh học");
    vatly = parseFloat(inputVatLy);
    hoahoc = parseFloat(inputHoaHoc);
    sinhhoc = parseFloat(inputSinhHoc);
}

function diemtrungbinh() {
    Nhap();
    let tb = ((vatly + hoahoc + sinhhoc) / 3);
    alert("Điểm trung bình là:" + tb);

}

function tongdiem() {
    let td = (vatly + sinhhoc + hoahoc);
    alert("Tổng điểm các môn là:" + td);
}