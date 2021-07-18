// スライダーに表示する画像のパス
var imgList = [
	"images/000003-2.jpg",
	"images/000004.jpg",
	"images/000010.jpg",
	"images/000007-5.jpg",
    "images/000007.jpg",
    "images/000012.jpg",
    "images/000015.jpg",
    "images/000016.jpg",
    "images/000018-2.jpg",
    "images/000020.jpg",
    "images/000025.jpg",
    "images/000032.jpg",
    "images/000036-2.jpg",
    "images/000040-3-2.jpg",
    "images/000064.jpg",
    "images/2017_07_24_44.jpg",
    "images/FH000003.jpg",
    "images/FH000004-2.jpg",
    "images/FH000004.jpg",
    "images/FH000006.jpg",
    "images/FH000010.jpg",
    "images/FH000013.jpg",
    "images/FH000019.jpg",
    "images/FH000023.jpg",
    "images/FH000025.jpg",
    "images/FH000027.jpg",
    "images/FH000034.jpg"
];

// 画像とナビの要素を自動で追加
for(var i = 0; i < imgList.length; i++) {
    //画像追加
	// li要素を取得
	var slide = document.createElement("li");
	// li要素の中に画像タグを埋め込む
	slide.innerHTML = "<img src=' " + imgList[i] + " '>";
	// li要素をクラス名「slider-inner」の子要素として追加
	document.getElementsByClassName("slider-inner")[0].appendChild(slide);

	//ドット追加
    // li要素を取得
	var nav = document.createElement("li");
	// プロパティ「data-nav-index」に数値を割り振る
	nav.setAttribute("data-nav-index", i);
	// li要素をクラス名「nav」の子要素として追加
	document.getElementsByClassName("nav")[0].appendChild(nav);
}
// スライドの数を取得(処理のために-1する)

// クラス名「imageSlide」に画像の1枚の要素を格納
var imageSlide = dcument.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
// クラス名「dotNavigation」にドットナビの1つの要素を格納
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
// 「現在○○枚目のスライドを表示している」というインデックス番号を格納する変数
var nowIndex = 0;
// 現在表示されている画像とドットナビにクラス名を付ける
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");

// スライドがアニメーション中か判断するフラグ

// スライドのsetTimeoutを管理するタイマー

// スライド切り替え時に呼び出す関数