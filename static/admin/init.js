// Import widgets (optional)
const { CMS, initCMS: init } = window

// Register widgets
// CMS.registerWidget('markdown', CMS.MarkdownWidget);

// Initialize CMS with custom config
CMS.init({
    config: {
        backend: {
            name: 'proxy',
            proxy_url: 'http://localhost:8081/api/v1',
            branch: 'master'
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