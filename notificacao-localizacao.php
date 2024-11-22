<?php
/**
 * Plugin Name: Notificação de Localização
 * Description: Solicita permissão para acessar a localização do usuário ao carregar a página.
 * Version: 1.0
 * Author: Leonardo Junio Andrade
 */

if (!defined('ABSPATH')) {
    exit; // Impede acesso direto ao arquivo.
}

// Adiciona o script ao frontend do site.
add_action('wp_enqueue_scripts', 'notificacao_localizacao_enqueue_scripts');

function notificacao_localizacao_enqueue_scripts() {
    wp_enqueue_script(
        'notificacao-localizacao-js',
        plugin_dir_url(__FILE__) . 'js/notificacao-localizacao.js',
        [],
        '1.0',
        true
    );
}
