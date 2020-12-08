// ページ読み込んだらって書いてない。

const answer = document.getElementById("answer-btn");
answer.addEventListener("click", e =>{
    Calculator.getAnswer();

});

class Calculator{

    /**
     * 電卓機能をまとめた関数
     */
    static getAnswer(){

        const numbers = this.getNumber();
        const sign = this.getSign();

        this.setCaluclate(sign,numbers);

        // num_1 + sign + num_2 が計算できなくてわろた…(文字列の連結になる)
    }

    /**
     * 入力された数字を返す
     */
    static getNumber(){
        const colmn_1 = document.getElementById("column-1");
        const colmn_2 = document.getElementById("column-2");

        const num_1 = Number(colmn_1.value);
        const num_2 = Number(colmn_2.value);

        return {num_1 : num_1 , num_2 : num_2}
    }

    /**
     * 入力された四則演算の記号を返す
     */
    static getSign(){
        const sign = document.getElementById("sign");
        const oparational_sign =sign.value;

        return oparational_sign;
    }

    // なんてまどろっこしいんだとは思ってる
    // なんとかする
    
    /**
     * 入力された四則演算記号を分岐する
     */
    static setCaluclate(sign,numbers){

        let answer = 0;
        switch(sign){
            case "+" :
                answer = this.getAddition(numbers);
                break;
            case "-" :
                answer = this.getSubtraction(numbers);
                break;
            case "*" :
                answer = this.getMultiplication(numbers);
                break;
            case "/" :
                answer = this.getDivision(numbers);
                break;
        }

        this.setAnswer(answer);
    }

    /**
     * 足し算
     * @param {Number}} numbers 
     */
    static getAddition(numbers){
        const answer = numbers.num_1 + numbers.num_2;

        return answer;
    }

    /**
     * 引き算
     * @param {Number}} numbers 
     */
    static getSubtraction(numbers){
        const answer = numbers.num_1 - numbers.num_2;
        return answer;
    }

    /**
     * 掛け算
     * @param {Number}} numbers 
     */
    static getMultiplication(numbers){
        const answer = numbers.num_1 * numbers.num_2;
        return answer;
    }

    /**
     * 割り算
     * @param {Number}} numbers 
     */
    static getDivision(numbers){
        const answer = numbers.num_1 / numbers.num_2;
        return answer;
    }

    /**
     * 答えを出力します
     * @param {} answer 
     */
    static setAnswer(answer){
        const input_answer = document.getElementById("answer-btn");
        // どちらが適切？
        // input_answer.innerHTML = answer
        // こっちな気がする
        input_answer.textContent = answer

    }
}