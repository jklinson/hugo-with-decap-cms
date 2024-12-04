// Import widgets (optional)
const { CMS, initCMS: init } = window

// Register widgets
// CMS.registerWidget('markdown', CMS.MarkdownWidget);

// Initialize CMS with custom config
CMS.init({
    config: {
        backend: {
            name: 'github',
            repo: 'jklinson/hugo-with-decap-cms',
            branch: 'main',
            client_id: 'Ov23liUavsHCBFVwjSWu',
            client_secret: '1e5c506ec092db32290bbfae4d442f560eb72eb7',
            auth_endpoint: 'https://github.com/login/oauth/authorize',
            access_token_url: 'https://github.com/login/oauth/access_token',
            proxy_url: null
        },
        load_config_file: false,
        media_folder: 'static/images/uploads',
        public_folder: '/images/uploads',
        collections: [
            {
                "name": "Blog Posts",
                "label": "Blog Posts",
                "folder": "content/en/blog",
                "create": true,
                "slug": "{{slug}}",
                "format": "frontmatter",
                "fields": [
                    { "label": "Author", "name": "author", "widget": "string" },
                    { "label": "Title", "name": "title", "widget": "string" },
                    { "label": "Date", "name": "date", "widget": "datetime" },
                    { "label": "Description", "name": "description", "widget": "text" },
                    { "label": "Tags", "name": "tags", "widget": "list", "default": [] },
                    { "label": "Search Exclude", "name": "searchExclude", "widget": "boolean", "default": false },
                    {
                        "label": "Thumbnail",
                        "name": "thumbnail",
                        "widget": "object",
                        "fields": [
                            { "label": "Image URL", "name": "url", "widget": "string" },
                            { "label": "Author", "name": "author", "widget": "string" },
                            { "label": "Author URL", "name": "authorURL", "widget": "string" },
                            { "label": "Origin", "name": "origin", "widget": "string" },
                            { "label": "Origin URL", "name": "originURL", "widget": "string" }
                        ]
                    },
                    { "label": "Body", "name": "body", "widget": "markdown" }
                ]
            },
        ],
    },
});