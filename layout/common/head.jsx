const { Component } = require('inferno');
const MetaTags = require('hexo-component-inferno/lib/view/misc/meta');
const WebApp = require('hexo-component-inferno/lib/view/misc/web_app');
const OpenGraph = require('hexo-component-inferno/lib/view/misc/open_graph');
const StructuredData = require('hexo-component-inferno/lib/view/misc/structured_data');
const Plugins = require('./plugins');

const fontFamily=`/* cyrillic-ext */
                @font-face {
                    font-family: \"Source Code Pro\";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMRrTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtM1rTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek-ext */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMVrTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+1F00-1FFF;
                }
                /* greek */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMprTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* vietnamese */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMZrTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMdrTFcZZJmOpwVS.woff2") format("woff2");
                    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                    font-family: "Source Code Pro";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQtMlrTFcZZJmOpw.woff2") format("woff2");
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKcg72nU6AF7xm.woff2") format("woff2");
                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKew72nU6AF7xm.woff2") format("woff2");
                    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek-ext */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKcw72nU6AF7xm.woff2") format("woff2");
                    unicode-range: U+1F00-1FFF;
                }
                /* greek */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKfA72nU6AF7xm.woff2") format("woff2");
                    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* latin-ext */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKcQ72nU6AF7xm.woff2") format("woff2");
                    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                    font-family: "Ubuntu";
                    font-style: normal;
                    font-weight: 400;
                    src: url("https://gstatic.loli.net/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2") format("woff2");
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }`

function getPageTitle(page, siteTitle, helper) {
    let title = page.title;

    if (helper.is_archive()) {
        title = helper._p('common.archive', Infinity);
        if (helper.is_month()) {
            title += ': ' + page.year + '/' + page.month;
        } else if (helper.is_year()) {
            title += ': ' + page.year;
        }
    } else if (helper.is_category()) {
        title = helper._p('common.category', 1) + ': ' + page.category;
    } else if (helper.is_tag()) {
        title = helper._p('common.tag', 1) + ': ' + page.tag;
    } else if (helper.is_categories()) {
        title = helper._p('common.category', Infinity);
    } else if (helper.is_tags()) {
        title = helper._p('common.tag', Infinity);
    }

    return [title, siteTitle].filter(str => typeof str !== 'undefined' && str.trim() !== '').join(' - ');
}

module.exports = class extends Component {
    render() {
        const { site, config, helper, page } = this.props;
        const { url_for, cdn, fontcdn, iconcdn, is_post } = helper;
        const {
            url,
            head = {},
            article,
            highlight,
            variant = 'default'
        } = config;
        const {
            meta = [],
            manifest = {},
            open_graph = {},
            structured_data = {},
            canonical_url = page.permalink,
            rss,
            favicon
        } = head;

        const noIndex = helper.is_archive() || helper.is_category() || helper.is_tag();

        const language = page.lang || page.language || config.language;
        const fontCssUrl = {
            default: fontcdn('Ubuntu:wght@400;600&family=Source+Code+Pro', 'css2'),
            cyberpunk: fontcdn('Oxanium:wght@300;400;600&family=Roboto+Mono', 'css2')
        };

        let hlTheme, images;
        if (highlight && highlight.enable === false) {
            hlTheme = null;
        } else if (article && article.highlight && article.highlight.theme) {
            hlTheme = article.highlight.theme;
        } else {
            hlTheme = 'atom-one-light';
        }

        if (typeof page.og_image === 'string') {
            images = [page.og_image];
        } else if (typeof page.cover === 'string') {
            images = [url_for(page.cover)];
        } else if (typeof page.thumbnail === 'string') {
            images = [url_for(page.thumbnail)];
        } else if (article && typeof article.og_image === 'string') {
            images = [article.og_image];
        } else if (page.content && page.content.includes('<img')) {
            let img;
            images = [];
            const imgPattern = /<img [^>]*src=['"]([^'"]+)([^>]*>)/gi;
            while ((img = imgPattern.exec(page.content)) !== null) {
                images.push(img[1]);
            }
        } else {
            images = [url_for('/img/og_image.png')];
        }

        let adsenseClientId = null;
        if (Array.isArray(config.widgets)) {
            const widget = config.widgets.find(widget => widget.type === 'adsense');
            if (widget) {
                adsenseClientId = widget.client_id;
            }
        }

        let openGraphImages = images;
        if ((typeof open_graph === 'object' && open_graph !== null)
            && ((Array.isArray(open_graph.image) && open_graph.image.length > 0) || typeof open_graph.image === 'string')) {
            openGraphImages = open_graph.image;
        } else if ((Array.isArray(page.photos) && page.photos.length > 0) || typeof page.photos === 'string') {
            openGraphImages = page.photos;
        }

        let structuredImages = images;
        if ((typeof structured_data === 'object' && structured_data !== null)
            && ((Array.isArray(structured_data.image) && structured_data.image.length > 0) || typeof structured_data.image === 'string')) {
            structuredImages = structured_data.image;
        } else if ((Array.isArray(page.photos) && page.photos.length > 0) || typeof page.photos === 'string') {
            structuredImages = page.photos;
        }

        let followItVerificationCode = null;
        if (Array.isArray(config.widgets)) {
            const widget = config.widgets.find(widget => widget.type === 'followit');
            if (widget) {
                followItVerificationCode = widget.verification_code;
            }
        }

        return <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            {noIndex ? <meta name="robots" content="noindex"/> : null}
            {meta && meta.length ? <MetaTags meta={meta}/> : null}

            <title>{getPageTitle(page, config.title, helper)}</title>

            <WebApp.Cacheable
                helper={helper}
                favicon={favicon}
                icons={manifest.icons}
                themeColor={manifest.theme_color}
                name={manifest.name || config.title}/>

            {typeof open_graph === 'object' && open_graph !== null ? <OpenGraph
                type={open_graph.type || (is_post(page) ? 'article' : 'website')}
                title={open_graph.title || page.title || config.title}
                date={page.date}
                updated={page.updated}
                author={open_graph.author || config.author}
                description={open_graph.description || page.description || page.excerpt || page.content || config.description}
                keywords={(page.tags && page.tags.length ? page.tags : undefined) || config.keywords}
                url={open_graph.url || page.permalink || url}
                images={openGraphImages}
                siteName={open_graph.site_name || config.title}
                language={language}
                twitterId={open_graph.twitter_id}
                twitterCard={open_graph.twitter_card}
                twitterSite={open_graph.twitter_site}
                googlePlus={open_graph.google_plus}
                facebookAdmins={open_graph.fb_admins}
                facebookAppId={open_graph.fb_app_id}/> : null}

            {typeof structured_data === 'object' && structured_data !== null ? <StructuredData
                title={structured_data.title || page.title || config.title}
                description={structured_data.description || page.description || page.excerpt || page.content || config.description}
                url={structured_data.url || page.permalink || url}
                author={structured_data.author || config.author}
                publisher={structured_data.publisher || config.title}
                publisherLogo={structured_data.publisher_logo || config.logo}
                date={page.date}
                updated={page.updated}
                images={structuredImages}/> : null}

            <link data-pjax rel="stylesheet" href={url_for('/css/' + variant + '.css')}/>
            {canonical_url ? <link rel="canonical" href={canonical_url} /> : null}
            {rss ? <link rel="alternate" href={url_for(rss)} title={config.title} type="application/atom+xml" /> : null}
            {favicon ? <link rel="icon" href={url_for(favicon)} /> : null}
            <link rel="preload" href={iconcdn().replace('css/all.min.css', 'webfonts/fa-solid-900.woff2')} as="font"
                  type="font/woff2" crossorigin/>
            <link rel="preload" href={iconcdn().replace('css/all.min.css', 'webfonts/fa-brands-400.woff2')} as="font"
                  type="font/woff2" crossorigin/>
            <link rel="stylesheet" href={iconcdn()} />
            {hlTheme ? <link data-pjax rel="stylesheet"
                             href={cdn('highlight.js', '11.7.0', 'styles/' + hlTheme + '.css')}/> : null}

            {/*字体速度优化*/}
            <link rel="preconnect" href={'https://gstatic.loli.net'}/>
            <style dangerouslySetInnerHTML={{__html:fontFamily}}></style>
            <link rel="stylesheet" href={fontCssUrl[variant]} />


            <Plugins site={site} config={config} helper={helper} page={page} head={true}/>

            {adsenseClientId ? <script data-ad-client={adsenseClientId}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async></script> : null}

            {followItVerificationCode ? <meta name="follow.it-verification-code" content={followItVerificationCode} /> : null}
        </head>;
    }
};
