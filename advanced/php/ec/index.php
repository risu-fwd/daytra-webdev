<?php
require_once('item_data.php');
require_once('item.php');
require_once('functions.php');

$assoArr = [];
$assoArr = $items;
// var_dump($assoArr);
$insArr = [];
itemGenerator($assoArr);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css" >
  <title>daytra DAY04-05 | [web-dev] advanced</title>
</head>
<body>
  <div class="container">
    <div class="app-container">
      <h1 class="title">DailyTrial Shopping</h1>
			<form action="cart.php" method="post">
				<div class="cards-container">
					<?php
						showItems($insArr);
					?>
				</div>
				<div class="btn-footer bg-white">
					<input class="cart-btn" type="submit" name="submit" value="カートに追加" />
				</div>
			</form>
    </div>
  </div>
</body>
</html>