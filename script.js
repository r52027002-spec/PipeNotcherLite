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

    // SVGを表示
    createTestSVG(input);

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

// ========================================
// テストSVG作成
// ========================================

function createTestSVG() {

    const width = 500;
    const height = 400;

    let svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}">

            <!-- 背景 -->
            <rect
                x="0"
                y="0"
                width="${width}"
                height="${height}"
                fill="white"/>

            <!-- 外枠 -->
            <rect
                x="1"
                y="1"
                width="${width - 2}"
                height="${height - 2}"
                fill="none"
                stroke="#999"/>

            <!-- 横線 -->
            <line
                x1="50"
                y1="200"
                x2="450"
                y2="200"
                stroke="red"
                stroke-width="2"/>

            <!-- 縦線 -->
            <line
                x1="250"
                y1="50"
                x2="250"
                y2="350"
                stroke="blue"
                stroke-width="2"/>

            <!-- 円 -->
            <circle
                cx="250"
                cy="200"
                r="80"
                fill="none"
                stroke="green"
                stroke-width="3"/>

            <!-- 中央の点 -->
            <circle
                cx="250"
                cy="200"
                r="4"
                fill="black"/>

        </svg>
    `;

    svgContainer.innerHTML = svg;

}