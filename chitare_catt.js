var a = $("#chitare");
var b = $("#wrapper1");
var c = $("#list1");

var d = $("#percutie");
var e = $("#wrapper2");
var f = $("#list2");

var g = $("#suflat");
var h = $("#wrapper3");
var i = $("#list3");

var j = $("#alte");
var k = $("#wrapper4");
var l = $("#list4");

$(function() {
    a.click(function() {
        b.toggleClass('open');
    });
});

$(function() {
    d.click(function() {
        e.toggleClass('open');
    });
    
});

$(function() {
    g.click(function() {
        h.toggleClass('open');
    });
    
});

$(function() {
    j.click(function() {
        k.toggleClass('open');
    });
    
});
