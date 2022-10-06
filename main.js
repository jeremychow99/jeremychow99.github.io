
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


function changeTheme() {
    console.log('abc');
    let checkbox = document.getElementById('checkbox')
    if (checkbox.checked) {
        document.body.classList.add('body-light')
        document.body.classList.remove('body-dark')
        document.getElementsByClassName('main-cont')[0].classList.add('main-container-light')
        document.getElementsByClassName('main-cont')[0].classList.remove('main-container-dark')
        document.getElementsByClassName('proj-cont')[0].classList.add('project-container-light')
        document.getElementsByClassName('proj-cont')[0].classList.remove('project-container-dark')
        document.getElementsByClassName('navbar-brand')[0].classList.add('navbar-Clight')
        document.getElementsByClassName('navbar-brand')[0].classList.remove('navbar-Cdark')
        let cards = document.getElementsByClassName('card')
        for (i = 0; i < 3; i++) {
            cards[i].classList.add('project-card-light')
            cards[i].classList.remove('project-card-dark')
        }
    }
    else {
        document.body.classList.add('body-dark')
        document.body.classList.remove('body-light')
        document.getElementsByClassName('main-cont')[0].classList.add('main-container-dark')
        document.getElementsByClassName('main-cont')[0].classList.remove('main-container-light')
        document.getElementsByClassName('proj-cont')[0].classList.add('project-container-dark')
        document.getElementsByClassName('proj-cont')[0].classList.remove('project-container-light')
        document.getElementsByClassName('navbar-brand')[0].classList.add('navbar-Cdark')
        document.getElementsByClassName('navbar-brand')[0].classList.remove('navbar-Clight')
        let cards = document.getElementsByClassName('card')
        for (i = 0; i < 3; i++) {
            cards[i].classList.add('project-card-dark')
            cards[i].classList.remove('project-card-light')
        }
    }
}
