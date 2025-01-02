$(document).ready(function () {
  // データ構造
  const data = {
    "北海道・東北": {
      北海道: ["札幌市", "函館市", "旭川市", "その他"],
      青森県: ["青森市", "その他"],
      岩手県: ["盛岡市", "その他"],
      宮城県: ["仙台市", "その他"],
      秋田県: ["秋田市", "その他"],
      山形県: ["山形市", "その他"],
      福島県: ["福島市", "その他"],
    },
    関東: {
      茨城県: ["水戸市", "その他"],
      栃木県: ["宇都宮市", "その他"],
      群馬県: ["前橋市", "その他"],
      埼玉県: [
        "さいたま市",
        "川越市",
        "熊谷市",
        "川口市",
        "越谷市",
        "戸田市",
        "その他",
      ],
      千葉県: [
        "千葉市",
        "市川市",
        "船橋市",
        "松戸市",
        "市原市",
        "我孫子市",
        "その他",
      ],
      東京都: [
        "千代田区",
        "中央区",
        "港区",
        "新宿区",
        "文京区",
        "台東区",
        "墨田区",
        "江東区",
        "品川区",
        "目黒区",
        "大田区",
        "世田谷区",
        "渋谷区",
        "中野区",
        "杉並区",
        "豊島区",
        "北区",
        "荒川区",
        "板橋区",
        "練馬区",
        "足立区",
        "葛飾区",
        "江戸川区",
        "八王子市",
        "立川市",
        "武蔵野市",
        "三鷹市",
        "町田市",
        "国分寺市",
        "狛江市",
        "その他",
      ],
      神奈川県: [
        "横浜市",
        "川崎市",
        "相模原市",
        "横須賀市",
        "鎌倉市",
        "厚木市",
        "大和市",
        "その他",
      ],
    },
    中部: {
      新潟県: ["新潟市", "その他"],
      富山県: ["富山市", "その他"],
      石川県: ["金沢市", "その他"],
      福井県: ["福井市", "その他"],
      山梨県: ["甲府市", "その他"],
      長野県: ["長野市", "その他"],
      岐阜県: ["岐阜市", "その他"],
      静岡県: ["静岡市", "浜松市", "その他"],
      愛知県: ["名古屋市", "岡崎市", "岩倉市", "その他"],
    },
    近畿: {
      三重県: ["津市", "亀山市", "その他"],
      滋賀県: ["草津市", "その他"],
      京都府: ["京都市", "その他"],
      大阪府: ["大阪市", "堺市", "吹田市", "その他"],
      兵庫県: ["神戸市", "姫路市", "芦屋市", "その他"],
      奈良県: ["奈良市", "その他"],
      和歌山県: ["和歌山市", "その他"],
    },
    中国: {
      鳥取県: ["鳥取市", "その他"],
      島根県: ["松江市", "その他"],
      岡山県: ["岡山市", "その他"],
      広島県: ["広島市", "その他"],
      山口県: ["下関市", "その他"],
    },
    四国: {
      徳島県: ["徳島市", "その他"],
      香川県: ["高松市", "その他"],
      愛媛県: ["松山市", "その他"],
      高知県: ["高知市", "その他"],
    },
    "九州・沖縄": {
      福岡県: ["福岡市", "北九州市", "その他"],
      佐賀県: ["佐賀市", "その他"],
      長崎県: ["長崎市", "その他"],
      熊本県: ["熊本市", "その他"],
      大分県: ["大分市", "その他"],
      宮崎県: ["宮崎市", "その他"],
      鹿児島県: ["鹿児島市", "その他"],
      沖縄県: ["那覇市", "その他"],
    },
    // 他の地域も同様に追加可能
  };

  // 地域の選択肢を生成
  for (const region in data) {
    $("#region").append(new Option(region, region));
  }

  // 地域が選択された場合の処理
  $("#region").on("change", function () {
    const selectedRegion = $(this).val();
    const prefectures = selectedRegion ? data[selectedRegion] : {};

    // 都道府県を更新
    $("#prefecture")
      .empty()
      .append(new Option("選択してください", ""))
      .prop("disabled", !selectedRegion);
    for (const prefecture in prefectures) {
      $("#prefecture").append(new Option(prefecture, prefecture));
    }

    // 市区をリセット
    $("#city")
      .empty()
      .append(new Option("選択してください", ""))
      .prop("disabled", true);
  });

  // 都道府県が選択された場合の処理
  $("#prefecture").on("change", function () {
    const selectedRegion = $("#region").val();
    const selectedPrefecture = $(this).val();
    const cities =
      selectedRegion && selectedPrefecture
        ? data[selectedRegion][selectedPrefecture]
        : [];

    // 市区を更新
    $("#city")
      .empty()
      .append(new Option("選択してください", ""))
      .prop("disabled", !selectedPrefecture);
    cities.forEach((city) => {
      $("#city").append(new Option(city, city));
    });
  });
});

/* アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);

/* スライダーの設定 */
const verticalSlider = new Swiper(".vertical-slider", {
  direction: "vertical",
  slidesPerView: 1,
  speed: 600,
  mousewheel: true,
  pagination: {
    el: ".vertical-slider__pagination",
    type: "bullets",
    clickable: true,
  },
});
