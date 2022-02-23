<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/Users/mac/Desktop/daytra/advanced/php/dev/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '[!5l${%o+g:8l<^ial,~$Hkl_F>H-.F9#lB(zl2%bY(E2n.i4)Tnu+B( Af%x%sq' );
define( 'SECURE_AUTH_KEY',  'g&4iO6)VZ(+s$Y<Z{vBEc&q`7`Z<Cd1%]^erR+z2*.<(sANui21HvUV610U#27%4' );
define( 'LOGGED_IN_KEY',    '-:,Ta+2`PRMl1,$5YOl|_bGs<IoQ&>!<QErb*NmX<yT{j.ofI{EXRJ ~j3Kh kN)' );
define( 'NONCE_KEY',        'KmJ9O,~;+(z{tD;~>N2I[5wj=}05U(?1hCI>|/j*W){co3}Q=h%-}$BAExdC.li?' );
define( 'AUTH_SALT',        '%7u|nQVwAzC&kmwc5}0Ft)wXnU3]qD-UT} <K9zahS$jEeREa#{Faeytb|M+NB+O' );
define( 'SECURE_AUTH_SALT', 'mk|?!P0@x0?wR6`?e}gLqqb][v?[rXB?3gG7,].I]Q1|t^gz]&9B43 *Z.:M?^o^' );
define( 'LOGGED_IN_SALT',   '2w>PK2A5TZY,iO- .z|r=yk_Nn]z+2lE:?g e<8QXMN5 gvs=iA73l%<<1.f7gdZ' );
define( 'NONCE_SALT',       '!|7K[;PvJU*F>HiY$UX4UU3Q/]!!8{bN|FU#d=r.j.k(P$%w@Uypu^i-LDw5(nT,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
// define( 'WP_DEBUG', false ); // *comment out 1/26/2022
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
