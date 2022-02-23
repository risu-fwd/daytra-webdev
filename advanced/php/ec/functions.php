<?PHP
// helper
function br() {
	echo '<br>';
}

function itemGenerator($aArr) {
	global $insArr;
	foreach($aArr as $arr) {
		$insArr[] = new Item($arr['id'], $arr['name'], calcTax($arr['price']), $arr['img']);
	}
}

function calcTax($price) {
	return $price *= 1.1;
}

function priceCheck($quantity) {
  return ($quantity > 0) ? true : false;
}

function showItems($arr) {
	foreach($arr as $item) {
		echo "<div class=\"card\">";
		echo "<img class=\"card-image\" src=\"{$item->img}\" alt=\"\">";
		echo "<p class=\"card-title\">{$item->name}</p>";
		echo "<div class=\"flex justify-between\">";
		echo "<p class=\"card-price\">{$item->price} yen</p>";
		echo "<input name=\"{$item->id}\" min=\"0\" class=\"item-number\" type=\"number\" value=\"0\">";
		echo "</div>";
		echo "</div>";
	}
}
