//Varibles for Intel CPU's to hide and show Tables
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var q;
var r;
var s;

//Varibles for Ryzen CPU's to hide and show Tables
var i;
var j;
var k;
var l;
var m;
var n;
var o;
var p;
var t;
var u;
var v;

//This function intializes all of the variables to point at specific elements (Zen 4 and 13th Gen decided to be added after the fact causing the weird naming change)
function start() {
    q = document.getElementById("i913th");
    r = document.getElementById("i713th");
    s = document.getElementById("i513th");

    a = document.getElementById("i912th");
    b = document.getElementById("i712th");
    c = document.getElementById("i512th");
    d = document.getElementById("i312th");

    e = document.getElementById("i911th");
    f = document.getElementById("i711th");
    g = document.getElementById("i511th");
    h = document.getElementById("i311th");

    t = document.getElementById("R9zen4");
    u = document.getElementById("R7zen4");
    v = document.getElementById("R5zen4");

    i = document.getElementById("R9zen3");
    j = document.getElementById("R7zen3");
    k = document.getElementById("R5zen3");
    l = document.getElementById("R3zen3");

    m = document.getElementById("R9zen2");
    n = document.getElementById("R7zen2");
    o = document.getElementById("R5zen2");
    p = document.getElementById("R3zen2");
}

//The purpose of these functions is to hide all the tables from the CPU brand currently taking up the grid container space and then change the table to the one currently being selected by the user

//This is were the functions for Intel CPU's start
function showHidei913th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";

    if (q.style.display === "grid") {
        q.style.display = "none";
    }
    else {
        q.style.display = "grid";
    }
}

function showHidei713th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    s.style.display = "none";

    if (r.style.display === "grid") {
        r.style.display = "none";
    }
    else {
        r.style.display = "grid";
    }
}

function showHidei513th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";

    if (s.style.display === "grid") {
        s.style.display = "none";
    }
    else {
        s.style.display = "grid";
    }
}


function showHidei912th() {
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (a.style.display === "grid") {
        a.style.display = "none";
    }
    else {
        a.style.display = "grid";
    }
}

function showHidei712th() {
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (b.style.display === "grid") {
        b.style.display = "none";
    }
    else {
        b.style.display = "grid";
    }
}

function showHidei512th() {
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (c.style.display === "grid") {
        c.style.display = "none";
    }
    else {
        c.style.display = "grid";
    }
}

function showHidei312th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (d.style.display === "grid") {
        d.style.display = "none";
    }
    else {
        d.style.display = "grid";
    }
}

function showHidei911th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";

    if (e.style.display === "grid") {
        e.style.display = "none";
    }
    else {
        e.style.display = "grid";
    }
}

function showHidei711th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (f.style.display === "grid") {
        f.style.display = "none";
    }
    else {
        f.style.display = "grid";
    }
}

function showHidei511th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    h.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";


    if (g.style.display === "grid") {
        g.style.display = "none";
    }
    else {
        g.style.display = "grid";
    }
}

function showHidei311th() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";

    if (h.style.display === "grid") {
        h.style.display = "none";
    }
    else {
        h.style.display = "grid";
    }
}


//This is were the functions for Ryzen CPU's start
function showHideR9zen4() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (t.style.display === "grid") {
        t.style.display = "none";
    }
    else {
        t.style.display = "grid";
    }
}

function showHideR7zen4() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    v.style.display = "none";

    if (u.style.display === "grid") {
        u.style.display = "none";
    }
    else {
        u.style.display = "grid";
    }
}

function showHideR5zen4() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";

    if (v.style.display === "grid") {
        v.style.display = "none";
    }
    else {
        v.style.display = "grid";
    }
}

function showHideR9zen3() {
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (i.style.display === "grid") {
        i.style.display = "none";
    }
    else {
        i.style.display = "grid";
    }
}

function showHideR7zen3() {
    i.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (j.style.display === "grid") {
        j.style.display = "none";
    }
    else {
        j.style.display = "grid";
    }
}

function showHideR5zen3() {
    i.style.display = "none";
    j.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (k.style.display === "grid") {
        k.style.display = "none";
    }
    else {
        k.style.display = "grid";
    }
}

function showHideR3zen3() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (l.style.display === "grid") {
        l.style.display = "none";
    }
    else {
        l.style.display = "grid";
    }
}

function showHideR9zen2() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (m.style.display === "grid") {
        m.style.display = "none";
    }
    else {
        m.style.display = "grid";
    }
}

function showHideR7zen2() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (n.style.display === "grid") {
        n.style.display = "none";
    }
    else {
        n.style.display = "grid";
    }
}

function showHideR5zen2() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (o.style.display === "grid") {
        o.style.display = "none";
    }
    else {
        o.style.display = "grid";
    }
}

function showHideR3zen2() {
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";

    if (p.style.display === "grid") {
        p.style.display = "none";
    }
    else {
        p.style.display = "grid";
    }
}
document.addEventListener("DOMContentLoaded", start);
