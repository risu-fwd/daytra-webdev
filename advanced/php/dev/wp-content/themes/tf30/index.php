<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="format-detection" content="telephone=no">

	<title>TF-30</title>
	<meta name="description" content="">

	<meta property="og:title" content="TF-30">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://example.com/">
	<meta property="og:image" content="https://example.com/img/ogp.png">
	<meta property="og:site_name" content="TF-30">
	<meta property="og:description" content="">
	<meta name="twitter:card" content="summary_large_image">

	<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css?ver=5.8.2"> -->
	<!-- <link rel="stylesheet" href="css/style.css"> -->
  <?php
      wp_head( ); // loading external file
  ?>
	<link rel="icon" href="./img/icon-home.png">

</head>

<body>
<?php
  get_header();
?>


<?php //get_template_part('template-parts/pickup'); ?>
<?php get_template_part('template-parts/pickup_by_tag'); ?>
	<!-- content -->
	<div id="content">
		<div class="inner">

			<!-- primary -->
			<main id="primary">

			<?php
			//記事があればentriesブロック以下を表示
			if ( have_posts() ) : ?>

			<!-- entries -->
			<div class="entries">
			<?php
			//記事数ぶんループ
			while ( have_posts() ) :
			the_post(); ?>

			<!-- entry-item -->
			<a href="<?php the_permalink(); //記事のリンクを表示 ?>" class="entry-item">
			<!-- entry-item-img -->
			<div class="entry-item-img">
			<?php
			if (has_post_thumbnail() ) {
				// アイキャッチ画像が設定されてれば大サイズで表示
				the_post_thumbnail('large');
			} else {
				// なければnoimage画像をデフォルトで表示
				echo '<img src="' . esc_url(get_template_directory_uri()) . '/img/noimg.png" alt="">';
			}
			?>
			</div><!-- /entry-item-img -->

			<!-- entry-item-body -->
			<div class="entry-item-body">
			<div class="entry-item-meta">

			<!-- trueを引数として渡すとリンク付き、falseを渡すとリンクなし -->
			<div class="entry-item-tag"><?php my_the_post_category( false ); ?></div><!-- /entry-item-tag -->

			<!-- 公開日時を動的に表示する -->
			<time class="entry-item-published" datetime="<?php the_time('c');?>"><?php the_time('Y/n/j'); ?></time><!-- /entry-item-published -->
			</div><!-- /entry-item-meta -->
			<h2 class="entry-item-title"><?php the_title(); //タイトルを表示 ?></h2><!-- /entry-item-title -->
			<div class="entry-item-excerpt">
			<?php the_excerpt(); //抜粋を表示 ?>
			</div><!-- /entry-item-excerpt -->
			</div><!-- /entry-item-body -->
			</a><!-- /entry-item -->

			<?php
			endwhile;
			?>
			</div><!-- /entries -->
			<?php endif; ?>

			<!-- original pagenation -->
			<!-- pagenation --> 
			<!-- <div class="pagenation">
			<span class="page-numbers current">1</span>
			<a class="page-numbers" href="#">2</a>
			<a class="page-numbers" href="#">3</a>
			<a class="next page-numbers" href="#"><i class="fas fa-angle-right"></i></a>;
			</div> -->
			<!-- /pagenation -->

			<!--  -->
			<?php get_template_part('template-parts/pagination'); ?>
			<!--  -->

			</main><!-- /primary -->

			<?php get_sidebar(); ?>
		</div><!-- /inner -->
	</div><!-- /content -->

	<!-- footer-menu -->
	<div id="footer-menu">
		<div class="inner">
			<div class="footer-logo"><a href="/">TF-30</a></div><!-- /footer-logo -->
			<div class="footer-sub">teeeestサブタイトルが入りますサブタイトルが入ります</div><!-- /footer-sub -->

			<!-- <nav class="footer-nav">
				<ul class="footer-list">
					<li class="menu-item"><a href="#">メニュー1</a></li>
					<li class="menu-item"><a href="#">メニュー2</a></li>
					<li class="menu-item"><a href="#">メニュー3</a></li>
					<li class="menu-item"><a href="#">メニュー4</a></li>
					<li class="menu-item"><a href="#">メニュー5</a></li>
				</ul>
			</nav> -->

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

		</div><!-- /inner -->
	</div><!-- /footer-menu -->

<?php
  get_footer();
?>
	<div class="floating">
		<a href="#"><i class="fas fa-chevron-up"></i></a>
	</div>

	<!-- <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="js/script.js"></script> -->
  <?php
    wp_footer( ); // loading external file
  ?>

	<p>category list test 2/6/2022</p>
	<!-- trueを引数として渡すとリンク付き、falseを渡すとリンクなし -->
<div class="entry-item-tag"><?php my_the_post_category( false ); ?></div><!-- /entry-item-tag -->

<p>test2</p>
<!-- entry-tag-items -->
<div class="entry-tag-items">
<div class="entry-tag-head">タグ</div><!-- /entry-tag-head -->
<?php my_get_post_tags(); ?>
</div><!-- /entry-tag-items -->
</body>

</html>