function doPost(e) {
  //認證身份，重新輸入line@ channel_access_token
  var CHANNEL_ACCESS_TOKEN =
    "QuiQsRTkIkS8PFz+suWgkZ9eZ1ZfgqW5ReftA7xcrpI+NQWO1AD4AlGnOK2J1J8R3yLTsoO7+CdmPoOfZQdzpweRSk74mjw+3nu4An+wRu4fVSPZP3nPWoqFmH/Q460C1xXplLwB7gU9jdGUDqajzAdB04t89/1O/w1cDnyilFU=";
  var msg = JSON.parse(e.postData.contents);

  //除錯用
  Logger.log(msg);
  console.log(msg);

  //從接收到的訊息中取出 replyToken 和發送的訊息文字
  var replyToken = msg.events[0].replyToken;
  var userMessage = msg.events[0].message.text;
  var reply_message = [];
  if (typeof replyToken === "undefined") {
    return;
  }
  let call = "里包恩老師";
  let person = [
    "白蘭",
    "十年後六道骸",
    "史庫瓦羅",
    "巴吉爾",
    "十年後雲雀恭彌",
    "十年後山本武",
    "列威亞坦",
    "魯斯里亞",
    "六道骸",
    "未來澤田剛吉",
    "未來山本武",
    "了平",
    "幻騎士",
    "Y",
    "藍波",
    "十年後一平",
    "拉爾米爾奇",
    "獄寺隼人",
    "山本武",
    "十年後碧洋琪",
    "未來獄寺隼人",
    "庫洛姆骷髏",
    "澤田剛吉",
    "雲雀恭彌",
    "XANXUS",
    "貝爾飛格爾",
  ];
  let name = "";
  for (let i = 0; i < person.length; i++) {
    if (userMessage.indexOf(person[i]) !== -1) {
      name = person[i];
      break;
    } else {
      name = "ciao-su";
    }
  }

  let ConTent = {
    白蘭: {
      card:
        "推薦 : 精準打擊\r\n建議 : 4件套-精準打擊,\r\n面板屬性爆擊須達45-50%\r\n2件套-\r\n爆擊有達成 : 攻擊加成\r\n爆擊無達成 : 攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 爆擊傷害加成",
      position: "主要輸出，戒指推薦全滿\r\n推薦星數 : PVE-SS , PVP-S",
    },
    十年後六道骸: {
      card:
        "推薦 : 精準打擊\r\n建議 : 4件套-精準打擊,\r\n面板屬性爆擊須達35-40%\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 爆擊傷害加成",
      position: "主要輸出，戒指推薦全滿\r\n推薦星數 : PVE-A , PVP-SS",
    },
    史庫瓦羅: {
      card:
        "推薦 : 兩大劍豪、繼承者的覺悟、絕地的死鬥\r\n建議 : 4件套-兩大劍豪,\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 攻擊加成",
      position:
        "輔助輸出，戒指建議全滿\r\n配合戒指3技詛咒加上主輸出疊加有奇效\r\n推薦星數 : PVE-S , PVP-A",
    },
    巴吉爾: {
      card: "",
      position: "",
    },
    十年後雲雀恭彌: {
      card: "",
      position: "",
    },
    十年後山本武: {
      card: "",
      position: "",
    },
    列威亞坦: {
      card: "",
      position: "",
    },
    魯斯里亞: {
      card: "",
      position: "",
    },
    六道骸: {
      card: "",
      position: "",
    },
    未來澤田剛吉: {
      card: "",
      position: "",
    },
    未來山本武: {
      card: "",
      position: "",
    },
    了平: {
      card: "",
      position: "",
    },
    幻騎士: {
      card: "",
      position: "",
    },
    Y: {
      card: "",
      position: "",
    },
    藍波: {
      card: "",
      position: "",
    },
    十年後一平: {
      card: "",
      position: "",
    },
    拉爾米爾奇: {
      card: "",
      position: "",
    },
    獄寺隼人: {
      card: "",
      position: "",
    },
    山本武: {
      card: "",
      position: "",
    },
    十年後碧洋琪: {
      card: "",
      position: "",
    },
    未來獄寺隼人: {
      card: "",
      position: "",
    },
    庫洛姆骷髏: {
      card: "",
      position: "",
    },
    澤田剛吉: {
      card: "",
      position: "",
    },
    雲雀恭彌: {
      card: "",
      position: "",
    },
    XANXUS: {
      card: "",
      position: "",
    },
    貝爾飛格爾: {
      card: "",
      position: "",
    },
    "ciao-su": {
      card:
        "想呼叫我請輸入\r\n「里包恩老師」\r\n欲知輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n欲知角色定位請於字句中加入\r\n「角色名稱」",
      position:
        "想呼叫我請輸入\r\n「里包恩老師」\r\n欲知輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n欲知角色定位請於字句中加入\r\n「角色名稱」",
    },
  };

  let card = userMessage.indexOf("輔助卡");

  if (userMessage == call) {
    reply_message.unshift({
      type: "text",
      text:
        "ciao-su!\r\n欲知輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n欲知角色定位請於字句中加入\r\n「角色名稱」",
    });
  } else {
    reply_message.unshift({
      type: "text",
      text: name + " :\r\n" + ConTent[name][card !== -1 ? "card" : "position"],
    });
  }

  //定義回傳訊息
  //  var reply_message=[{
  //      'type': 'text',
  //      'text': '我是Nains'
  //    }];

  //回傳訊息給line 並傳送給使用者
  var url = "https://api.line.me/v2/bot/message/reply";
  UrlFetchApp.fetch(url, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN,
    },
    method: "post",
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: reply_message,
    }),
  });
}
