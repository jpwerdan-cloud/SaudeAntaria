<?php
/**
 * Plugin Name: Saude Antar Antarctica
 * Plugin URI: https://github.com/jpwerdan-cloud/SaudeAntaria
 * Description: Brazilian Antarctic Expeditions Portfolio & Management System
 * Version: 1.0.0
 * Author: jpwerdan-cloud
 * Author URI: https://github.com/jpwerdan-cloud
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: saude-antar-antarctica
 * Domain Path: /languages
 * Requires at least: 6.0
 * Requires PHP: 8.1
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Plugin version
define('SAUDE_ANTAR_VERSION', '1.0.0');
define('SAUDE_ANTAR_FILE', __FILE__);
define('SAUDE_ANTAR_DIR', plugin_dir_path(__FILE__));
define('SAUDE_ANTAR_URL', plugin_dir_url(__FILE__));

// Require composer autoload
require_once SAUDE_ANTAR_DIR . 'vendor/autoload.php';

// Load plugin classes
require_once SAUDE_ANTAR_DIR . 'includes/class-plugin.php';

// Initialize plugin
function saude_antar_init() {
    $plugin = new \SaudeAntar\Plugin();
    $plugin->run();
}

// Hook on plugins_loaded
add_action('plugins_loaded', 'saude_antar_init');

// Register activation hook
register_activation_hook(__FILE__, function () {
    do_action('saude_antar_activate');
    flush_rewrite_rules();
});

// Register deactivation hook
register_deactivation_hook(__FILE__, function () {
    do_action('saude_antar_deactivate');
    flush_rewrite_rules();
});
