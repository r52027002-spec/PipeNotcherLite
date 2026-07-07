/**
 * ========================================
 * PipeNotcher Lite
 * script.js
 * ========================================
 */

"use strict";

// ========================================
// 要素取得
// ========================================

const mainDiameterInput = document.getElementById("mainDiameter");
const branchDiameterInput = document.getElementById("branchDiameter");
const angleInput = document.getElementById("angle");
const divisionInput = document.getElementById("division");

const generateBtn = document.getElementById("generateBtn");
const svgContainer = document.getElementById("svgContainer");


// ========================================
// イベント
// ========================================

generateBtn.addEventListener("click", generatePattern);


// ========================================
// 型紙作成
// ========================================

function generatePattern() {

    // 入力取得
    const input = getInput();

    // コンソール表示
    console.log(input);

    // 動作確認
    showMessage(input);

}


// ========================================
// 入力取得
// ========================================

function getInput() {

    return {

        mainDiameter: Number(mainDiameterInput.value),

        branchDiameter: Number(branchDiameterInput.value),

        angle: Number(angleInput.value),

        division: Number(divisionInput.value)

    };

}


// ========================================
// 動作確認表示
// ========================================

function showMessage(data) {

    svgContainer.innerHTML = `
        <div>
            <h3>入力値取得成功！</h3>

            <p>主管外径：${data.mainDiameter} mm</p>

            <p>枝管外径：${data.branchDiameter} mm</p>

            <p>交差角度：${data.angle}°</p>

            <p>分割数：${data.division}</p>

            <br>

            <p>ここにSVGを描画します。</p>
        </div>
    `;

}