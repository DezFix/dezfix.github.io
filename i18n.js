/* Hanten site i18n: RU/EN dictionary + toggle. */
(function () {
  var DICT = {
    ru: {
      "nav.docs": "Документация",
      "nav.dl": "Скачать",
      "hero.tag": "Бесплатная читалка манги, манхвы и маньхуа для Android",
      "badge.sources": "1300+ источников",
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
      "f1t": "1300+ источников",
      "f1d": "ReadManga, MintManga, Remanga, Manhwa и другие на всех языках. Приоритет — русскоязычным каталогам. Плюс поддержка расширений Tachiyomi.",
      "f2t": "Похожая манга",
      "f2d": "На странице тайтла — карусель похожих произведений по жанрам из того же источника.",
      "f3t": "Умный шаринг",
      "f3d": "Ссылка открывается сразу в приложении, а в мессенджере показывает обложку и описание.",
      "f4t": "Офлайн и категории",
      "f4d": "Загрузки глав, CBZ-архивы, избранное по категориям, история, закладки и инкогнито.",
      "f5t": "Ридер под вас",
      "f5d": "Обычный и Webtoon-режимы, жесты, Material You. Уведомления о новых главах и лента обновлений.",
      "f6t": "Лента и защита",
      "f6d": "Уведомления о новых главах, лента обновлений и рекомендации. Вход в приложение — по паролю или отпечатку.",
      "donate.title": "Поддержать проект",
      "donate.text": "Hanten бесплатен и без рекламы. Если приложение радует — угостите разработчика кофе, это мотивирует пилить новые фичи.",
      "donate.btn": "Задонатить на Ko-fi",
      "ack": "Hanten — форк Kotatsu и Futon. Спасибо их разработчикам за фундамент.",
      "sources": "Исходники:",
      "app": "приложение",
      "parsers": "парсеры",
      "m.open": "Открыть в приложении",
      "m.source": "Читать на сайте источника",
      "m.dl": "Скачать Hanten",
      "m.kofi": "☕ Поддержать на Ko-fi",
      "m.noapp.pre": "Нет приложения? Поставьте APK с",
      "m.noapp.post": "— ссылка откроется автоматически.",
      "m.fallback": "Открыть мангу в Hanten",
      "m.src": "Источник:"
    },
    en: {
      "nav.docs": "Docs",
      "nav.dl": "Download",
      "hero.tag": "Free manga, manhwa and manhua reader for Android",
      "badge.sources": "1300+ sources",
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
      "f1t": "1300+ sources",
      "f1d": "ReadManga, MintManga, Remanga, Manhwa and more in every language, with priority for Russian catalogues. Plus Tachiyomi extension support.",
      "f2t": "Similar manga",
      "f2d": "Every title page has a carousel of similar works by genre from the same source.",
      "f3t": "Smart sharing",
      "f3d": "Links open right in the app, and show cover plus description in messengers.",
      "f4t": "Offline & categories",
      "f4d": "Chapter downloads, CBZ archives, favourites with categories, history, bookmarks and incognito.",
      "f5t": "Reader your way",
      "f5d": "Standard and Webtoon modes, gestures, Material You. New-chapter notifications and updates feed.",
      "f6t": "Feed & lock",
      "f6d": "New-chapter notifications, updates feed and recommendations. Password or fingerprint app lock.",
      "donate.title": "Support the project",
      "donate.text": "Hanten is free with no ads. If you enjoy it — buy the developer a coffee, it keeps new features coming.",
      "donate.btn": "Donate on Ko-fi",
      "ack": "Hanten is a fork of Kotatsu and Futon. Thanks to their developers for the foundation.",
      "sources": "Sources:",
      "app": "app",
      "parsers": "parsers",
      "m.open": "Open in app",
      "m.source": "Read on source site",
      "m.dl": "Download Hanten",
      "m.kofi": "☕ Support on Ko-fi",
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
