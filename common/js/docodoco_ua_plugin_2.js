//業種大分類
var IndL = {'A': '農林,林業','B': '漁業','C': '鉱業，採石業，砂利採取業','D': '建設業','E': '製造業','F': '電気・ガス・熱供給・水道業','G': '情報通信業','H': '運輸業，郵便業','I': '卸売業，小売業','J': '金融業，保険業','K': '不動産業，物品賃貸業','L': '学術研究，専門・技術サービス業','M': '宿泊業，飲食サービス業','N': '生活関連サービス業，娯楽業','O': '教育，学習支援業','P': '医療，福祉','Q': '複合サービス事業','R': 'サービス','S': '公務','T': '分類不能の産業'};
function getIndL(data) {
    if (!data) {
        return '';
    }
    var ListArray = data.split(',');
    var tmp_List = [];
    for (var i = 0; i < ListArray.length; i++) {
        tmp_List[i] = IndL[ListArray[i]]
    }
    return tmp_List.join(" | ");
}

//従業員数
var Emp = {'1': '1人～5人','2': '5人～10人','3': '10人～30人','4': '30人～50人','5': '50人～100人','6': '100人～200人','7': '200人～300人','8': '300人～500人','9': '500人以上','99': '不明'};
function getEmp(data) {
    if (!data) {
        return '';
    }
    var ListArray = data.split(',');
    var tmp_List = [];
    for (var i = 0; i < ListArray.length; i++) {
        tmp_List[i] = Emp[ListArray[i]]
    }
    return tmp_List;
}

//時刻
function getTime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if ( h < 10 ) {h = '0' + h;}
	if ( m < 10 ) {m = '0' + m;}
	if ( s < 10 ) {s = '0' + s;}
	return h + ':' + m + ':' + s ;
}

//上場区分
var Ipo = {'1': '東証一部', '2': '東証二部', '3': '地方上場', '4': 'JASDAQ', '5': 'マザーズ', '6': 'ヘラクレス', '9': '非上場'};
function getIpo(data) {
    if (!data) {
        return '';
    }
    var ListArray = data.split(',');
    var tmp_List = [];
    for (var i = 0; i < ListArray.length; i++) {
        tmp_List[i] = Ipo[ListArray[i]]
    }
    return tmp_List;
}

//資本金
var Cap = {'1': '1千万円未満','2': '1千万円～2千万円','3': '2千万円～5千万円','4': '5千万円～7千万円','5': '7千万円～1億円','6': '1億円～2億円','7': '2億円以上','99': '不明'};
function getCap(data) {
    if (!data) {
        return '';
    }
    var ListArray = data.split(',');
    var tmp_List = [];
    for (var i = 0; i < ListArray.length; i++) {
        tmp_List[i] = Cap[ListArray[i]]
    }
    return tmp_List;
}


//売上高
var Gross = {'1': '1億円未満','2': '1億円～5億円','3': '5億円～10億円','4': '10億円～50億円','5': '50億円～100億円','6': '100億円～500億円','7': '500億円～1000億円','8': '1000億円～5000億円','9': '5000億円以上','99': '不明'};
function getGross(data) {
    if (!data) {
        return '';
    }
    var GrossListArray = data.split(',');
    var tmp_GrossList = [];
    for (var i = 0; i < GrossListArray.length; i++) {
        tmp_GrossList[i] = Gross[GrossListArray[i]]
    }
    return tmp_GrossList;
}

