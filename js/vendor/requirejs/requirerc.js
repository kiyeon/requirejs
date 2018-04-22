require.config({
    baseUrl: "/js",

    paths: {
        common:"common",
        "jquery": "vendor/jquery/jquery-3.3.1/jquery"
    },

    // http://requirejs.org/docs/jquery.html#noconflictmap
    // Add this map config in addition to any baseUrl or
    // paths config you may already have in the project.
    map: {
        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        "*": {
            "jquery": "vendor/jquery/jquery-3.3.1/jquery-wrapper"
        },

        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        "vendor/jquery/jquery-3.3.1/jquery-wrapper": {
            "jquery": "jquery"
        }
    }
});
