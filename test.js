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
  let person = ["白蘭", "十年骸", "史庫瓦羅"];
  let name = "";
  for (let i = 0; i < person.length; i++) {
    if (userMessage.indexOf(person[i]) !== -1) {
      name = person[i];
      break;
    } else {
      name = "您好";
    }
  }
  let ConTent = {
    白蘭: {
      card:
        "面板屬性爆擊須達45-50%\r\n精準打擊\r\n2號位: 攻擊加成\r\n4號位: 攻擊加成\r\n6號位: 爆擊傷害加成\r\n2件套推薦攻擊加成\r\n(爆擊前提有達成的情況下)",
      position: "主要輸出，戒指推薦全滿",
    },
    十年骸: {
      card:
        "面板屬性爆擊須達35-40%\r\n精準打擊\r\n2號位: 攻擊加成\r\n4號位: 攻擊加成\r\n6號位: 爆擊傷害加成\r\n2件套推薦攻擊加成\r\n(爆擊前提有達成的情況下)",
      position: "主要輸出，戒指推薦全滿",
    },
    史庫瓦羅: {
      card:
        "兩大劍豪\r\n2號位: 攻擊加成\r\n4號位: 攻擊加成\r\n6號位: 攻擊加成\r\n2件套推薦攻擊加成\r\n(攻擊越高詛咒效益越高)",
      position: "輔助輸出，戒指建議全滿\r\n配合戒指3技詛咒加上主輸出疊加有奇效",
    },
    您好: {
      card:
        "想呼叫我請輸入\r\n「里包恩老師」\r\n想了解輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n想了解角色定位請於字句中加入\r\n「角色名稱」",
      position:
        "想呼叫我請輸入\r\n「里包恩老師」\r\n想了解輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n想了解角色定位請於字句中加入\r\n「角色名稱」",
    },
  };

  let card = userMessage.indexOf("輔助卡");

  if (userMessage == call) {
    reply_message.unshift({
      type: "text",
      text:
        "我在!\r\n想了解輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n想了解角色定位請於字句中加入\r\n「角色名稱」",
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
