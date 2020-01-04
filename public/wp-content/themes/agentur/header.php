<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Agentur
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'agentur'); ?></a>

    <header id="masthead" class="site-header">
                <nav class="navbar ">
                    <div class="container navbar__wrapper">
                        <div class="burger">
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                        <div class="navbar__brand">
                            <a href="<?php echo esc_url( home_url( '/' )); ?>"><img src="https://www.plantronics.com/etc/designs/plantronics/clientlib-all/img/poly-logo.png" alt=""></a>
                        </div>
                        <ul class="navbar__links">
                            <li <?php if (is_page('home') )
                                echo 'class= "current-menu-item"' ?> ><a class="navbar__link" href="<?php echo esc_url( home_url( '/' )); ?>">Home</a></li>
                            <li><a class="navbar__link " href="<?php echo esc_url( home_url( '/leistungen' )); ?>">Leistungen</a>
                                <ul>
                                    <li><a href="<?php echo site_url('/berlin-web-design-agentur') ?>">Webdesign</a></li>
                                    <li><a href="<?php echo site_url('/seo-berlin') ?>">Seo</a></li>
                                    <li><a href="<?php echo site_url('/e-commerce') ?>">E-Commerce</a></li>
                                    <li><a href="<?php echo site_url('/ui-ux') ?>">UI/UX</a></li>
                                    <li><a href="<?php echo site_url('/wordpress-agentur-berlin') ?>">Wordpress</a></li>
                                    <li><a href="<?php echo site_url('/wartung') ?>">Wartung</a></li>
                                </ul>
                            </li>
                            <li <?php if(get_post_type() == 'post') echo 'class="current-menu-item"' ?>><a class="navbar__link" href="<?php echo esc_url( home_url( '/blog' )); ?>">Blog</a></li>
                            <li><a class="navbar__link" href="<?php echo esc_url( home_url( '/contact' )); ?>">Kontakt</a></li>
                        </ul>
                    </div>
                </nav><!-- #site-navigation -->
            </div>
        </div>

    </header><!-- #masthead -->

    <div id="content" class="site-content">
