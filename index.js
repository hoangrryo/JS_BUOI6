// BÀI TẬP 1: TÌM SỐ
function timSo() {
    var i = 0, s = 0;
    while (s<10000){
        s = s + i;
        i++;
    }
    console.log(i, s);
    document.getElementById('showArea1').innerHTML = i;
}


// BÀI TẬP 2: TÌM TỔNG
function tinhTong() {
    var a = document.getElementById('so1').value*1;
    var b = document.getElementById('so2').value*1;
    var s = 0;
    for (var i = 1 ; i <= b ; i++)
    {
        var c = 1;
        var j = 1;
        while (j<=i)
        {
            c = c*a
            j++;
        }
        s = s + c;
        console.log(s);
    }
    document.getElementById('showArea2').innerHTML = s;
}


// BÀI TẬP 3: TÍNH GIAI THỪA
function tinhGiaiThua() {
    var a = document.getElementById('so3').value*1;
    var i = 1; s = 1;
    while(a>0)
    {
        s = s * a;
        a--;
    }
    document.getElementById('showArea3').innerHTML = s;
}


// BÀI TẬP 4: IN 10 THẺ DIV RA MÀN HÌNH
function printDIV() {
    for (var i = 1 ; i<=10 ;i++)
    {
        if(i % 2 != 0)
        {
            document.write(i, '<div style="color:white; width:100%; height:50px; background-color:red; line-height:50px; padding-left:15px">Số lẻ</div>')
        }
        else
        {
            document.write(i, '<div style="color:white; width:100%; height:50px; background-color:blue; line-height:50px; padding-left:15px">Số chẵn</div>')
        }
    }
}