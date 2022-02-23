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
	<link rel="stylesheet" href="./style.css">
  <?php
      wp_head( ); // loading external file
  ?>
	<link rel="icon" href="./img/icon-home.png">

</head>

<body>
<?php
  get_header();
?>

	<!-- pickup -->
	<div id="pickup">
		<div class="inner">

			<div class="pickup-items">

				<a href="#" class="pickup-item">
					<div class="pickup-item-img">
						<img src="<?php echo get_template_directory_uri() ?>/img/pickup1.png" alt="">
						<div class="pickup-item-tag">testカテゴリ名</div><!-- /pickup-item-tag -->
					</div><!-- /pickup-item-img -->
					<div class="pickup-item-body">
						<h2 class="pickup-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /pickup-item-title -->
					</div><!-- /pickup-item-body -->
				</a><!-- /pickup-item -->

				<a href="#" class="pickup-item">
					<div class="pickup-item-img">
						<img src="<?php echo get_template_directory_uri() ?>/img/pickup2.png" alt="">
						<div class="pickup-item-tag">カテゴリ名</div><!-- /pickup-item-tag -->
					</div><!-- /pickup-item-img -->
					<div class="pickup-item-body">
						<h2 class="pickup-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /pickup-item-title -->
					</div><!-- /pickup-item-body -->
				</a><!-- /pickup-item -->

				<a href="#" class="pickup-item">
					<div class="pickup-item-img">
						<img src="<?php echo get_template_directory_uri() ?>/img/pickup3.png" alt="">
						<div class="pickup-item-tag">カテゴリ名</div><!-- /pickup-item-tag -->
					</div><!-- /pickup-item-img -->
					<div class="pickup-item-body">
						<h2 class="pickup-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /pickup-item-title -->
					</div><!-- /pickup-item-body -->
				</a><!-- /pickup-item -->

			</div><!-- /pickup-items -->

		</div><!-- /inner -->
	</div><!-- /pickup -->


	<!-- content -->
	<div id="content">
		<div class="inner">

			<!-- primary -->
			<main id="primary">
////////////////////////////////////
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
<a href="#" class="entry-item">
<!-- entry-item-img -->
<div class="entry-item-img">
<img src="<?php echo get_template_directory_uri() ?>/img/entry1.png" alt="">
</div><!-- /entry-item-img -->
<!-- entry-item-body -->
<div class="entry-item-body">
<div class="entry-item-meta">
<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
</div><!-- /entry-item-meta -->
<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
<div class="entry-item-excerpt">
<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
</div><!-- /entry-item-excerpt -->
</div><!-- /entry-item-body -->
</a><!-- /entry-item -->

<?php
endwhile;
?>
</div><!-- /entries -->
<?php endif; ?>

<!-- pagenation -->
<div class="pagenation">
<span class="page-numbers current">1</span>
<a class="page-numbers" href="#">2</a>
<a class="page-numbers" href="#">3</a>
<a class="next page-numbers" href="#"><i class="fas fa-angle-right"></i></a>
</div><!-- /pagenation -->

</main><!-- /primary -->

<?php get_sidebar(); ?>
/////////////////////////////////////////////////////////////
				entries
				<div class="entries">

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry1.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry2.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry3.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry4.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry5.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry6.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry7.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry8.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry9.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

					<!-- entry-item -->
					<a href="#" class="entry-item">
						<!-- entry-item-img -->
						<div class="entry-item-img">
							<img src="<?php echo get_template_directory_uri() ?>/img/entry10.png" alt="">
						</div><!-- /entry-item-img -->

						<!-- entry-item-body -->
						<div class="entry-item-body">
							<div class="entry-item-meta">
								<div class="entry-item-tag">カテゴリ名</div><!-- /entry-item-tag -->
								<time class="entry-item-published" datetime="2019-01-01">2019/1/1</time><!-- /entry-item-published -->
							</div><!-- /entry-item-meta -->
							<h2 class="entry-item-title">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが入ります</h2><!-- /entry-item-title -->
							<div class="entry-item-excerpt">
								<p>文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入ります文章の一部が入…</p>
							</div><!-- /entry-item-excerpt -->
						</div><!-- /entry-item-body -->
					</a><!-- /entry-item -->

				</div><!-- /entries -->

				<!-- pagenation -->
				<div class="pagenation">
					<span class="page-numbers current">1</span>
					<a class="page-numbers" href="#">2</a>
					<a class="page-numbers" href="#">3</a>
					<a class="next page-numbers" href="#"><i class="fas fa-angle-right"></i></a>
				</div><!-- /pagenation -->

			</main><!-- /primary -->

			<?php
        get_sidebar();
      ?>


		</div><!-- /inner -->
	</div><!-- /content -->

	<!-- footer-menu -->
	<div id="footer-menu">
		<div class="inner">
			<div class="footer-logo"><a href="/">TF-30</a></div><!-- /footer-logo -->
			<div class="footer-sub">サブタイトルが入りますサブタイトルが入ります</div><!-- /footer-sub -->

			<nav class="footer-nav">
				<ul class="footer-list">
					<li class="menu-item"><a href="#">メニュー1</a></li>
					<li class="menu-item"><a href="#">メニュー2</a></li>
					<li class="menu-item"><a href="#">メニュー3</a></li>
					<li class="menu-item"><a href="#">メニュー4</a></li>
					<li class="menu-item"><a href="#">メニュー5</a></li>
				</ul>
			</nav>

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
</body>

</html>