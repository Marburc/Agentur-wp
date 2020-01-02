<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'rSoEk+biRm2z0PprgpRB9lgwvDcn+AgCuAM7W9T2uTVcbtbZ+NQFc4qsBA32JfS/JcD5+20AS8Z62S4spQqCOw==');
define('SECURE_AUTH_KEY',  'ylvgzLUnDfJEg7VWdM9qHOnQNRBy2VumTjpJ9Kf7D3f8tOvX9DTnzL9xu/6JUG0lB57K8p7R+JjQg4NHuVidtA==');
define('LOGGED_IN_KEY',    'Uogan0y/2LHxolOSt87w5mkzRGnpXnevDw/DH0bVQm1GrXHU1LB2sQgljXZGpcIIve3HlQCQdFb/hygl9zzCvg==');
define('NONCE_KEY',        'd+ed/Jc2m66+kefkAvtOZRoBVcOyz3M5W989RvJVVcz7Bh2u2MAL1+81XcrspldYqRICRZjdTiyBEKXmQuaLuQ==');
define('AUTH_SALT',        'PgotQdUigB9577dvHfJBWckgeAgKuki4R1t8VkkrQ9juoSE20pqPZxmRfyHIjjhTxoyHuzqeLrVvXclGVbIW3g==');
define('SECURE_AUTH_SALT', 'RvPjbu7ewEZHTmobvLWkruWwOj+s3CPsHSlfvrIb5bLe9Y5Sws4+ufx4es4x8H2++pu7UbxmPR2nylw7E5vlbQ==');
define('LOGGED_IN_SALT',   'aIw1qrz6An1UAdNPout6NRSErmX8pOQcNdB/vRBZod9h1srGVyF8PJb2MIN+rWH8FC18vZnceXgtgpCpLM+t1g==');
define('NONCE_SALT',       'ZJA9fUD6L7OYf8jk4YRcksbZpR5pCf/mMfMrkGL0+F/xXLXt9nsaarGxGHTzwpYrMg+7ELOet/3ti4jtdzuBvw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
