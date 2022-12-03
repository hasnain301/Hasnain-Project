function myHeader() {
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("active");
            lol.src = "images/logo2.png";
        } else {
            header.classList.remove("active");
            lol.src = "images/logo2.png";
        }

    })
}
myHeader();

function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function() {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bars.src = "images/menu.png"
        } else {
            nav.style.right = "0%";
            bars.src = "images/x.png"
        }
        nav.classList.toggle("new")
    }


}
myBars()






const countE1 = document.getElementById("count");
countvisit();

function countvisit() {
    fetch("https://api.countapi.xyz/update/mouse/laptop/?amount=1")
        .then(res => res.json())
        .then((res => {
            countE1.innerHTML = res.value;
        }));
}









var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});




let opened = document.getElementById("Login")
const modal = document.getElementById("modal-container")
const closed = document.getElementById("close")
const signbtn = document.getElementById("signup")
const loginbtn = document.querySelector(".navigation")

opened.addEventListener("click", () => {
    modal.classList.add("modal-active");
});
closed.addEventListener("click", () => {
    modal.classList.remove("modal-active");
});
signbtn.addEventListener("click", () => {
    modal.classList.remove("modal-active");

});


function dis() {
    const userpassword = document.getElementById("pass");
    if (userpassword.type === "password") {
        userpassword.type = "text"

    } else {
        userpassword.type = "password"
    }
}

function dispaly3() {
    const userpassword1 = document.getElementById("pass3");
    if (userpassword1.type === "password") {
        userpassword1.type = "text"

    } else {
        userpassword1.type = "password"
    }
}

function display1() {
    const userpassword2 = document.getElementById("pass2");
    if (userpassword2.type === "password") {
        userpassword2.type = "text"

    } else {
        userpassword2.type = "password"
    }
}

function first() {
    document.getElementById('one').style.color = "yellow"
}

function second() {
    document.getElementById('one').style.color = "yellow"
    document.getElementById('two').style.color = "yellow"
}

function third() {
    document.getElementById('one').style.color = "yellow"
    document.getElementById('two').style.color = "yellow"
    document.getElementById('three').style.color = "yellow"
}

function fourth() {
    document.getElementById('one').style.color = "yellow"
    document.getElementById('two').style.color = "yellow"
    document.getElementById('three').style.color = "yellow"
    document.getElementById('four').style.color = "yellow"
}

function fifth() {
    document.getElementById('one').style.color = "yellow"
    document.getElementById('two').style.color = "yellow"
    document.getElementById('three').style.color = "yellow"
    document.getElementById('four').style.color = "yellow"
    document.getElementById('five').style.color = "yellow"
    alert('THANK YOU')
}

$('#ok').click(function() {
    $('#reviewemail').val('')
    $('.reviewbox').val('')
    $('#one').color = 'white'
    $('#two').val('')
    $('#three').val('')
    $('#four').val('')
    $('#five').val('')

})