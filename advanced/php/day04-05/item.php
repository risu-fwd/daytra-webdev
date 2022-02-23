<?php
class Item {
	public $id;
	public $name;
	public $price;
	public $img;
	
	function __construct($id, $name, $price, $img) {
		$this->id = $id;
		$this->name = $name;
		$this->price = $price;
		$this->img = $img;
	}

	function getId() {
		return $this->id;
	}

	function getPrice() {
		return $this->price;
	}

}
