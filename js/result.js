console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));
window.onload = function () {
  const name = localStorage.getItem("name");

  // 主標題
  document.getElementById("story").innerText =
    `${name}，恭喜你完成了你的高中三年生活，你過上了令人難忘又意義非凡的三年。`;

  // 讀取分數
  const scores = {
    課業: Number(localStorage.getItem("課業")) || 0,
    興趣: Number(localStorage.getItem("興趣")) || 0,
    人際: Number(localStorage.getItem("人際")) || 0,
    生涯: Number(localStorage.getItem("生涯")) || 0,
    娛樂: Number(localStorage.getItem("娛樂")) || 0,
  };

  // 產生結果文字
  let resultText = "";

  resultText += getResult(
    "課業",
    scores.課業,
    "(滿分18)因為長期荒廢課業，學測考試上沒有意外的很多科不達標，你考慮是否承接起分科戰士的重任，或是再花一年重考，看著未來感到一片迷茫...",
    "(滿分18)你在豐富高中生活的同時，也把課業平衡的很好，學測成績一如預期，剩下就是努力面試，盡可能朝向夢幻科系邁進",
    "(滿分18)你這三年在課業的重心很多，雖然少了一些跟人的相處，但你的成績比你預期的還要好，一邊流下欣慰的淚水，一邊準備去頂尖的校系",
  );

  resultText += getResult(
    "興趣",
    scores.興趣,
    "(滿分10)過了三年的青春，不小心錯過了一些喜歡的事情，看到周圍的人做過的事情會很羨慕，之後把獲大學好好體驗興趣吧",
    "(滿分10)有的時候會在生活跟興趣之間取捨，但是也都有追到喜歡的明星跟做到喜歡的事情，他們也是你挫折時重要的支持",
    "(滿分10)你花了很多時間在做自己感興趣的事，你對這些熱愛的理解跟體驗已經遠超同齡人了",
  );

  resultText += getResult(
    "人際",
    scores.人際,
    "(滿分18)畢業了跟大家的關係還是很遙遠，有的時候想找個一起吃飯談心的朋友都會有點難T_T，以後大學階段多交一點朋友吧",
    "(滿分18)認真生活的同時你也交到了很多朋友，偶爾會要考慮不同事情不能總是一起，但是有一起的話都很快樂",
    "(滿分18)你花超多時間在交朋友的，幾乎會是你每個決策主要的參考依據，因為有他們豐富了生活的不同面向，是你高中的青春獨一無二的回憶",
  );

  resultText += getResult(
    "生涯",
    scores.生涯,
    "(滿分12)你對未來的科系選擇還是有點迷惘，也不知道未來能否撐完大學四年，填了一個別人推荐的專業，可是會害怕沒興趣被退學",
    "(滿分12)對於未來有初步的認識跟規劃，可以確定大致的方向，也願意已開放的心多多探索",
    "(滿分12)你清楚自己未來要做什麼、往後四年的發展方向，以及每個階段不同的目標，結合大學的資源將幫你更快完成夢想",
  );

  resultText += getResult(
    "娛樂",
    scores.娛樂,
    "(滿分22)這三年你讓自己常常壓力很大很悶，一點休閒娛樂的空間都不給自己QQ，專注目標的同時也不知不覺錯過了很多笑聲",
    "(滿分22)有認真生活也有玩到，雖然事情有點多，可是娛樂這點不可忽略，放鬆身心後也幫助到生活的其他地方",
    "(滿分22)你超愛玩的讚啦，享受生活也是一門專業，高中生活肯定很精彩! 雖然以後會要還一點債，但你準備好了吧!",
  );

  document.getElementById("resultBox").innerHTML = resultText;
};

// 判斷函式
function getResult(title, value, low, mid, high) {
  let text = "";

  if (title === "課業") {
    if (value <= 5) text = low;
    else if (value <= 10) text = mid;
    else text = high;
  }

  if (title === "興趣") {
    if (value <= 3) text = low;
    else if (value <= 7) text = mid;
    else text = high;
  }

  if (title === "人際") {
    if (value <= 6) text = low;
    else if (value <= 12) text = mid;
    else text = high;
  }

  if (title === "生涯") {
    if (value <= 3) text = low;
    else if (value <= 7) text = mid;
    else text = high;
  }

  if (title === "娛樂") {
    if (value <= 7) text = low;
    else if (value <= 14) text = mid;
    else text = high;
  }

  return `<p><b>${title}</b>：${value}分 → ${text}</p>`;
}
