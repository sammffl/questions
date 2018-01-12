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
    // complete this function
    const converted = {10: 'A',11: 'B',12: 'C',13: 'D',14:'E',15:'F' };

    function convert(rgbNumber){
        if(rgbNumber> 255) rgbNumber = 255;
        if(rgbNumber < 0 ) rgbNumber = 0;
        const remainder = rgbNumber % 16;
        const mainNum = (rgbNumber - remainder) / 16;

        return `${converted[mainNum] || mainNum}${converted[remainder] || remainder}`
    }

    return `${convert(r)}${convert(g)}${convert(b)}`
}