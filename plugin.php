<?php
/*
Plugin Name: GT Icon Block
Plugin URI: https://germanthemes.de/en/plugins/gt-icon-block/
Description: Add description
Author: GermanThemes
Author URI: https://germanthemes.de/en/
Version: 1.0
Text Domain: gt-icon-block
Domain Path: /languages/
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

GT Icon Block
Copyright(C) 2020, germanthemes.de - support@germanthemes.de
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main GermanThemes_Icon_Block Class
 *
 * @package GT Icon Block
 */
class GermanThemes_Icon_Block {
	/**
	 * Setup the Plugin
	 *
	 * @return void
	 */
	static function setup() {

		// Enqueue Block Styles.
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_block_scripts' ) );

		// Enqueue Block Scripts and Styles for Gutenberg Editor.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_scripts' ) );
	}

	/**
	 * Enqueue Block Styles
	 *
	 * Used in Frontend and Backend
	 *
	 * @return void
	 */
	static function enqueue_block_scripts() {
		wp_enqueue_style(
			'gt-icon-block',
			plugins_url( 'assets/css/gt-icon-block.css', __FILE__ ),
			array(),
			'20200403'
		);
	}

	/**
	 * Enqueue Scripts and Styles for Blocks
	 *
	 * Used in Backend in Gutenberg Editor only
	 *
	 * @return void
	 */
	static function enqueue_block_editor_scripts() {
		// Enqueue GT Icon Block in Gutenberg.
		wp_enqueue_script(
			'gt-icon-block',
			plugins_url( 'assets/js/gt-icon-block.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			'20200403'
		);

		// Enqueue Editor Stylesheet for GT Icon Block.
		wp_enqueue_style(
			'gt-icon-block-editor',
			plugins_url( 'assets/css/gt-icon-block-editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			'20200403'
		);
	}
}

// Run Plugin.
GermanThemes_Icon_Block::setup();
