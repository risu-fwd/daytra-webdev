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
define( 'DB_NAME', 'sutaba' );

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
define( 'AUTH_KEY',         'zj)n#q?$~P5!bwI:.zK_fedE^weAu[XFp5P{&n(u|V!}iC#^9!%QPI`eb5~!5Yf2' );
define( 'SECURE_AUTH_KEY',  '.~xjZ=<XTpO./svHDU9O$1.SZR`|Hpd F9y760w-o$GHmT;HJ%:k&)^Z`q,MQRC?' );
define( 'LOGGED_IN_KEY',    '>>lTCl(}&(+D[Lz$}0OEV_)4Q&.H(}FuQqg]6D$:,Rvx%-_[B%H#LKZZv#2fqf4e' );
define( 'NONCE_KEY',        'LxdyA%L.z &%o9]g@194.jw[Z{ewKH|O)paRH9$I *8z;-Ze#aST#8d7SQ({RfwI' );
define( 'AUTH_SALT',        'AYK&!S~i1q_24!7D.Y`|=]wF9^_E%6?l&|q|oT:5V71-vi=nVJBvc2J+d96u`Xap' );
define( 'SECURE_AUTH_SALT', 'TSnOcO,u*^96Vn|7t/<j:mwIr13ab>AC3+5~|y{;&Hs/@Fr-#Lh{mfihia)RS7HL' );
define( 'LOGGED_IN_SALT',   'FQ:5y3qf;>N0F/w;q;-i)*Tg+A0,(X$H3%Pd&y)P=I_Lvyjyp3(zk(}M@2;H]_x>' );
define( 'NONCE_SALT',       'c7gSjJ<cuSs{ey?I>_|8U$L(enFO+w5)>_{2ewX>w/d_qDK~}VuHSkBv~qZ4`nQV' );

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
