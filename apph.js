//Bài 1:prompt nhập vào 2 số a và b. Kiểm tra a có chia hết cho b ko
// let a = Number(prompt("nhập số a vào đây"));
// let b = Number(prompt("nhập số b vào đây"));
// if(a % b == 0){
//     alert(`${a} chia hết cho ${b}`)
// }else{alert(`${a} không chia hết cho ${b}`)}
//
//
//Bài 2: prompt nhập tuổi. in ra kết quả nếu tuổi học sinh đó ko đủ điều kiện vào lớp 10
// let age = Number(prompt("nhập tuổi học sinh vào đây"));
// if(age < 0 ){
//     alert("bạn nhập sai thông tin")
// }else if(age > 0 && age <16 ){
//     alert("Học sinh không đủ điều kiện vào lớp 10")
// } else{alert("Học sinh đủ điều kiện vào lớp 10")}
// //
//
//Bài 3: prompt nhập vào 1 số nguyên bất kỳ. in ra màn hình số đó lớn hay nhỏ hơn 0
// let a = Number(prompt("nhập 1 số nguyên vào đây nhé"));
// if(Number.isInteger(a) && a > 0)  {
//     alert(`${a} là số nguyên lớn hơn 0`)
// }else if(Number.isInteger && a < 0) {
//     alert(`${a} là số nguyên nhỏ hơn 0`)
// }else if(a == 0){
//     alert(`${a} = 0`)
// }else{alert("Bạn nhập sai thông tin")}
//
//
//Bài 4: prompt nhập 3 số nguyên. Tìm Max 3 số nguyên đó
// let a = Number(prompt("nhập số nguyên a vào đây"));
// let b = Number(prompt("nhập số nguyên b vào đây"));
// let c = Number(prompt("nhập số nguyên c vào đây"));
// if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
//     alert(`Max là ${Math.max(a,b,c)}`)
// }else{alert("Bạn nhập thông tin bị sai rồi đấy")}
//
//
//Bài 5:Xếp hạng học lực của học sinh dựa trên các đề kiểm tra, điểm thi giữa kì, điểm thi cuối kì
// let a = Number(prompt("nhập tổng điểm các đề kiểm tra"));
// let b = Number(prompt("nhập điểm thi giữa kỳ"));
// let c = Number(prompt("nhập điểm thi cuối kỳ"));
// let d = Number(prompt("Số lần kiểm tra ứng với tổng điểm kiểm tra"))
// let dtb = (a + 2 * b + 3 * c) / (d + 5);
// if(dtb < 5)  {
//     alert("Học lực của học sinh là yếu")
// }else if( dtb < 6.5) {
//     alert("Học lực của học sinh là trung bình")
// }else if(dtb < 8)  {
//     alert("Học lực của học sinh là khá")
// }else if(dtb < 9)  {
//     alert("Học lực của học sinh là giỏi")
// }else{alert("Học lực của học sinh là xuất sắc")}
//
//Câu 6: Tính hoa hồng nhận được tùy theo mức doanh số bán hàng.
// let a = Number(prompt("Nhập doanh số bán hàng vào đây (đơn giá x sản lượng)"));
// let b = Number(prompt("nhập tỷ lệ hoa hồng %"));
// let c = a * (b /100);
// if(c >= 0){
//     alert(`Hoa hồng bạn nhận được là ${c}`)
// }else{alert("Bạn nhập sai thông tin")}
// //
//
//Bài 7: Tính chỉ số cân nặng của cơ thể BMI
// let weight = Number(prompt("Nhập số cân nặng vào đây (kg)"));
// let hight = Number(prompt("Nhập chiều cao vào đây (m)"))
// let BMI = weight / Math.pow(hight,2);
// if(BMI < 18 ) {
//     alert("Thiếu cân")
// }else if(BMI < 25) {
//     alert("Bình thường")
// }else if(BMI < 30)  {
//     alert("Thừa cân")
// }else{alert("Béo quá giảm cân đi")}