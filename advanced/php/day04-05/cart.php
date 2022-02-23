<?php
require_once('item_data.php');
require_once('functions.php');

foreach($items as $item) {
  // Cart::add($item, $_POST[$item->getId()]);
}
// var_dump($_POST);
$total = 0;
for($i = 0; $i<count($_POST)-1; $i++) {
  global $total;
  $subTotal = $_POST['000' . ($i + 1)] * $items[$i]['price'];
  // echo $subTotal . '<br>';
  $total += $subTotal;
}

class Cart {
  private static $items = [];

  public static function add($product, $count) {
    self::$items[] = ["product" => $product, "count" => $count];
  }

  public static function calTotalPrice() {
    $sum = 0;
    foreach(self::$items as $item) {
      $price = $item["product"]->getPrice() * $item["count"];
      $sum += $price;
    }
    return $sum;
  }

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./style.css" >
  <title>daytra DAY04-05 | [web-dev] advanced</title>
</head>
<body>
  <div class="container">
    <div class="app-container">
      <h1 class="title">Shopping Cart</h1>
      <div class="carts-container">
        <?php foreach($items as $item): ?>
        <div class="cart-item">
          <div class="flex">
            <img class="cart-item-img" src="<?php echo $item['img']; ?>">
            <div class="cart-item-detail">
              <p class="cart-item-title"><?php echo $item['name']; ?></p>
              <?php
                if(priceCheck($_POST[$item["id"]])) {
                  echo "<p>{$_POST[$item['id']]} × {$item['price']}</p>";
                }
              ?>
            </div>
          </div>
        </div>
        <?php endforeach; ?>

        <br>
        <div>
          TOTAL: <?php echo $total ?>
        </div>
      </div>
      <form action="payment.php" method="post">
        <div class="btn-footer bg-gray">
          <input class="checkout-btn" type="submit" value="決済する">
        </div>
      </form>
    </div>
  </div>
</body>
</html>