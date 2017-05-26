<?php
    // ********************* POST STUFF ***************************
    /*
        ProjectLink
    */
    function project_link_add_post_data() {
        register_rest_field('post',
            'project_link',
            array(
                'get_callback' => 'project_link_get_field',
                'update_callback' => 'project_link_update_field',
                'schema' => array(
                    'description' => 'project_link',
                    'type' => 'string',
                    'context' => array('view', 'edit')
                )
            )
        );
    }

    add_action('rest_api_init', 'project_link_add_post_data');

    function project_link_get_field($post, $field_name, $request) {
        return get_post_meta($post['id'], $field_name, $single=true);
    }

    function project_link_update_field($value, $post, $field_name) {
        if (!$value || !is_string($value)) {
            return;
        }
        return update_post_meta($post->ID, $field_name, strip_tags($value));
    }

    /*
        Brand Color
    */
    function brand_color_add_post_data() {
        register_rest_field('post',
            'brand_color',
            array(
                'get_callback' => 'brand_color_get_field',
                'update_callback' => 'brand_color_update_field',
                'schema' => array(
                    'description' => 'brand_color',
                    'type' => 'string',
                    'context' => array('view', 'edit')
                )
            )
        );
    }

    add_action('rest_api_init', 'brand_color_add_post_data');

    function brand_color_get_field($post, $field_name, $request) {
        return get_post_meta($post['id'], $field_name, $single=true);
    }

    function brand_color_update_field($value, $post, $field_name) {
        if (!$value || !is_string($value)) {
            return;
        }
        return update_post_meta($post->ID, $field_name, strip_tags($value));
    }

    // ********************* POST STUFF ***************************
