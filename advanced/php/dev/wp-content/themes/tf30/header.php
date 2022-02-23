	<!-- header -->
	<header id="header">
		<div class="inner">
<!--  -->
<?php if (is_home() || is_front_page() ) : //トップページではロゴをh1に、それ以外のページではdivに。 ?>
<h1 class="header-logo"><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></h1><!-- /header-logo -->
<?php else : ?>
<div class="header-logo"><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></div><!-- /header-logo -->
<?php endif; ?>
<div class="header-sub"><?php bloginfo('description'); //ブログのdescriptionを表示 ?></div><!-- /header-sub -->
<!--  -->

			<!-- drawer -->
			<div class="drawer">
				<div class="drawer-icon">
					<span class="drawer-open"><i class="fas fa-bars"></i></span><!-- /drawer-open -->
					<span class="drawer-close"><i class="fas fa-times"></i></span><!-- drawer-close -->
				</div><!-- /drawer-icon -->

				<!-- drawer-content -->
				<!-- <div class="drawer-content">
					<nav class="drawer-nav">
						<ul class="drawer-list">
							<li class="m_icon1 menu-item"><a href="#">メニュー111</a></li>
							<li class="m_icon2 menu-item"><a href="#">メニュー2</a></li>
							<li class="m_icon3 menu-item"><a href="#">メニュー3</a></li>
							<li class="m_icon4 menu-item"><a href="#">メニュー4</a></li>
							<li class="m_icon5 menu-item"><a href="#">メニュー5</a></li>
							<li><a href="http://localhost:8888/dev/php-tips/cute-squirrel">プロフィールを見る</a></li>
						</ul>
					</nav>
				</div> -->

			<!-- daytra drawer-content -->
			<div class="drawer-content">
			<?php
			//.drawer-navを置き換えて、スマホ用メニューを動的に表示する
			wp_nav_menu(
				array(
					'depth' => 1,
					'theme_location' => 'drawer', //ドロワーメニューをここに表示すると指定
					'container' => 'nav',
					'container_class' => 'drawer-nav',
					'menu_class' => 'drawer-list',
				)
			);
			?>
			</div><!-- daytra /drawer-content -->



				<!-- /drawer-content -->
			</div><!-- /drawer -->



		</div><!-- /inner -->
	</header><!-- /header -->

  <!-- header-nav -->
	<!-- <nav class="header-nav">
		<div class="inner">
			<ul class="header-list">
				<li class="m_icon1 menu-item"><a href="#">メニュー123</a></li>
				<li class="m_icon2 menu-item"><a href="#">メニュー2</a></li>
				<li class="m_icon3 menu-item"><a href="#">メニュー3</a></li>
				<li class="m_icon4 menu-item"><a href="#">メニュー4</a></li>
				<li class="m_icon5 menu-item"><a href="#">メニュー5</a></li>
				<li><a href="http://localhost:8888/dev/home">HOME</a></li>

			</ul>
		</div> -->
		<!-- /inner -->
	<!-- </nav> -->
	<!-- header-nav -->



	<!-- daydra header-nav -->
<nav class="header-nav">
	<div class="inner">
		<?php
		wp_nav_menu(
			//.header-listを置き換えて、PC用メニューを動的に表示する
			array(
				'depth' => 1,
				'theme_location' => 'global', //グローバルメニューをここに表示すると指定
				'container' => 'false',
				'menu_class' => 'header-list',
			)
		);
		?>
	</div><!-- /inner -->
</nav><!-- daytra header-nav -->
	











	<!-- test header nav -->
	<div>
		<?php //wp_nav_menu();?>
	</div>
