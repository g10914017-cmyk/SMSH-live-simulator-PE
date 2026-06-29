console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `${name} 高二開學過了一個學期，你發現在體育班的生態跟想像的有點差異，大家都瘋狂訓練能靠專長升學，但你好像怎麼努力都還差一點，有點想多考慮跟準備一點未來學業，不要一直都以專長為主，可是又會跟一起練習的好友有不同的行程，漸行漸遠，這樣你會怎麼做呢?`;
};

// 核心選擇邏輯
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("娛樂", 5);
      add("人際", 1);
      break;

    case "B":
      add("人際", 5);
      add("課業", 1);
      break;

    case "C":
      add("課業", 3);
      add("生涯", 3);
      break;
  }
}

// localStorage 加分函式
function add(key, value) {
  console.log("+分成功");
  let current = Number(localStorage.getItem(key)) || 0;

  localStorage.setItem(key, current + value);

  console.log(key, current, value, current + value);
}
