if (!self.define) {
    const e = (e) => {
            'require' !== e && (e += '.js')
            let s = Promise.resolve()
            return (
                a[e] ||
                    (s = new Promise(async (s) => {
                        if ('document' in self) {
                            const a = document.createElement('script')
                            ;(a.src = e),
                                document.head.appendChild(a),
                                (a.onload = s)
                        } else importScripts(e), s()
                    })),
                s.then(() => {
                    if (!a[e])
                        throw new Error(
                            `Module ${e} didn’t register its module`
                        )
                    return a[e]
                })
            )
        },
        s = (s, a) => {
            Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e))
        },
        a = { require: Promise.resolve(s) }
    self.define = (s, i, r) => {
        a[s] ||
            (a[s] = Promise.resolve().then(() => {
                let a = {}
                const n = { uri: location.origin + s.slice(1) }
                return Promise.all(
                    i.map((s) => {
                        switch (s) {
                            case 'exports':
                                return a
                            case 'module':
                                return n
                            default:
                                return e(s)
                        }
                    })
                ).then((e) => {
                    const s = r(...e)
                    return a.default || (a.default = s), a
                })
            }))
    }
}
define('./sw.js', ['./workbox-4d0bff02'], function (e) {
    'use strict'
    importScripts(),
        e.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url:
                        '/_next/static/c5HokApfFAuKfmikUq1Nt/_buildManifest.js',
                    revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5'
                },
                {
                    url: '/_next/static/c5HokApfFAuKfmikUq1Nt/_ssgManifest.js',
                    revision: 'abee47769bf307639ace4945f9cfd4ff'
                },
                {
                    url: '/_next/static/c5HokApfFAuKfmikUq1Nt/pages/_app.js',
                    revision: '35e1ec830cc01fb9cc4d84e858240703'
                },
                {
                    url: '/_next/static/c5HokApfFAuKfmikUq1Nt/pages/_error.js',
                    revision: 'e8d6ef586da259ada3e1086fe5aeda95'
                },
                {
                    url: '/_next/static/c5HokApfFAuKfmikUq1Nt/pages/index.js',
                    revision: 'eca25f9d734b56425af7459bfa72613b'
                },
                {
                    url:
                        '/_next/static/chunks/4bf72d14aefa7d0ec2e776e6931aa88c1153fe3a.eb62e695ea14086e5524.js',
                    revision: 'b6a7574de6f7e5d52d774efd4a054982'
                },
                {
                    url:
                        '/_next/static/chunks/edbe8fa3080e7873a1eb5bf6102fcb0fbb3dfd63.0a8425764757f4f4c96d.js',
                    revision: 'd5e4605dc90a1a54ccb328c52d3274fe'
                },
                {
                    url:
                        '/_next/static/chunks/framework.c6faae2799416a6da8e8.js',
                    revision: 'a07dacbb502f5257565ceb7d460e71e6'
                },
                {
                    url: '/_next/static/runtime/main-f19aabff4985f8c76ae0.js',
                    revision: '3f3b2c1f7649c43d4d8bcbe2ac662988'
                },
                {
                    url:
                        '/_next/static/runtime/polyfills-f1a72475392243fcf9b5.js',
                    revision: 'e472d47f8ab63cc45bae6a9ea4eec0c5'
                },
                {
                    url:
                        '/_next/static/runtime/webpack-c212667a5f965e81e004.js',
                    revision: 'f5e6e2fca3144cc944812cfa3547f475'
                },
                {
                    url: '/img/hero-illustration.svg',
                    revision: '5fd5143cba1046a214d9a359fce22e89'
                },
                {
                    url: '/img/icon-192.png',
                    revision: 'd27169d080684ebb57b8387d05c4b444'
                },
                {
                    url: '/img/icon-512.png',
                    revision: 'f1d74b43a3832183202483a40d9e9d84'
                },
                {
                    url: '/img/logo-gh.svg',
                    revision: 'e3a0c31390db72fd374570f4a57c56b0'
                },
                {
                    url: '/img/logo.svg',
                    revision: '202525302ad30aca5b2b790d4b0b5796'
                },
                {
                    url: '/manifest.json',
                    revision: '3f64445068d597be961079c4a451200f'
                },
                {
                    url: '/vercel.svg',
                    revision: '4b4f1876502eb6721764637fe5c41702'
                }
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\/api\/.*$/i,
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\/api\/.*$/i,
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'POST'
        ),
        e.registerRoute(
            /.*/i,
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        )
})
