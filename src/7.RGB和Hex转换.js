/*
实现一个rgb()方法 输入RGB数值返回HEX值
有效数值在0~255之间

预期结果
 rgb(255, 255, 255) // returns FFFFFF
 rgb(255, 255, 300) // returns FFFFFF
 rgb(0,0,0) // returns 000000
 rgb(148, 0, 211) // returns 9400D3
 */
function rgb(r, g, b){
    function toHex(d) {
        if(d < 0 ) {return "00";}
        if(d > 255 ) {return "FF";}
        return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
    }

    return toHex(r)+toHex(g)+toHex(b);
}