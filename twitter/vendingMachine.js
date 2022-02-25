// 変数宣言
// Aさん、Bさん、Cさんそれぞれの所持金と飲みたいものを連想配列の配列で宣言
let actors = {
  'A-san' : {
    'money' : 1000,
    'wants' : 'sparkling water',
  },
  'B-san' : {
    'money' : 500,
    'wants' : 'orange juice',
  },
  'C-san' : {
    'money' : 800,
    'wants' : 'black coffee',
  }
};



// ==================== 関数 ====================
// helper
function log(args) {
  console.log(args);
}

// 飲み物購入後の結果表示
function showItemAndMoney(name, itemAndPaybacks) {
  log(name + 'は' + itemAndPaybacks.getItem() + 'を買いました。' + 'おつりを' + itemAndPaybacks.getMoney() + '円受け取りました。');
}

// 自販機の関数。第一引数に投入金額、第二引数に欲しい飲み物を取る
function vendingMachine(money, kindOfDrink) {

  // 飲み物の値段
  let sparklingWaterPrice = 100;
  let orangeJuicePrice = 120;
  let blackCoffeePrice = 150;

  let itemAndPaybacks = new ItemAndPaybacks(); // 戻り値とするクラスのインスタンス化

  // 欲しいものによって処理を振り分け。商品と
  switch(kindOfDrink) { 
    case 'sparkling water': // 自販機で押されたボタンが炭酸水だったら・・・
      itemAndPaybacks.setItem('WiLKinson');
      itemAndPaybacks.setMoney(money - sparklingWaterPrice);
      break; 
    case 'orange juice': // 自販機で押されたボタンがオレンジジュースだったら・・・
      itemAndPaybacks.setItem('Dole Orange 100%');
      itemAndPaybacks.setMoney(money - orangeJuicePrice);
      break; 
    case 'black coffee': // 自販機で押されたボタンがブラックコーヒーだったら・・・
      itemAndPaybacks.setItem('Premium Boss Black');
      itemAndPaybacks.setMoney(money - blackCoffeePrice);
      break; 
  }

  return itemAndPaybacks; // 戻り値の返却
}



// ==================== クラス ====================
// 飲み物とお金を保存するだけのクラス
class ItemAndPaybacks {
  item = ''; // 飲み物
  money = ''; // お金

  setItem(item) { // 飲み物のセッタ
    this.item = item;
  }

  setMoney(money) { // お金のセッタ
    this.money = money;
  }

  getItem() { // 飲み物のゲッタ
    return this.item;
  }

  getMoney() { // お金のゲッタ
    return this.money;
  }
}



// ==================== 実処理 ====================
// AさんBさんCさんそれぞれの買い物と結果表示
log('');
log('');
log('---------- start program ----------');

// それぞれの欲しいもの、自販機への投入金額を表示
log(actors);
log('');
// 飲み物とお金を保持するだけのクラスをインスタンス化。3人分で使い回し
let itemAndPaybacks = new ItemAndPaybacks();

// ItemAndPaybacksインスタンスに自販機関数の戻り値が入る（商品とおつりを受け取る）
itemAndPaybacks = vendingMachine(actors['A-san']['money'], actors['A-san']['wants']);
showItemAndMoney('Aさん', itemAndPaybacks); // 結果表示

// 以下BさんCさんも同様に繰り返し
itemAndPaybacks = vendingMachine(actors['B-san']['money'], actors['B-san']['wants']);
showItemAndMoney('Bさん', itemAndPaybacks);

itemAndPaybacks = vendingMachine(actors['C-san']['money'], actors['C-san']['wants']);
showItemAndMoney('Cさん', itemAndPaybacks);
log('---------- end program ----------');