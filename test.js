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
    "笹川了平",
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

  let ConTent = {
    白蘭: {
      card:
        "推薦 : 精準打擊\r\n建議 : 4件套-精準打擊,\r\n面板屬性爆擊須達45-50%\r\n2件套-\r\n爆擊有達成 : 攻擊加成\r\n爆擊無達成 : 攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 爆擊傷害加成",
      position: "主要輸出，戒指推薦全滿\r\n推薦星數 : PVE-SS , PVP-S",
    },
    十年後六道骸: {
      card:
        "推薦 : 精準打擊、關鍵時刻的守護\r\n建議 : 4件套-精準打擊,\r\n面板屬性爆擊須達35-40%\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 爆擊傷害加成",
      position: "主要輸出，戒指推薦全滿\r\n推薦星數 : PVE-A , PVP-SS",
    },
    史庫瓦羅: {
      card:
        "推薦 : 兩大劍豪、繼承者的覺悟、絕地的死鬥\r\n建議 : 4件套-兩大劍豪,\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 攻擊加成",
      position:
        "輔助輸出，戒指建議全滿\r\n配合戒指3技詛咒加上主輸出疊加有奇效\r\n推薦星數 : PVE-S , PVP-A",
    },
    巴吉爾: {
      card:
        "推薦 : 精銳部隊的作風、炎壓的爆發、左右手之爭\r\n建議 : 4件套-精銳部隊的作風,\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 攻擊加成",
      position:
        "輔助輸出，戒指建議基本一技滿\r\n神級輔助，免上場即可享有他多數的技能效果，死氣不足的問題也會因巴吉爾迎刃而解\r\n推薦星數 : PVE-S , PVP-S",
    },
    十年後雲雀恭彌: {
      card:
        "推薦 : 精準打擊、兩大劍豪\r\n建議 : 4件套-精準打擊,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "主要輸出，戒指建議全滿\r\n唯一死氣技能一次爆發能超越炎壓技能的角色，基本必練角色\r\n推薦星數 : PVE-S , PVP-SS",
    },
    十年後山本武: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    列威亞坦: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    魯斯里亞: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    六道骸: {
      card:
        "推薦 : 精準打擊、暗中較量\r\n建議 : 4件套-暗中較量,\r\n2件套-攻擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 命中\r\n6號位 : 爆擊傷害加成",
      position:
        "主要輸出，戒指建議全滿\r\n面板命中達45(一星標準)須配合火焰裝置降防，如55則可直接湊滿必爆效果\r\n推薦星數 : PVE-SS , PVP-S",
    },
    未來澤田剛吉: {
      card:
        "推薦 : 陰謀者的洞察、嚴師的教誨、守護者的誓約\r\n建議 : 4件套-嚴師的教誨,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "輔助輸出，戒指建議全滿\r\n生存能力很強悍的角色，但在PVE表現平庸\r\n推薦星數 : PVE-A , PVP-SS",
    },
    未來山本武: {
      card:
        "推薦 : 精準打擊、兩大劍豪、繼承者的覺悟\r\n建議 : 4件套-精準打擊,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "主要輸出，戒指建議全滿\r\n攻擊S且較為全能的角色，延展性很高\r\n推薦星數 : PVE-S , PVP-SS",
    },
    笹川了平: {
      card:
        "推薦 : 炙熱的思念、守護的誓約、陰謀者的洞察\r\n建議 : 4件套-炙熱的思念,\r\n2件套-生命加成\r\n2號位 : 生命加成\r\n4號位 : 生命加成\r\n6號位 : 生命加成",
      position:
        "輔助輸出，戒指建議全滿\r\n平民神角，生命越高傷害越高，且裝備炙熱的思念還能為隊友帶來出奇不意的補血效果\r\n推薦星數 : PVE-S , PVP-SS",
    },
    幻騎士: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    Y: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    藍波: {
      card:
        "推薦 : 精準打擊、絕地的死鬥、守護的誓約\r\n建議 : 4件套-精準打擊,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "主要輸出，戒指可練可不練\r\n因技能距離特性，裝備守護的誓約時高破招情形下魔盒戰無不勝\r\n推薦星數 : PVE-A , PVP-A",
    },
    十年後一平: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    拉爾米爾奇: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    獄寺隼人: {
      card:
        "推薦 : 繼承者的覺悟\r\n建議 : 4件套-繼承者的覺悟,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "輔助輸出，戒指基本一技滿\r\n基本上不太建議訓練的角色\r\n推薦星數 : PVE-A , PVP-C",
    },
    山本武: {
      card:
        "推薦 : 封印之力、防禦優勢、精準打擊\r\n建議 : 4件套-防禦優勢,\r\n2件套-防禦加成\r\n2號位 : 防禦加成\r\n4號位 : 防禦加成\r\n6號位 : 防禦加成",
      position:
        "輔助輸出，戒指可練可不練\r\n基本上不太建議訓練的角色，較屬於在PVP可抓人的角色\r\n推薦星數 : PVE-B , PVP-A",
    },
    十年後碧洋琪: {
      card: "暫無登錄資料",
      position: "暫無登錄資料",
    },
    未來獄寺隼人: {
      card:
        "推薦 : 繼承者的覺悟、絕地的死鬥\r\n建議 : 4件套-繼承者的覺悟,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "輔助輸出，戒指建議全滿\r\n基本上有瓜(兵器)才有訓練的意義，戒指能提升很多生存空間\r\n推薦星數 : PVE-S , PVP-A",
    },
    庫洛姆骷髏: {
      card:
        "推薦 : 精準打擊\r\n建議 : 4件套-精準打擊,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "輔助輸出，戒指建議全滿\r\n基本上不太建議訓練的角色\r\n推薦星數 : PVE-A , PVP-C",
    },
    澤田剛吉: {
      card:
        "推薦 : 陰謀者的洞察、嚴師的教誨、守護者的誓約\r\n建議 : 4件套-陰謀者的洞察,\r\n2件套-生命加成\r\n2號位 : 破招\r\n4號位 : 閃避\r\n6號位 : 生命加成",
      position:
        "輔助輸出，戒指建議全滿\r\nPVP中效果驚人，搭配初期就能取得的急救裝置及高破招較能出奇制勝\r\n推薦星數 : PVE-B , PVP-S",
    },
    雲雀恭彌: {
      card:
        "推薦 : 兩大劍豪\r\n建議 : 4件套-兩大劍豪,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : 爆擊傷害加成",
      position:
        "輔助輸出，戒指建議全滿\r\n唯一適合兩大劍豪的角色，配合天賦湊滿脆弱傷害驚人，但湊滿難度較高\r\n推薦星數 : PVE-SS , PVP-A",
    },
    XANXUS: {
      card:
        "推薦 : 炎壓的爆發、狡詐的主宰、防禦優勢\r\n建議 : 4件套-防禦優勢,\r\n2件套-防禦加成\r\n2號位 : 防禦加成\r\n4號位 : 防禦加成\r\n6號位 : 防禦加成",
      position:
        "輔助輸出，戒指建議全滿\r\n平民神角，防禦及炎壓越高傷害越高的角色，搭配戒指及天賦生存能力極高，兵器適合急救\r\n推薦星數 : PVE-S , PVP-S",
    },
    貝爾飛格爾: {
      card:
        "推薦 : 精準打擊、絕地的死鬥、繼承者的覺悟\r\n建議 : 4件套-絕地的死鬥,\r\n2件套-爆擊加成\r\n2號位 : 攻擊加成\r\n4號位 : 攻擊加成\r\n6號位 : \r\n爆擊67-75% - 爆擊傷害加成\r\n爆擊無67-75% - 爆擊加成",
      position:
        "主要輸出，戒指建議全滿\r\n平民神角，SR唯一攻擊S且較為全能的角色，延展性很高\r\n推薦星數 : PVE-SS , PVP-S",
    },
  };

  let name = "";
  let card = userMessage.indexOf("輔助卡");
  let position = userMessage.indexOf("定位");
  let nothing =
    "ciao-su!\r\n欲知輔助卡配置請於字句中加入\r\n「角色名稱」及「輔助卡」\r\n欲知角色定位請於字句中加入\r\n「角色名稱」及「定位」\r\n完整角色名稱 : \r\n" +
    person.join("  ");
  let IndexIf = () => {
    if (userMessage == call) {
      return nothing;
    } else if (card !== -1) {
      return name + " :\r\n" + ConTent[name]["card"];
    } else if (position !== -1) {
      return name + " :\r\n" + ConTent[name]["position"];
    }
  };

  for (let i = 0; i < person.length; i++) {
    if (userMessage.indexOf(person[i]) !== -1) {
      name = person[i];
      break;
    }
  }

  reply_message.unshift({
    type: "text",
    text: IndexIf(),
  });

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
