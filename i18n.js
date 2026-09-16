/* Hanten site i18n: RU/EN dictionary + toggle. */
(function () {
  var DICT = {
    ru: {
      "nav.docs": "Документация",
      "nav.dl": "Скачать",
      "hero.tag": "Бесплатная читалка манги, манхвы и маньхуа для Android",
      "badge.sources": "130+ источников",
      "badge.noads": "без рекламы",
      "badge.oss": "open source",
      "btn.dl": "Скачать APK",
      "btn.docs": "Документация",
      "start.title": "Быстрый старт",
      "start.1a": "Скачайте APK из",
      "start.1b": "релизов",
      "start.1c": "и разрешите установку из неизвестных источников.",
      "start.2": "Откройте каталог и включите любимые источники.",
      "start.3": "Читайте! Главы сохраняются офлайн, а похожую мангу подскажет карусель.",
      "feat.title": "Возможности",
      "f1t": "130+ источников",
      "f1d": "ReadManga, MintManga, Remanga, Manhwa и другие. Приоритет — русскоязычным каталогам. Плюс поддержка расширений Tachiyomi.",
      "f2t": "Похожая манга",
      "f2d": "На странице тайтла — карусель похожих произведений по жанрам из того же источника.",
      "f3t": "Умный шаринг",
      "f3d": "Ссылка открывается сразу в приложении, а в мессенджере показывает обложку и описание.",
      "f4t": "Офлайн и категории",
      "f4d": "Загрузки глав, CBZ-архивы, избранное по категориям, история, закладки и инкогнито.",
      "f5t": "Ридер под вас",
      "f5d": "Обычный и Webtoon-режимы, жесты, Material You. Уведомления о новых главах и лента обновлений.",
      "f6t": "Трекинг и защита",
      "f6d": "Shikimori, AniList, MyAnimeList, Kitsu. Вход в приложение — по паролю или отпечатку.",
      "donate.title": "Поддержать проект",
      "donate.text": "Hanten бесплатен и без рекламы. Если приложение радует — угостите разработчика кофе, это мотивирует пилить новые фичи.",
      "donate.btn": "Задонатить на Ko-fi",
      "ack": "Hanten — форк Kotatsu и Futon. Спасибо их разработчикам за фундамент.",
      "sources": "Исходники:",
      "app": "приложение",
      "parsers": "парсеры",
      "d.back": "← На главную",
      "d.title": "Документация",
      "d.install": "Установка",
      "d.install.t": "Скачайте свежий APK из релизов. Разрешите установку из неизвестных источников, когда попросит система. Требуется Android 6.0+.",
      "d.sources": "Источники",
      "d.sources.t": "Каталог: ReadManga, MintManga, SelfManga, Remanga, Manhwa-сканлейты и другие — 130+ источников, с приоритетом русскоязычных. Список обновляется с каждым релизом приложения, плюс поддерживаются расширения Tachiyomi (keiyoushi).",
      "d.similar": "Похожая манга",
      "d.similar.t": "На странице тайтла — карусель из трёх похожих произведений по жанрам из того же источника. Кнопка «Ещё» открывает полный список.",
      "d.share": "Как поделиться мангой",
      "d.share.t": "Меню тайтла → «Поделиться»: «Ссылка на мангу в приложении» откроется у получателя сразу в Hanten (в мессенджере покажет обложку и описание), «Ссылка на источник» — страница тайтла на сайте.",
      "d.privacy": "Приватность",
      "d.privacy.t": "Аккаунт не нужен, библиотека хранится на вашем устройстве. Синхронизация между своими устройствами — только опционально. Без рекламы и трекинга.",
      "d.rights": "Права и лицензии",
      "d.rights.t": "Приложение распространяется под лицензией GPL-3.0, исходный код открыт. Вся манга принадлежит её авторам и сайтам-источникам — Hanten лишь удобно показывает каталоги и не хранит контент. Контент 18+ помечается и может скрываться настройками.",
      "d.faq": "Частые вопросы",
      "d.q1": "Почему некоторых тайтлов нет в каталоге?",
      "d.a1": "Закрытые премиум-тайтлы (только по подписке на сайте) скрываются автоматически — прочитать их в приложении всё равно нельзя.",
      "d.q2": "Ссылка из приложения ведёт не туда?",
      "d.a2": "Убедитесь, что у получателя свежая версия Hanten. Старые ссылки вида hanten.pages.dev больше не используются.",
      "d.q3": "Источник не грузится?",
      "d.a3": "Сайты периодически меняют зеркала. Обновите приложение — зеркала и парсеры обновляются с каждым релизом.",
      "m.open": "Открыть в приложении",
      "m.source": "Читать на сайте источника",
      "m.dl": "Скачать Hanten",
      "m.noapp.pre": "Нет приложения? Поставьте APK с",
      "m.noapp.post": "— ссылка откроется автоматически.",
      "m.fallback": "Открыть мангу в Hanten",
      "m.src": "Источник:"
    },
    en: {
      "nav.docs": "Docs",
      "nav.dl": "Download",
      "hero.tag": "Free manga, manhwa and manhua reader for Android",
      "badge.sources": "130+ sources",
      "badge.noads": "no ads",
      "badge.oss": "open source",
      "btn.dl": "Download APK",
      "btn.docs": "Documentation",
      "start.title": "Quick start",
      "start.1a": "Grab the APK from",
      "start.1b": "releases",
      "start.1c": "and allow installs from unknown sources.",
      "start.2": "Open the catalogue and enable your favourite sources.",
      "start.3": "Read! Chapters work offline, and the carousel suggests similar manga.",
      "feat.title": "Features",
      "f1t": "130+ sources",
      "f1d": "ReadManga, MintManga, Remanga, Manhwa and more, with priority for Russian catalogues. Plus Tachiyomi extension support.",
      "f2t": "Similar manga",
      "f2d": "Every title page has a carousel of similar works by genre from the same source.",
      "f3t": "Smart sharing",
      "f3d": "Links open right in the app, and show cover plus description in messengers.",
      "f4t": "Offline & categories",
      "f4d": "Chapter downloads, CBZ archives, favourites with categories, history, bookmarks and incognito.",
      "f5t": "Reader your way",
      "f5d": "Standard and Webtoon modes, gestures, Material You. New-chapter notifications and updates feed.",
      "f6t": "Tracking & lock",
      "f6d": "Shikimori, AniList, MyAnimeList, Kitsu. Password or fingerprint app lock.",
      "donate.title": "Support the project",
      "donate.text": "Hanten is free with no ads. If you enjoy it — buy the developer a coffee, it keeps new features coming.",
      "donate.btn": "Donate on Ko-fi",
      "ack": "Hanten is a fork of Kotatsu and Futon. Thanks to their developers for the foundation.",
      "sources": "Sources:",
      "app": "app",
      "parsers": "parsers",
      "d.back": "← Home",
      "d.title": "Documentation",
      "d.install": "Install",
      "d.install.t": "Download the latest APK from releases. Allow installs from unknown sources when asked. Requires Android 6.0+.",
      "d.sources": "Sources",
      "d.sources.t": "Catalogue: ReadManga, MintManga, SelfManga, Remanga, Manhwa scanlations and more — 130+ sources with priority for Russian ones. The list updates with every app release, plus Tachiyomi (keiyoushi) extensions are supported.",
      "d.similar": "Similar manga",
      "d.similar.t": "Every title page has a carousel of three similar works by genre from the same source. The “More” button opens the full list.",
      "d.share": "How to share manga",
      "d.share.t": "Title menu → “Share”: the in-app link opens right in Hanten on the recipient's phone (with cover and description in messengers), the source link opens the title page on the website.",
      "d.privacy": "Privacy",
      "d.privacy.t": "No account needed, your library stays on your device. Sync across your own devices is optional. No ads or tracking.",
      "d.rights": "Rights & license",
      "d.rights.t": "The app is distributed under GPL-3.0, source code is open. All manga belongs to its authors and source sites — Hanten only browses catalogues and hosts no content. 18+ content is labelled and can be hidden in settings.",
      "d.faq": "FAQ",
      "d.q1": "Why are some titles missing from the catalogue?",
      "d.a1": "Locked premium titles (subscription-only on the site) are hidden automatically — they can't be read in the app anyway.",
      "d.q2": "An in-app link leads nowhere?",
      "d.a2": "Make sure the recipient has a recent Hanten version. Legacy hanten.pages.dev links are no longer used.",
      "d.q3": "A source won't load?",
      "d.a3": "Sites change mirrors from time to time. Update the app — mirrors and parsers ship with every release.",
      "m.open": "Open in app",
      "m.source": "Read on source site",
      "m.dl": "Download Hanten",
      "m.noapp.pre": "No app yet? Install the APK from",
      "m.noapp.post": "— the link will open automatically.",
      "m.fallback": "Open manga in Hanten",
      "m.src": "Source:"
    }
  };

  function lang() {
    var saved = null;
    try { saved = localStorage.getItem("hanten-lang"); } catch (e) {}
    if (saved === "ru" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
  }

  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = (DICT[l] || {})[el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === l);
    });
  }

  function set(l) {
    try { localStorage.setItem("hanten-lang", l); } catch (e) {}
    apply(l);
  }

  window.HantenI18n = { apply: apply, set: set, lang: lang, dict: function (l) { return DICT[l] || DICT.en; } };
  document.addEventListener("DOMContentLoaded", function () { apply(lang()); });
})();
