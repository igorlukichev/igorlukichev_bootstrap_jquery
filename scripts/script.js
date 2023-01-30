$(document).ready(function () {
    let submit = $('.btn-submit').eq(0);
    let submit1 = $('.btn-submit').eq(1);
    let name = $('.form-control.name').eq(0);
    let name1 = $('.form-control.name').eq(1);
    let lastName = $('.form-control.lastName').eq(0);
    let lastName1 = $('.form-control.lastName').eq(1);
    let phone = $('.form-control.phone').eq(0);
    let phone1 = $('.form-control.phone').eq(1);
    let index = $('.form-control.index').eq(0);
    let index1 = $('.form-control.index').eq(1);
    let country = $('.form-control.country').eq(0);
    let country1 = $('.form-control.country').eq(1);
    let address = $('.form-control.address').eq(0);
    let address1 = $('.form-control.address').eq(1);
    let input = $('.form  input');
    let popUp = $('.popUp').eq(0);
    let popUp1 = $('.popUp').eq(1);
    let form = $('.form-bottom').eq(0);
    let form1 = $('.form-bottom').eq(1);
    let formTitle = $('.form-title').eq(0);
    let formTitle1 = $('.form-title').eq(1);
    let image = $('img');

    image.on('click', function () {
        image.addClass('show');
    });

    $('.order-btn').click(function () {
        $('.form-bottom')[0].scrollIntoView({behavior: "smooth"});
        $('.form-bottom')[1].scrollIntoView({behavior: "smooth"});
    });

    phone.inputmask({"mask": "9 (999) 999-9999"});
    phone1.inputmask({"mask": "9 (999) 999-9999"});

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $(function () {

        $(".accordion").accordion({
            heightStyle: 'content',
            collapsible: true,
        });

        index.keypress(function (e) {
            let charCode = (e.which) ? e.which : e.keyCode
            if (String.fromCharCode(charCode).match(/[^0-9]/g))
                return false;
        });
        index1.keypress(function (e) {
            let charCode = (e.which) ? e.which : e.keyCode;
            if (String.fromCharCode(charCode).match(/[^0-9]/g))
                return false;
        });

        submit.click(function (e) {
            e.preventDefault();
            if (!name.val()) {
                alert(`Заполните поле Имя`);
                return;
            }
            if (!lastName.val()) {
                alert(`Заполните поле Фамилия`);
                return;
            }
            if (!phone.val()) {
                alert(`Заполните поле Телефон`);
                return;
            }
            if (!index.val()) {
                alert(`Заполните поле Индекс`);
                return;
            }
            if (!country.val()) {
                alert(`Заполните поле Страна`);
                return;
            }
            if (!address.val()) {
                alert(`Заполните поле Адрес`);
                return;

            }
            if (index.val().length < 6 && index.val().length > 0) {
                alert('В поле Индекс должно быть не менее 6 символов');
                return;
            }
            else {
                formTitle.addClass('d-none');
                form.addClass('d-none');
                popUp.removeClass("d-none");
                input.val('')
            }
        });
        submit1.click(function (event) {
            event.preventDefault();
            if (!name1.val()) {
                alert(`Заполните поле Имя`);
                return;
            }
            if (!lastName1.val()) {
                alert(`Заполните поле Фамилия`);
                return;
            }
            if (!phone1.val()) {
                alert(`Заполните поле Телефон`);
                return;
            }
            if (!index1.val()) {
                alert(`Заполните поле Индекс`);
                return;
            }
            if (!country1.val()) {
                alert(`Заполните поле Страна`);
                return;
            }
            if (!address1.val()) {
                alert(`Заполните поле Адрес`);
                return;
            }
            if (index1.val().length < 6 && index1.val().length > 0) {
                alert('В поле Индекс должно быть не менее 6 символов');
                return;
            }
            else {
                formTitle1.addClass('d-none');
                form1.addClass('d-none');
                popUp1.removeClass("d-none");
                input.val('')
            }
        });
        $('.lightzoom').lightzoom({speed: 400, viewTitle: true});
    })

});


