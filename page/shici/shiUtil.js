/**
 * @author lu
 * @date 2018/9/13 14:52
 */
var shiUtil = (function () {

    var lvjus = ["平平中仄平", "中仄中平仄", "中仄仄平平", "中平中仄仄"];

    function formatShiArray(shiArray) {

        var jus = [];
        var pzs = [];
        var fus = [];

        var ju = "";
        var pz = "";
        for (var i = 0; i < shiArray.length; i++) {
            var shi = shiArray[i];
            if (shi.pingze) {//存在平仄
                ju += shi.ch;
                pz += shi.pingze;

            } else if (!/[\n]/.test(shi.ch)) {//是符号
                fus.push(shi.ch);
                jus.push(ju);
                pzs.push(pz);

                ju = "";
                pz = "";
            }
        }
        return {jus, pzs, fus};
    }

    function get2Pingze(pzs, ju, ind) {
        var in2 = 1;

        if (pzs[ind].length === 7) {
            in2 = 3;
        }

        var pz = ""
        if ("中?".indexOf(pzs[ind][in2]) === -1) {
            console.log(pzs[ind][in2], ju[in2]);
            return pzs[ind][in2];
        }

        var tInd = 0;
        for (var i = 0; i < pzs.length; i++) {
            pz = pzs[i][in2];
            if ("平仄".indexOf(pz) > -1) {
                tInd = i;
                break;
            }
        }
        if (!pz) {
            throw new Error("不能判断第二个字的平仄");
        }

        var yu = ind % 4;
        var rePingze = "";
        if (tInd % 2 === 0) {//第奇数句
            if ("平" === pz) {
                //  平仄仄平平仄仄平平仄仄平 往后句子都是如此
                //  0 1 2 3 4 5 6 7 8 9 10 11
                rePingze = "平仄仄平"[yu];
            }
            else if ("仄" === pz) {
                // 仄平平仄仄平平仄仄平平仄
                rePingze = "仄平平仄"[yu];
            }
        } else if (tInd % 2 === 1) {//偶句
            if ("平" === pz) {
                // 平平仄仄平平仄仄平平仄仄
                rePingze = "平平仄仄"[yu];
            }
            else if ("仄" === pz) {
                // 仄仄平平仄仄平平仄仄平平
                rePingze = "仄仄平平"[yu];
            }
        }

        console.log(rePingze, ju[in2]);

        return rePingze;
    }

    function getGelvShiHtml(shiArray) {
        var shiJson = formatShiArray(shiArray);
        console.log(shiJson);

        var pzs = shiJson.pzs;
        var jus = shiJson.jus;
        var fus = shiJson.fus;

        var shiHtml = "";
        var juHtml = "";
        var pzHtml = "";

        for (var i = 0; i < pzs.length; i++) {

            var pz = pzs[i];
            var ju = jus[i];

            var lv = "";

            var p2z = get2Pingze(pzs, ju, i);

            var plz = pz[pz.length - 1];


            if ("平" === p2z) {//取第二句第二个字分析。
                if ("平" === plz) {
                    lv = "平平中仄平";//仄平平仄平;
                }
                else if ("仄" === plz) {
                    lv = "中平中仄仄";
                } else {
                    if (i % 2 === 0) {//奇数句
                        lv = "中平中仄仄";
                    } else {
                        lv = "平平中仄平";
                    }

                }

            }
            else if ("仄" === p2z) {
                if ("平" === plz) {
                    lv = "中仄仄平平";
                }
                else if ("仄" === plz) {
                    lv = "中仄中平仄";
                } else {
                    if (i % 2 === 0) {
                        lv = "中仄中平仄";
                    } else {
                        lv = "中仄仄平平";
                    }
                }

            }

            if (pz.length === 7) {
                // console.log(lv);
                lv = ("平" === lv[1]) ? ("中仄" + lv) : ("中平" + lv);
            }

            for (var j = 0; j < pz.length; j++) {

                if (("平" === lv[j] && "仄" === pz[j]) || ("仄" === lv[j] && "平" === pz[j])) {//错误
                    juHtml += ('<span class="jp-err">' + ju[j] + '</span>');
                    pzHtml += ('<span class="jp-err">' + pz[j] + '</span>');
                }
                //正常
                // && ("平" === pz[j]) || "仄" === pz[j]
                else if (("中" === lv[j]) || ("平" === lv[j] && "平" === pz[j]) || ("仄" === lv[j] && "仄" === pz[j])) {
                    juHtml += ju[j];
                    pzHtml += pz[j];
                }
                else if ("中" === pz[j]) {
                    juHtml += ('<span class="jp-zhong">' + ju[j] + '</span>');
                    pzHtml += ('<span class="jp-zhong">' + pz[j] + '</span>');
                }
                else if ("？" === pz[j]) {
                    juHtml += ('<span class="jp-jgao">' + ju[j] + '</span>');
                    pzHtml += ('<span class="jp-jgao">' + pz[j] + '</span>');
                } else {
                    juHtml += ju[j];
                    pzHtml += pz[j];
                }

            }

            juHtml += fus[i];
            pzHtml += fus[i];

            if (i % 2 === 1) {
                shiHtml += ("<p><div>" + juHtml + "</div>" + "<div>" + pzHtml + "</div></p>");
                pzHtml = "";
                juHtml = "";
            }

        }

        return shiHtml;
    }

    function getNorepatShiArray(shiArray) {

        console.log(shiArray);
        var shiArrayTemp = [];

        for (var i = 0; i < shiArray.length; i++) {
            var shi = shiArray[i];
            var noRepat = true;
            for (var j = 0; j < shiArrayTemp.length; j++) {
                if (shiArrayTemp[j].ch === shi.ch) {
                    noRepat = false;
                    break;
                }
            }
            console.log(">>>",shi.ch);
            if (noRepat) {
                shiArrayTemp.push(shi);
            }
        }
        return shiArrayTemp;
    }

    function getDuoyinHtml(shiArray) {
        var duoyinHtml = "<div>以下是一字多韵的汉字，系统没法判断其平仄，请自校。</div>";

        shiArray = getNorepatShiArray(shiArray);
        console.log(shiArray);

        for (var i = 0; i < shiArray.length; i++) {
            var shi = shiArray[i];
            if ("中" === shi.pingze) {
                var wrap = "<div>";
                wrap += ("<div class='duoyin-bar'>" + shi.ch + "</div><div class='duoyin-con'>");

                for (var j = 0; j < shi.infos.length; j++) {
                    wrap += ("<div>" + shi.ch + "　" + shi.infos[j].yun + "，" + shi.infos[j].sheng + "声。</div>");
                }
                duoyinHtml += (wrap + "</div></div>");
            }
        }

        return duoyinHtml;
    }

    return {
        getGelvShiHtml,
        getDuoyinHtml
    }

})();