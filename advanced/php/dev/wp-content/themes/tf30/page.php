<?php
      wp_head( ); // loading external file
  ?>
<?php get_header(); ?>

<!-- content -->
<div id="content">
<div class="inner">

<!-- primary -->
<main id="primary">
<p>FIXED PHP!!!</p>
<?php if ( function_exists( 'bcn_display' ) ) : ?>
<!-- breadcrumb -->
<div class="breadcrumb">
<?php bcn_display(); ?>
</div><!-- /breadcrumb -->
<?php endif; ?>

<?php
if ( have_posts() ) :
while ( have_posts() ) :
the_post();
?>

<!-- entry -->
<article <?php post_class( array( 'entry' ) ); ?>>

<!-- entry-header -->
<div class="entry-header">
<?php
// カテゴリー１つ目の名前を表示
// $category = get_the_category();
// if ($category[0] ) {
// echo '<div class="entry-item-tag">' . $category[0]->cat_name . '</div><!-- /entry-item-tag -->';
// }
?>
<h1 class="entry-title"><?php the_title(); ?></h1><!-- /entry-title -->

<!-- entry-meta -->
<div class="entry-meta">
<time class="entry-published" datetime="<?php the_time( 'c' ); ?>">公開日 <?php the_time( 'Y/n/j' ); ?></time>
<?php if ( get_the_modified_time( 'Y-m-d' ) !== get_the_time( 'Y-m-d' ) ) : ?>
<time class="entry-updated" datetime="<?php the_modified_time( 'c' ); ?>">最終更新日 <?php the_modified_time( 'Y/n/j' ); ?></time>
<?php endif; ?>
</div><!-- /entry-meta -->

<!-- entry-img -->
<div class="entry-img">
<?php
if ( has_post_thumbnail() ) {
the_post_thumbnail( 'large' );
}
?>
</div><!-- /entry-img -->
</div><!-- /entry-header -->

<!-- entry-body -->
<div class="entry-body">
<?php
//本文の表示
the_content(); ?>
<?php
//改ページを有効にするための記述
wp_link_pages(
array(
'before' => '<nav class="entry-links">',
'after' => '</nav>',
'link_before' => '',
'link_after' => '',
'next_or_number' => 'number',
'separator' => '',
)
);
?>
</div><!-- /entry-body -->

<!--  -->
<!-- entry-tag-items -->
<?php $post_tags = get_the_tags(); ?>
<div class="entry-tag-items">
<div class="entry-tag-head">タグ</div><!-- /entry-tag-head -->
<?php if ( $post_tags ) : ?>
<?php foreach ( $post_tags as $tag ) : ?>
<div class="entry-tag-item"><a href="<?php echo esc_url( get_tag_link($tag->term_id) ); ?>"><?php echo esc_html( $tag->name ); ?></a></div><!-- /entry-tag-item -->
<?php endforeach; ?>
<?php endif; ?>
</div><!-- /entry-tag-items -->

<!--  -->

<?php
echo '-test- <br>';
var_dump($post_tags);
?>


<?php
endwhile;
endif;
?>

</main><!-- /primary -->


</div><!-- /inner -->
</div><!-- /content -->

<!--  -->
<?php get_template_part('template-parts/pagination'); ?>
<!--  -->
<?php get_footer(); ?>