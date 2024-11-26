const indextext1 = document.getElementById('indextext1');
const indextext2 = document.getElementById('indextext2');

const text1 = "你好，欢迎来到我的网站!";
const text2 = "“去追寻便好，哪怕是须臾的光亮，我们至少拥有此刻。”"; 

let index1 = 0;
let index2 = 0;

function typeText1() {
    if (index1 < text1.length) {
        indextext1.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeText1, 100); 
    } else {
        setTimeout(typeText2, 100); // 0.1 秒后开始第二段
    }
}

function typeText2() {
    if (index2 < text2.length) {
        indextext2.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, 100);
    }
}


typeText1();

