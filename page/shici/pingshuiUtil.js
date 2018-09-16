/**
 * @author lu
 * @date 2018/9/12 18:36
 */

var pingshuiUtil = (function () {
    var pingshuiArray = [];

    (function init() {
        var pingshui = `一东平声　风中空红东同翁公宫通穷功雄工鸿丛蓬终融濛虹童桐虫匆弓蒙戎忠珑丰[丰收]隆崇穹栊篷躬攻骢葱衷筒笼瞳枫聋铜聪充胧熊洪逢[鼓声]峒[崆峒]嵩忡烘砻窿昽菘僮冲[深远、淡泊]癃幪茸嵷芃曈恫仝盅悤崧筩[竹筒]矇冯[姓也]瀜梦[音蒙]绒騣璁朦讧茏艟[艨艟，战船]螽潨瞢[目不明]咙狨谼侗[倥侗]翀藭棕霳潼荭鬉葓沨懵[懵懵，无知貌]雺氃蠓豵豅潀拢[音聋。理也]痌爞穜疯罿烽酆巃种[音虫。稚也]饛朣韸嵏艨芎螉总[缝也]泷[雨泷泷]曚崆蝀酮髳沣哄[同叿，言语嘈杂]髼蚣駥葼篊逄[鼓声]獞漴[水声]肜硿悾娀珫茙犝渱玒緵[缕也，緵罟也]堫汎[音冯。亦浮也]懜鼨蓊衕菶涷烔[热貌]鬷[釜属]箜匑稯洚氋茼惾麷鍐愡[惺愡]靀鯼膧[肥貌]釭[毂铁]罞塳鬔埪篵庞[充实]艐懞橦[木名]嗡谾蠪倥[倥侗]囱漎[水会也]哃蕫摓狪柊靇涳茺檬烿眮鏓憽絧倲叿鵼碽蔠詷浺檧鉷鸫魟猦靊鎓蝬菄霟蓪鲖[鱼名]爖龓蘴鄸檒鴤寷繱痋餇錝灴偑蕯埄揔秱堸襱杛仹娻崠[山名]屸徖樋爜汷樥熢碂熜愩粡囲鸗勭瓨浲鹟熥湰嵡焪葻糿艂朡篢粠嘃疘曧鯟仜棇楤娂翪濍猣漨赨焢闂幊鑨硹鹲埬熍漗䧺㤝䃧䓗䮾㰍㚇䧆䕺㹣䯷㴦㣉䀄䙦䤓䆍㒥㳘䥂䞑㸗䂫㠦㼿㼧䍶䩺䪦䆔㮬䈦䵄㦕䅝㥖䁓䰸䈵䫹䈡㲁䐋䗓䟥㩚㨑㝫㠮㚅㠉䡯㠓䏊䆪䆚䴀㓽㕼䖝㒶㢥䰒䉺㺋䰤䮵㝟䴶䈺㕬㵯㳞䲨䡫䴿䧷䱵㣝䤝㓚㭜䝦䪊㣭䲲䑃㖓㦀䘪㙹㜴䒠㝘𦨴𪔴𨍈𦏆𥵫𢃐𩐠𢫨𨾊𧠊𥭗𩅉𣌾𧙥𨍉𧳆𦮔𨏠𢊕𦿏𦯇𧱁
二冬平声　峰龙容钟松踪重[重复]浓鐘从[服从]封蓉宗逢胸鍾冬农慵筇锋庸舂侬供[供给]凶恭悰雍溶蜂蛩墉秾鬆茸缝[缝衣]镕醲冲[要冲]烽佣镛兇邛淙邕忪鼕龚淞纵[纵横]琮颙憧[意不定]喁[噞喁]彤饔笼[音龙。竹名]榕丰[丰采]痈共[敬也]嗈卭汹跫鬃葑[菜名]噰廱蛬[通作蛩]匈賨鳙熔茏讻壅[与雍通]艟[艨艟]禺[音颙，越地名]咚鏦憃[騃昏也。或作憧]瑢摏嫞枞籦鄘鬞褣磫脓橦恟苁[肉苁蓉]蹱桻瞛蕹彸媶庝崶澭[水名]銎憹齈舼哝瑽傛伀摓躘鏧蝩浵臃漨凇佟妐蚣滽徸褈妦捀驡蕽搈犎孮鑫鉵浲縙郺誴鉖襛槦炂熧欁赨倧桏龏髶禯詾緟炵緃篈隀嵱[山名]蹖銿笗鰫夆榵痋鷛衳嫆穁堼蚒倯鸗暰灉賩檂媀髸苳慒[虑也]锶刣婃䂌㲨䯳䗤㿈䗦䅃䧡㮪㧭㠽䡮㡣䘬䐫䳷㚵䗥䇀䅊㸼䀱㞱䙂㤏㴩㺎䝑㲇䌬䰌䳋䊄䳯㙡㣑㽫䆹䥢㜂䗬䤊䣏䃔㜉䇯㹐㫒䢉㣠䡴㐯䳉䡥㝐㟾䠜㷭䩼䗸䳍䂈䈶㢕㶻㮤㜡䢼㬝㫡䢨㼸㻾䡆䶱䇗𦨰𩅽𩘎𨑊𠟍𥎂𩥫𨙔𧝸𦬘𢪋𧝎𪔖𩂓𪔳𥳎𢧳𪄻𥍮𢃓𦭭𪚝𧘂
三江平声　江窗双邦降[降伏，降下]缸幢腔庞[高屋，又姓]撞扛艭厖淙釭[镫也，一曰毂铁]矼泷[奔湍，又州名]杠桩尨摐哤茳鏦憃[愚也]逄[塞也]駹跫瑽谾庬玒枞[通摐]羫肛漎[水会也]梆椌洚噇狵痝蛖橦[帐极]豇刅悾[音腔]舽娏鬃哝[嗔语，语不明]啌囱涳跭栙魟愯胦憹峕垹浝牻膧[膧腔]佭孇堫鹲瓨欆讧㟅䉶䎫䵨㼻䜫䝄䁸䢶㼹䚒䄝䤸㟌䚎䆫㾤䜶㤶㒕䉘䚗䓼䭚㧿䃥𢥠𨇯𩐨𥆙𥎋𤵸𧊑
四支平声　时诗知枝期迟之奇悲丝师池姿思移垂离宜疑眉辞谁随持为[作为]驰词衰痴儿卮碑旗夷吹仪危祠篱私欺滋支棋巵遗湄窥披兹斯墀嬉帷漪芝疲追规资施颐卑差[参差]基羁涯饥[饿也]亏岐脂炊怡皮熙嗤麾肌陲维陂慈璃漓伊医茨螭曦蕤龟司累[系累]姬咨锥缁脾葵其歧髭雌欹彝尸釐饴疵飔巇痍推[顺迁也，类推]迤[委迤，自得貌]尼糜縻罴攲骑[跨马，动词]夔赀隳羸狸箕贻篪肢治[理也]逵而蓠萎[蔫也]鸱弥绥楣麋羲笞鹂澌[水索也]椎醨媸洟[鼻液]噫[恨声]綦陴屍嘻梨崎蛇[委蛇]洏匙嫠胝罳裨醾咿猗貔毗罹淄惟萁禧瀰[水旷远之貌]鹚孜嵫蓍榱嵋比[比邻]菑蚩緌锤鬐姨狮蘼牺隋絺祺鸶居[语助辞]祇耆丽[高丽]怩坻[水中高地]訾瓷骓祁圯扅嶷[九嶷]眵魑氏[月氏]耔[音兹]敧[以箸取物]齐[衣下曰齐。又与荠通]书[音诗]缡褷輀丕孳[生息]僛犁[牛驳]槌蜊祗琦骊筛崖邳凘坯摛黐蜞葹熹鎚提[群飞貌]埤栀倕匜跜禆氂[犛牛尾也。又与釐通。]踦[蹇也]鳍玼瓻撝埘畸漦罢厘厮粢锱馗[与逵同]磁蠡[谷蠡。瓠勺]睢琪菭痿辎娭犄淇僖嚱[口声]赍诒[相欺也。遗也]纰骐铍脽鲕戏[呜戏，叹辞]麒眙[举目貌。又县名]伾坨妫鸃玆偲[偲偲，相切责也]厓茈踟黟祎戣鲥庳[下也]褫箠[节也]缧蚳蓰諆簃鼒垒[重也。又与累同]泜寅[音夷]埼觿妮酾栭倛胹甤觺髵鸸耛纚蕲[蕲茝也。求也]絁壝餈虒骙椸鵻椅[梓也]呞犠咦桤台[我也。悦也。]呢逶虽椑[木名]猕骴宧魌镃郿稘委[委蛇]翍錤罙犛[牛黑色]貤濉劘黧琵黴趑酏唲耏峗沩鉟荽劙蔂爢郫鲻秠熺陑丌剂[剪齐也]锜蚭薋阰潍腄跂唯觜被[荷衣]缌枱訑狉饎鈚齍襹剞蛦觭榰駓嗞禔禠覗鍉娸鳷椔蛳蜲衼噅甀倠轜偨蚾恞誺頯虆跠豾欙齹媐陭岯頄峓芓阺嵯[㠁嵯]钚樆旇瓵疧鹛洢摫梩箷厜仳仔[克也，任也]吱茬诐蚑蚍栘胰蜘謻呲剺枇蠵踑觯螷孋蜱鹎呸躨鮧鵹鸤圌[山名]嫢腝虮甾禗鲏蟕簛縒齝夊诶犪孷膍瞡姕嗺鴺栺蠀姼苤鬾狓愢桋悂髬隹謘龇蘪萓璂蕬沶鶅鰦婎滖羠楑鐁毞蓶鰤軝掑桸蠝廲磃柂[木名]荾彽拸醚琟柌蛜熪銔轙燍攗荎謧荋爔浬鈭譩肶鯬芪鲯鼺袘嫘厶榹糦螔篃蜤擟芕瓃騩堳槻筣蟖桵嫛蟍娺犤纗暿濝紎郪秪衹鄬鸓諰崥[山足]攠眱倁璾稵篅蚔澬戂藣鶳魾袻魮讉耚檹啙艃箈菞洈杘蘳萆柅巙脪鉹怌猍娞錍鵸蔩荠巸倭侕飺穲怟恑妛眭諀徛瞦鶀瞝蟣邿蒒悘騦媊欐[屋栋]怶抾愭垐貾敮鈶抳鑴顀屔搋鴲鄈杒鬶麎猸剘陏嬨猚峏槜睝鄑瓍蚽鋖寪秓恖躸鮨錅鼶猈諅徥泀葿鳺籾狏萑葰蓷浽綥婑糸覹呰旖矖瑡嚟訵槣馶珆鑗趍[趍赵]惢聏魳湤簊亓苼湷墮矀濨寲臸秖藄抷秛瞴鵧焁跢荲醀胂鏔忯綨暆鶗鍦溡楒秜狋刕伎胔夂覣她鼭炋瑂瓕奞篺榯栥浉汖趀羛鋫鸍鳾隓乁侇孖汥箄[捕鱼具]扺誃駍焷禌袲欈粸郦猉沘䍦㕒䂓㜷㒧㕧㒿䧅䲭䙰䴊㮰㶟㱦䬐㔣䤈䕻䱌䔟䨨䳢㬢㖇㠌㺔䔮䜔䡋㞴㤵䬜䧳䴽䥴㝖㿲䱘䩟䇪䀵㮛㾨䮊䈘䝷䲑䂀䓡㷰㥓䛴㽧䊷䇁㞿䴧㫅䳠㰨㺇㴯㽡䝝㨢䉻㲠䚿䊳㢑䅲䲉䧌䙹䂣䌤㣍㯄㠼䅔䊍䍘䓋㟚䇫䴻㯦䌳㹫䅑㐌䝴䥯䪹㞢㦾㫷㙓䯱䐖䖽䣽䖪䘒䲬䶔䎩䶴䧝䔆䞅䳄㚝㚦䕳㔭㗓䆅㩼㔻䅻㿳䮔䭨㞾䎟㠿䎠䬮䙙㺿䮆䋩㱆䞚㰎㲤㮃䧶䳫㸏䫠䶵䫏䛐䝚䩓㧫㺨㩽㣦䡳䈕䣎㴲䮈䶆䖒䫑䭶㺰䪧䑴㘂㰘㗪㮕䊚㖢㺈㸟䌕䜅㹎䟀䄬㰻䵹㽻㨳䫋䞾㰞㻟䐅䄜䩭㰚䣫䋥䧴㖷䓜䶞䎱䥸㯅䟚䪎䱈䙾㬐㜯䭣䧦㩾䖿㷢䲹㚀㒋䣡䛂㮅䕤䗐㲍㽄㘹㺣䲿䑊䳡㛓䉲㚸䨏䬁䫢䭼䟸㶨㓟䢫㼢𩅰𤪌𧧺𥰭𥯨𧹛𦑡𨾚𩆂𧔍𠠍𣮉𧦧𧪡𣢑𪗋𪎫𧩹𠈩𩓠𦝢𢤂𨵎𥁼𤱍𤇴𩁌𩄚𩆵𣚂𠻗𩣚𢓡𦗕𦃇𦉈𧥤𧢦𧕯𧡺𢹍𢻹𤸬𦳈𦐉𤿎𪋩𪘫𥍋𡖂𢜽𪆁
五微平声　归飞衣[衣服]微稀非机扉违晖機肥依辉围矶威霏闱薇挥菲[芳菲]帏希畿妃晞徽玑几[微也]讥饥[谷不熟]旂欷祈騑圻鞿绯韦腓沂巍翚睎唏淝馡颀豨囗煇蜚[与飞通]葳蝛诽狶袆痱[风病]叽埼皈禨溰俙譩岿婓鵗耭厞悕溦湋騩[山名]騛犩浠郗蜰鬿烯裶蟣鐖蚚莃楲刏僟楎婔肵鰴魕靟奜媁琋灳椲喡鍏涠媙岓癓渄媈蟦鲱飝瀈隇覹屄玂矀鰄猆郼虮餥禈㣲䢜㟪㱕㚻㹆䩁䇵㙨䧇㳖㹷㟓㩣䓅㫵䟇䒾䪰䈈㵟㥋㫎㙎䬠䥩䉠䖷䙟㠻㛄𨵈𢾁𠨚𥰙𧰙𠂣𤟤𧗇𦠄𩇯
六鱼平声　书馀鱼居如疏庐初虚车除舒渠裾墟锄闾余蔬渔予[我也]舆徐胥躇储诸驴蕖梳欤嘘歔琚蜍玙摅誉[动词]鉏旟蘧畬猪樗狙袪于[叹辞]趄与[语辞]祛於菹蛆纾篨潴胪且苴据[拮据]雎沮茹淤榈疽鶋滁袽蒢妤磲洳驉挐魖砠綀箊帤槠鴽畲糈璩呿藘蝫岨咀屠[休屠]虑[思虑]舁谞阹铻醵胠橥涂藷湑腒蝑伃鸒雓疋耝衙[衙衙，行貌。]龉瘀鐻摴籧鴡蒘蚷椐憈璷艅爈楈蜛抾蕠匷崌淭螶狳豦俆鵌嬩坥唹懙鵨菃侞捓婮曥伹硢捈捒涺鮽鱋櫖筎麆謯筡瑹偦籅蒣桇豠娪邚稌劯藇蕏魼揟鷠郚紶㠊䃴㞐䕡䱬䈝䠧䱉㭬䝻㺞䥚㧧䔡䪶㝒䈌䣰䍱䱷䡤㯫㾒䟊䰻䢸䧾䋈䏣㡹㠠㥠䝣䘫㶛䣷㭕䮉䐳䅕䁩㱺㣄㯉䓚㽰䬔䊰䆽䂛䒧㻬㶆䐗䗨䰕𡨢𪅰𨛭𪆂𥿇𧓻
七虞平声　无图湖夫孤珠都隅壶徒殊途枯须儒呼娱苏俱芜符愚扶衢乌趋躯吴奴株雏虞蒲炉区腴驹糊梧驱肤徂胡纡姑臾蹰吾凫吁迂涂乎塗沽厨敷模朱拘谟垆襦诛卢濡芦枢诬癯逋铺[铺盖]租榆鲈姝渝竽酥瑚晡臞狐辜岖鸪弧盂粗颅铢输孥摹需舻劬刍污[污秽]孚呜趺愉毹谀巫轳屠于醐踰觚萸俞菟瑜逾揄殳雩酤桴俘菰痡繻歈郛盱蛛殂鼯嚅驽貙嵎蛄呱刳蒱玞蚨餔窬荼禺瘏酺觎矑苻鈇镂洙栌罛幮趍[俗趋字]泸褕牾圩纑莩瓠跗鹕駼唔媭橱阇柎笯喁[声相和]枹瞿稣旴圬毋芙麸絇罦玗摸[同摹]菇邾硃蝓荂稃懦孺葫茱莆於蒩瘉陬膜[拜也]诹蒌杅鸲娵瓿軥氍鰅羭戵帑邘洿箍鸬姁龉酴猢鼩浯嫫箛痀醹鋘玈軱騟嵞趎颥恶娄句母喻趣[与趋通]嘟嘑蝴匍稌轱齵跦跔鮬睮呋朐獹峬珸釪柧瓐粰獳苸邞癒峹膴殍澞腢幠鄜楰媀湡雽呕鑺娄咕蠕菩葡侏喣隃謼虖胊歍钨砮孵謣滹榑慺扜蠼牏欨欋攎鰞庯鑐荴犓鱬蠦堣媰冔氀廔膢袾蘛櫯鯆鸆蜈鈲氁枎哌魱躣楜薷箶絑螐柨跿陓莁鮢橭陠斪萮鵌鷜鍝虶窏骷歑衧瞜胕懯轷鴮蕍鷵鷡怤泒橾醏溇嬬鵏庩嶀鳺鷋譕鹀曘禂眗豧駯箁盓糐荹畉綒媩墲杸誧蒤灈咮垀虍葄翑鴸廜弙堬貗鶦蜅跍郚鮕蕦酑袧挎洖麆救鯂祦枸彋潳恗燸緰妋墿瑦祩扝衭紑芋桍鵵抭瑹捗緅踙伮怃嚧豠嫴臑姇崳娐陎郙岣玸雐桙驺胍釫娪幁钸钴黸捈垺秼紨颫喖葋筟忂軗晇聥穻梌馟愈淲骬譃瘘茣裯[与幮通]鰸瞴郀璷蓃翵邭瓳麌鄃蛷螸萭鮈璑檡籚㬰㪺䧢䒀䱐㢝䅳䖘䛕㥚䈻䵾䩱㼶䓵䣯䎍㻌㹳䧸㕊䏏㪀㢳㡏䇕䆰㿖䠒䰰䫱䇓䮃㺏䝒㸖㭸㣘䖚㝼䩣䎁㭰㠸㭪㖩䩲㷻䍢㸡㯛㲎㜹㧣㽳㼋䭅䰅䂂䰧䟞䴸㱠䞛䜽䄮㦆㗅㟺㢏㺮㚥䭍㗙䔕㥥䄨䭌䎔㰭㷒䩴䞤㳛䡍㻍䢓䢐㮧㩤㪭䋶䣄㲗䮒㾰䉑䞮䃿䦜䵶㻯䮏䓏䩒㦵䅷䇬㚢䉿䈬䞕㬂䊿䊸㻀䣿㫙䣚䓊䐻㔧䉉䴣㭔㐡㼡䉐㓬𨵦𨁏𨬟𦘴𦩞𢋅𧦝𩿧𪋯𢖳𦄼𧻷𤝹𥱻𧍪𩶭𦐛𣂐𧾱𧪮𤿚𤬛
八齐平声　西啼低溪迷兮栖泥齐题鸡堤携蹄梯凄嘶藜蹊畦萋稽闺鼙跻黎霓圭妻犀倪悽提犁[同犁]齑脐荑鹥鲵猊暌笄鞮瓈梨奎睽奚篦羝稊隮赍蜺醯嵇挤绨鹂麛儿[音霓。姓也]鹈騠麑刲鞞撕黳批鎞氐韲臡齯袿狴粞輗坭[同泥]黧磾鼷蛴骊枅樨诋澌[与嘶同。]觿恓烓折[安舒貌]蠡[瓠瓢]罤瑿缇傒徯乩蠵窐繄霋懠褆醍锑媞巂鑴缔鲑柢禔婗瑅緀遆桋邽郳椑[圜榼]偍酅鮧蜺鶗蝭鵹鸂崥[山貌]螇砒趧邌膍屖崹鷉忚棿袛嫛騱藈榽橀彽蝰麡肶謧盠廲豍艩鶈厗胿貕蒾湀鑗錍亝郪玭纗淣聧觬鑙笓鼶啙燍齌睼屔鴺斊奃猰儶豯蒵黊鬶鍗卟焍殹刕渧眱瓗蛂錅徆禵櫅鷤梋眭鑇趆茥珶磃鍷睳惿徲嗘謑驨楏媂銈腣檕釮碮螕梐郋䃜䬾䨑㙠㩦㜎䉫㼰䄢䅅䚣㢴㖒䒊㡙䮘㨒䶒䬫㯇㓳䍕䪢䝴䚷㾷㕃䵩䚜䀘㴝䫣㦒㯕䙵䔶㡗㫝䛊㔒㿽㰿㮷䯓㸄䛱㣢䐎䤍㛷䛏㰀㽯䐡䱱䧑䗗㩗䄺䪡䳶㓾䠁䖙䘽㔸䂑䔣𧋘𨻼𠜱𦎣𥌛𥏠𧡨𣢍𥝌𧬊𨥦𤮰𩧋𥉘𨏳
九佳平声　怀佳阶斋谐乖排埋淮钗骸鞋街偕崖涯侪霾柴牌槐喈揩豺俳挨荄皆差[差使]鲑歪捱筛薶[古同埋]楷徘齐[同斋]秸褢箄[大桴也]螷痎稭湝啀櫰膎瀤崽睚龇搋祡榸蘹徍摨喍媘誽夈瑎棑娾捚犤掜薢煯膗榽擓徥蝔鶛啡猈諰輫篺猅唻麡淣腉慀溾䕸㠢䡨㗨㪓㥟㦟㔞㪰㾹㜥䁲䔝䃶㾩㨤䍲㨙䨪㗍㼮䓙䓱䴜㜳䙎䯐䳸䂷㩄䬩㾬䃈䡡䚑䱝䠹𥱼𩘅𥳧𦂄𢶀𩑢𢰇𧱾𢔡佳涯厓蛙娃鲑哇娲蜗騧靫緺徍猚唲芆䦱㰪𦶎
十灰平声　来开台[星名，山名]臺才哀苔埃哉莱材猜裁栽胎灾垓腮孩财咍皑该荄骀毸陔呆徕抬鳃纔能[三足鳖。又三能]鲐炱儓崃赅騋侅邰颏挼菑[同灾]薹唉祴思[多须貌。]峐騃偲[彊力也]郲欸咳[咳笑]檯剀胲倈毢絯麳郂敱隑鶆籉跆愢懛梾毐颱鯠揌嵦斄烗涞旲珆啋硙睵渽婡溾箂孻賳唻猍琜箈庲俫輫豥奒嬯䑓䰄㶼䐩㜾㬃㯁䋱䚡䴭䠕䠽䱺䪱㸀㰩㰧㨟䅘㙵㾍㾂䬵䤤㒲㱾䞗㚊㷘䧒㱼䶣䯮㱯䀭𪒴𨸜𤸳𤗏𪑚𤘑𧻲回杯梅催雷灰徊堆嵬隈摧陪媒颓罍魁瑰枚醅培洄槐[守宫]豗推煤恢隤桅偎煨巍裴诙崔莓胚坏禖佪隗搥缞漼尵霉抔魋鋂虺衃啡赔玫傀崴脢塺磓敦嗺焞盔酶轠蘈悝紑頧慛蓷鎚[锻也]櫑柸擂蛔恛咴腜羧镭畾墔毰诶僓弚茴捼鏙蹪痦彽檑鑘椳凗瓃渨愄熣陫荋葨磪錑螚妚陮阫鞼湈燘簂詴鐜烠缋櫆鸓顝鮠棓碨晆揋藬藱鼿鳂廆洃脧坆讉阢儡[败坏]鴭膭痽謘橔槯䍙䭔㿉䋿㕍㟴㢈䝅䙑㟝䊈䀃㵢㛱㜠㞜䂙㻁䨓䣙䖶䝇㷇䤂䜃㿗䍣㷟㺳㚰㾯㮎䫊㙁𩌃𤳳𤗏𧝋𨛬𨻵
十一真平声　人春尘新身真神亲臣邻贫津频民巾辰轮宾珍滨秦鳞陈伦仁因辛麟晨沦伸嗔巡宸旬纶匀绅薪茵颦银均钧蘋驯峋醇旻申淳唇榛论[同伦]闉循闽筠莼粼椿囷缗蓴屯臻珉纯询垠皴磷振[厚也]呻遵谆嚬姻寅瞋岷湮裀禋恂漘鹑濒堙纫踆迍泯嫔彬甄莘燐嚚辚蓁诜珣荀抡璘信[与申同]龂豳狺潾驎畇贞氤逡駪骃缤矉歅絪麇輴夤紃嶙溱甡殷[众也，盛也]畛肫邠奫洵螓菌[《博雅》菌，薰也]訚竣玢侁犉窀豩鄞矜[矛柄]誾斌郇兟諲蠙殥錞僎娠忞镔蜦墐[黏土也]轃罠珢翷填槟瞵袀抻籸旼囵栒桭茞輑鷷笢霦禛筃圳赟朲壣瞤螾繗侲麐橁傧盹箘玭捘汃眒瑸礥碅訔玟鞇嗪獜暋盿蔯鶞碖驞緸鷐莙洇衠峮螴峾頵痻棆厸鋆蛝嫃囩壿膞錀搸耣蔩姰駗苠怋砏扟忳栶阠揗閺鷏咰魜鯙憌檈盷凐瀙燊帪裑柛秵瑃瑧鏔曟敒敐胂竴杶鴖慇攽馪搷甐斴陯泿鰆猌毥宒椕陙珒湣疄腀峷蚐杊踚穦堻覠訷夋琎荺姺姄份檭妽狋眴鵢璌鈱芢屾浾籈暙磌馻鯩鳼偱槙殝訰屒薽汮駨顮礗蜠鏻蒖敃縜圁灥囜猵迿莀薼暽欭秂阌昀抿捪嫀樄媋麎珅鍲㕙䑳䞭䄄㻞㲀䰠䟴䖜㡦䍰㡄䥎㝄㧢䋸㝇䆣㵮䣩㛛㙬㔂䁕䙉㟩㝙㵌㟗䯂䮼㰋䎙㘦䈯䝧䓐䠳䇹䢻䚬㰉㨉㭄䋋䃌䀼䖲䈁䣅䐜䡑䘩㑗䡅䳲䘜㫩䓰䧣㞶䞺㥲㡒㰬䔚䊁䨈䅸䪸㖘㚬㫳䢅㾕䧬㽦䐇㛙𦟘𪛊𡣎𢗋𡊹𡈳𣘘𣐽𧓍𠬍𥎊𧲂𩴱𧾝
十二文平声　云雲君闻文分群军纷勤曛勋氛裙坟芬薰焚氲纹醺欣濆熏纭耘斤芹蚊汾芸懃荤筋沄忻殷[众也，盛也]棼雯缊蕡枌垠昕纁雰龈皲縕麇贲员矄煴狺鼢焄帉羵饙筠鼖觔廑慬蒀獯幩翂炘筼磤棻豮釿餴鄞瘽慇瘟[瘟瘟，小痛貌]郧黂蝹彣轒馧[馚馧]妘熉蒶昐臐羒汶[黏唾也]馩誾萉衯濦鴍岎溵馚眃鍕涢橨芠桾妢揾肦妏蒑魰秎煇斦鳼愪蒷懄閺馼耺囩菫炆鼤畃妡鴖橒敃蕓梤弅宭葐嚑歏邤鳻堇[黏土也]蚚縜蕲[山蕲，当归]玟盺訜隫鐼拚阌砏朌[大首貌]鲪錀魵鈖䈥㜏㪊䘇䙧㶏䰚㷊㥯䴦䩿䦩㯣䌲㹞䢵䉙䎹㹜㸮䭻㮗䈽㚃䭽䒺䓄䖐䗼㞣䵫𣬩𦐈𪛊𥎊𣯻𤖘𨳚
十三元平声　言园源原喧轩翻繁元垣猿烦冤辕暄藩樊蕃幡援[引也]萱鶱谖轓璠燔掀諠番鼋鸳蘩反[平反]湲鹓鞬袁沅宛媛蹯墦膰矾爰袢籓蚖怨蜿嫄眢洹攑犍薠煊芫晅騵蠜笲拚[与翻同]阮[五原]喛暖[柔貌]槾甗螈裷貆僠樠咺鐇謜杬榞襎犿蒝瀪蒬鶢楥蓒娮昍喰臗笎瀿愃攐惌鷭琂箮喯靬豲帵佡睷榬蝖羱勫褑瀳橎媴葾翧噃溒鎱吅摱梡妴羳袸邧駌愋鱕抃[连抃，宛转貌]嬎媗㠾䁔㟲䭈䊟䞿䚙㸋䓂䋦䪤䠝䉒㹇䖠㱪䋣䥉㓩䕰㨜㦥䮳䪛䇾㤋㹉䖤㪟䊕㥳䳦䲮䪃㓺㩮䚭䫶㺕䩩䡝𩒱𤄜𧔞𢬵𥂦𡍦𢐲𩛟𩔉𧑒𣘖𢅼𩐏门存昏魂村尊孙根痕恩论温樽坤吞奔盆阍浑昆暾藩屯崙豚扪荪蹲飧敦墩鲲髡婚仑裈琨埙鹍惇跟喷贲惛垠黁燉沄抡臀璊狲啍辒焞湓饨拫缊芚亹们瘟鲀虋鼲嶟軘蜳棔纯[纯束]囤焜吨蕴炖蜫馄憣搎穈殙弴縕忳噸渀[同奔]混汶[汶濛，玷辱也]吩涒锟锛涽騉豱繜噋驐菎墫鶤旽葐殟槂瓫猑鷷[与蹲通]惀瑥倴瘒撴蒽薞睯菛蟦庉貇喰鐼餫[与馄通]朜踚坉鞎霕怋芲棞禤犜溷[郁热也]暋澊黗訰緷轋惃瀳韫婨湣珲闦橔囩泍煾玧忶拵陯痻泿憞婫顐睧䑳䰟㹠䫒㖧䟂䐊㡓䴷㒭㮯㑮㱎䖵㬿㼔䴅㖹䗕䎜䕖䮝䡣䝠㛰㩔㯊䆭䵍䊐㸑㢯䃦㬈㻊㻹㼊䊩䔻𤟤𩒱𩖤𧢜𩌑𩔉𡿕𪙲
十四寒平声　寒看安难[艰难]欢残宽官端阑盘冠[衣冠]干丹餐兰竿栏乾[乾燥]鸾鞍酸团观[观看]坛弹峦玕肝湍澜漫[水大貌]蟠桓滩丸珊完翰攒单叹韩銮槃岏栾刊殚般纨抟棺漙檀瞒郸跚圞箪瘢杆驩刓繁[马腹带]潘磐钻汗[可汗]谩姗剜拦讙胖鞶襕柈曼[曼曼，长也]奸磻拚摊巑鼾[鼻鼾]髋狻獾啴番[番禺]絙汍慱顸墁[同㙢]鳗倌芄判[普官切，音潘，正作ꆙ]瘫谰瘅莞滦襌敦峘鑚镘邗萑媻囒鞔貆馒颟鏄羱弁[乐也]搬剸掸[音檀。触也。]蹒洹涫眢樠剬渜荁迀幋拌[舍弃]槫撺嬗桉钎皖抏酇嚾豻驒垸悗鳱烷羉豲痑睕豌慲躝鴅捖獌縏跘婠鷒驙籣忓槾貚灓耑灡帵忨貒韊檲褍喰灒窤萈繟竱攼梡羦嫨犿瓛芉塼砃犴酄篅荌搫毌椯繵雗螌鍴蠸褩寏曫臗鱄吅嬏媏雃綄嫥鷤臤矕蒰偳靬聅鬗馯虷鋑帴瀊欗煓穳唌糷暕匰躜雈㡩㨏䜱㙔䕊㠆㒼㣋䖂䐷㐤䪍䴟䵎㽃䀂㫨㗄䊡㟨䐽㥇䝎䃲䵊䙁㙢䃪㿻㸩㱚㗈㶥䒥䉔䦡䮧䝔䧲䱗䯈䗙䗕䝜䆺䡽㛽㠝䢿㘓䈲㢖㱍䊜䬧㿪䜌䑌䒟㩛䝳䈀𩆓𢬵𧪙𥮚𦼉𣎅𪄿𡷗𧯡𡘍𥈼𡅻𤳖
十五删平声　山间[中间]关还颜闲閒攀斑环班湾艰寰悭鬟蛮顽删弯潺湲殷[赤黑色]菅潸颁鹇患奸扳阛斓镮孱[窄也]鳏瘝娴纶[纶巾]鬘般讪锾跧[伏也]蕳黫圜[绕也]瞷澴闩擐獌憪嬛狦虨痫僝豻鬝虤攽矕狠轘鳻螌眅詽矜[同瘝]澖掔羴朌[颁通作朌]臤肦葌覵馯曫睔譠羟瞯顅靬黰楌藖邖糫婜漹蛝硍㘖䰉㦨㻞㡲䚪䭴䃑䤽䅼䴉㘤㹕䡲㺗䓸㸶㰑㶎䦥䔵㗴㐴㯗䚲䂅䰋㣶䘎𠴨𤸷𪈿𪈮𤡥𧢞
一先平声　年天然烟前边仙船眠泉贤煙传田怜川篇钱缘圆弦连妍悬筵全先颠禅偏鲜鞭迁莲编千坚肩绵巅旋玄娟渊蝉笺翩牵宣权捐毡椽延鹃穿联便[安也]煎拳廛骞阡镌涎专旃焉涟燕[地名]缠躔愆僊虔膻涓鸢鞯燃还[与旋同]钿筌跹诠芊铅壖湲蜒痊研[研究]舷鋋邅埏蠲砖沿阗甄填溅[溅溅，水疾流貌]荃员乾[乾坤]挛韆鹯堧悁铨棉笾鳣湔鳊褰悛軿翾县瀍饘咽骈佺蔫癫遄搴平[平平，辨治也]嫣畋戋圈滇颧蚿蜷棬篯儇圜[与圆同]颛漩牷胼惓卷[曲也]璇朘篿鬈孱挻弮揎潺綖蝝楩璿犍湮萹箯塼肰蠙跧蹎佃鼘菸瘨褼櫋眩蜎籼嬛键扇攧扁[扁舟]汧梴鋗獧链煽谝蠉諓睊豜譞婵拴澶蝙撋橼沺蹁瑄零[先零，西羌也]嘕剸歅瓀滨辁仟单[单于]鲢篅懁幵駽岍鬋廯燀猭瞑[与眠通，又弓名、菜名]駩祆扦楄竣胭儃窴婘甂孪狿騝噒枅蜁潫栴媊蟺碝絟捲輧玹勌烻鱄磌莚鐉媔攐栓嗹攓鞙唌餰耑骿蝒琁缏猵輲謰縓矎觠嫥矊翴蠸蹥琕阏[阏氏]羴鷏巏驙鶣鵳楥馢苮蟤媥葲縺犏僆茾蚈諯湶齤鲣盷鄢脠孉梋掔梿齻帴硟屇貚賆葥珗锟嫙鍹灒辿锩嫾鍽鰬腃奱玧璳瑔胘槫肙妶鷒漹惤厧玭詽纯[犹全也]愃裫颴玆娫謜椯臤雃宀吅圌[同篅]縳焆繵犈媗豣篶鳈臱虇暷槙碊箞姾摼鄟銒橪頨酀籈揙檈繎忓峑剈娹冿弲閍顅驠牑瑼鋑搷鯅垠瓹騚囨瀳剶杄汘鶰繟絭圱矏酄痃奾棩暶瞤熞瞏黇裐瑸翧矔菺姩誸糄珚狋叀芇恮跰薽膞稨鋻傿脧奷檰郔癴瑏嬵葏㫋㾓䳌䅌㘋㳙㙻䒶㨎䚯㟀䔐䁣䀽䰓㭹㒽䏈䌑䂴㝰㔯㰃䟍㦁㥕㫟䇂䗠㼷㩲䋌䱲䌯䳿䠰䃛㲔㵪㓲䏃㳭䟧㢺䊙䋗䶬䀒䚈㳬䛲㘣䡘㼐䙲㮍䮄䀬㒰䀖䥖䡒㡉㷑䢬䲂㢟䗎䚊䮁䲆䣺䕼㿊㹡䗡䳣㮵㮌㗔䟒㾫㩊䘰㝚䥧㛹䑏䳒㢆㳄䙴䔳㜣䳪䉳䢴䲻䆤䨊㶌㒙䙭䁢㶜䚶㟫䄳㢧䧃䉦䃉㕙㿼𤲬𧾍𦧴𥑻𤣆𩉃𢑆𧹬𥳚𢏮𩕰𡣬𢮂𩥄𩑹𠬍𣖳𥌂𥮒
二萧平声　朝遥桥消潮霄招寥条腰萧飘宵箫销骄摇饶樵苗凋瓢谣桡迢聊娇绡焦峣飙韶蕉标邀貂椒烧乔瑶翘尧潇调[调和]超雕寮浇姚嚣轺嶤描僚杓妖镳辽娆昭苕彫要[要求]飖枭跳憀髫蜩挑鸮撩谯漂歊猫荛鹩夭[夭夭]徭翛刁枵窑骁祧侨陶么[俗幺字]幺哓漻徼魈料臕侥膋佻痟幖弨趫硝彯晁瀌繇跷岧憔猺缲熇燋恌穮峤熛鳐瞧锹嘹橇喓剽猋祅鼌荞怊嶕蛸薸缭镖龆鹪劭獢虈葽鹞燎礁憍飂珧鞗趬镣鱎轿[小车]獠逍锚佬箾鐎鷮鲦翲僄愮褕嗂摽膘橑嫖訞蟟蛲碉嶛钊髟儦鞒叼揱蟏襓簥呺毊佋噍鄡脁膮暸怮票哨炤痨铫吆笤撬嘄麃虭嫽潚憭藨嵺飉嘌骠[骠姚。]榣敹鹋櫹枖憢蟭骉蛁膫蟂颵蔈憿踃媱嫶瘭鋚爂烑荍瞗幧撨暚廫螵癄髎嘺彇鍣卲燆緰熮穚窷敫婤牊駋岹蓧鮡瞍緢奝褿鸄聎萩尞柖庣篍藃盄莜顠鴁橚翏篻莦顟磦刂玿弴狣啋犥謤蔋宎簝膲镽朷喿橾撽繑筄鄵灬菬鲷焇欩祒豂狕楆匋鎥獥鮹餆旫屪鐈旚皽魒隃贆孂妱璙顤鎐鉊刟穘蓨劁㵳䖴䮽䩦䁘㲖䖢䌃䎄䫞䚻䉼㝯㪣㓮䄏䀉㲵䨅䆙䳂㴅䒒䫿䎗㚠㼼䚺䵲㲬㕥㑾䁃㶮䜍㸈䕯䁭㚋䍃䶰㶾㡻䱔䩌䬙㨱䱁㟹㸛䅺䠛㠒䖺㯱䏆䢪䴩㹦䘟䁧䴛㲈䂏䳩㬸䙅㟘䯾㑸䌭䨭𦨣𢑁𨋫𪚰𢆷𤖻𧪬𤐫𤻁𩾗𪛕𥰜𣂁𦠎𢆽𢿣𦔩𩙚
三肴平声　交巢梢郊茅嘲敲抛蛟包坳苞庖匏爻抄胶肴呶淆胞殽钞铙茆筲教[使也]譊硗捎哮凹稍崤嘐蛸茭泡抓骹旓髾跑炰鞘[鞭鞘]鲛虓炮[炮制]咬烋聱髇弰啁磝怓庨瓟咆轇窼脬鵁媌詨剿[剿袭]轈鄛艄窙嚆漅麃挠刨謷枹婋跤筊訬吵犛[长髦牛]飑嵺鸼樔龅硇狍鮹捊[音庖。与掊同。]猇誵鞄鴢鶜軪痚涍髐硣賿謧墽窲梎姣[淫也]佼[与郊同]穘掊[引取也]焇礉[同硗]骲娋觘摷颵渵軳挍尥耖窌頝摎笣爮勽獿郩灱藃脟繷罺鄗[水名]柪罞莦緢泑輎侾芁蹘摮顤宯嵪倄嚗嗃洨顟䫜䬘䘯䞴䜈㹲䫸䍊㺒䟁㤊䍖䮦䉰㬵䩝䂭㫴䰫䈰㿰䅦䄻䃩㮁䢒䴃䋂㤍䈾䂚㶀㕭𦾱𥲀𡻝𧓿𩎘𡡏𡥈𥊌𠐋𢿏𡏮𦗔𥑪𨚔
四豪平声　高劳豪涛毛袍曹刀骚皋毫桃醪蒿逃遭号[号呼]鳌牢舠陶旄髦韬滔遨褒膏搔操[把持]螯篙槽萄猱饕嘈绦嗷糟熬忉槔鏖壕敖翱艘璈濠臊櫜嗥叨羔糕洮薅淘嘷缫嚣獒尻颾咷醄绹艚挠螬鼛嚎鼗慆漕[卫邑名]慅鱽蚝裯嶆捞啕廒嶅掏謟溞轑[挠也，轹也。]芼骜蟧翿咎[咎繇]簩謷牦梼蜪幍挑[轻儇跳跃之貌]酕裪绸[韬也]唠睾搯騊呺鏊氂爊涝慒[乱也]椮祹耗[独貌]痨諕蹧憹軞鷎傮浶崂髝鷔訄詜夲鄋簝聎橾瑫岕鏪膫巎憥朷蔜抭釖蝚翢臑覒峱鱢褿嵪獓籇髛摮枆鳋嶩鄵椃獋饀嵍滶嫍匋蕔隞蓸槄夵鋾䬞㺜㹗㟉㯾䜊䝁䯌㺀㩝䛌㞵㯥䀞㬔㥰㫦㞪㲏䕅䥝䫽䑹䓘䛝䄚䐬㰏㩠㮘䦋䬢䜮㗦䤾䧫䲏䛬䫨䈱㠙䜎㜖䆁䭷䮯䵅㫞㤒䬭䝥㷮䑬㡟𢧴𩪋𧯌𩋃𣽎
五歌平声　多何歌波过[经过]河罗和萝磨跎柯戈阿坡科蓑娑峨荷摩娥梭哦珂魔皤窝讹窠鹅陀螺沱蛾禾驼酡莎呵他鼍挲婆诃么颇疴涡那痾它苛莪轲哥佗拖牁磋骡驮靴陁锅瘥傞薖俄蛇蹉搓锣啰迤[逶迤，行貌]傩[傩神]矬蝌嶓鹾紽箩娿舸瑳婀蠡[瓠瓢]醝挪蠃挼囮吪艖倭屙鮀趖覼鄱砣沲[同沱]睋牺[酒尊名]劘儸迦唆瘸猧喎番嵯[嵯峨]緺鈋逻茄[茄子]痤嗦碆哪詑伽髿难[同傩]玻蘑堶鸁桫捼盉鸵她岮莏菏献柁鈛牱阤枷踒猡啵驒菠埚攞騀遳饠髁稞涹皒哬椤繁[姓]砢滒紴迗鴚渮莴虘咃萪鮻鼧袉誐锕鐹氇唩攎啝髍虆簻戨尛攠澕侳搫庹狏蒫戓魤濄钶橠櫇覣躜翗覶睉妿姀鲄嘙跢痑涐酇[酂城]鉫犐钷蔖楇蚵戂柇枙脶摞呙硪[同峨]踻吔梛崜剆抲珴喛涶䯢㗻䋪䑘䃺㜑䌴䖸㽨䆼䈖䖕㤎䆧㱒䣜䴱䋍㔮䠡㰙䪑㸯㼠䐆䡐䭩䊨㿆䔀䔅䰿䤬䜏䝛㽿㚳䄉䴾㛖㸰㨇㭫㸫䒩䳗䯊㑚㩯㛗䓾㢦䌀㹻䍫𤄷𨠑𩒰𥟿𡡉𨍋𡹬𩴓𥞄𨹄𩞁𩕏𨰠𪘓
六麻平声　花家华斜霞沙涯赊鸦茶嗟车槎纱麻誇芽加遮嘉牙瓜哗砂笳葩蛇衙邪遐差[差错]瑕琶夸奢耶叉蛙葭挝虾拿巴裟些洼丫蟆呀他查娃爬哑谺爷楂罝芭枒窪蜗铘騧畬[火种]哇窊髽笆桠伽珈娲杷髿檛岈麚琊跏艖茄[荷茎]靴痂姱杈迦豭枷喳骅笯垞鲨豝柤挐[同拿]緺雅[同鸦]渣揶羓污划[划船]椰阇瘕搽畲[火种]吧爹疤奓猳耞苴妈莎涂[沮洳]溠碬塗荼煆吒茬[斫木]齇嘛荂铊鍜騢嗏佘蕸龃啦咱叭呿耙粑铧蹅颬犘皻袈鴐幏蚆釶秅靫鷨舥吾[县名]玡碴痧桦痲旯蚜唓孲嗻揢钯畖瘑貑謯閕蒘莗踻铔筢釾蛼胍挓桬譇潖捓硰砗溛抯犽梌粆泇哆褨侉找峫咤抲癿苩謶秺婼袓鋘訍跒蒫蟼膼觰妑疨焻愘簻椵皅釫俹晇煱摦嫬脶嫅蔖誽銟睱椴笌捈夿吪歄腵浾哶諣潳蕏呙鎈鴚吙犌燊搲祖[县名]鉫鍦䴥㲚䗫䨟䔑䃁㜘㧓䂟㿬䑡䠍㚙䶕䶥䄰䁟䈔䅿㠺㳸㛻䫚㾚䵷䯯㢒㰺䫗㭉㢉㭨䵙䦈䪗㝞㠏䣝䕒䩖㤉㗾㦄㗇㸺㧎䔢㸭䐤㸙㚗䛔䠸㖿㽋㹢䐒䏧䍓䯲䔤㗬䶗䓉㪥䯞㦋㦊㵃䖯𦬻𦳏𡤫𠜲𣩈𠽫𦭿𥂓𣘻𢳛𥯘𥍸𤶠𤘅𤹡𩊮𥥸𥡧𪓹𦰳𥡮
七阳平声　香长光阳凉乡堂霜方黄章肠郎芳茫场忙觞狂伤床荒裳苍忘王行[行列]妆梁常藏墙房翔塘桑亡央皇扬囊傍[通旁]良尝量[衡量]羊冈张湘强[刚强]唐浆庄廊康旁昌装航商将[持也送也]杨浪[沧浪]疆当[应当]祥凰芒望昂妨鸯汤粮棠徨洋娘琅狼详粱徉坊纲箱煌刚僵珰骧仓簧防篁樯偿彰臧殃慷遑襄缰铓锵筐糠秧羌鋩穰姜殇肓滂厢榔螀岗疮潢戕阊惶璋枪猖庠杭颃隍飏跄彊攘缃旸相艎漳邙钢璜肪鲂骦匡蝗筜丧[丧葬]倡鹴薑汪吭瀼[露浓貌]嫜裆禳獐伥螗螂尪创[伤也]枋泱嫱孀芗勷湟糖娼鸧硠踉纕斨眶怆[悲也]鎗樟盲沧横逢[音房]稂赃筤霶蹡佯疡蒋[菰蒋]庆[福也]殭瓤卬镗雱铛[锒铛]障帮洸蜣罡粻螳膛牂餭舱砀慌桹鞅[马颈革]搪镶偟菖杗肮膀炀苌玱鲿亢[人颈也]忼[同慷]鳇礓钖桁痒[病也]鄣磅喤辌磺堈嫦堭瑭鴹样[槌也]恇框迒锽廧鞺鲳抢[突也]鬺蚄鉠鬤崀傏艡笐徬[与傍通]戗莨蔷[同蘠，蔷薇]軖蟷玚桄[桄榔]螃畺煻鼚烊嶈洭胱趪蝪衁熿薚枊彭[多貌]昜漒蘉媓荡[地名，水名]葟彺烫啷呛彷溏囔镑饟蹚鳑闛锒踼劻爿篣傽躟俍蘠蟥儴餦徜橿椋蠰嫏樘棡抰槺蛘魧滳慞癀篬韹蓈筕黆蘘葙螪欀牄翞姎朚鴋弜蚟匨躴蓎磄蔃鷬珖蔏垟犅鳉禓胦鎕汸裮佒砊篖鶶傹锖茪忀琩躿烺矘尚[尚书]膷瑺綡莣邼獚哴鄌鱆恾邟崲撗咉粇埅騜欴瓺氜瓨炚榶妔艆垙羘霷嵢珜絴漮詤瑝蚢縍匚硄僙岇鼞凔鵟盳逿糃牨梉鑶謒皀暲橖钫穔吂闣禟笀仼漟姯摚軭莔騯貥仰葁勆崵眏锠鸉苀鰑嵣膅騿眻嵻閍牥澢趽駺紻柍羏雵抂蔁胻欜赯獽斻摪淐晿嫝邝嫎鋿疒邡婸愓諹㡛䍧䵼䁑䀪㫄䄱㽘䵃㝗㞷䅛䀮㙊䞹䥊䝶㠵䒢䛫㾿䯴㐬㼺㡃㼕㤚㱢㑌䲳㱂䅯䩷䢢㫕䍿䌅㦹㵴䗉㦂䪄䠙䒰䭹䗅䦭䯑㤺䊗䣼㾠䵰䬗㥬䗵㢜㾮㭃㹁㟍䏾䍭䀚㼚㨍㢃䌉㜍㭿䩕䧜䱀㭻㮜㝩䨦䮣䑟䡙㽆㟄䕬㲽㤃䠆䖱䅣䊣䅭䆡㙶㑽䆲䄃㶓䉎䐠㝑䔗䧛䌮㲥㚂㿝㿶䅨㹧䘕䯖䳨䮖䕋䗧䮲㹔㩖䣘㰠㽵㳾䉴𩗬𤮊𥏫𥐞𨎩𥡃𪄲𡉉𢪇𡮎𦵧𦳝𦯌𨾔𣁼𥁃𤙢
八庚平声　生声情明清城名成行[行走]鸣平轻晴惊兵倾荣程横[纵横]京英营耕迎更卿盟缨争精盈兄旌莺嵘征[征伐]瀛诚楹羹荆衡并[相从也，合也，兼也]笙评茎烹鲸萦觥酲筝琼氓萌婴檠庚呈贞撑晶枰坑擎亨赢泓茔罂狞赪甍撄眀赓睛粳宏籯正[正月]嘤铛[酒铛、茶铛]甥轰樱蘅钲铿饧嬴茕琤铮菁盛[盛受]纮牲盲彭怦坪橙霙祯桢枪[欃枪]闳伧瑛珩丁瞠黥鍧鲭虻棚勍苹訇硁韺绷令[使令]鶄鹦瑩峥鼪骍黉璎鹒莹柽璚枨祊抨砰脝鎗猩蛏抢[抢攘，乱貌。]翃潆怔儜谹鬡麖榜[所以辅弓弩者。]絣吰弸睁喤伻桁搒泙焭睘瞪哼薨[众也，疾也。]蜻趟澎輣栟裎罃鬇嬛箐锽姘輷顷瀯宬掁藑洺珵侦拼锳膨禜鐄盯蟛渹咣溁狰蝾巆浤閛匉鈜浜鉎牼撜諻狌脭醟净峸猄浾请鴊揁圊拧硼挣磞洴恲耾軯娙牚謍柠鋐鄳嫇誙嫈汯駍虰鼱揘晟硡騯眐筕觲蠳腈彋朾濴賏眳棦瀴啨炡媖蘡憉奟鲆竑佂閍悙鸻攍鑅絾棾媜艵萾稝夐摼嬫挰帲帡[幄也]埩鸉苼輧殅憌伥雃摚橗痭嚝凔琁菮鑋宖饓鑏胻儝呯碤鼆娍庼妔嵤爃蓥郕臤蟼礯殸嬣聇婛鑍聙葏筬揨糽阷鶧銵竀硑碀邟洐俓柍珹寊鶁霐硻殌赹鋞浈汮瓗朠埥篣荿擏姃玶椖湦梈瑝羟泩莔胓靗棈蚲櫿瞏錓褮趽橩錋蝧箳韹葝浭樈砊劥珄埂[坑]麠垶煐烆嘭嗙渶䖟䪫䟫䲔䳟䬝䎕䃘䟓䉚䋊䆑㡕䙖䎴䭢䨍䗈䣐㮄䥋䊒㽒䝼㶈䨎䑫㓌䋫㒌䆸䨝䐵㹹㵬䨉㲆㼇㱶䇇䕦䡠䄘㘇䆖䊔䎽㚚㿮㛁䈍㣜䪯䱢㢬㲰䥰䦫㷣䵞㪅䴍䲼㰢䑉䁎䫆䁐㙃㔙䰃䍔䞓㧍㲂㝁䊅䡩䫺䢚㺸䆵䴤㤣䍬䯒䄓㧸㚾䦕㥊䡰䚘䔊㧶䍵䃷㿘㼩㹴䄇㙚䇸㬹㨕㢣𧭈𥋝𩘽𨆪𧁁𥥈𦪗𢏳𣥺
九青平声　青星亭灵经冥形醒[醉醒]庭听屏扃停萍馨零腥龄铭溟汀瓶宁刑泠萤坰霆翎棂铃苓荧婷丁舲廷型厅硎瓴泾俜蓂伶惺鸰軿陉蜓玲醽聆仃咛竮钉渟蛉螟邢暝令[脊令]囹鲭铏莛駉瞑鞓箵町軨筳篂娉玎荥蓱鯹酃猩叮鼮嵉蘦钘骈羚頩綎径[行过也]詅呤竛聍箳輧娗[娗娗，容也。]爧濙笭娙[汉女官名]楟葶桯昤坽姈拎霝聠跉魿鉼瑆订圊疔狌嫇帲駖榠甹蕶鋞狑絅鸋蛵砱蝏朎聤荓奵蛢帄柃靪睲鉎紷蓥侀鵧濴熲巠澪獜呬涄榳邒桱坙閝庁艼煋秢顈猽冂耓閮嬣藀鵛褮嵤銒朾諪帡[帲覆也]鏻郱郬衑彾孁龗鹷耵鄍㹶䖅䴇䋼䛣㯪㩕䯕㡵㯏䤰䗌䅽㭢㼛䩠䆨㓅㣔䃏䙥㽮㻂䄙䉹䱓䦺䡿䯍䈂䉖䣆䁝䓑㤯㸳䌢䢛䶄䚖䤯䕘㝕䫤䉁㦭䡼㾉㪮㼗𦀚𤬐𧖧𧕝𩵀𦉬𧕅
十蒸平声　灯冰僧陵登层能升腾藤凭朋兴[兴起]曾蒸增憑澄棱乘[驾乘]憎凝绳胜[胜任]鹰蝇膺称[称赞]仍承鹏肱嶒丞崩徵应[应当]矜[矜夸]渑罾兢镫[锭也]昇塍绫鬙缯惩菱譍[答言也]恒弘縢凌矰烝淩簦縆滕征[徵召]棚誊楞瞢[目不明]礽冯[陵也，冯河]崚鼟疼磳艿鄫淜幐鲮薨輘橧豋扔儚掤堋殑譝姮掕漰噌芿蕄僜碐憕症薐冫噔鬅睖砯邆倗騬憴竳螣陾畻鞃脀洆儯竑焺奟抍痭璔篜婈竲譄顭苰鹶耺璒裬傰溗辸踜祾漛厷蘉倰穪膯熷膡夌錂焩驓鞥仱覴嬁鵿僌庱栤鱦塴鰧嵭氶敒陹搄㲪䔲䡌㱥䁬䎖㵗䕟䚮㭁䈊䲍㷥䔖䱆䕨䒱䱭㜴㥄䗀㮱䠮㥤䒐䕝䧙䄧㴰䧹䙞㐩䳾䬋䩑䇰䉕䒏䮪㖫䉄䨜㔁䡏㔰㺱㣒㞼㛵𦒃𧕄𧈜𩜁𨋬𧹈𤃶𢄑𩖎𤻴𧗆𤮘𪒿
十一尤平声　秋游流头愁楼遊舟州留休忧浮洲求幽侯收丘悠谋牛裘酬钩羞鸥由周俦修投筹柔稠眸优不[夫不。又未定之辞也]讴沟畴猷瓯尤旒囚虬缪[绸缪]邱搜雠仇飕刘沤[浮沤]遒脩鸠邮犹油侔辀骝楸啾陬球矛瘳讎抽喉偷湫猴驺毬飗蝣锼篌貅篘榴篝耰酋疣髅鍪邹牟否[未定之辞也]樛呦璆斿缑莸裯韝咻鹠欧庥彪蜉娄鞲抔鳅麰勾兜鯈诹帱繇媮紬攸糇蟊逑蒐遛裒嚘售鰌鞦罘廋輶鹙搂齁啁艘飂泅镠桴浏槱詶馐赒阄褠涪揉蟉蛑刍瘤髹揫窭愀绸溲赇鞧漱崷叟觓揄偻蹂掊[把也]区揪骰琉蝥彄搊蝼抠鲰滮吺侜罦掫烰浟菆勠魗丢蒌蝤惆句馊嵝俅鱐冘鍭调[朝也]醅瞀篓诌懮踌诪盩摎絿鸺艛麀鍮酘膢廔瀌妯瑈馗[音求]救萩赳鼽妞泵慺犨飍醧龟[龟兹，国名]镏鞻莤峳銗鄹棷[木薪]睺葇嵧艀呕庮锫羺卣琈銶鏉枹鯄瀀騪淍喽雺颩篼耧瓿蚰硫蝚蓲泃蚯喌芤牏怮厹鯸瘊鴾髟鞣眍芣鸼秞骉蛷怞恈鲦骺輖鎏怄逌楢鏂堥艽叴塸梂蟱淲枸葔鮂黀溇莍鞪鍒鉜摗頄獀剾鰽疁薵緰渞鄋吥撨蟗沋鲉鷔媃藰犰遱菗鶔鷜燽蒥熡騆烐磂嬦鰸騥鎀牞寠絒醔挎緅瞗腬姇櫙媝帿臹揂郮盚垺朹駀扏犙熮玌渘脜脙麍鰡棸箁恘椆銂苬噍涑煪抭瞴殏郖徟鏅剻浗銝翏訄哹抌穋鋀侸粰朻鑐熰瞍矪汼湭袧裗軥岣紑傮妋烌瞜劺剅珘釚齱鯦哞趜纋薷霌嬼皗樇坄鰇櫾齺膒瑬紌蓅媹篍蓃箃訅萮雔褛筄圳鄾栦鱃捒亠蟭蓨嚋偤糔翵慒[虑也]鴀趥鄇跾唒泑敄剹蛔匬眗钆櫹婤肍㡚䬟Ｑ㬋䗋㱊㵞䎿䑼䨲䤹䋺㳺㗀㗋㐀䫛㳜䐓㘜䀺㹯㽛㧨㾋䑻㚭䤛㘳㖼䈭䱖㫍䡂㟊䰗㾞㘥䬌㨮䦾䨗㤹㡞㥢䒜㝹㻓䝏㟈䄛䧓㩅䑦䖥㖄䝀䲥㕱䱾䩳㭌䣇䰘㤑䧱㛏䢟䗜㛜㞗㻲㴗㐜䗏㭝㛩㽥䐐䬒㳋䰆㷕䐰䆶䙈㺅㚱䨂㱗䬲䚃䚧㧃䝗䗔䉧䋷䎧䉱䲖㓱䏬㖻㕤䌧䊵䡭䮟䟵䯽䓟䢊䰍䮫㺫䱸䌔䉩䍌䏫䞀䱕䠓㿧䳕䫫㥑䵸㽕䖻㤧㮲㒡䲫䐹㸨䥐䂉㿡䁱䜪䎇㳅䳼䕱𦢩𩏶𪕋𩜯𪂷𠧴𤙠𤫕𦡴𦵵𤪎𨡻𩢮𩮤𤕾𧎄𠹝𠾉𪓔𨞪𣮬𣪌𥃧𤫱𩒮𧤕𤾊𪍓𣏞𠷎𣀓𧳫𨻻𦵩𥰛𤟫𩛢𢯱𧍘
十二侵平声　心深林阴音吟寻金琴今襟侵沉岑临沈[同沉]禽簪斟森禁[胜也]霖砧任[负荷]浔衾淫钦箴骎针参[参差，人参]衿琳瘖涔嵚愔擒歆忱崟琛喑淋谌壬鬵唫[同吟]霪黔[黔羸，神名]祲镡[剑鼻]蟫南芩湛荫椮纴檎蔘郴燖鲟灊霃鵀妊吽蟳廞椹煁肣芯棽噙綅罧澿渗[淋渗]痳闇噷襂嵾黅嶜鍖碄銋箖綝攳笒惏愖莐桪崊鄩紟蚙靲埐甧櫼庈烎耹荶橬惍魫枔璕穇鱵瘎鈝襑諃瓭穼黚鑫誛曑葴乑瀶橝忴鈂摿汵鈙埁菳鳹鮼梣兓嬜玪杺韾撍扲鈊訦蠄幓鷣㞥䔷䪩㑴㕋䤃䤟䒞㪛㩒䅾㝝㜦㠁㕴䕾㾣䃡㴱䰼䚾䘳䋮䨧㖗䛘㸒䃢㜄㻸䋻䦦㕂㚞䥅䍼䣾䋕㪸䫐㽸㞤䑣㓎䨙䥆䜾䜷㦗䤁𩅨𦁍𥍯𠻝𠪚𥥍𧠿𨟏𦸂𩷒𩂢𪁏𩻛
十三覃平声　南谈酣潭堪三甘庵岚参[参考]蓝惭骖谙蚕龛贪探毵含男簪涵昙柑耽函[包函]鬖篮覃聃谭憨担[负也]楠戡眈惔篸甔婪諵镡儋醰蟫蚶韽湛[与耽同]驔泔盦嵁锬痰坛郯褴弇坩媅颔邯唅谽馣坍媕錾舑餤鹌傪渰[与淹同]欦喑疳腤啉倓燂罈澹藫蜬苷甝酖蘫歛惏憛啽臜荨噡莮痷喒佄儖肣嵅淦埮礛浛鋡萻晗橝愖炶姏汵鐕瞫闇[治丧庐也]撍儑弎葻媣醈娢嬠顃壜雸嘾玵筨笒厽馠謲撖聸暔犙頕瓭畘裺鄵萳婒韾欿懢璼腩颌緂梒鳹灆䳺䤴㟏䈄㴂㘱䊻䣻㽎䉡㼨㰫㤷㚮㓓䣟䌠㞩䟃㳩䐶䨄䜙㜞㤌䨬䥁㖤㴷㽑䳻䶃㑣䅖㶰䑙䆾䗝䗞㘛䘶㰫㵅㓧㽍㛺䵇䰐㨻㷋䎏䇞䆱䫮䜖𧽼𩈣𨝸𡪶𧮳𥰨𣵷𢪈𤯌𧂇𡡖𩑟𩔞𩈻𡖓𠿑
十四盐平声　帘檐簾添簷纤尖嫌盐严兼廉甜髯炎蟾潜瞻淹奁拈签占[占卜]厌[同恹]沾恬霑籤缣黏阎钳谦铦镰粘歼恹忺钤黔砭襜觇渐[流入也]鹣幨暹詹佥憸餍崦簽鲇蒹苫痁熸燖阉腌挦櫩阽噞蚺蔪濂爓枮瀸谵灊磏奄[奄留]鬵綅湉鬑惉蔹楠餂裣佔针椠掂櫼呥稴蠊棎鑯譣孅锓臁詀锨蛅憛笘襳嵰韱讝薝燂熑敁壛搛劆菾薕杴黇扲岒鐱妗[善笑貌]嬐誗玪碱闫鋑袩槏讇酟鳒仱嶦殗檶溓秥肷舚虃諚顃蚙厃閚螹硽鳹螊撍钐偣馦胋耹婖冿嬚幓鋓煘覝慊噡忴黚彡衻瘎䛁䫇㡘䆎䵌㽐䯹㶣㷿㝺䘂䘋䪜㤿䦓㡨䏦㶄䬯䁠䈤㬲㿕䕭䋬䆂㿌䊱䯭㔐㲯䅧㾾䉷㦰㺤㰊㼓䑎䑚𤎥[𤎥𤎥，衣动貌]𪚮𡝫𩏩𨦄𩃢𢋔𧚊𩆧
十五咸平声　岩衫帆衔凡缄杉咸函[书函]喃芟馋谗鹹镵监[监察]嵌巉劖搀掺严諴椷嵓衘欃縿鹐碞崭毚攕黬髟[屋翼也]儳嚵瑊彡獑杴穇沨羬艬站黯詀锨櫼嘇幓礛輱崡柉厱尴稴礹覱揞趈甉譀肷鏩葴鳒杋淊[与浛同。沈也]钐玪酁螊舤鰔麣溓䟰䉷㴀㺥䫡䩂䖗㛾䤫䧯㩥㢛䂁䀐䪌㘙㮭㔆䩇㔋䭵䶨䜛䶠䑺䒦䲗䕔㘅㰹𧍧𩆷𪒹𥻧𥌈𩌰𪅎𩃔𪖎
一董上声　孔董笼总滃懂蠓桶澒琫蓊菶垌幪拢塕动硐唪洞汞挏嵷捅埲暡墥曚空[孔]纵[急遽趋事貌。]统懵[心乱]蝀侗[儱侗]巃儱蕫揔眮聬晎檧瞈嵡竉勜詷倥[倥偬]徿嬞鬷[草名]鸗勭苁[菶苁，草貌]唝諌龓箽庬棇憁姛熢槦莑悾[悾惚]愩郺琣翪鹲偬懜銾玤愡[憁恫]繱嗡[闇声]漨䩬䉥䐥䭰㖦㷯䵜㳆㢔䞒㨂㹅䵔㪌㴳䋽䳞㬴㣚㛚㶹䡁䂢㷓䀧𩮰𩑚𥀂𧟅𥡥𢤱
二肿上声　宠冢涌勇拥耸陇垄拱踵冗捧竦肿踊悚汹重[郑重]栱种[种子]巩蛹茸[草生貌]恐俑氄珙壅恿甬奉覂尰溶拲蛬[蟋蟀]蛩[音拱。虫名，百足也]湩[水浊也]詾嵷傱軵愯恟駷淎怂跫苁[𧘂苁，相入貌]躘輁臃塎埫嵱[山峰貌]坈鲖[鱼名]悀傛喠捒愑煄漎[漎漎，疾貌]搈傇硧鰫衶筩[箭室]媑穁埇縙搑彮䢆䢇㩳䙕㤟㲝䩸㧬㤨㣫䞻䂬㨣䟪㷏㡖㭟䱋㓋䘴㕳㺬㙙䢇㦷㦶𢥠𣯍𧜈𢝆𦦧𤮪
三讲上声　讲港项蚌缿傋棒耩硥夯漎[水会也]稖顜玤慃庬勜䎧䂜䰷䬕㭋䖫䐟䁰𢗒𪁒
四纸上声　水子起士此死喜耳理美市矣是史尔止李己紫指里履齿纸纪绮氏蕊旨垒[军垒]耻祀拟髓靡恃滓轨鲤毁裏鄙驶矢已仕峙趾迩徙梓委芷雉涘豕始以址砥几[几案]咫沚俟妓诡晷侈杞巳似兕比婢彼倚圮姊旎耜祉弛徵[徵羽]嘴弭豸舣玺秕箠[策也]苡枳觜泚视蚁使跪汜逦你匕诔戺揆否[否泰]畤鬼燬痏簋唯[诺也]癸俚屣姒藟薿屺只宄駬迤[迤逦，旁行连延]芑薾訾裡阯瀰[水流貌]捶柅洧蘤枲鲔匦舐跬耔累[累日]棰骳技褫痞妣跽麂笫嚭庋巂被[寝衣，名词]揣椅崺企秭痔纚机[木名]弥[止也，息也]跱髀諟庀饵萎[药草]珥扆儗疻蓰苢仔樏抵厎骫酏胏橤屎佹籽壝縰偫娌峞礒跂葸酾憙佁蔿黹嶬漇葈瀡渼芈掎俾敉垝佌旖锜頍氿蟢您狔梩歭嶉舓踦[踦闾]攺俿庤躧跐轵咪剞齮呰杝蹝洱鸓骪咩庪繠姼毇趡讄栮哆傂峛啚坻[止也，又场也]庳[伏舍]薳馜坁恀垑恑蟡鞞唏傀匜吡姽锌鞁扺哩啙魮阤憘輢甤仳廌孴瀢硊檷吇諰矖崣孊伲疕虸抳觤秠柀湀厽寪雟諀羠洔朹婍嬟菙滍貏杍攱灖蓶坭[地名]徥愢檓菧沇沵秄褆臎峲誃璻鈶卶鉹砋抁逘胣枇[同朼]拸畾狧袲沝枾濢玼[玉色鲜也]聛灅盀矷洈惿蛫譩袳妀欼弬鈻泤铈崥[山足]腂敼祪娝劧芔朼嵄嶏飺皉虆抧孈吱[行喘息貌]唩惢聻鉃芓釲沘骩儰氐煃葞踓悝搋佊杫芛嶰岿噽懝秲噧訨諈鉂笖暿徛邔椯蚔撱淽崼铌噿瓕渳猚鄬厬鴲藢奀攦娰鈘釨裿峐羛騃䃣䗁㞦䚹䉂㱟㷐㠯䤥㖐䰙㞔㢋䃾䂠䍯㶴䃽㕜䋙㢮䄎䠑㓼㔳㪜䛼䢎䂡䤏䅩㿂㾖㥴䔺䧽䧉䛗䭲䏢㚓䣥䴎䣀㲛䠋㫊㹝䞨㺭䏡䍴䤆䇃䦻䒨㫑䛏㥨㕽䘣䚦㜽㸻䝐㞛䔂㸚㞆㜫㠱䚟㾅䭉㧪䘦䇛㙼䚞䭧䧧㡶㷃䎣㰝㱀㲹䒻䘡䵋䳅䟖䢄㭒㠲䝰㩓㣥䈧㞨䊓㨊䐯㧗㠖㹬㸵䢳㚡䛶㧡䟗㚶㠧䤚䓈䊼䦵㵦䉝𡾊𨓦𪊨𩬺𧰲𠲿𤼒𢊁𠪙𠷏𡺮𩌦𩎉𤡧𥯲𡧭𩕲𢇌𦸣𦳊𡳨𦢿𤜣𤡪
五尾上声　尾伟苇亹篚虺斐娓炜韡韪悱玮几[几多]顗鬼匪卉豨棐榧蚁朏虮蟣菲[菲薄]浘偯颹霼岂诽扆唏蜚蜰蘬餥庡魕愇泋膹韑媁梶鍏陫徫喡荱奜椲蕜䔇䤵䞔㬙䬿䅏䒈㕈䕁㥱䪘䍷㠕㞑㹃䇻𤈦𩘚𧕿
六语上声　许侣暑渚举所汝旅绪阻序黍鼠伫俎屿煮墅杵吕语炬杼醑雨处拒禦去贮楮苧纻础溆叙龉距膂予[赐予]籞与[给予]女筥圉苎圄楚簴巨羜钜褚咀抒鱮宁苣糈莒弆敔虡梠湑籹芧秬駏篽稆著[著任]跙谞榉铻[锄铻]癙岨柜茹岠峿濋泞[澄也，澹也]沮纾儢稰眝蓹汿潻怇鼁作詝歫讵龃鐻齼欤詓椇蚷粔洰魣眍肗鉏[锄铻]耟紶憷垿盨螶铷藇絽楀袓疋苴諿麮郘坾姖柠壴豦挔衙鮔昛胠㷂䢹䠂㛎㲾㦛䔓㘧㪽㭚䝪㤖㾔䰞䃊䇡㐨㞰㜿䙘䦽㿾䘘㒜䘢㵰䥏䶙䍆𧣒𪓐𥴧𥰠𧑓𧽟𥹼
七麌上声　古土舞主户府虎鼓浦宇武补缕父午五谱睹乳坞斧鲁堵伍祖甫虏取杜辅组雨鹉橹麈腑妩侮弩釜腐浒股抚禹否[音甫]苦簿矩竖庑脯拄罟俯愈数姥母卤吐庾扈莽诩瞽蛊羽圃普溥栩拊祜窭部贾[商贾]亩怙肚下踽偻[偻佝]估聚赌窳诂怒岵牯盬黼努树[种植]柱貐膴羖稌伛簠頫掳楛瑀甒怃煦粗喣剖仵沪寠拇琥褛酤瘉醹嵝珇俣瘐珷荰簄牡咻龋莆昈冔邬鄠謱珝弣篓砮垭裋薣帍橆滏砫蒌祤瑦癒斔娄旿槴宔氇嵨楰妈鐪撸萀雇噜炷钴蒟呒鳸捬偊郙竘噳枸麌蔰椇蚥婟蜅暏罜跓硵頨蝺萭靻敄洿抌蛡殕竬潕墲鯆貗觰匬滹剫丶慺聥倵溩誧瞴峔烳芏弖暊玝楀芐鷜鰸嵀躌靯陚樦寙蔖斞蓾秿鄅焸萮麆熓譕潽帾熩琽棝籔㺄㝢㼌䇢䥈䩉㦿㑄㕮㐅䲐䨒㙛䀾䪔㢚䨞㕆䅡㒁㙑㾈䀯㬳㡰䲧䣁䡧䁈㔪㔱䭸䶚䄔㲾䔃䒉㵭䅓䥘䋨䀇㵲䌗䇠䟼䧁㨭䗂䗄䛩䝂㒇䃖䯙㑯𤬪𠰍𢻬𢜮𥯶𡽂𦭯𧇈𡜂𧇿𠳲𪂾
八荠上声　底礼体米启洗陛醴邸蠡[彭蠡]荠悌眯祢棨抵澧觝牴弟泚诋癠鲚济[水名]鳢鮆涕柢瀰[水流貌]递綮苨徯髀齐[齐齐，恭悫貌]泥[露泥泥]缇坻[陇阪]盻欐[小船]啙謑醍鲡梐骶晲挮洣菧蔝阺呇袳玼[玉色鲜也]娣媞鑈趆奃悂隬卟盠眫匸欚弤肶鑙聜泲蒵蜌軧抳晵掜觬沵璾劙[丽上声。刀刺也]䏶㡳䌡㭽䭬㼵䫌㝥䋛䕥䡔䑯䱊㙄䪆䰦㯇㪏㒅㪆䍤䯗䏿䢑䋜𦰫𣀷𩰞𩶆𤝬
九蟹上声　买蟹骇解澥矮洒摆奶楷妳拐獬罢騃捭罫夥嶰駴锴柺廌矲薢矖荬躧簤觟豥鷶犤箉娾攋檞襰鉙抧疓徥嘪猈㔥㗗䇑䒓㡁䉏䍉㧳㢊㙰㚷䲒㵋𠁥𧡋𧣭
十贿上声　海改待彩宰綵在乃凯醢茝亥采殆垲载[岁也]寀绐恺倍怠蓓迨闿睬颏铠骀欸[欸乃]岂鼐歹颽诒[相欺]唻踩崽輆毐酼婇軩忋箈溾絠疓暟埰烸嵦䏁䰂䂾㴓㥒䑂㘆䇋䈢䮨㤳䈚䁗㱰䆀䣋𦱞𡉈𨽿𠡌罪馁蕾磊浼磈琲悔贿儡[傀儡]隗璀猥腿嵬皠每汇[盛器。水流汇合]頠磥礨漼瘣腇癗碨鮾嵔嶵喂俀[旧音妥]傀黣腲嶊鍡鏙鑸鑘聉挴錞娞琣殨廆櫑潣燘顝痱[风病]俖檌褽喛頧頛蛔灅浽槯烠詴陮湏礧僓鯦洡㠥䃬㞂㠑䫭㱱㼏㱬㵽㚍䏨䲎㱣㷄䊫䜸㒦䫥䕇䇏㵏㾼㼍㟎㨃䔒㒑𡸖𥫉𦞙
十一轸上声　尽笋忍紧尹轸窘陨敏哂泯隼菌悯蚓准殒蠢[动词]牝闵肾允畛鬒引霣稹膑惷疹狁盾楯囷脤嶙[嶾嶙，山峻貌]眹辴吮[舐也]稛诊蜃辚箘簨纼缜頣僯靷埻胗眕矧黾髌纯暋朕赈榫慜湣抎紾缱黰偆僶獜袗鶽螼嚍抮僒綧弞鳘駗蠠荵姫吲頵笉耣弫簢濜敐濜莙鈏埨裖橉玧芛愪鋠嬧箺撛舛[杂也]聄沇濥鈗棞廴揗屒喗睶囟鎨傊昣潣蔨婜鶣萶鵘敃疄麎亃鯅阭渳蜠刡槙馻荺㩈䀕䒡㽙㿤䲄㦏䪳㔼䟨䐔㯸㖺㰮㐱㾙䑐䝩䮞䇙䦮䨶㖥䪾䐏㨚䐃㣼㥸䂦䇖䊶㬆䀆䂧𧼒𦓾
十二吻上声　粉愤吻谨槿韫殷[雷声]恽卺隐揾听[笑貌]近瘾缊刎蕴抿坟[土膏肥也]讔抆弅忿瑾抎攈菫磤[雷声]檃膹嶾蘟秎坋凕齳歾呡勽賱龀縕喗愪黺魵赾熉漌伆夽䨸㹏䌍㻒䞫䠴㗃䤺䆬䌥䘆㥹㦩𢀿𢅯𩸂𪏴
十三阮上声　晚暖返苑坂偃阮碗远婉阪反幰娩饭宛蹇巘挽烜绻琬踠畹键揵鼹晼鶠夘菀蝘蜿[蜿蟮，蚯蚓]堰咺圈躽鰋楗缓匽皖沅軬箢寋夗愝倇妴攇鋺朊梡嬎喛湕傿鄢[地名]薳梚瓪邧桳睕奆褗媗鲩愃葂脕盶虇錪綩犿橎搟鰎㬉䜝㽜䅚䩊䡊䤷䊎䳃㱧䅋䞁䜢䘼䛀䪭䑱㨴䛷㿸䮿㫃䎡㔓𩔃𥆗𧡩稳本衮损沌阃混滚恳悃垦忖壸畚蓘遁鲧狠很辊噂浑[盛也]梱笨捆焜盾鳟暪撙趸刌獖棍吨噸硱掍稛龈[齧也]坉苯绲豤庉裍僔詪峎氽潡逇倱腞伅黗眃睴緷惃碖婫泍棞呠桳崸翸稐睔桽翉齳丨喗壿锟觨菎䔿䁚㵍䫟㝧㮥㨧㖔䃂㙥䠅㡷䵯㤓䓳䜇䚠䬱䐣䅰㯻䙛䛰䅙䧰𦠆𩑔
十四旱上声　满短管懒旱款煖诞椀坦伞罕琯盌纂瓒疃懑袒窾缓卵馆断筦散蜑伴秆蛋浣缵趱算赶盥亶笴潬痯悍[性急也]但侃脘嬗暵篹蔊柦瘅悹匴惮焊疸擀錧痪奤坢馓梡皯輨繵潵芉狚輐酇瓪玬觛裋衎忄靼衦皽璮厂鉡穳浫攋皔刐藧嵈秚灡棵[断木也]粄鏾跘拌繟駳唌禶焌鏋睕埦糷捖簳綄䂎䍐䌣䬳㪔䓍䉽䞡䟎䠪䛞䝹䪀㫜䦔䲌䩥䄤䩪䵟㼫㦨㼝䗆㫁䦎䏓㣪㦌㬊䉈䘾䕀𤺺𧹳
十五潸上声　眼限简盏产板版赧莞睆柬嵼浐潸僩拣绾睅刬撰铲栈丳戁矕僝昄蝂钣撊轏拃骣輚摌闆唍瓪嶘舨眅羼捾橌睌硍魬鋎晘碊攌皖[明貌]鲩娨暕簅䱠䎒㹌䦘㸧㦃㡾䩆㫱㹽䁂䴼䐮㟞㯆𧹞𩥮𪗙𥽽𩔊𪘪
十六铣上声　浅展辨软典剪犬免篆显藓辇冕茧践勉捲[敛也]翦辩泫喘卷[舒卷]缅脔岘铉转演扁燹殄沔阐腼鲜[少也]琏腆撚湎遣畎褊荈舛巘衍跣善艑謇蹇狝鳝蜓[蝘蜓]俛笕冁选匾辫兖件睍涊癣蒇墠洗娈戬瑑搴谳眄谫韅觍隽钱[铫也]饯铣耎筅毨栈键吮趼燀揃齴缱丏嵃襺愐沴鞬宴狷剸辗楗蹍淟蚬惼单幝緛晛鋧戭垷墡蟺愞羂膞圳勔趁[践也]挽撰铲踹蜎鬋黾[黾池]俴詃偭檽甗谝碝諓沇竱媆囝瀽橪錪菤揙齞蟮琄贙臔僎緶輲鮸鴘臇呟帴繟僤姺灦榐譂痶藊碥蜸賟搌枧喕抮蹨芇摙寋晪瑐豣咞僐脟磰渷哯梿蕇鞙躎橏潣弿鶣鱄膦圢豍跈蔩媔襈縳皽糄睓娊鄻貵悿熯埍牑烍奵抁缳挸婰覵矏藆椫覑琠孨刬遃腨禒莬簐萒誢蠕馻謰僆矊攓詪顈鍌鄟堟椼渳歂啴唺鍽嫣㥏㾌䠄㜻䓴䤄㨠㹂㒄䛇䓦㥝䡢㣤㸁䱇㛯䁵㲢㧥䡱䭤䩙㨺㧋䧖䀎䗺㮒䁴䞂䧋䥪䥀䧘㮟㭠㬎䮿䙇䵐㔵㠭㙉䚚㩃㜊䉸䎒䏹䢾㶍㞡㱛䐌䵡㦓㢧㔊䍾䧠䄯㵷㕣䓣䆓㨵㓴䱼䩅䵤㦚䗾㷷䅐𥮏𠻤𧍒𥌭𦆀𣎓𥀹𧪈𦺍𡭐𠟉𦭶𩝡𧍢𢯼𡾰𨋚𣧟𣃘𦁆𩠹
十七筱上声　鸟晓了[未了，了得]小表杳渺杪扰袅沼兆窕缈皎矫赵褭筱眇少[多少]窈窅绕绍旐淼蓼悄[忧也]嫋皦醥肇藐瞭皛缥缭秒嬲剿[围剿]殍麨夭[夭折]溔愀挑[挑拨]挢湫[隘也]莩鷕标昭燎掉缴窱娇蹻褾舀娆晀佋剽[末也]佻錶鳔蟜朓麃钌眑鱎僚[好貌]吵瞟訬憭嫽騕鲦婹枖偠摽駣敫闄譑劋婊抭宨檦苭屌崾萩朻眧煍皫藠菬釥賋絩柖嫍芺敿髜鸄祒篻垗蔈鐈鄝袑岆仯璙誂镽鮡隢藨巐狣扚仸榚尞諘篎鼼丿顠鴢蓔璬宎肁楢柼膘㒟䑠㟽㵘䯚㵿㨄㝔㣿䦊䙚㹓㴭㡑䄦㭂䄪䂽䁏䆞䍮㵱䥵㜵䃵㠡㡽㪕䥞䂪䈃䔸䒚㹾㝋㫏䉆㫐㟱䙼䩍㹛㩰䘨䚩䏚䒕𨙹𠞰𢶏𦭼𥤹𧢄𪅃𧩮𦥝𧘈𧞧𨝰𤕷𤃭𢄺
十八巧上声　饱爪鲍卯搅啮挠狡昴泖姣[美也，媚也]咬[齧也]绞炒煼找佼铰茆媌[同㚹]巧拗吵筊孢骲瑵鞄虠狕笷怉櫹鴢灚臫烄焣頝捁緢泶橚挍㶤䎐䲾㺐㕚㚽䕧䶧㥮㩭䝖㑃㚹㑿䀊䝤㑤㽱㚣𥳴
十九皓上声　老草早岛宝藻恼保槁讨好考道浩稿稻昊潦枣抱扫皓蚤倒[跌倒]脑捣杲葆藁媪燥皂堡嫂褓镐皞造[建也，作也，为也]袄缟颢瑙祷澡灏懆埽鸨栳夭橑璅薧栲涝纛烤碯袌璪缫轑缲愺暤懊拷狫恅駣夰套蝹嫐媢滈捯薃蓩鰝镺堢禂筶菒荖皃鄗壔狣窎淏洘芺傐郩槄勽絩怉菿忑譅梍咾屮賲聕鷎鮡駂簝丂祰恏檺峼悎憹祮糔燠皫鴁椺劋䴠䕩䎂䝤䲃䖣䳈䧚䯫㚼㺁䯠㤇㛮㧇㬶䇭䮻䗢䵏㙅㵆㨶㛴㼥䳰䆃㚖㻄䴐䵚㧯䴈㾸㑎䳓䒃䯪㿒𣐊𦯑𣓌𦶞𩢿𪊏𨱵𨎮𩕍𥈆𧎮𥢑
二十哿上声　我火可堕果锁墮祸朵颗裹琐舸娜妥坐么亸左裸柁砢跛荷[负荷]颇[稍也]舵夥躲蠃[蜾蠃]惰笴垛柂[同柁]鬌簸叵轲瑳蓏峨坷輠椭沱脞那騀播堁佐傩[行有度也]沲陊婐哆揣蜾駊拖埵硪瘅猓嶞惈哿伙瘰媠閜娑[馺娑，汉殿名]卵阿[与猗同]懡婀[婀娜]蚁爹墯棵跺嬷笸鎯爸髁婑岢馃鵎捰唢彵誐粿鐹鲄溑敤扡邩抲橠娿攞崜袳惢縒椯灬尛毻陏褨锞褍锗睉袲挜她椤曪涐葰毑剆挆砈碋綶硰撱隓缍痑頋稞暛炣誃钶淉攭㦬㰤㝾䴹䑨䵀䰀㛂㡅㪃䅜䒳䐝㻔㪼㰙㰁㯐䲊䩋㞹䯬䙤㦱䤻㰐䠤䩔䫂䂺㥩䰈䣔㙐㱻䙨㝿㛆䈗㧴㶡䌱䂳㩡㚌𤿑𢦪𢀴𡰟𣵺𨬍𥳔𥬲𨲉𥰮𡜮𩑸
二十一马上声　者马野社写也雅瓦寡冶下洒舍[废也]捨赭把假[假借]泻灺惹斝槚且鲊打哑夏[华夏]踝苴嘏若厦耍姐贾扯銙剐庌髁傻玛喏奼哆輠码瘕閜叚厊疋蚂乜壄毑奲痄邷厏苲藛藞搲椵蕥吔抯溤稞蘳挜楇锞雫跒耹觟忚謯騇漜襾婽鲝她鷌偖飷鰢黊顝蹃腂粿訯䰩䱹㿿䪵㗿㕐㨋㙒䟩䈑䊬䋀㡸䑝䄕䵦㼘䋾䥱㐄㵔䠚䬷𣝒𧧏𤈩𣬕𧫝𧻀
二十二养上声　赏往响想象丈网爽掌壤像桨党朗幌敞上鞅长[长幼]莽享仰广枉氅奖恍惘罔漭痒养飨魉俩两颡荡仿曩苍[莽苍]攘[扰也]杖榜坱蚃晃倣蟒簜强[勉强]帑盎晌谠镪昉沆纺橡瀁瀼[水淤也]怏蒋放襁辆彊仗驵傥慷穰昶辋鲞泱[泱漭，广大貌]向魍惝髣誷蜽愰彷滉榥厂抢档吭嗓脏[肮脏]磢磉奘緉嚮嚷肮懩駚厈瓬鋹谎犷[县名]氧倘躺潒搡曭迋蒡蝄慌塽灢漺扄佒逛诓垧攮傢饟瀇愓爣菵抰襐矘岟旊欓儣灙裲黋櫎氆膙璗蟓懭弜掚咉茻軮蔃崵慡鐌曏誏仉銺蚢驡誩欀臦姎嶑俍縔脼柍鎤雵鶭酐鱌忹褬樉偒騯烺勨樃犺詤瓽躟覫紻詇蠰爙婸墏臩嵣眪攁扙滰汻俇炴壾懬謽宺魧爌邝皝鞝榔[木名]傸奛瞊熿㟿䁳䣊䋄㬻㟐㫤䖹㗽㔝䴚䑗䒎㒉䇦䲱䠀䫪䴂䠃㬒㿩㴏䉃㤺㓪㒳䡦䫙䍩㕫䒋㔦䥒㼒䗮㑂䬬㛨㯍㳹䑆䒍䑋䒂䒽㽴䭺䁜䖆㶞䢍㢡䖮䟘㟠䡉䔪㫰𠞮𤞛𣇭𡧽𦄍𣆖𥇑𥯕
二十三梗上声　影冷静景境岭井永省幸领顷警梗整颖耿饼骋屏猛杏靖绠颈颍炳瘿秉逞郢荇矿艋鲠眚哽黾请烱丙囧冏皿蜢靓并璟犷箵悻憬箐阱怲打邴倖懭袊痉埂竫梬浻冥煚苪渻裎倖睁檠狰[飞狐也]睈勐蛃庰穬浧蟼悜瓾澋鯭苘徎陃奣浜栐鈵炅憼皏鋞鼆峺睲莄晸箳彾郠庼廮鉼眳偗鱦摼窉鮩塣臦擤眪柃璥朾侱暻胻炴帲掟鄳帡挭擏幜撔柠誁氶旲寎睛[眳睛，不悦目貌]㾪䴵㯳㗂䓷㣏㼳䗒㓏䊯䂔㩩㼬䚇㹙㢍䁄㹚䁅䩶䜘䵃䋑㑟䭊䭘㓑㮐䋁㲟䁞䭗䑍㨀㬌㴄䯧䚆㝭㾘𤯝𡈼𪍿𢟫𩘑𠱛𪘀
二十四迥上声　顶迥鼎艇茗等酊炯肯挺涬拯梃町醒铤謦褧溟[与瀴同]刭絅酩泂艼嵿珽莛并惺脡熲颎侹胫濙颋矃冼佲奵冂诇订夐泞烃婞笭炅濎圢榠涏汫眳巊娗嫇巠靪烶顈漀踜耵煛瑩庱誙鑏鑋庼矨鋞苘姳朾侱緈閮徎瀴誔蓥䔛䵺㴿䗿㟰㱡㽪㷫㯋䦐㫥㫀䅍㷡䳙𩚱𦊓
二十五有上声　酒手久有柳友口朽叟牖九偶丑否狗醜首走垢薮肘后斗阜守後帚咎厚臼藕亩缶韭负吼玖酉寿剖取舅苟纽母右莠塿纠诱受妇耦某蚪黝耇不[同否]陡擞笱瓿呕绶蔀钮杻扣罶纣牡浏狃授掊[击也]卣叩揉蹂抖糗槱蟉[蚴蟉，行动貌]绺莽滫嵝桕赳糺忸瞍糅扭殴部灸拇嗾篰黈眑枓羑垕醙掫趣[趣马，趣养马者也]篓蚴琇甊棷[同薮]苃欧[吐也]佑籔釦懰茩搝钭禸岰娄茆溲溇妵涭麔鋀枸鲰铆蚼殕睭岣艏鯞栯塸萯楺郈蛗蜏玽偩糔砪蝜踇缹櫢劶勏峊餢腢炄媀啂橾璹齱泑熮妞[姓]紤牳疛紑煣荮朻飳龓綇雬紏斢箁沑懮鲖[鲖阳，县名]莥蘣奺吋侴棸杽鯦犼楢羐喁[声相和]犃聈嬼湡庮煪培厶珋吘鴀舏吜媨齨喽藰倃湵婄垺㪷䳇㰶㽲䪮㝅㱙㺲㧕䈹㔽䚵䅹㺃䭭䂇䕆㕗䅎䳝㔚䱏㪗䴺㞳䎻㞫䈙㥅䒴㺵㷆㶭㪹㸸䶇㰴䳑䏔㫶䘀䞜䖞㥉䏂䬀㨐䏽㒖䱂㓡䬏㕛䛮䊆㼴䳎㝊𪍣𩖴𨋖𧥣𤛐𣢜𥣙𨺅𪕋𡜊𥈃𣸈𥈟𦡗
二十六寝上声　锦品寝稔凛廪审枕饮禀甚谂沈饪蕈懔衽噤恁椹葚荏淰踸朕怎锓檩碜墋腍婶瘆凚魫伈趻覾栣鰧昑唫梫瞫橝銋棯菍訦嬐謲抌箖贂闇趛拰栚秹顲菻㾕䫈㶒䭙䄒㝲䭃㯢㾛䫖㤛㮳䪴䫬䚓㱃㔤㴨㐭㱈㰂䫴㶵䇮㜤㨆𡼒𤎭𣞵𥧲𩒯𩖆
二十七感上声　感览胆惨敢萏坎糁揽颔撼壈菼毯榄窞黮紞髧憯黪匼歜黕嵌淡啖椠禫餤菡椮澹砍闇黭醓耽[虎视]傪嗿醰贉轗罱顉惂鳡輡晻喊埳橄憺赣唵忐欿黵錾澉揞昝歁腩啿黬竷霮醂朁湳顑莟鏒饏豃漤臽襑倓轁爦肣坅撍掩錎浨顲馾嘾醈揝馣莐罯参[与糁同]衴薝幓喒颌篢腤蜭燣暔澰揇寁惏澸瓭抌鰔䃭㯺㙳㛧㲜㨔䖔㽢䉞㰖㛦㧲䆦㣅㟛㜗䨢㸝䎨䊖䫩䭛㩜䫲䓿䤗䊉䭕䃫㺂㕪㞄䊤㜝䏙䊏䈒𦃖𩞀𨎺𥸡𪒾𠿑𧖺𥲄𦛜𤃷𣐺𤎥𥳸𧆐
二十八俭上声　险点染簟冉俭检脸燄玷苒琰闪剡贬飐陕崄渐[渐次]芡崦谄俨慊掩敛睒嗛歉魇忝捡广黡檿隒埯磹覢渰罨舔晱扊顩弇厣奄椠潋睑黵噞譣猃驔肷鏩黬裺螹薟晻稴曮棪扂礆鍩彡馣夵孍媣讇珃嬐澰咁鍩礆硽溓嬚婖疺蒧呥悿鼸橝羷龑蔹㴸䠾䄼䣍䒣䀹㚧㱘䍄䇜㪎㯬㰈䄋䣸䤡䭠㤁䎦䌞䎃㓠㚩㭺㢂㐁䌪㶘䟋䤔䭑䲓㚒㶑㨛𡹮𥯃𡕢𧞣𣃳
二十九豏上声　减槛范黯範犯舰斩掺湛黤轞軓崭淰豏錽甉巉歉碱闇溓趻豃懢啿鹻钒喊[怒声]凵撖旵醦阚[虎声]鰔偡槏瀺黬払滥[水名]瘎壏魙㺑㺖㧄㺝䤘㺌㴴𧍙𥳒𢜩𦊔𦉞𪒠
一送去声　梦凤送弄冻瓮众痛栋贡仲恸鞚讽中[击中]控哢动閧洞鬨峒[山穴]粽哄[唱声]衷[当也]霿羾砻恫空[空缺]偬同[与詷同。]赗瞢[与梦同]凇赣湩[乳汁也]齆蕻铳胴蝀涷咔衕唝汞緵[緵罟]倊迵懜憁洚駧眮蚛詷菄戙惣霘胨崠[山脊]焨烔[火貌]齈堹姛謥煈愩梇妕翪趥懵[惛也]愡[憁恫]筗癑茽揔硦霥棇倲絧蘣娻槰焪祌繷㔶㢅㚇㳥㑋䠢㞲㖆䛪㜴䍟䇨㝱㯯䔈㲴㸜㗢㑝㮸䠻㐺㼯㓊䏵㧤𨹁𢄐𣹟
二宋去声　用共颂诵供[供养，名词]从[仆从]宋讼俸缝[隙也]综葑[菰根]雍[九州名]重[轻重]种[种植]纵[放纵]封憃[与戆同]奉疭雺恐统壅躘緟徿偅揰捀謥縙昮錝諥龏緃苚澭[与灉同]贚湗碂褈[缯缕]灉䃔㙲䛦䝋㮔㴩㡝
三绛去声　巷降[升降]戆绛撞虹[音绛]幢憧[愚貌]鬨淙洚肨艟[短船。]憃[与戆同]漴[水所冲也]袶炐䡴㦼䎫䣈䚎䢽㟟㕩𥈄
四寘去声　事地意醉至泪字志寺异翠寐思睡寄吏义记致器利弃坠媚戏骑[车骑，名词]瑞二避悴愧位类试秘赐遂议次置臂辔备吹[鼓吹]忌智骥治翅谊四腻侍值易[容易]鼻肆季邃笥閟稚瘁嗣祟自穗嗜伪魅炽帜祕驷泗馈粹庇示匮萃燧喟冀渍悸施[惠也，与也]踬恣帔屃芰遗[馈遗]隧贰懿为[因为]累[连累]谥伎誌刺鸷畀贽伺挚识[记也]詈惴轾莉緻痹迟[待也]觊贲胾厕肄视饲被[覆也，及也]恚穟豉譬莳里鞴[音备，本作絥。]使啻食怼劓勚知[与智同]寘似芘帅饵诿赑洎出植[槌也。又通置]裏莅篑积比缒觯糒已陂[倾也，邪也。]忮毖弑牸骴始彗胔惎膇澻屣俐缢织企晒痢蒉几[未已也]眙[直视也]技睢襚瞆嚱[声也]痣璲繸跂孳[乳化也。]倚司珥屁饎奰懫咡疐硾懥铒觗翨萎[同喂]德质痿眦掎诐泌谇欬暨岿睟僿髲佽塈笓廙剚柲柶甀禭儩瓃攰肂尯儗垍瑟刵蚑螠旞近[已也。辞也]鵋锤[称锤]敡侐蘱槌[蚕槌]跸喂率澌[亦水索也]庳[有庳，国名]唏毦饐哩咥蜼洱鐀諈懻杘檖倳樲庛髶鬾謘裡穊鷾蛓鞼坒痓騩樻猤峜皕呬瀡揓欭謉鯚螆貱槜衈蝞亄駤絘嘳嚊呮錗袣滍糦螅蔧攱訵坔忥稩螝貤栨鍦憙芖筫潪腄[县名]瀃徛戠邔嬑瞡翆鶅輢鄪賥沶妼珕婎覟佊邲聏眭术嬟贀檍扻梞埴袘牭醀楴鐾鑆胒囟藣秲茡夡蔇[至也]蕼帺搱吱[行喘息貌]鷧饖誃馶诒[遗也，贶也]浰瓗祱硊枈唭佴怶酨鴲撌腃蟌孖韢跮潩燱肶卶畁羛娷誀痵濢其[语已辞]禷絥洷諅芓穖徝杫殔詄垝娡汥鞁嚜纗煝憄犕柴[积也]聭轛肞臎蚝[同蛓]騺枇[细栉]貄怬洓恎襣哆茦粊嬘睸㩻䆳㘩㱁䞃㑶䎶䠔㞓㢰䜐䬥㦐㳏䀣䣵䔬㿫㛅㑥㢀㱴䐉㣇㯜㕄䩀䳐㱖㹑䪐㞖㨖㒾䰎䜻䏪㙺㻑㱲㑧䏯㸂㐸䀿㸢㵨㢻䇐㿷䔹䠦䜜㜇㤦㽷䦯䎵䆊㨁䅆㣁㢽㣈䛈㦉䩃䛋䄁䉅㰣䙡䚳䆈䄲䉜䠏㧘䉾㳵㥡䐀䰨㸍䕌䕗䝯䓽䢦㴛㻽㦤㽈㒸㴃䣦䰡䞈䗹䁛㓨䓌䘭䰯䋘㒃䗽䑄䲀䝸㥞䫁䯸䜵㴚䯣㥍䉌䭄㩼䡵䉋㮹䋟䥙䢋䨳㿙䦙㾽䕚䏤䨽𥴦𢴨𩪧𤡬𩰢𨬝𩥉𣨙𧠎𤹝𩏚𩍘𣣌𢈶𨿠𦥊𨚓𧙁𣖾𨽸
五未去声　气贵味未畏慰沸费纬魏谓渭讳既毅猬胃尉欷饩蔚衣[著衣，动词]罻芾髴汇[类也。聚集也]狒卉忾汽溉暨塈诽熂屝翡蜚剕媦黖菋霨熨唏瞆痱[热疮]菲[菲薄]煟黂芔瞶穊胇顡泋藙俷藯昲螱靅笰攈陫鲱緭刏奜霼犚旡盵喡荱蛂摡甶忥蔇濷鮇蘶炥禨餥鱀滊犔蕜䠊䤒䛍㭑㔗䪋㒫䬣䭳䮎䰁䲁㵒㩌䝘䵝㰟䙿㫓䆏䝿䊧㥜䊠䀈䉨䬑䨾䊊𧱲𥄱𩰾𣢆𥝈𢖫
六御去声　絮曙御驭助署据箸誉虑豫翥踞遽庶觑恕预洳饫去处滪锯倨语[告也]如[音茹]舆[舁车]蓣茹滤与[参与]除[去也]著淤薯醵舁铝鑢穥嘘诅懅悆櫖鏣楚讵呿瘀鐻憷沮欤礜悇麆豦忬爈濖櫡藇棜躆鸒椐暏藷女[以女妻人]勴澽耝嗻勮狙櫲謯怚饇儊坥壉嫬莇胠竌麮謶㰦㵂䎝䭖䥨䁦䂊䘄㵖㫢㾻䢩䱟䉀㣽㫂䛯㫹䬡𡫽𡱣
七遇去声　路暮住露赋雾步渡顾遇素故误具度[制度]护注悟慕妒墓固鹭布句驻诉趣兔屦戍务傅惧蠹树寓附付污[动词]晤铸骛疏[书疏]哺互屡赴库怖祚裤忤寤负喻溯数冱裕孺措痼妇芋谕愫妪濩捕怒辂锢瓠富恶[憎恶]迕莫[同暮]雨娶鲋聚讣吐澍鹜婺仆[偃仆]醋嫭募赂塑頀飓璐呼[号呼]炷亍胙铺[店铺]苦[困也]霔呴圃吁愬蛀柱嗉羽祔阼煦埠绔潞错副咐[嘱咐]簬斁赙酗戽擭镀驱厝傃埧頋输[送也]瞀酺枑捂祻菟酤茹餔[糖餔]謼馵属足瞿跗疰蚹堌袝作胍穫[焦穫，地名]雇胯絇觎抪蒟俉啎腧虂熃綔紸窹涸奼诅驸鮬捗鉒飳葄殶韄祩鵵棝崓蕗嵍婟裋芏侸尌誧鵏娪鳠鏴嫊豧怘孵榡怐鵅饇詂瘘龥姇魱媀稒鹱敄旿聥陚摢咮縸鲴縤秅姹捬钴篧禺[兽名，猴属]攎忂嬎秙蘁榑紨弖罜齼鴮秨盓胕迬凅喥捒墿荹軴慔秺埾緅陠隃奦趶姁邭䊺䑰䪒㬬㤔㾟䴁㸦䵕䒀䐍䍛㽽䝬㻉䞯㲓㓃㳍㜐䠼䣴䥄䦌䨁䨼䮛㯝䎷䇘䛾㺛䂤㨞䠵㹘䝵䟔䊇䟻㧽䔯㕖㚴䘱䀠㹥䈮㴑䣱䝾䜑䜴䓢䎸𩣷𥉁𦺉𧏺𧯛𠕦𤸵𩽩
八霁去声　世计际岁细霁势丽桂袂逝第制帝系继滞砌裔翳惠厉繫卫髻艺憩蔽蒂税替唳荔製敝例脆锐诣弊闭慧契[契约]婿誓蕙睨砺隶曳疠睇赘噬戾谛励币毙缀枻禊蓟澨俪剂毳嘒薙汭係曀祭彘蚋离[偶也。]棣济瘗蜕筮罽谜剃涕濞殪偈呓睿殢羿嚏弟遰枘堄递盭蛎媲猘说[游说]嬖泄贳哜泥[拘泥]懘傺缔刿柢蓺揭蜧穧沴禘踶薜屉漈涖粝芮筀哕[鸟鸣也]愒蹶切掣槥寱妻[以女妻人]挤彗襼轊釱蘙揥秇甈逮鳜题[视也]眦埶帨穄涚轪螮蟪綟憏砅箅瞖竁墆鳀欐[梁栋]悷嫕睥瘈齐[火齐]唑璿軎蜹珶棙鏏熭觢晢医[弓弩矢器]暳捩銴昋霓蜺娣盻裼紒鷩攦迾醊洟[与涕同]跇杕簭蝭慸蹛劙[音丽。义同。]稧躗葪嵽枍濿淠鄨迣讆獙疐摖檵畷偙櫗腣瘱檕銐儶焍鐴齌跩瀱豷媂僀蟿殹蘮槸鮨彑彆橇渧彐罊楴怟蘻鷤摕袣奃鮤蛈裞栵詍疶挮浙[通作浙]狾妎幆鈌鈗懠丿魝櫅贎誽浰鑖韢橞痸赽栛骶炔沵鏸栺寭帠櫔祱忕鰶轚犡潎慀潓泲哾鱥暩睼忚玴捙抁曞遾靪炅臷达[足滑也]眱譓噎[咽痛]戻嫛鶗眭爄淣趆瞉栬榽猰捝璏瘛笍巁裚呭溎攭靾瓗餀悘蓕禲珕梊掜㵝䳏䱥䬅㝣㓷䲪䙆䄌㪒㜒䡟㨹㘑㩨䘙㓹䇽䦇㡂㸷䚕䄿㳪䢃䭁䏅䚉䁹䄟䆿㙪㑦䤞㡼㜆㖂䨆䅄㯔㾐㦣㡜䟤䶏䬽䵻䎈㬩㰥䶑䗟㿃㲅䂱䩢䫔䤱䇧䓲䔾䜞䠠㿛䋵㽝㡀䏿䐭䶩䀙㨅㥷䇩㪈䧥㻰䕍䰏㴉㸄䛖䤧䶍䎺䎮䟷㼖䨖㵩䲦㥣㹭㡫䟡䀸㓯㭡䇤䠘㑜䩚㗣㛳䓞㤡䶓㔺𦒎𦇧𤜂𩊒𤤺𣴪𧫚𣃍𥉻𡢖𢄢𨇙𥶙𢰂𠭥𢘽𤫝𥶽𥰰𤸪𤛶𡿋𥉆𢢞
九泰去声　外带霭赖籁泰濑艾害大鲙蔼蔡盖壒柰奈郐太汰狯丐馤磕癞旝忲粝轪[地名]愒釱濭瞹藾糩堨嗳戤嗐跢忕廗篕忦冭贎攋匃餀鴱摕溙昹刏艜棑胈簤婡舦瓂毻笩渿瘌㟋䮑㞭䡷㐲㲡䯤䱞䈆䨠䭝䔽㪡㘷䲚㲕㥭䓶㞧䠭㯂㧩㮏䊪𥄔𡕗𨞨外会旆最桧脍绘沛贝霈荟浍狈昧兑侩蕞翙蜕廥酹襘哕祋禬駾濊茷杮徻钡梖浿癐璯鋷戻裞珼綐餯幆姵鐬鈗郥眛杸襊頪懀祱瀢犡翇娧絊刽嬒馷瞺昁稡䔴㝮㸽㙂㤄䟺䢈䠿㣛䬈䰽䵳㛝㸬𨘇
十卦去声　界怪拜戒债快迈隘派败卖介坏芥械瘵湃惫薤寨诫懈呗届稗聩虿嘬疥廨砦蒯玠犗哙解晒夬邂韛瀣噫[饱食息也]价喟齘粺劢狯孬蚧齂欬柴[柴藩]佅躗繲魪衸阨咶唏駃[快也]呃嶰譺韰賹吤懀膪袃悈欯攦庍篑炌欳丯紒蒉楐棑欼琾祭汖慸囆狤祄噧帴浿骱睉烗眦[恨视貌]訍餲斺鶛砈嘳忦嬇纗謑妎璯庎喝蘾㬠䪥䯰䜕㑘䅬䢙㝏䶐㠹䇒㧔䈛㠔㳗䛺䵘㾏㞒㦅㿍䖰㕟㒠䊽䝽䘍㭛䒔䦏䦤䴝㖑㳦䚸㶔㿄𢗊𧜅𧜁𣤌𥌚𣏟𡀽𨢦话挂画卦絓褂铩杀衩尬繣瘥罫榨睚嗄诖杷舙黊澅諣䛡䇈
十一队去声　爱态代慨碍黛菜再概戴耐岱槩贷赛叇袋在睐嘅埭赉塞[边塞]暧柿叆阂裁[制裁]载[载运]襶逮簺縡溉玳薆鼐徕[慰劳]欬縩铠忾咳怠劾曃瑁棌褦輆皧采酨摡嫒蝳燤螚墤埰蚮栽[筑板]杚儗懝棑瀻婇瑷佴洅柋鴱㤥䣬㾢㝵㕢䒫䚅䵧㻖㧉㙕㑷㕌𠎹𣉘𢟪辈内佩对碎背废退晦珮队吠秽块妹肺配溃喙耒昧诲阓碓刈乂愦焙痗回[音缋]颣淬倅沬硙憝酹悔瀣悖颒礌晬缋靧頮倍北瀩抺啐綷傫镦邶韎濧薱圚儽孛擂眛敦朏昩谇褙茷捘脢癈憞篃繀胇啛蝐槶鲅殨鼣嶏苝犻顪砩饖橃靅柭銇錊嬇烠鞼嚜杮櫑鼥膭燊蓌螝櫠哱埣怢獩慖轛礧瀢刏詯頪琗簂睟祽跊眊[好也]姵䨴㾦㣻䃍䉪䕠䯟䋳䏗䨺㑍㘨㐻䵢㳃㫲㲼䠩䘹䀛䌆㻗䮹㔨䈐䊃䩈䜋䚨㠚䐴䃀䂕㬣䒹䉬䣂䛛䖊㥆𥳊𣨶𢂛𨯢
十二震去声　润信鬓印进阵讯仞峻俊镇烬晋骏顺刃舜震认吝振瞬迅闰慎觐衅殉轫浚榇衬疢胤殡徇赆荩摈馑蔺畯躏慭趁[追逐]汛仅燐磷馂牣陈[同阵]舋韧讱亲[亲疏]憖遴纫蕣隽[同俊]墐[涂也]殣酳菣引瑨晙傧赈堇搢盹娠袗呁瑱瑾殾楯圳诊蜃龀睃驎螾缙轥焌靷鵔囟攈瞤侲嚫橉儭訰垽葰檼甐閵朄填鬊枃抻菫琗扨焛稕螴琎懏洕麐眒疄鋠馸螼覕茚毥帪濥鏻夋谆湚軐敒揗獜侚岕賐寴挋汮瞵[视不明貌]寯奞杒綧鈏歏迿屻阠埈鮣嫤璶溍廴橍猌瀙荵臸䭀䏰䗲㒞㠴䀔䴄㬜䀢䚏㧈䢯㢙㣀㷠㝻䒖㸾䛜㼱䪿䦞䉮㕙䚱䜭䚔䗯䞋䑞䫃㖁䛨㶦䏖㪦㠈㐰㥧㝦㶳𦬄𥳞𦺸𠬍𥇜𦚧𪕞𧥺𣱐
十三问去声　问郡韵运分[名分]训晕奋愠酝靳粪紊闻[名誉]近份偾腪璺焮捃瀵郓餫汶[水名]隐蕴絻坋煇拚[埽除之名]忿堇[国名]抆攈垽韗懚緷秎渂鱝鶤檃员鱝檼珺賱妏泿挋鼤忶鵘鑂莬縥桾鐼歏縕馸斤[察也]脕枟臐魵㨷䩵㸪㟦㥼䝍㡈㱵㧆㒚㡥䲰䚋㿎㞬㴈𤸫
十四愿去声　健愿怨願万萬劝献蔓建宪券楦曼贩饭远[远之也]郾圈[地名]堰绻畈挽腱畹媛蟃番旔毽隁獌韏妴踺褑謜絭婏僆脕褍鄤閞鬗鬳楥傿贎卍鶨傆槾瓛褗虇臶汳椻牶奿瀗漹嫣㪻㰽㝃䄐䇟㬅䛄䏍䉊㸘㽹䧮㤪㤆㜛䝡㶗䡬𩕾𣀔𡙷𨻳𨠒𧾨𩋢𢑆𥁠恨论困寸嫩闷顿钝逊褪坌喷溷巽艮慁遁噀鐏囤奔[急赴]诨揾涽捘睔碖硍摌媆憞殙謴焝敦[通作顿。]陯瀳焌忳炃睴溣茛涃埨銌袸詪扽拵俒捹顐渀㥃㯎㥵㫻㫔䅱㴫㶧㨰㧷䵪䭡䭓䬶䍎䤜䫀𥃩𣏔
十五翰去声　乱汉岸半畔看换叹旦观[楼观]玩案烂漫干[树干，干练]唤粲翰幹贯段炭难[灾难]幔汗爨绊灿窜冠[冠军]熳腕赞泮焕灌散璨弹[名词]判闬榦断按惋涣叛鹳锻旰算奂懦瀚捍蒜逭伴漶悍晏馆惮彖澜沜骭罐瓘祼煅盥矸犴墁钻谩浣毈鼾[卧息也]谰涆桉[同案]衎垾滩杆撺缎暵駻爟愞谚宴豻頖捥碫哻盰缦侃碳雚簳抏鴠笇釬靽偄螒摊[按也]胖巏熯疸酇垸椴餪痑腶镩瓓悹獌牉饡鏆毌忨愌怑湠鮟澯姅矔殩洝狚忓肒婩钎嚾瑍兓拌觛鶨妲皔傼雗檊鑚湪妧睕皯喛褖峖咹穳镧淉竱攼倝坢仠遃錧錌糷躖薒貚禶遦梡灒暺屽詊帴衦灡瑖溿馯鱹碝槾媻蠸厂襸鳱炍灓䡬䝺㬮䯛㛶㪱䮗㪋㱫㪵䏎㢨䠉䛃䥗㡢㵄㜺䏷㽩㯘䅁䀓㣓㻮䃹㬇㲦䗰䯎䕿㡺䯘䮧䎯䬤䝢㛑䍐䕕𩏇𩛻𣉙𤳉𠯘𦔔𤅩𤼐𣵼𢧀𩀼
十六谏去声　雁幻涧惯宦患办谏盼绽慢间[间开]瓣鴳串豢苋赝丱讪篡晏汕薍襻扮閒[隔也]虥覸嫚擐栈轘骭裥铲绾虦谩扳栅缦疝僈涮刬藖羼锏赸孪槵輚卝矔騴銏缳菚摱暥摜奻枧洝摜鳱覵梡澋贃麲妟鋬睔姲瞯粯蔄繝釆綄䴮䋎㵎䆠䍺䊲㕕䚲䗃䉯㬄䒛䙪䳛䙮䁙㝈㹖㻵䘺㷳𤅲𤜵
十七霰去声　见面变遍殿燕倦战贱院恋羡扇练彦片线县箭传[传记]电荐薦砚甸便现霰眷馔啭掾茜膳奠绢颤鍊擅炼绚宴眩弁炫谴转钏衒禅[封禅]咽援[救助]溅嚥汴卷[书卷]罥研[同砚]旋[打转、屡次]钿唁缮淀忭碾暗倩抃善缘[衣饰]选眄先[先之也]缠澱漩衍卞劵楝瑗饯遣麪靛牵[牵挽也。]眴拚[抃本字]煎[甲煎]狷佃瑱竁煽勌撰骗堰谚晛惓媛饭穿[贯也]娈渲輤嬿綪昡剸昪袨縼悁[躁急也]鄄湔鬋桊甗伣缱淃睊涀帣填晵騗餋鋻臶弮这拣辗僝圈[猪圈]蚬椫骟諓浰縓莚狿湅葥獧贙絭鄯嵃萰栫婩癜褑衏軐埢蔙蜔噮烇瓹孨閞玣禐瑓趼琔鶨勬哯湣迿汳姰繏抁枧婘僆曫牪夐珔偭襈裫鼰堜瀳棈汧嫸縳橏鰊梋纞刋糋灷琠烻覵溎涏檈槙驠矎瞑[瞑眩剧也]咞怰惗豣篟儙擶閵飬睼猭糆駨袸蒝媡肙硟帴謆楥汌姩摙灓頨繟牑庼諯匽竱婝橂榗怋鱄牮皘阗[于阗，国名]䄠䢭䉵䈠䖭㯠㪨䪈㭇㪇䝮䅈䪻㜃䀎䍻䡓㧦㞟䏒㳎䍗㴐㸤㳬㝸㺹䑶㴜䥖䢥䵖䠣䀏䬼䒪䂩䛉㢾䴏䛹㬫㼑䡀䬇䆄㪝㬗㢧䡪䄅䨘㭓𢿌𪃉𤩱𦌾𦛔𢂺𤬝𦱽𩎌𧭦𢴯𥻩𥶉𧯦𣬏
十八啸去声　笑照啸妙调[音调]诏庙钓眺召耀峭峤料叫窍要[重要]诮徼曜肖烧[野火]疗吊釂俏藋茑少[老少]跳[行貌。]邵獠鞘[剑鞘]醮劭粜窔骠噭漂[水中击絮也]谯[责备]掉轿[𨋖车也]噍铫炤燎穾剽[砭刺也]鹞爝哨蓧窱脁嘂溺绕票嘹悄[急也]尿裱僄约鹩僬摇[音曜。亦动也]瘭镣俵偢覜嬥朓卲窎誂尥膫潐趭藠獟摽葽[草盛貌]瘹髚艞伄帩僺嘺讑抭絩撨璙尞踃炓鸄晱熮娆[不仁也]訆鋽嬓熎鷣篍嫽枛筄獥竨敿顤劁篎訋敫顅瞾蔈翏顟莜徱樢顠覞熽窲嫖[轻也]鑃鐈䔄䊥䂃䔙㗛㢗䠷䎆㔅䆻㴥㬭䬰䉼㬓㞙㚁㞁䏇䃝㳮㧼㰾䐹䇌㿢䢧䨅㙩䞄㷖䧂䊮䆗𧇠𦡱𠿕𦌒𥌺𧢢𢶡𤊽𤾫𤑗𢵿𩮳𠧙𪖑𥁮
十九效去声　貌孝豹闹教[教训]效校罩淖窖稍炮[枪炮]棹趠砲觉[寤也]钞泡珓较疱乐[好也]桡胶敲礮坳酵巧恔儤哮[唤也，呼也]獶笊袎踔箹爆[火裂也]窌靿娋刨敩拗艄挍饺婥睄潲撽岰嗃髱烄骲麭緢犦詏悎奅仯礉洨漖軪䶂䑲㹸䏴㹿㒵䡚䫉䶌㯡䍜㷹䔠䈇㘐𠟅
二十号去声　到报帽操[操行]灶傲噪奥盗诰号导蹈耗悼耄劳[慰也]告隩躁暴[暴虐]道好[爱好]奡冒靠嫪氉漕焘造[就也]犒膏芼抱扫翿骜倒[颠倒]帱[覆盖]瀑瑁墺眊纛糙祷慠曝凿秏瘙郜懊燠搞謷慥鷔謟旄套缟埽涝痨澳媢鏊軂嶅髞鲓憦髝僗毷軇橯璹瓙蔜镺烄哠菿耢襙萺鄵祮覒祰鐭藃艒鯌嚗芺冃擙喿叝扷檤圫鯌翢鼜䤖㟼㜩㬥㧌㿞㪞㘪䊭㚪㺺䒵㞻㿋㲒㴘䌦㜜䋃䜒䎋㥿㲧㙱䚽䐧㚐㒻䪽𣔺𩼈𦺜
二十一个去声　过[歌韵同。又过失，独用]卧破座和[唱和]个贺课饿唾箇[枚也]些[语辞]涴磨[磨磐]货大做挫坐個逻奈[那也]佐惰作懦[怯也]剉糯簸那播左锉莝驮蹉堁坷轲磋愞他剁媠瘅譒骒逤盉蓌哆哪啊髁蚵摞毻藦耱袔蔢誃椤腂硰夎楇娑[逻娑]袏襎吤侳跢攠侉尮沎敤攍鐹俰纙涶痑桗挆䙃䃺䞆㘞㰤䇔䉓㿚䟶㖠㳀㞅㾧㵑㟇㘸𧟌
二十二祃去声　夜化驾暇谢亚榭稼架罅嫁骂讶下华[华山。又姓]诧怕麝罢借跨射舍[庐舍]诈卸蔗赦迓柘藉乍价夏霸咤泻稏炙坝帕汊娅砑靶姹吒吓胯假[休假]斝嚇灞鹧差[短缺]岔贳祃籍把[与弝通]蜡厦嗄弝榨吗髂睱贾[姓]桦杷耙衩犸鵺奼諕蓌槬酠渣唬哆哧挜偌杩觟爸跁侘摦褯鬕厍傌杹騇閕揢哋膪嗻諣坬衙[与迓同]侂仛疜鳠犽愘芐懗謑搲渃誜笡宱夎狛躤灹俹砟椵踷疨觰閯涻襾訍矺叭嬅䏑䕢䄍䆉㕦㣾䟕䉣䤳㰳䂞㖡㾝䃎㓔䵭䣕䩗䒲䖳㴬䃻㙈㾺䆛䗪䠶䩾䧞䢝䀅𡧗𧧻𨻲𧬮𨢧𥝧𢺞
二十三漾去声　望壮相[卿相]浪怅唱帐恙旷状访将[将帅]涨嶂样障尚舫酿亮上让妄丧[丧失]漾况饷畅瘴匠量[数量]葬贶藏[库藏]谤王[霸王，又盛也]向忘傍[倚也，亦近也]放怆[伤也]宕抗杖纩谅当[适当]飏酱创荡诳幛旺阆行[辈行]倡鬯桁[椸也]圹盎仗亢长[度长短]养[供养]两[车乘]仰[恃也。俟也，资也]颃扬[同飏]絖嚮挡张伉悢擋韔炕胀脏[内脏]吭砀妨账傥[倖也]偿怏强[倔强]防榜[进船也]鄣[与障同]广淌闶踼旁瀁喨醠炀艕烫饟畼曏掠绑棓懹糨菪汤[与荡通。又与荡同]矌埌羕烺棒诓桄[横木、充满]晾攩戗爌迋逿儾塝枊懬哴搒湸軦弶犺唴緉囥岲櫎焋嵣晑摾掚諹凔懭盳姠焻摥畺曂嫎蠰邟鐋趽摪姎賶蟓嗙砊鐋趤珦瀇焵瞕瓺俇蒗柍詇礑臦羻眖灀倞嵹徬圵逛[欺也]欀邡萫潢[与滉同]恦蚢俍眻誏撗䩨㼽㤮䩫䅮䦒䵁䵮㾗䭐䍚㔀䞪㼜䬬䤑䕞䦳䊑䬺䀶䌙㢓㙣㺊㫛𣄴𪛋𤵼𡵙𥩿𧭅
二十四敬去声　病命镜性咏净盛圣政映令劲竞正姓柄庆敬竟孟迸聘郑泳横[蛮横]硬证更诤儆獍凊行[德行]迎[往迓之也]评[平言也]另夐并靓榜[进船也]帧侦轻[疾也]倩[请]證醟阱証请挣禜摒晟娉盟[盟津]碰婧渹摬檠请诇邴锃跰怲啈詺胻璥鑋曔絎詇鉼掅墭妌梷滰誩澃賏靗窉悙倞眐姃賆浧鈵貹狌絎矎瀴寎牚儬竧炩朾葝竀鸻鞕㡠䈣䀻䓝䨻䔔㽀䛭㘫䂻㶇㼞䡖㡧䰢䙬𩓞
二十五径去声　定兴[兴趣]径胜[胜败]赠暝[夜也]应[答应]磬磴称[相称]乘[车乘]听甑罄剩佞蹬莹凝[止水也]凭饤亘孕瞑邓媵镫[鞍镫]秤凳醒碇滢亙靘症綮證锭经[经纬。又织也]瞪凌[冰也]庭订泞嶝钉[以钉钉物也]廷隥瑩胫宁譍[以言对也]穪懵蹭懜墱鸋鑋倰踜靪掟膡搄碃蓥冥鋞鼮氶芿掕堋誔濎橙[几属]濪驓俓鱦殸霯覴堩烝[热也]碠傰臖桱掅褮榺僜邆痭睲蕂撜靐忊㵾䒅䒌㲌䥌㿦䠬㣷䲛䵴㹵㑞㚺䙢㞌䮴䱆䰝㮓㓈䱍䔭䮚𥥻𢶚𡹴𧄼𧑗𨆪
二十六宥去声　旧秀瘦袖候就昼漏奏岫绣透豆茂陋溜宙构斗窦皱寇兽骤谬胄臭逅又究后鬬鬭[争也]堠祐逗甃酎幼救嗅彀後狩狖搆售觏咒厩耨宥寿凑鹫疚覆囿诟籀遘漱辏右霤绉富脰镂僽侑授宿[星宿]蔻留[宿留，停待也]媾走厚购雊懋贸咮饾冑复[又也，再也]首[告发。自首]扣受柩锈戊簉仆[顿也]守復够姆副缪瞀馏腠僦嗽叩袤廏绶吼鼬读[句读]鷇冓收[获多也]蹂糅柚佑灸廖琇繇[卦兆辞]釉嗾沤[久渍]姤糗槱廇句[句当]鄮伏[禽覆卵也]揉瘤謏噣[喙也]懤愗畜痘鲎楙佝蜼釦擩揍塯貁鍑楱譳窌狃睺油[地名。又与釉同]毭複犹[兽名]輶雺飂輮偻瘘酘娒螑鍭镏鹨浢筘豞铀姷怞匓鏅怐栯迶瞉煣嗖粙櫾駎惾韝慦竎鲘骺疛凁斣嬦鞣撀暓鴢猚磂牰璓糔溴鏉輻韖峟殧郖敊嬬鮈嗕煹憱熰梎豧袧鯦遚嬼鬸鄇蜏椆窛蔟[律名]珛褔洉䀁㖟䙔㳶䳹䊘䩜㜌䍍䝭䪖䤅㗜䃓䋓㕻䛆㑳㖃䔰䟬㔷䟝䒄䆜䞧㦞㗕䀤㛒㺠䦣㲃㵵㡱䋴䅢㔿㼙㩆䬦㽬䔏㙧䞬㨌㝊㶯䬨㰯䐢䠫䄈䓮㙀䇺㔌䠐䪷䩽㝌㝤䜬䛵䛠㹨㠇㤱㝅䞥㢄㾭䌂𧱓𤬏𧧷𤸑𡞜𦳩𣓕𥲃𨶜𠣿𨡭
二十七沁去声　禁荫谶浸任祲沁鸩闯赁谮渗饮[使饮]甚深[度浅深]临枕窨寖纴吟罧喑[喑恶]噤揕紟衽鵀癊沈锓妗妊僸酖[通鸩]吣邥齽笒瘎赺愖鈊鈂抋搇侺莐伈瞫扲搇夦䜟䶖㓄䥠䏕䧵䲴㱽㼉㵕䜗䑤㤈䈜䌝䫴㯲𦧈𢊖
二十八勘去声　憾缆暂瞰探担[所负也]勘暗绀歛淡滥甔赕磡澹[水摇动貌]憨墈唅啖[狂也]阚闇憺赣錾憛霮壏爁僋汵嚂莟腅俕琀淦儑浛沊詌誩馾揞閐錎倓篸懢参[参鼓]黚竷癚凵帎撍蜭顑饀姏瞫三[三思]婻漤顲䌫䬓䯥䗊䀍䲺㤾䫅㜮䐺䨵䟅䘓䐄䗣𦧡𨣨
二十九艳去声　念艳焰店验滟堑占[占据]酽赡垫坫僭窆厌殓餍剑掞砭觇韂欠敛苫佔傔潜潋煔醶曕沾[水名。县名]舚淹歉忝碱襜爓痁俺熌噞猃驔酓裧嬱艌嬮鳒幨埝譣椠兼盐[以盐腌物也]覎爁菾敥姭裺殗羷澰趝嶦頕胁[妨也]稴覎棯㮇䪜㝪㶺㷔䠨㙴㛪㣣䛳䶫䃸䀡䯡䃱䊴䧔㱨㟻䱤㪁䦲㼭䁮䈴㜞𥮘𩅀𦱏𤬯𧸘𣄝𪙊𨸱𢜰𡄑𩅼𦁤𦒻𢴵𨼮
三十陷去声　鉴泛梵监陷汎忏蘸赚镵站帆[张帆行驶]欠馅沨摲钐訉儳剑湴譀谗阚[犬声。兽怒声]甉钒埳[同陷]艬覱揞溓顑肷錎臽滼淹韽湛[姓]䪌䬚㒈䀀䜛㦑㣌㸥㺘㽉䱿㪠䶟㕨𧸖𪉦𣔿𤮭
一屋入声　竹屋谷目木熟菊腹哭服肉独福速逐禄鹿麓肃轴牧宿[住宿]卜陆六族筑毂祝沐斛馥穀犊掬缩築牍叔读[读书]粥簇蹙复[往来也，返也]育秃覆碌復伏穆渎戮淑蓄縠矗扑幅镞菽漉竺燠蓿蔌撲瀑曲[酒曲]簌椟睦鵩鞠鹜觫蹴簏蝠黩郁霂塾澳谡夙辘餗麴恧仆[群飞貌]畜榖衄洑濮蔔槭樕毓辐朴複孰匊倏浊舳醭讟樸輻鬻僇煜角蝮稑暴[日乾也]箙昱彧槲曝啄鞫朒盝韣匐睩琭龊蓼蹜滀毣忸鵴瀫俶踧袱鹔柷澓髑輹柚搐摝瘯慉殰鏕碡副[剖也，判也，裂也]囿菔茯薁剭螰苜踀喌嘼蔟虙趚骕蹗鱐楅贕鵚簶閦噈缪[与穆同]稢虪穋觳朷告葍腛勠鋉瑴縬濲摍藗焀蓛熇遬汋[激水声也]蹼唷唂橚趢儥蜟拲娽坶蔛涑樚鶝踾跾豖匑翏錥圥鴔趗栜棴鮛楘蚞襡艒纀蕧栿獛熝嬻躹鵱蔍茿剹諔踿喐韇蓫沑鱁蟏梀惐梮皾莥逳箼荲騼宓騳驧潚畐斀稪萺莤玊哊鉐鵦癁鉃粶丵焂埱坴襆敊涋粷喅蓻鱳瓄珿軮鳆踓剢犕鑟蔋椈嗀聏琡鞪鏉蘛鼀疛巈淕絥鄜齱璛淯璹樢婅蒮斣穙鍙趜雮偪阿[阿谁]疁骲篴媨罜殐掓稶嚛磩槒膔栯礇炑鄐鳪轐殧塶螜閰媉棛篫諨摵椱砡樎鎐誎垘苖婌泦椂鐭攴堉嗖鯥觷觻䘵䩮䮷䱙䎘䍡䉛䃤䛢㳤㰗㜚䞱䃙㕰㰲㓘䑿㚆䫝㽤㥔䙒㶖䜡㲫㩋㧅䟿䥮䘻㓐䢱䟟䋭䢗㑉䗇䴪䇚䃞㪩䑁䔎㦇䊾䄾䘐䋹㜙㮋䏋㗤㤢䗛㥌䶊䪁㠅㣎㜅㬼䐨㼾䧤䎌䡜䕮䈸䜯䫳㾄䃚㘲䏱㝛䨱䵈㾥㻃㒔䪕䟮䌒䎼㖨㴼䮱䳱㡔㵀䨹㞺䞽㑐㛬䙯㪶㯟䤋㙏䗱䚼䎑㯈㜈䛙䜼䱡䐿㑛㯷䐁䀰㣃㷤㺉䀲㹼㪖䖡㽇㾇㞘㬘䇍㦽𨌥𪇰𥪋𪘏𩶫𠱙𩋟𣖫𡡐𧼭𣨍𩑒𥲒𥉑𥳇𡰿𪃃𣤶𦪇𤞞
二沃入声　绿玉俗烛足续粟束促辱局鹄躅欲录蜀触毒浴狱旭瞩箓属酷渌醁笃沃曲赎褥斸勖督嘱溽梏缛鹆纛菉騄蠋蓐瘃峪趣牿顼仆鄏幞裻告挶鳿喾襮歜輂斶锔鋈逯藚媷臅虑憟匤熇臛旮[同旭]蛐欘趢犦哫灟拲娽傉彳鸀駶軉筁蝳蠾趗髷镤薥鋊脨砡檋琟輍頶俈捁泶斀珛钃搙潥隺絭悎觷螸傶襡钰洬嚛錊噣孎錖誎嗕斣襆疁梮捒蔋鶮䠱䪅㯮㒒䒼䟉㮂䥔䌚㙇䞖䶜䎤䌵䜹㻿䞝䧊䕽䙱䐂䳔䡞䚄䑑䅶䋰䚛䛤㫽䱚䴰㩴䴆㿥㔄䧼䅇㦺䈞𤌍𧰵𧛔𩌮𤞞
三觉入声　学岳朔幄渥角濯邈握璞剥觉[知觉]琢确卓壳雹擢鷟槊斲荦捉驳浊喔啄榷桷数[频数]朴駮灂诼乐[音乐]龊樸埆搉啅镯较倬珏戳鸑涿翯鸴跑桌踔娖鸐硞峃椓擉药浞謈悫搦碻[同确]鋜豰懪穱欶爆瞀瓝偓瑴韄嚗傕箾穛噣眊觳搠斠斮龌掿捔趵礐蒴烞晫洬嗍鵫墣蠗窇鞄籗瓁悎瞐鞪皃汋隺鎙劰燢豿娕礭仢欘韷泶飑矠骲楃斀丵瞨墧鳆硺觷腛燩棹[树枝直上貌]钋鑡簎菿龏敩攴顜齺篧捳髉琸珿犦籱搻壆鳪媉齱殐㧻㲉㩧䃗䓎㙾㰌㓸䂍㮶㼎䈏䑈䁷㰒䃕䪨㔬䮸㱿䦠㙸㺪㹒㿺㺟㪬䇶㱋㹊䨌㴶䡈㦝䥤䮓㵡䥃䠎𥢔𢁁𩣡𪑱𦢊𥭖𢷏𩺽𥭓𧲐𧞐𤓊𧣚
四质入声　日笔室一失密术实術疾逸律毕匹膝出帙漆栗溢诘七橘必述秩吉蜜恤瑟乙质栉秫虱蟀荜悉慄黜弼叱潏嵂嫉汩朮谧戌昵窒篥镒率侄怵锧骘壹卒[终也]筚绌节佚苾鹬轶跸驲茁抶桎唧姪崒獝繂沭疋韠遹繘泆罼鳦袐铚衵蟋凓飋聿飶霱咥蒺袟蔤沏泌鴥蛭佾訹珌妷挃鞸礩厔耴尼[近也，止也]茟肸熚觱堲翐紩桼傈瀄踤窋姞駜溧晊帅捽矞佶拮鷅銊馝璱饆佖荗膟鴄眣瓆鬻摔圪咭沕疙宓蛣滭枇[枇杷]鉥郅鹎銡楖怸螲怭铋滗趌黢鱊痆窸齣滵柣庢呹箻鷝秷峚狤珬欪祑胵螏逫蠠秖抳塛榓跮恎絉鮅欰炢咰趉袕揤浂擳銉肷柫衹眰比[比次也]鏎腟僁焌搮恄箤燏鴓笜怷麜臷鲒豑犵臸秪[与秖通，适也]蝍詄瑮郆縪妼琗寽祇[适也，仅仅也]嬄宲鶐炪鴶邲祗[与祇通，适也]胇欥洷柒暨彃淧樒膣魓槉鞊櫍驈蹫欯釰芛䫻䁥㗚䘌䭿䬆䟆䎉㘉㾁䮡㔕㯃䢖䫕㵥䮇㪤㺩㻎䒤䏘䑇㓖䶡䵒䢞㗧䬹㻫䬛䳳㟳䔁䩛䢦㚕㣟䬄䣛㴵㮿㜱㜼䱃㑁㤕䢤㞊㫘㣰䄶㻶䔞㳑䌏䡃㧒㢶䤎㳚㰵㗭㘍㳼㮚䱣䟈䏄䆝䘤㔑㢸䜉䳀䰬㺷䋖䜠㳴䖩㻭䵑䢕㗌䟣䤉㖅㑵㲺㤜𥠈𪗨𥣮𡢑𧾣𧫤𧗿𦝭𦳯𧽻𢘍𧾢𩋡𪗻
五物入声　物佛屈拂绂乞黻綍勿绋祓诎郁讫屹茀韨倔黦咈弗歘怫髴芴欻仡蔚刜沕崛不[与弗同]吃[言蹇难也]掘熨岪汔迄坲镼釳厥[突厥]魆肸艴[色怒也]尉岉沷菀昒忔鶌粅灪帗炥誳鮄芞柭爩紑嶏蛂昲冹莔烼袦虳柫弡翇趉伆鉘乀砩阢笰甶芾惌㗵䘿㭾䏌䎢㷉䵥䭮㐹䖇䁌㻕䒗䰴䛥㪄䞞䠇䞷㠨𠜾𨧱𧿳
六月入声　月发發骨阙没髮窟忽兀伐谒袜樾钺笏粤蕨突襪渤惚歇勃殁罚筏越窣曰阀蹶柮讷卒[士卒]屼劂橛猝獗羯杌矻矹竭卼滑[乱也]鹘軏腯搰咄淈垡硉蠍崒纥揭碣汨馞撅峍蟨核掘哕刖愲狘扢凸暍孛浡嗢堀鷢揬悖讦捽曶榾泏扤鳜蚏抇阏龁抐瞂胐麧玥蜶匫钀莈不厥崛脖唿昒饽鹁棁囫镢犵钠腽淴怢馉艴猲蓇桲葧椊葖稡阢昢瘚侓馧[馧馞]饳蚎荸鈯嶡絗縎鼵鶟杚枂颰冹榲趃亅埣坺顝熓怴朏籺摕侼欮堨迌趉寣揾瞃囝憠宊殨笜舭郣捸璏抈殟橃沷熭碿藅鋍尳湥岄垏鍎歾琷鍻啒瘟[心闷貌]糏哱犻貀鼿榲挬㪍䬂䓤䎳㷎㶿䞘䨚䑔䬍䥟䓛㖀㫚䴯䚝㪐䦍䟠㻠䎀䖓䘚䣹㳷㩿㐳䩐㧾㟑䪬㵐㒴䡇䝆䑢㨡䀜䯇䟜㬞䇅䂗䁫㘺㴾䯿䋐䙠䭯㔜㵠䍪䠈㲞㞽㧮㾶㛘㽾䮩䪲㕹㛲𣔻𩨳𧉦𩑡𢷒𢪏𧽸𩗓𥝖𪁽𪘧
七曷入声　阔末活脱渴豁钵夺闼葛割沫聒抹遏拨泼达括秣剌跋辣魃怛萨蝎斡轕栝撮筈挞茇躠撒捋喝頞臈鹖敚褐鞨掇拶鱍粝囋喇獭钹适[疾也]鞑靺澾髺裰妺拔阏噶剟跶曷軷毼摋袯越咄蘖哒獦呾泧嶱酦犮胺炟胈焥荙繓鸹捾暍鏺丐挖轹碣捺咱叭侻饐齾妲嶭笪齃猲瘌鵽蛞蝲敠靼嵑濊帓枺粖姡頢攥囐揦蟽茉鼥癹礤萿毲秳癶莌妭頱濣趏蛶睕柭嬒餲炥魩秡狚冭灒懖羍磆刽洝昩橃堨坺奯鬝匃驋攃汰痥燤螛咹幯湏颰仴鲅蔎眓襊橽歇馛葀佸昲噧揧鮵啈蹳捝炦攋抈骱皌鶷枂砞瓎脟懀眜䌨㔇䯋䡾䴲䅥䍨䟯㦫䄑㳨䁊㸊䒷㓉㵶㿣㞈㕲䫘䏞䟦䶛㻝䟛䢌䄆㵧㣵䦢䯏䵣㧊㒓䣶㶬䯦㮫䣪䱫䦚䈓䕣䃮㿹㣞䖧䳁㵣㺚䱅䯺䳚㞉㖕㭮䣮㩵䬴𡾲𥻦𣁳𤁢𤷈𤫵𦮀𥽘𨣱𧘟𩩲𤸎𠯑𥄕𥄗𦤦𩒲𩢛𠱥𧙕𤀤𤃴𣎵𤿫𪘼
八黠入声　札刹八察辖黠轧戛杀煞刮猾哳扎恝揠瞎秸滑圠楬拔蚻肭擦嘎茁嗗窡刷齾铡妠豽扴鬝扒[刨，挖]铩稭榝螖搳颉劼娺圿秳痆帓汃鹘帕獭捺咶刖紥鸹錣磍鴶擖砎捌朳哵鶷傄礣劜窫詙鲒聐磆柭菝詚蠿猰颳耫捾糪忦硈揳玐骱眣摖鱊咭閁捖帴睰釛嗐縖袺檫趏仈歇螛袹鵽叭釟貀䀣㗫㓤䕓䝟䦪㮖㔍䴳㓞䫄䀨㨸䃰䶪䱻䯉㑻䓭䥷㭭䦖䵵㪴㕯㳐䚴䂒㺴䆯㔠䤢䰲𡇼𪙻𤫶𪆰𪈟𪇷𦤙𠝚𥴭𩮁
九屑入声　雪别绝灭血结拙热穴洁铁裂列烈缺辙诀杰舌悦节彻说设屑决哲冽劣咽[呜咽]阅切澈折缬阕辍孽鳖玦瞥窃啜鴂爇埒绁齧垤截撷挈跌耋泄掣嵲泬谲歇撤吷糵孑涅迭餮撇亵薛蔑洌鐍竭抉蕝瓞桀惙噎拽浙卨楔臬契歠闑闭絜缀蠛僣臲褉页觖襭霓篾碣绖揭捏蹩衊凸蘖巀昳岊媟呐驖莂隉轶緤晢颉哔楶朅蛚禼茁趐刷掇苶嶭焫茢捩锲揲蜇摰咥讦蜺渫瘪碟拮醊棁搣疖蠥蠘丿锊蛭桔鷩橇迾趹蛣槷偈辥悊颲幭挒嫳棳篞馝絬准[颊权也]覈佚批褐谳姪踅憋龁帨剟咧紒屮唰瀎詄趔硩潎蟞奊跮蠽咇僪蠮蚗爡刔襒畷蒛蛥嵥糏蔎懱芵鐅瞲蛈僁醛掜蝢逫鱴櫗囐藒孓赽趃袺啘蛂鲒胅鈌鴷脟敜駃蠿齛罬烲砓栨彆蠞夨呭滊臷幯鱊猰揳螲聺勶镻棙潱爄摕狤迼聅鄨笍湀洯眓攦劽坲乴鮤朳莭恎叕靼滐粖姴趌蛶魝痥袕郣覕炦洇捌緳瞮尐榝稧柭妜蛞擳栵諁籺蛪歽矞[同谲]詍睙搩靾炔眣蜹疶敠哾桖怢戜疀麧鑖眜苵嵽巁眰揊炪哷坹櫍瘛鴓虌徶疦馛砄毻燤櫭菍暼娎剈翓㧙㙞䨮䁾䥫䆷㿱䫾㗧䕵䖦䚢䞵㴮㛃㬯㔢㴪䇷㩪㴽䌩㝂㲳䫎䘊㘿㓭䅀䭇㯙㳿䋉䂼䒸㮮䌘䂐䳤㭞㓗䙽䩤䦑䪼䆕䊦䱑㸞㩢䦬䊝㖶㢼㸹㤠䯵㐖㨝㬚㭩䮕㭈䩧㖏㔃㔡䍳䫼㦢䆢㘶䟹䛎㹟䠥䋢䤿䏟䭱䝌䟙㔎䘷䒆䘁䓆䨆䏳䟾䞰㼤䀗㣯䩏㒝䏐㕞㸅㓶䈼㞕䥕䏲䲙䐼㽟𡿖𧤾𢴲𣧵𠱕𡿪𧎩𧧸𩖶𢗗𢯳𢲼𥉓𠻜𥈾𩠻𨵪𤊾𩢾𨆳𥄎𪏺
十药入声　落薄鹤阁壑寞郭托酌漠泊略脚雀却廓昨託跃洛弱缚恶鹊作萼乐[哀乐]约诺索爵削钥橐络着博错箔铄著[同着]藿谑箨虐柝幕灼铎嚼礴霍怍鹗药愕瘼烁凿屩若酢籥锷讬[同托]搏酪勺崿粕噱攫杓斫度[谋也]鳄蠖雘彴各掠莫貉涸镬谔绰疟鄂穫瀹垩恪珞拓笮魄摸骆膊椁爚膜[肉膜]箬矱扩噩萚雒玃烙缴搁堮镈蠚泺获妁遌鞟焯[明亮]腭龠彍泽[星名]爝格[树枝也]獲蒻亳钁艧饦礿礡矍醵咢襮躩蹻跞臛镆郝硌皭霩臄篗皵臒鑮熇[与謞同]踱芍岝矐郤皬轹柞嗃煿蒪蒦糳悫斮汋攉靃謞欂漷戄瞙飵鄀汑鄚蝁猎躇[超也]昔琧燋暯婥厝咯逴喏胳迮鷇貜颚犦隺鐯瀖碏袼嚯鮥猼喥彠辵婼硸袥烵凙矆楉馲鄗峈縸沰剒胉嚩磭馎貈嗼杔崞毭剫笿矌犳曤鞒踖焲櫎蘁偔娋莡稓慔謶蛒仢藃莋櫮鎍岞秨逽魠敫覨劐斱擆狛搻鶸彏圴嚛鈼撗谻櫡湂扚葃鑩棤檴噋矡鱳籱溹嫋[长貌]擽庹庴縒矺癋妰詻嬳龥跅仛纅铬蹃趞蠼鶮鹱茖繑禚铂墌癨塻蠌牔鬕婩砟檡挄鰝苲佫侂籗渃蘥鸙溺䋏㟧㠋㹱䨥㜰䱜䭦䮤㓢㸕㒂䧄䖃㦜㦡㿑㦍䨰䎰㬦㚟㤞䎊䖼㕡䌇㸲㪾㗥㨯䶳䪙㮙㨼䨣䈷㴖䅴㘀䣤䖛㩱䝫䂄䚥㷾㲋䁨䯨䫷䧐䟑䶈䶅䠯㖸㬍㓵䁻㤩䥬䛚䀩䥣䗚䌎䐘㰛䣞㕁䅵䲵䮬䬪㤰䍸㱳㗉䙏䐞䰊㗁䇥䇎䅂䤕㷬䂮㑼䧿䈅䖋㖾䖈䋤䐾䞢䢲㗘䉟䄸䨋𦞦𧎾𧕋𧍷𧊜𠶸𥴮𤻲𢜭𢱢𪙍𩌏𨷲𥽿𠠎𤄶𤡯𩍿𧤽𩟓𧘑
十一陌入声　客白石迹碧夕宅尺席隔策惜役屐陌璧益伯赤癖柏窄百驿剧脉辟戟翮隙迫掷液僻责麦昔释舄积额厄泽册帛坼易[变易]逆赫革籍脊择拍谪帻碛掖拆魄瘠格斥腋奕擘怿绎获画[卦画也]獲索磔译适珀射舶藉汐弈檗蹠膈硕绤鶒蹐啧轭貊只帼炙扼赜馘螫箦骼蜴斁穸阨唶帟摘疫划[划破]埸踯襫虢蝈峄哑[笑声]摭核刺[穿也，伤也]奭嚇襞腊祏覈[同核]擿咋薜摵迮栅躄亦湱擗虩霢借踖磶搦蓦穫醳鲫嗌槅騞嚄剨婳峉筴鬲阸媳掴鹡喀塉耤齸莫[静也]齰嗝砉蚱潟觡圛粣鼫翟愬鸊啯齚撠貘睗洦呃[鸡声。]霸[古与魄同]謮晹縌詻橶敀滆郤霹睪胔啪哧柞[除木]硅嘀虴徦蛨佰礉檡塥缂礋漍乇覤鸅墌簂皟蕮蚅茖腘郄舴蹃曎襗鐴鉐榒帞銆雿箣鯣躤襀垎嗼鲌嵴捇擌諽庴獈砈趞膉潪枙鳠扸鳽杔瞔炈疒覞歵鈠厏頙銏犱焃檘澅燚苩岶茦蚸拺嚿袹臵樍讗簎諎谻呄鰿焟楁嬕跅丮釽铬躆蚇眲馲坄籷狛厝慖啋脨廦焲焬熤絔啙墿糪痬棤溹矠蠌烢凙褯聑矺鏼棭謋獥貖洓葃泎窢莋劐掝憡聻厇礊韄嫧燡罊雃虉挀豛胉啇蛒瞁煂搩瘷揢蒚鶪屰焷耫碦覛豟閴㶁㗲㫺㡿䘸䇲䵂㧖㽚㛭㦴䐙䶦㥽䄷䘔䃒㮦䩹䳭䕉㼟䐱㟙䳆㩍䂹䊞䘑㮝䱮䛿㜋䜺㑊㹮䟄䬉䮮䂸䐸䳮䁺㡯㝜䨛㘌㣂㖪䮰㩇䡛䧍䌟䕪䭆㘁㦎㠛㿟䙐䈿䖌㗆䰜䪂䚂㭙䤨㿭䲽䞠㶠䣢䨫䖨㣱䁤䦝㴁䭞䊂㳻㵹䦴㼣㒀㾊㦦䞟㴒䂝䞦䪝𠙆𦒧𡩡𤗮𤖼𢅰𤁰𢓜𩹺𡄴𦵪𥬰𡍩𢮎𢷾𢼛𢯹𦌠𢫦𥆛𪐏
十二锡入声　壁寂笛敌滴历觅激戚檄绩击锡的雳沥砾涤觌鹢枥镝析惕狄淅荻皪羃溺栎甓晰幂籴劈阒逖剔吃迪靮嫡皙菂觋呖趯甋瓅霓鵙艗幕踢篴惄适轹阋汨[汨罗]焱郦鴃蹢籊殈赥鼊摘蜥疬樀澼轣裼鼜鬲倜礰緆秝翟鼏覭簚糸吊狊坜蚸繴薂濗砳焃霹墒砉攦踧墼悐鶪幦虉磿幎嚁瓋毄焬鐴菥譤苈塓湨鹝啇玓馰熐釽漃憵鱳纅扸樍撽儮苖爏讈扚欫椺墑漞趘冖仢儥銢頔轚燩覛硩礕靋觻磩镉肑綼糑惁敫蒚犑獥婥蓨蓧瞁歒廦鸄虳郹鼳鄓蔋擽盢梑䍥䍽㰅㭊䓇䢮䥶䤙㿨㣙䟐䤨䢰䚫㤸㢩䴞䨤䵠㻺䗩䣓䮥㲻䂆䖑䔉㦘㹍㒪䳬䁶㔏䮭㬏䞶䚐㛫䰛䑀㱤䈪㱹䌐㽁䨀㱸㺡䚍䟏㷴䯜𪒄𦸗𣒃𡫁𣤢𥍧𥍠𥍟𠴫𣤩𥛚𤄎𦵦
十三职入声　色得息国力极翼侧直黑忆墨域识[知识]测棘职臆贼刻食逼北恻默德饰勒惑稷特则即拭织蚀仄匿陟穑亿塞[闭塞]式植抑殖敕亟克弋熄肋昃忒慝蜮轼饬啬踣阈泐殛嘿洫翊薏赩湜纆僰屴杙愊寔崱裓墄匐罭愎嶷偪螣[螟螣]剋埴尅棫襋衋劾唧轖淢湢遫扐蠈緎淂蟘幅或恧荝栻鷘鲗翌畟副仂餩醷侐釴鲫腷繶竻膱芅癔瀷蒠淔稄戫蟔稙樴堲蝍菔犆趩堛掝蕀蛡忑嫟恜瘜黓楅冒蘵惐腘赲嘚稫脦煏玏戠溭穓鉓遈棏蔷烒鶝艒鲾禃潩捗畐霬噫皕嫼皀嬂謋琙捑骮揤蚮爅熤踾浳螚蟙鳨釛澺垘鄎氻潶艻閄朸臸忇諽檍焏悈窢茍烅嚜鉽侙殕懎慗揊熼鳓阞懝繬㳁㥾㚤㘈䰥䁿䈟㔴䵗䘃㤫㮩㥂㱇䄩䐚䙷䯆䁼䅞䧗㕵䘅㯤䵱㞃䬎㝶䱛䭒㢞㭲㷵㻷䗷䞳㱄䐈䖁㘠㹄䩯䘝㧹㥁䴬㷶㽣㔹㴧䦗㚜䣧䎪䮙㫯㥛㯰㥀㥶䮠䦼㮨㵓䁇㞋䉢䆐䤭𪀦𧏾𤜜𡍫𥇛𪂉𤗚𩋉𪑝𥇙
十四缉入声　急立入湿集泣及邑十涩拾蛰习笠粒汲给吸袭揖什级执隰挹絷汁戢葺岌浥缉辑悒翕熠笈伋楫噏濈歙裛潗唈蕺槢廿潝霫芨霵钑褶啃漐苙鳛湆礏飁雭圾煜闟砬歰熻鵖湁俋咠卙慹鷑譅雴骉彶箿礘叺瓡岦鴔鏶偮翜釞淁趇騽喅鴗蓻謺嶯漝皀嬆湒譶馵鉝孴卌諿䏉㴕㦻㤂㙷㪧䦹㠍䁯㬛㵫䔼㴔䶘䶋㗊䩰䮶䏠㲸㽺䓃㣬䒁䭂䉗㡮㧀㱞㙫㘊㿇䏩㬤㗱䐕㒊䇼䅤㒆䲯䔱㕸䙄㞚㩉㞏㗩䁒𧤏𩆭𧚨𩾳
十五合入声　合榻塔答杂阖衲匝纳飒榼閤踏沓蛤鸽盍遝荅塌蹋盒搭鞳拉腊蜡帀蒳靸漯嗑趿嗒噆鎝咂阘遢剳卡溘誻匌嚃拓馺罨镴搕唈韐岋濌褟涾耠軜盖卅磕[石声]哈瘩碜褡嘁鲽瞌钑欱狧耷錔鮯鞜鳎匎溻颌歞砵菈鰪砐匒傝崉雥囃詥溚篕魶峇鉔峆鑉譶痷魳罯磼畗魼圾鞥矺抸廅毾礘佮砝魥熆笚鎉翋龖儑姶磖拹笝殧柆铪硆厒榙枼韴遪䬃䕹㔩䑽㷈㗳䗶䑥䂰䗘䍇㛥䐦㹺㧁㯓䵬㕇䈳䌈䐛䂿䪏䧻㿯䵽㕉䫦䈫䈋䑜䃳䶁䍝䪞㕎㨥䶀䙣䳴㭼㠷㧺㥺䢔䪺㛕㾑䜚㿴㽂䨿䑪㝓㯚䪚䞙㚫䓠㰰䆟㡴𩣯𪘁𩋊𨅔𥁋𣣹𦑶𤎞𨜴𤸱𩎕𢕬𧪞𢶍𨃚𡄋
十六叶入声　叶葉接蝶叠捷涉帖箧惬颊堞妾铗侠睫鬣牒靥浃屧蹑荚协摄贴慑燮挟楫馌烨摺镊躞谍晔猎蹀捻辄跕嗫氎躐詟艓擪屟褶褋惵梜怗聂箑裛衱喋呫韘苶楪折炸笈籋襵歙鞢鍱魇霎厌婕偞菨崨倢椄讘欇筴邋鲽熀蛱擸颞儠擛踥牃踕謵緁僷滠犣聗鎑錜銸徢惗穕帹蠂痷鱲脻迠萐敜慹綊謺鮿鯜埝挕踂瞱淁瞸獦鑈聑褺鏶昅揞巤煠疌踗劦誱寁唊蓻枼殜霅[霅霅，震电貌]帇蓵渫㲲㫸䩞䈉䐑䌖㱌䢡䳖㪑䁋䜆䝃䵿㩎䇣䜲䝱䐲㸎䧪㡇㬪㢵䤮䪓㤴㥈䴑㥦䪉㴇䭟㢎㩸㯿䯀㤐㰼㭯㳧㙷㚔䛟䝓䈎䜓䌰㑙㾜㚲㼪㩶㼲䌌㤲㰔㒤䠟䁽㨩㷸㛍㽊䝕䴴䥡䌜𣶏𦣀𢬴𦔮𤍞𪑧𦀖𤑻𣀳𨓊𪔪𩣘𤗽𦔼
十七洽入声　业法甲劫峡怯洽匣压狎乏鸭插狭锸嶪夹闸押袷柙帢唼歃掐劄呷恰裌翣胛硖邺霎陜霅箑嗋祫眨跲啑郏恊鵊扱凹胁鞈搯熁玾喋愶筴岬胠葜烚渫擖姂庘哈钾萐嚈魻圔喢蜐饸譗姶湆魥鉣驜呿翜韐疀笚埉厒笝煠殗搚痷铪唊欱[与歃同。尝也]翈昅磼曱珨鸈魼歰嶯澲砝疺圶抾帹炠筪拹殜餣舺殎垥偛䶎㡊㰱䬊䆘㭘㵊㕅㛼㳌䖎㡋䎎䛅䨐䧨䕛䤶䛽㘝㹤䂲䮢㗼㽠䞩㾀㙝㴙㮑䱒䀴㓣䮜䖖䀷䀫䩡䘥䲜㘡㾎䁆䁍㑢㿓㸣㵤䶝㭱㷅𢘉𣣲𩌍𢂷𤴼𠗨`;

        var pings = pingshui.split(/\n/);
        // var oldTime = new Date().getTime();
        for (var i = 0; i < pings.length; i++) {
            var ping = pings[i];
            var yts = ping.split(/[平上去入]声　/);
            var shengStart = yts[0].length;
            var sheng = ping.substring(shengStart, shengStart + 1);

            //最短匹配
            // bus[1] = bus[1].replace(/\[.*?\]/g, "");
            //或不匹配[与换行。效率貌似没区别
            yts[1] = yts[1].replace(/\[[^\[^\n]*\]/g, "");
            pingshuiArray[i] = {
                yun: yts[0],
                sheng: sheng,
                text: yts[1]
            };
        }
        // console.log(new Date().getTime() - oldTime);
    }());

    function checkAll(text) {

        var result = [];
        for (var i = 0; i < text.length; i++) {
            var r = checkFromPingshui(text[i]);
            result.push(r);
        }
        return result;
    }

    function checkFromPingshui(ch) {

        // if (/[；;、：:，,。！!?？\n]/.test(ch)) {
        if ("；;、：:，,。！!?？\n".indexOf(ch) > -1) {
            return {ch: ch};
        }
        var infos = [];
        //若从中间往两头开弓，当不查多音字，就不产生全部查询，可以节省时间。但要保证数组长度为奇数时，数组全部取值或不越界。
        var size = pingshuiArray.length;
        for (var i = 0; i < size; i++) {
            var pingshui = pingshuiArray[i];
            if (pingshui.text.indexOf(ch) !== -1) {
                infos.push({yun: pingshui.yun, sheng: pingshui.sheng, index: i});
            }
        }
        if (infos.length === 0) {
            return {pingze: "？", ch: ch};
        }
        var pingze = "平";
        var pFlag = 0;
        var zFlag = 0;
        for (var j = 0; j < infos.length; j++) {
            "平".indexOf(infos[j].sheng) > -1 ? pFlag = 1 : zFlag = 1;
            if (pFlag && zFlag) {
                break;
            }
        }

        if (pFlag & zFlag) {
            pingze = "中";
        } else {
            pFlag ? pingze = "平" : pingze = "仄";
        }

        return {pingze: pingze, ch: ch, infos: infos};

    }


    function formatCheckText(result) {
        var text = "";
        var ju = "";
        var pz = "";

        for (var i = 0; i < result.length; i++) {
            var ch = result[i].ch;
            var pingze = result[i].pingze;
            ju += ch;
            pz += (pingze ? pingze : ch);
            if (ch === "\n") {
                text += ju;
                text += pz;
                ju = "";
                pz = "";
            }
        }
        text += ju + "\n";
        text += pz;

        return text;
    }

    return {
        pingshuiArray,
        formatCheckText,
        checkAll,
    }
})();

