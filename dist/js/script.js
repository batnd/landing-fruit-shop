$(document).ready(function () {

    // WOW.js Animation
    new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 200,
        mobile: true,
        live: true
    }).init();

    // -----------------------
    // Slider - section.daysProduct .daysProduct__container .daysProduct__content .daysProduct__carousel
    let mainFruits = $(".daysProduct__mainFruit");
    let mainFruitMango = $("#mainFruit-Mango");
    let mainFruitPapaya = $("#mainFruit-Papaya");
    let mainFruitDragonFruit = $("#mainFruit-DragonFruit");
    let mainFruitLychee = $("#mainFruit-Lychee");
    let mainFruitDurian = $("#mainFruit-Durian");

    let daysProductDescriptionFruits = $(".daysProduct__description-fruit");
    let daysProductDescriptionMango = $("#daysProduct__description-mango");
    let daysProductDescriptionPapaya = $("#daysProduct__description-papaya");
    let daysProductDescriptionDragonFruit = $("#daysProduct__description-dragonFruit");
    let daysProductDescriptionLychee = $("#daysProduct__description-lychee");
    let daysProductDescriptionDurian = $("#daysProduct__description-durian");

    // Vertical
    $('.daysProduct__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $(".arrow-prev"),
        nextArrow: $(".arrow-next"),
        responsive: [
            {
                breakpoint: 853,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    draggable: true
                }
            }]
    });

    // Событие клика по миниатюре фрукта в вертикальном слайдере
    $(".slider__item").click(function () {
        showClickedFruit(this);
    });

    // Функция смены изображения фрукта и его описания по клику в слайдере
    function showClickedFruit(target) {
        // Удаляю у всех изображений фруктов и описаний фруктов класс "отображения"
        mainFruits.removeClass("daysProduct__mainFruit-selected");
        daysProductDescriptionFruits.removeClass("daysProduct__description-fruit-active");

        // Определяю нажатую миниатюру фрукта - добавляю классы для "отображения"
        if ($(target).hasClass("event_slider__item-Mango")) {
            daysProductImageAndDescriptionShow(mainFruitMango, daysProductDescriptionMango);
            return;
        }
        if ($(target).hasClass("event_slider__item-Papaya")) {
            daysProductImageAndDescriptionShow(mainFruitPapaya, daysProductDescriptionPapaya);
            return;
        }
        if ($(target).hasClass("event_slider__item-DragonFruit")) {
            daysProductImageAndDescriptionShow(mainFruitDragonFruit, daysProductDescriptionDragonFruit);
            return;
        }
        if ($(target).hasClass("event_slider__item-Lychee")) {
            daysProductImageAndDescriptionShow(mainFruitLychee, daysProductDescriptionLychee);
            return;
        }
        if ($(target).hasClass("event_slider__item-Durian")) {
            daysProductImageAndDescriptionShow(mainFruitDurian, daysProductDescriptionDurian);
            return;
        }
    }

    // Функция добавления классов для отображения фрукта и его описания
    function daysProductImageAndDescriptionShow(fruitImage, fruitDescription) {
        fruitImage.addClass("daysProduct__mainFruit-selected");
        fruitDescription.addClass("daysProduct__description-fruit-active");
    }

    // -----------------------

    // Timer - section.daysProduct .daysProduct__container .daysProduct__content .daysProduct__promotion
    const $hours = $(".timerHours");
    const $minutes = $(".timerMinutes");
    const $seconds = $(".timerSeconds");
    const $hoursText = $(".timerHoursText");
    const $minutesText = $(".timerMinutesText");
    const $secondsText = $(".timerSecondsText");
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth(), 24);
    let timerId = null;

    function declensionNumbers(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const difference = deadline - new Date();
        if (difference <= 0) {
            clearInterval(timerId);
        }
        const hours = difference > 0 ? Math.floor(difference / 1000 / 60 / 60) : 0;
        const minutes = difference > 0 ? Math.floor(difference / 1000 / 60) % 60 : 0;
        const seconds = difference > 0 ? Math.floor(difference / 1000) % 60 : 0;

        $hours.text(hours < 10 ? "0" + hours : hours);
        $minutes.text(minutes < 10 ? "0" + minutes : minutes);
        $seconds.text(seconds < 10 ? "0" + seconds : seconds);

        $hoursText.text(declensionNumbers(hours, ["час", "часа", "часов"]));
        $minutesText.text(declensionNumbers(minutes, ["минута", "минуты", "минут"]));
        $secondsText.text(declensionNumbers(seconds, ["секунда", "секунды", "секунд"]));
    }

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);

    // -----------------------

    // Switcher - section.ourFruits
    let itemButtonsAll = $(".item__button");

    let ourFruitItemAll = $(".ourFruits__item");

    let ourFruitsMango = $("#ourFruits__mango");
    let ourFruitsPassionFruit = $("#ourFruits__passionFruit");
    let ourFruitsPapaya = $("#ourFruits__papaya");
    let ourFruitsDragonFruit = $("#ourFruits__dragonFruit");
    let ourFruitsCoconut = $("#ourFruits__coconut");
    let ourFruitsLychee = $("#ourFruits__lychee");
    let ourFruitsPineapple = $("#ourFruits__pineapple");
    let ourFruitsDurian = $("#ourFruits__durian");
    let ourFruitsGuava = $("#ourFruits__guava");

    itemButtonsAll.on("click", function () {
        itemButtonsAll.removeClass("item__button-selected");
        ourFruitItemAll.removeClass("itemShow");

        if ($(this).hasClass("item__button-first")) {
            $(this).addClass("item__button-selected");
            ourFruitsShowFruit([ourFruitItemAll]);
        }
        if ($(this).hasClass("item__button-second")) {
            $(this).addClass("item__button-selected");
            ourFruitsShowFruit([ourFruitsPapaya, ourFruitsDragonFruit, ourFruitsDurian, ourFruitsGuava, ourFruitsLychee]);
        }
        if ($(this).hasClass("item__button-third")) {
            $(this).addClass("item__button-selected");
            ourFruitsShowFruit([ourFruitsMango, ourFruitsPapaya, ourFruitsDragonFruit, ourFruitsLychee, ourFruitsDurian]);
        }
        if ($(this).hasClass("item__button-last")) {
            $(this).addClass("item__button-selected");
            ourFruitsShowFruit([ourFruitsPassionFruit, ourFruitsCoconut, ourFruitsPineapple, ourFruitsGuava]);
        }
    });

    function ourFruitsShowFruit(fruit_array) {
        for (let i = 0; i < fruit_array.length; i++) {
            fruit_array[i].addClass("itemShow");
        }
    }

    // -----------------------

    // Slider - section.reviews .reviews__container .reviews__content .reviews__slider

    // Horizontal
    $(".reviews__slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        variableWidth: true,
        prevArrow: $(".reviews__arrow-prev"),
        nextArrow: $(".reviews__arrow-next"),
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    variableWidth: false,
                }
            },
            {
                breakpoint: 971,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });

    // -----------------------

    // Accordion
    let icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
        icons: icons,
        collapsible: true,
        heightStyle: "content"
    });
    //  Изменение иконок стрелок по умолчанию
    let accordionIcon = $(".ui-icon");
    accordionIcon.html(
        "<svg class='accordion__arrow-top' xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" style=\"enable-background:new 0 0 512.002 512.002;\" xml:space=\"preserve\" viewBox=\"117.74 0 276.52 512\"><g>\t<g>\t\t<path d=\"M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z\"></path>\t</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"
    );

    // -----------------------

    // ScrollIntoView
    // Scroll - buttonToHead
    $("#scrollToTop").click(function () {
        scrollIntoViewSmooth($(".header")[0]);
    });
    // scroll - lookAtFruits
    $("#scrollLookAtFruits").click(function () {
        scrollIntoViewSmooth($(".ourFruits")[0]);
    })
    // scroll - menu__link
    $(".menu__link").click(function (event) {
        event.preventDefault()
        if ($(this).text().toLowerCase() === "товар дня") {
            scrollIntoViewSmooth($(".daysProduct")[0]);
        }
        if ($(this).text().toLowerCase() === "почему мы") {
            scrollIntoViewSmooth($(".whyWe")[0]);
        }
        if ($(this).text().toLowerCase() === "наши фрукты") {
            scrollIntoViewSmooth($(".ourFruits")[0]);
        }
        if ($(this).text().toLowerCase() === "как заказать") {
            scrollIntoViewSmooth($(".orderingGuide")[0]);
        }
        if ($(this).text().toLowerCase() === "отзывы") {
            scrollIntoViewSmooth($(".reviews")[0]);
        }
    });

    function scrollIntoViewSmooth(section) {
        section.scrollIntoView({behavior: "smooth"});
    }

    // -----------------------

    // Popup
    let allButtonsActionOrder = $(".button-action-order");

    let popup = $(".orderPopup");
    let popupBackground = $(".orderPopup-background");
    let popupXMark = $(".orderPopup__exit");

    let inputFruit = $(".inputFruit");
    let inputCustomer = $(".inputCustomer");
    let inputPhone = $(".inputPhone");

    // Событие появления окна заказа и добавление "нажатого" фрукта в текстовое поле
    allButtonsActionOrder.click(function () {
        invalidInputElementsRemove([inputFruit, inputCustomer, inputPhone], "invalid-input");
        popup.addClass("popupShow");

        if ($(this).parent().hasClass("ourFruits__item")) {
            inputFruit.val($(this).prev().prev().text());
        }

        if ($(this).parent().hasClass("daysProduct__description-fruit")) {
            inputFruit.val($(this).prev().prev().prev().text());
        }
    });
    // События закрытия окна заказа
    popupXMark.click(function () {
        popup.addClass("popupHide");
        setTimeout(() => {
            popup.removeClass("popupShow").removeClass("popupHide");
        }, 500);
    });
    popupBackground.click((event) => {
        popup.addClass("popupHide");
        setTimeout(() => {
            popup.removeClass("popupShow").removeClass("popupHide");
        }, 500);
    });

    // Popup - validation
    let formButtonAction = $("#form__button-action");
    let formInvalidText = $(".input__invalidForm-text");
    let formInvalidExclamation = $(".input__invalidForm");

    formButtonAction.on("click", function () {
        let formInputFruit = $("#formInputFruit");
        let formInputCustomer = $("#formInputCustomer");
        let formInputPhone = $("#formInputPhone");
        let formInputCheckbox = $(".form__input-checkbox");
        let inputErrors = false;
        let itlogiaURL = "https://testologia.site/checkout";
        let loader = $(".loader");

        let popupForm = $(".orderPopup-main__wrapper");
        let popupSuccess = $(".orderPopup-success");

        invalidInputElementsRemove([formInputFruit, formInputCustomer, formInputPhone], "invalid-input");

        if (!formInputFruit.val()) {
            invalidInputElementsShow(formInputFruit);
            inputErrors = true;
        }
        if (!formInputCustomer.val()) {
            invalidInputElementsShow(formInputCustomer);
            inputErrors = true;
        }
        if (!formInputPhone.val()) {
            invalidInputElementsShow(formInputPhone);
            inputErrors = true;
        }

        if (!inputErrors) {
            loader.css("display", "flex");

            $.ajax({
                method: "POST",
                url: itlogiaURL,
                data: {
                    product: formInputFruit.val(),
                    name: formInputCustomer.val(),
                    phone: formInputPhone.val(),
                    agreeNewsPromo: formInputCheckbox.val()
                }
            }).done(function (message) {
                loader.hide();
                if (message.success === 0) {
                    alert("При оформлении заказа возникла ошибка :( Позвоните нам и сделайте заказ через менеджера")
                }
                if (message.success === 1) {
                    popupForm.hide();
                    popupSuccess.css("display", "flex");

                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                }
            })
        }
    });

    function invalidInputElementsRemove(array, classNameToRemove) {
        formInvalidText.hide();
        formInvalidExclamation.hide();

        for (let i = 0; i < array.length; i++) {
            array[i].removeClass(classNameToRemove);
        }
    }

    function invalidInputElementsShow(formInputName) {
        formInputName.addClass("invalid-input");
        formInputName.next().show();
        formInputName.parent().next().show();
    }

    // -----------------------

    // InputMask for phone number
    let phoneMask = $(".phoneMask");
    phoneMask.inputmask({"mask": "+9-999-999-99-99", showMaskOnHover: false});

    // Burger Menu
    let burgerIcon = $(".burger-menu");
    let menu = $(".menu");
    let menuLinks = $(".menu__item");
    let menuCloseButton = $(".menuCloseButton");
    let body = $("body");

    burgerIcon.click(function() {
        burgerIcon.removeClass("burger-menuShow");
        menu.addClass("bMenu__window");
        body.addClass("stop-scrolling");
        menuLinks.on("click", closeBurgerMenu);
        menuCloseButton.on("click", closeBurgerMenu);

    });
    function closeBurgerMenu () {
        menu.addClass("bMenuHide");
        body.removeClass("stop-scrolling");
        burgerIcon.addClass("burger-menuShow");
        setTimeout(() => {
            menu.removeClass("bMenu__window").removeClass("bMenuHide");
        }, 500);
    }
});