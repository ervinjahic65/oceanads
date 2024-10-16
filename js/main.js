(function() {
    var sleeknoteScriptTag = document.createElement("script");
    sleeknoteScriptTag.type = "text/javascript";
    sleeknoteScriptTag.charset = "utf-8";
    sleeknoteScriptTag.src = ("//sleeknotecustomerscripts.sleeknote.com/57259.js");
    var s = document.getElementById("sleeknoteScript");
    s.parentNode.insertBefore(sleeknoteScriptTag, s);
})();

var _hsq = _hsq || [];
_hsq.push(["setContentType", "standard-page"]);


SR7.PMH  = {};
SR7.PMH["SR7_40_1"] = {
    cn: 0,
    state: false,
    fn: function() {
        if (_tpt !== undefined && _tpt.prepareModuleHeight !== undefined) {
            _tpt.prepareModuleHeight({
                id: "SR7_40_1",
                el: [800, 800, 700, 760, 600],
                type: 'hero',
                shdw: '0',
                gh: [800, 800, 700, 760, 600],
                gw: [1400, 1400, 1240, 778, 480],
                vpt: ['-200px&#039;,&#039;-200px&#039;,&#039;-200px&#039;,&#039;-200px&#039;,&#039;-200px'],
                size: {
                    fullWidth: true,
                    fullHeight: false
                },
                mh: '0',
                onh: 0,
                onw: 0,
                bg: {
                    color: '{"type":"solid","orig":"#eef0f1","string":"rgba(238, 240, 241, 1)"}'
                },
                plType: '-1',
                plColor: '#FFFFFF'
            });
            SR7.PMH["SR7_40_1"].state = true;
        } else if ((SR7.PMH["SR7_40_1"].cn++) < 100) setTimeout(SR7.PMH["SR7_40_1"].fn, 19);
    }
};
SR7.PMH["SR7_40_1"].fn();

SR7.PMH  = {};
SR7.PMH["SR7_40_2"] = {
    cn: 0,
    state: false,
    fn: function() {
        if (_tpt !== undefined && _tpt.prepareModuleHeight !== undefined) {
            _tpt.prepareModuleHeight({
                id: "SR7_40_2",
                el: [800, 800, 700, 760, 600],
                type: 'hero',
                shdw: '0',
                gh: [800, 800, 700, 760, 600],
                gw: [1400, 1400, 1240, 778, 480],
                vpt: ['-200px&#039;,&#039;-200px&#039;,&#039;-200px&#039;,&#039;-200px&#039;,&#039;-200px'],
                size: {
                    fullWidth: true,
                    fullHeight: false
                },
                mh: '0',
                onh: 0,
                onw: 0,
                bg: {
                    color: '{"type":"solid","orig":"#eef0f1","string":"rgba(238, 240, 241, 1)"}'
                },
                plType: '-1',
                plColor: '#FFFFFF'
            });
            SR7.PMH["SR7_40_2"].state = true;
        } else if ((SR7.PMH["SR7_40_2"].cn++) < 100) setTimeout(SR7.PMH["SR7_40_2"].fn, 19);
    }
};
SR7.PMH["SR7_40_2"].fn();

jQuery(document).ready(function($) {
    if ($(".slider.testimonials.kd-testimonial-670edcb3bbcc9").length) {
        $(".slider.testimonials.kd-testimonial-670edcb3bbcc9").owlCarousel({
            stageClass: "owl-wrapper",
            stageOuterClass: "owl-wrapper-outer",
            loadedClass: "owl-carousel",
            responsive: {
                0: {
                    dots: false,
                    nav: true,
                    navSpeed: 500,
                },
                960: {
                    nav: true,
                    navSpeed: 500,
                    dots: true,
                    dotsSpeed: 500,
                    dotsEach: true,
                }
            },
            items: 1,
            rewind: true,
            loop: true,
            autoplay: false,
            autoplayHoverPause: false,
        });
    }
});

jQuery(document).ready(function($) {
    if ($(".photobox-carousel.kd-pbc-670edcb3bd7a3 .pbc-content").length) {
        $(".photobox-carousel.kd-pbc-670edcb3bd7a3 .pbc-content").owlCarousel({
            stageClass: "owl-wrapper",
            stageOuterClass: "owl-wrapper-outer",
            loadedClass: "owl-carousel",
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: true,
                    navSpeed: 500,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                },
                1366: {
                    items: 4,
                    dots: true,
                    dotsEach: true,
                    dotsSpeed: 500,
                    nav: true,
                    navSpeed: 500,
                }
            },
            rewind: true,
            autoplay: false,
            autoplayHoverPause: false,
            addClassActive: true,
        });
    }
});

moment.updateLocale('en_US', {
    "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "monthsShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "weekdays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "weekdaysShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "week": {
        "dow": 1
    },
    "longDateFormat": {
        "LT": "g:i a",
        "LTS": null,
        "L": null,
        "LL": "F j, Y",
        "LLL": "F j, Y g:i a",
        "LLLL": null
    }
});

var megamenu = {
    "timeout": "300",
    "interval": "100"
};

if (SR7.F.init) SR7.F.init(); // DOUBLE CALL NOT A PROBLEM, MANAGED IN INIT
document.addEventListener('DOMContentLoaded', function() {
    if (SR7.F.init) SR7.F.init();
});
window.addEventListener('load', function() {
    if (SR7.F.init) SR7.F.init();
});
SR7.E.v6v7ids  = {}
SR7.E.v6v7ids = JSON.parse('{\"n\":{\"57\":422},\"s\":{\"40\":475}}');