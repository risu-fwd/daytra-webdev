<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<p>hello, php!</p>

	<h2>
		<?php
			function br() {
				echo '<br>';
			}
			echo 'Hello, world from PHP source <br>';
		?>
	</h2>
	<?php
		echo 1 + 2;

		br();
		$num = 100;
		echo $num;
		br();
		echo('LOL');

		br();
		$arr = [1, 2, 3,'abc'];
		var_dump($arr);
		br();
		foreach($arr as $var) {
			echo $var;
			br();
		}

		$associative_arr = [
			'aaa' => 100,
			'bbb' => 200,
			'ccc' => 300
		];

		var_dump($associative_arr);
	?>
</body>
</html>