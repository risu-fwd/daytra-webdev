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
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
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
define( 'AUTH_KEY',         'E|gz=>~V_x[!<8v+I62<-Tt$P9H[#EW+d:vWO4p!]x]~U$.4E{D{smu(zS*dVKS.' );
define( 'SECURE_AUTH_KEY',  'v}Ff:-{s(-#<t}{mx,Zh1jT(wbPooe@5_}3:v_:$, kg)C!.yyhKJ5L# h)a:rfk' );
define( 'LOGGED_IN_KEY',    'jI]/G?AQ.7*wFB:dIu^RF/z*PD|Yd74|`usytp3Pl0w;84u-B<BW4OW1{zVOD;gl' );
define( 'NONCE_KEY',        'Om+?~@0<G^*]g-y-3;B%?t&j>Jj+K< 3Gm2tnK:7do4s|H@`) QO8;%Q~p$tL!dY' );
define( 'AUTH_SALT',        '/Lq2c1PEqX6uIqf{QwdarX=p4*DWV2UuV:>}snCE8HSWVMAU h<;VgeVY=I xL1/' );
define( 'SECURE_AUTH_SALT', '>~]QR3D8d`+4y JcsyaO4T67,#[9>XCK`7AW()xe/.FE}@Nn0OV0on;Vf@+L,))<' );
define( 'LOGGED_IN_SALT',   'Z;^x-(}tj$=nyZTPQ#sO,5=>R?<(W7PBz*r&TmB]x :{w|(dP[B*.{!!L)+`k)!*' );
define( 'NONCE_SALT',       '|*9djm2l8zD:jb~N@E)P`A|V>XZE&<_@#}+hHDD1`X!kj`7+Bcya>wUJU9~ZDZ&E' );

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
