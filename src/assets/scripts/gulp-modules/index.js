@@include("./libs.js");

window.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    const mainWrap = $(".main__wrap");
    const popupClose = $(".popup__close");
    const overlay = $(".overlay");
    const modalLinks = $(".modal-link");
    const sliderFor = $(".gallery__big-imgs");
    const sliderNav = $(".gallery__small-imgs");
    const featuresSlider = $(".features");
    const anchorLinks = $(".hash-link");
    const otherSlider = $(".other__wrap");
    const paperSlider = $(".paper__wrap");
    const nav = $(".navigation");
    const header = $(".header");
    const section = $("section");
    const burgerBtn = $(".burger-btn");
    let prevCoords = 0;
    let currentLanguage = "uk";
    const viewSlider = $('.view__content')
    const preview = $('.preview')

    viewSlider.on('click', (e) => {
      if(e.target.tagName === 'IMG') {
        closeAllOverlay()
        overlay.addClass('overlay--show')
        preview.addClass('preview--show')
        preview.css('display', 'block')
        const src = e.target.getAttribute('src')

        preview.find('img').attr('src', src)
      }
    })

    function closeAllOverlay() {
      $('.popup').each(function() {
        $(this).hide()
      })
    }

    $('.map__item-wrap img').each(function () {
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    })

    $(".map__info-btn").on("click", function () {
      $(this).toggleClass("map__info-btn--show")
      $('.map__info-wrap').toggleClass('map__info-wrap--show')
    });

    $(".language__btn").each(function () {
      $(this).on("click", (e) => {

        if(currentLanguage === $(this).data('language')) {
          e.preventDefault()
          return
        }

        $(".language__btn").each(function () {
          $(this).removeClass("language__btn--current")
        });

        const language = $(this).data("language");
        currentLanguage = language;

        $(`[data-language="${language}"]`).each(function () {
          $(this).addClass("language__btn--current")
        })
      })
    })

    if (document.documentElement.clientWidth > 575) {
      /**Докручивание скролла */
      function debounce(f, t) {
        return function (args) {
          let previousCall = this.lastCall;
          this.lastCall = Date.now();
          if (previousCall && this.lastCall - previousCall <= t) {
            clearTimeout(this.lastCallTimer);
          }
          this.lastCallTimer = setTimeout(() => f(args), t);
        };
      }
      window.currentSection = "main";
      const SCROLL_CORRECTION_TIMEOUT = 1200;
      let alignSectionToScreen = (args) => {
        if(window.section < -550) {
          document
              .querySelector(`[data-section-name="${window.currentSection}"]`).nextElementSibling
              .scrollIntoView({ behavior: "smooth" })
        } else {
          document
              .querySelector(`[data-section-name="${window.currentSection}"]`)
              .scrollIntoView({ behavior: "smooth" })
        }
      };
      // debounce: call the logger when two seconds have elapsed since the last call
      let debouncedLogger = debounce(
        alignSectionToScreen,
        SCROLL_CORRECTION_TIMEOUT
      );
      debouncedLogger();
      window.addEventListener("scroll", () => {
        debouncedLogger();
      });
      /**Докручивание скролла END*/
      /**Переключение меню при скроле */

      let sections = $("section"),
        nav_height = header.outerHeight();

      let screenChange = new Event("screenChange", { bubbles: false });

      $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
          var top = $(this).offset().top + (nav_height - 80),
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            let currentMenuPoint = document.querySelector(
              `.navigation [data-name=${$(this).data("sectionName")}]`
            );
            let currentScreenName = currentMenuPoint.dataset.name;
            window.currentSection = currentScreenName;
            try {
              window.section = document.querySelector(`[data-section-name="${window.currentSection}"]`).getBoundingClientRect().y
              window.nextSection = document.querySelector(`[data-section-name="${window.currentSection}"]`).nextElementSibling.getBoundingClientRect().y
            } catch {}
            window.currentScreenName = currentScreenName;
            window.currentScreen = +currentMenuPoint.dataset.number;
          }
        });
      });
      /**Переключение меню при скроле NED*/
    }

    if (document.documentElement.clientWidth <= 760) {
      $(".slider-control__item--arrows").append($(".other__control"));
    }

    if (document.documentElement.clientWidth <= 480) {
      $(".features__title").each(function (i) {
        if (i) {
          $(this).remove();
        }
      });

      $(".features__link").each(function (i) {
        if (i < $(".features__item").length - 1) {
          $(this).remove();
        }
      });
    }

    if (document.documentElement.clientWidth <= 510) {
      $(".view__wrap-right-content").each(function () {
        const wrap = $('<div class="view__block"></div>');
        wrap.append($('<a href="#" class="btn view__btn">Подробнее</a>'));
        $(this).append(wrap);
      });
    }

    burgerBtn.on("click", (e) => {
      e.preventDefault();

      burgerBtn.toggleClass("burger-btn--open");

      if ($(".navigation__content").hasClass("navigation--show")) {
        $(".header__info").css("display", "flex");
      } else {
        $(".header__info").css("display", "none");
      }

      $(".navigation__content").toggleClass("navigation--show");
    });

    $(document).on("click", ".submit__form", (e) => {
      const $form = $(e.target.closest("[data-popup]"));
      e.preventDefault();
      const inputs = $form.find($(".popup__input"));
      const isValid = validateForm(inputs);

      if (isValid) {
        sendAjaxForm("static/mail.php", $form);
      }
    });

    function removeFormTextWarn(input) {
      input.parent().find(".form__warn").remove();
    }

    function removeNodeByDelay(node, delay) {
      setTimeout(() => {
        node.remove();
      }, delay);
    }

    function validateForm(inputs) {
      let isValid = true;
      inputs.each(function () {
        $(this).on("input", (e) => {
          if ($(e.target).val().replace(/\s+/g, "")) {
            removeFormTextWarn($(this));
            isValid = false;
            return;
          } else {
            removeFormTextWarn($(this));
            $(this)
              .parent()
              .append('<div class="form__warn">Это поле обязательное</div>');
            isValid = false;
            return;
          }
        });

        if (!$(this).val().replace(/\s+/g, "")) {
          removeFormTextWarn($(this));
          $(this)
            .parent()
            .append('<div class="form__warn">Это поле обязательное</div>');
          isValid = false;
        }
      });

      return isValid;
    }

    function sendAjaxForm(url, selectorForm) {
      const status = {
        sucess: "Спасибо за заявку мы с вами свяжемся в ближайшее время",
        error: "Ошибка на сервере повторите попытку позже",
      };

      $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $(selectorForm).serialize(), // Сеарилизуем объект
        success: function (response) {
          //Данные отправлены успешно
          $(selectorForm).append(
            `<div class="form__status">${status.sucess}</div>`
          );
          const msg = $(selectorForm).find(".form__status");
          removeNodeByDelay(msg, 5000);
          $(selectorForm)[0].reset();
        },
        error: function (response) {
          // Данные не отправлены
          $(selectorForm).append(
            `<div class="form__status">${status.error}</div>`
          );
          const msg = $(selectorForm).find(".form__status");

          removeNodeByDelay(msg, 5000);
          $(selectorForm)[0].reset();
        },
      });
    }

    $(window).on("scroll", (e) => {
      if (header.offset().top > 60) {
        header.addClass("header--scrolled");
      } else {
        header.removeClass("header--scrolled");
      }

      const position = $(this).scrollTop();

      section.each(function () {
        const topPos = $(this).offset().top - 500,
          bottomPos = topPos + $(this).outerHeight();

        if (position >= topPos && position <= bottomPos) {
          nav.find(".navigation__link").removeClass("navigation__link--active");
          const sectionName =
            $(this).attr("id") === "other" ? "about" : $(this).attr("id");
          nav
            .find('a[href="#' + sectionName + '"]')
            .addClass("navigation__link--active");
        }
      });

      /* SIDEBAR SCROLL COLOR CHANGE */
      let activeSection = $(".navigation__link--active")
        .children("a")
        .attr("href");
    });

    nav.find(".navigation__link").each(function (_, item) {
      $(this).on("click", (e) => {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop:
                $(this.hash).offset().top - (header.outerHeight() - 80),
            },
            800
          );
        e.preventDefault();
        nav.find(".navigation__content").removeClass("navigation--show");
      });
    });

    anchorLinks.each(function (_, item) {
      $(this).on("click", (e) => {
        const hash = $(this.hash) ? $(this.hash).offset().top : 0;
        $("html,body")
          .stop()
          .animate({ scrollTop: hash - (header.outerHeight() - 80) }, 1500);
        e.preventDefault();
        nav.find(".navigation__content").removeClass("navigation--show");
      });
    });

    function tabs(
      triggerSelector,
      contentSelector,
      activeClass,
      subTabsSelector,
      activeSubClass
    ) {
      const tabs = $(triggerSelector);
      const content = $(contentSelector);
      const active = activeClass;
      const subTabs = $(subTabsSelector);
      const activeSub = activeSubClass;

      tabs.each(function (i) {
        $(this).parent().attr("data-idx", i);

        subTabs
          .eq(i)
          .children()
          .each(function (j) {
            $(this).attr("data-sub-tab", j);

            $(this).on("click", (e) => {
              e.preventDefault();
            });
          });

        $(this).on("click", (e) => {
          e.preventDefault();
          showTab($(this).parent().attr("data-idx"), 0);
        });
      });

      function showTab(idx, i = 0) {
        hideTabs();
        const el = $(`[data-idx="${idx}"]`);

        el.addClass(activeClass);
        content.eq(idx).show();
        sliderView(content.eq(idx), idx);
      }

      function hideTabs() {
        tabs.each(function () {
          $(this).parent().removeClass(activeClass);
        });

        content.each(function () {
          $(this).hide();
        });
      }

      hideTabs(true);
      showTab(0, true, 0);
    }

    modalLinks.each(function () {
      $(this).on("click", (e) => {
        e.preventDefault();
        overlay.addClass("overlay--show");
        overlay.find(".popup__callback").css("display", "flex");
      });
    });

    function sliderView(el, idx) {
      const subTabs = $("[data-sub-tab]");
      const listSubTab = $(".view__sub-list").eq(idx);

      listSubTab.children().removeClass("view__sub-item--active");

      listSubTab.children().eq(0).addClass("view__sub-item--active");

      el.on("init beforeChange", (_, slick, currentSlide, nextSlide = 0) => {
        subTabs.each(function () {
          $(this).removeClass("view__sub-item--active");
        });

        listSubTab.children().eq(nextSlide).addClass("view__sub-item--active");
      });

      el.on("init afterChange", (_, slick, currentSlide = 0, nextSlide) => {
        const wrap = $(".view__content");
        const wrapNext = $(slick.$slides[currentSlide + 1] || slick.$slides[0]);
        const wrapPrev = $(
          slick.$slides[currentSlide - 1] ||
            slick.$slides[slick.$slides.length - 1]
        );
        const btnPrev = wrap.find(".view__control-btn--prev span");
        const btnNext = wrap.find(".view__control-btn--next span");

        btnNext.text(wrapNext.find(".view__wrap-title").text());
        btnPrev.text(wrapPrev.find(".view__wrap-title").text());
      });

      if (el.hasClass("slick-initialized")) {
        el.slick("setPosition");
        return;
      }

      const slider = el.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
      });

      listSubTab.find(".view__sub-tab").each(function (i) {
        $(this).on("click", (e) => {
          e.preventDefault();

          slider.slick("slickGoTo", i);
        });
      });

      if (document.documentElement.clientWidth <= 510) {
        slider.on("setPosition", function (event, slick) {
          slick.$slides.css("height", slick.$slideTrack.height() + "px");
        });
      }

      $(".view__control-btn--prev").click(function () {
        el.slick("slickPrev");
      });

      $(".view__control-btn--next").click(function () {
        el.slick("slickNext");
      });
    }

    tabs(
      ".view__tab",
      ".view__wrap",
      "view__tabs-item--active",
      ".view__sub-list",
      "view__sub-item--active"
    );

    popupClose.on("click", (e) => {
      e.preventDefault();
      overlay.removeClass("overlay--show");
      overlay.find(".popup__callback").css("display", "none");
      overlay.find('.preview').css('display', 'none')
    });

    sliderFor.on("init", (_, slick, currentSlide = 0, nextSlide) => {
      if (document.documentElement.clientWidth <= 800) {
        slick.$slides.each(function () {
          const source = $(this).data("gallerySrc");
          $(this).attr("src", source);
        });
      }
    });

    sliderNav.on("init", (_, slick, currentSlide = 0, nextSlide) => {
      if (document.documentElement.clientWidth <= 800) {
        slick.$slides.each(function () {
          const source = $(this).data("gallerySrc");
          $(this).attr("src", source);
        });
      }

      $(".gallery__current").text(currentSlide + 1 + "/");
      $(".gallery__total").text(slick.$slides.length);
    });

    sliderNav.on("afterChange", (_, slick, currentSlide = 0, nextSlide) => {
      $(".gallery__current").text(currentSlide + 1 + "/");
      $(".gallery__total").text(slick.$slides.length);
    });

    sliderFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: sliderNav,
    });
    sliderNav.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: sliderFor,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

    mainWrap.on("init afterChange", (_, slick, current = 0) => {
      $(".promo__control-img img").css("display", "none");

      current += 1;

      if (current > slick.$slides.length - 1) {
        current = 0;
      }

      $(".promo__control-img img").eq(current).css("display", "block");
    });

    mainWrap.slick({
      arrows: false,
      dots: true,
    });

    featuresSlider.on(
      "init afterChange",
      (_, slick, currentSlide = 0, nextSlide) => {
        $(".layout__slider-text--current").text(currentSlide + 1 + "/");
        $(".layout__slider-text--total").text(slick.$slides.length);
      }
    );

    featuresSlider.slick({
      arrows: false,
    });

    if (document.documentElement.clientWidth <= 480) {
      featuresSlider.slick("unslick");
    }

    otherSlider.on(
      "init afterChange",
      (_, slick, currentSlide = 0, nextSlide) => {
        if (document.documentElement.clientWidth < 760) {
          const title = $(slick.$slides[currentSlide]).find(".other__title");
          const otherRight = $(slick.$slides[currentSlide]).find(
            ".other__right"
          );
          otherRight.append(title);
        }
        $(".other__current").text(currentSlide + 1 + "/");
        $(".other__total").text(slick.$slides.length);
        $(".slider-control__text--current").text(currentSlide + 1);
        $(".slider-control__text--total").text(slick.$slides.length);
      }
    );

    otherSlider.slick({
      arrows: false,
      dots: true,
      appendDots: $(".slider-control__item--dots"),
    });

    paperSlider.on("init afterChange", () => {
      paperSlider.on("setPosition", function (event, slick) {
        slick.$slides.css("height", slick.$slideTrack.height() + "px");
      });
    });

    paperSlider.slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".promo__control-content").click(function () {
      mainWrap.slick("slickNext");
    });

    $(".promo__control-btn--next").click(function () {
      mainWrap.slick("slickNext");
    });

    $(".promo__control-btn--prev").click(function () {
      mainWrap.slick("slickPrev");
    });

    $(".gallery__control-btn--prev").click(function () {
      sliderNav.slick("slickPrev");
    });

    $(".gallery__control-btn--next").click(function () {
      sliderNav.slick("slickNext");
    });

    $(".features__btn-prev").click(function () {
      featuresSlider.slick("slickPrev");
    });

    $(".features__btn-next").click(function () {
      featuresSlider.slick("slickNext");
    });

    $(".other__btn-prev").click(function () {
      otherSlider.slick("slickPrev");
    });

    $(".other__btn-next").click(function () {
      otherSlider.slick("slickNext");
    });

    $(".paper__btn-prev").click(function () {
      paperSlider.slick("slickPrev");
    });

    $(".paper__btn-next").click(function () {
      paperSlider.slick("slickNext");
    });

    let map;
    let map2;

    const infrastructure = {
      pharmacy: [
        {
          position: { lat: 50.5478458, lng: 30.2089071 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5504478, lng: 30.2090057 },
          icon: "assets/images/marker.svg",
        },
      ],
      bank: [

        {
          position: { lat: 50.5490812, lng: 30.2078007 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5511714, lng: 30.2118802 },
          icon: "assets/images/marker.svg",
        },
      ],
      shop: [
        {
          position: { lat: 50.5490659, lng: 30.2057488 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5515581, lng: 30.2126756 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5531882, lng: 30.2136539 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5551882, lng: 30.2136539 },
          icon: "assets/images/marker.svg",
          category:'shop',
        },
      ],
      post: [
        {
          position: { lat: 50.5507493, lng: 30.2064472 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5458633, lng: 30.2143231 },
          icon: "assets/images/marker.svg",
        },
      ],
      market: [

        {
          position: { lat: 50.547468, lng: 30.2166466 },
          icon: "assets/images/marker.svg",
        },
      ],
      parks: [
        {
          position: { lat: 50.5480098, lng: 30.2170865 },
          icon: "assets/images/marker.svg",
          category:'parks'
        },
      ],
      train: [
        {
          position: { lat: 50.548879, lng: 30.2202844 },
          icon: "assets/images/marker.svg",
          category:'train'
        },
      ],

      learning: [
        {
          position: { lat: 50.5529675, lng: 30.2154544 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5506204, lng: 30.2132308 },
          icon: "assets/images/marker.svg",
          category:'learning'
        },
      ],
      maill: [
        {
          position: { lat: 50.5490833, lng: 30.2165326 },
          icon: "assets/images/marker.svg",
          category:'maill'
        },
      ],
      stadium: [
        {
          position: { lat: 50.5540467, lng: 30.2132308 },
          icon: "assets/images/marker.svg",
          category:'stadium'
        },
      ]
    }

    map = new google.maps.Map(document.querySelector(".map__wrap"), {
      center: { lat: 50.5512484, lng: 30.2116098 },
      zoom: 16,
      styles: [
        {
          stylers: [
            {
              saturation: -100,
            },
            {
              gamma: 1,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "water",
          stylers: [
            {
              visibility: "on",
            },
            {
              saturation: 50,
            },
            {
              gamma: 0,
            },
            {
              hue: "#50a5d1",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              weight: 0.5,
            },
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.icon",
          stylers: [
            {
              gamma: 1,
            },
            {
              saturation: 50,
            },
          ],
        },
      ],
    });


    let markers2 = [
        {
          position: { lat: 50.548071, lng: 30.211061 },
          icon: "assets/images/mark-icon.svg",
        },
      {
        position: { lat: 50.5478458, lng: 30.2089071 },
        icon: "assets/images/marker-pharmacy.svg",
        category: 'pharmacy'
      },
      {
        position: { lat: 50.5504478, lng: 30.2090057 },
        icon: "assets/images/marker-ambulance.svg",
        category: 'ambulance'
      },

      {
        position: { lat: 50.5490812, lng: 30.2078007 },
        icon: "assets/images/marker-bank.svg",
        category: 'bank'
      },
      {
        position: { lat: 50.5511714, lng: 30.2118802 },
        icon: "assets/images/marker-bank.svg",
        category: 'bank'
      },
      {
        position: { lat: 50.5490659, lng: 30.2057488 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5515581, lng: 30.2126756 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5531882, lng: 30.2136539 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5551882, lng: 30.2136539 },
        icon: "assets/images/marker-market.svg",
        category: 'market',
      },
      {
        position: { lat: 50.5507493, lng: 30.2064472 },
        icon: "assets/images/marker-post.svg",
        category: 'post'
      },
      {
        position: { lat: 50.5458633, lng: 30.2143231 },
        icon: "assets/images/marker-post.svg",
        category: 'post'
      },

      {
        position: { lat: 50.547468, lng: 30.2166466 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.547468, lng: 30.2166466 },
        icon: "assets/images/marker-market2.svg",
        category: 'market2'
      },
      {
        position: { lat: 50.5480098, lng: 30.2170865 },
        icon: "assets/images/marker-tree.svg",
        category:'parks'
      },
      {
        position: { lat: 50.548879, lng: 30.2202844 },
        icon: "assets/images/marker-train.svg",
        category:'train'
      },
      {
        position: { lat: 50.5529675, lng: 30.2154544 },
        icon: "assets/images/marker-school.svg",
        category: 'learning'
      },
      {
        position: { lat: 50.5506204, lng: 30.2132308 },
        icon: "assets/images/marker-school.svg",
        category:'learning'
      },
      {
        position: { lat: 50.5490833, lng: 30.2165326 },
        icon: "assets/images/marker-mall.svg",
        category:'mall'
      },
      {
        position: { lat: 50.5540467, lng: 30.2132308 },
        icon: "assets/images/marker-stadium.svg",
        category:'stadium'
      }
    ]
    let markersOnMap = [];
    let activeCategories = new Set();
    function setMapOnAll(map) {
        markers2.forEach(function (newMark) {
          let marker = new google.maps.Marker(newMark);
          const infowindow = new google.maps.InfoWindow({
            content: `new Content` + Math.random() * 10
          });
          marker.addListener("click", (e) => {
            infowindow.open(map, marker);
          });
          marker.setMap(map);
          marker.category = newMark.category;
          activeCategories.add(newMark.category)
          markersOnMap.push(marker);
        })
    }

    function clearMarkers() {
      setMapOnAll(null);
    }

    function deleteMarkers() {
      clearMarkers();
    }

    $("[data-map]").each(function () {
      $(this).on("click", (e) => {
        e.preventDefault();
        $(this).closest(".map__item").toggleClass('map__item--active')

        if($(this).closest(".map__item").hasClass('map__item--active')) {
          markers2[$(this).data('map')] = infrastructure[$(this).data('map')]
          activeCategories.add(this.dataset.map);
          // console.log(activeCategories)
          // setMapOnAll(map)
          // return
        }else {
          activeCategories.delete(this.dataset.map);
        }


        delete markers2[$(this).data('map')]
        newFilterMarkers(markersOnMap, activeCategories)
        // deleteMarkers()
      })
    })
  function newFilterMarkers(markersArray, categoriesArray) {
    console.log(markersArray, categoriesArray)
    markersArray.forEach(mark=>{
      if (categoriesArray.has(mark.category) ){
        mark.setVisible(true)
      }else {
        mark.setVisible(false)
      }

      if(!mark.category) mark.setVisible(true)

    })

  }

    $('.map__item').each(function () {
      $(this).addClass('map__item--active')
     markers2[$(this).find('[data-map]').data('map')] =  infrastructure[$(this).find('[data-map]').data('map')]
      setMapOnAll(map)
    })

    map2 = new google.maps.Map(document.querySelector(".contacts__map"), {
      center: { lat: 50.5546023, lng: 30.2655502 },
      zoom: 16,
      styles: [
        {
          stylers: [
            {
              saturation: -100,
            },
            {
              gamma: 1,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "water",
          stylers: [
            {
              visibility: "on",
            },
            {
              saturation: 50,
            },
            {
              gamma: 0,
            },
            {
              hue: "#50a5d1",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              weight: 0.5,
            },
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.icon",
          stylers: [
            {
              gamma: 1,
            },
            {
              saturation: 50,
            },
          ],
        },
      ],
    });

    const markers = [
      {
        position: { lat: 50.5546023, lng: 30.2655502 },
        icon: "assets/images/mark-icon.svg",
      },
    ];

    markers.forEach((item) => {
      let marker = new google.maps.Marker(item);
      marker.setMap(map2);
    });

    (function(d, s){
      var js = d.createElement(s);
      window.WepsterInit = {
        hash: 'nfaFGJ679nhpsGC23'};
      js.src = 'https://my.wepster.com/init.js';
      document.getElementsByTagName('head')[0].appendChild(js);
    }(document, 'script'));

    (function () {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-175160820-1');
    })()
  })(jQuery);
});
