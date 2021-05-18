// Текущая дата в Breaking News
//число
let day = new Date().getDate();
let dayDate = document.getElementsByClassName('date');
let insertDate = function () {
for (let item of dayDate) {item.innerText = day}
};
//месяц
insertDate();
let m = new Date().getMonth();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec'];
let monthDate = document.getElementsByClassName('month');
let insertMonth = function () {
for (let item of monthDate) {item.innerText = months[m]}};
insertMonth();
// Смена вкладок Our Services
let naviBlock = document.getElementById('top-menu');
let imgBlock = document.getElementById('imgServies');
let textBlock = document.getElementById('textServies');
let arrow = naviBlock.getElementsByTagName('svg');

            arrow = Array.prototype.slice.call(arrow);
            arrow.forEach(function(arrow) {
                arrow.tagName;
            });
            let idForImgBlock = function (imgBlock) {
                for (let i = 0; i < imgBlock.children.length; i++)
                {imgBlock.children[i].dataset.id = i;}
            };
            let idForNaviBlock = function (naviBlock) {
                for (let i = 0; i < naviBlock.children.length; i++)
                {naviBlock.children[i].dataset.id = i;}
            };
            let idForTextBlock = function (textBlock) {
                for (let i = 0; i < textBlock.children.length; i++)
                {textBlock.children[i].dataset.id = i;}
            };

            naviBlock.onclick = function(event) {
                let block = event.target;
                for (const elem of this.children) {
                    elem.classList.remove('services-link-action');
                }
                block.classList.add('services-link-action')};

            let onClickEvent = function(event) {
                        setActive (event.target);
                    };
            let setActive = function (event) {
                for(let i = 0; i < imgBlock.children.length; i++) {
                    if(imgBlock.children[i].dataset.id === event.dataset.id){
                        imgBlock.children[i].classList.remove('invisible');
                        continue;
                    }
                    imgBlock.children[i].classList.add('invisible');
                }
                for(let i = 0; i < textBlock.children.length; i++) {
                    if(textBlock.children[i].dataset.id === event.dataset.id){
                        textBlock.children[i].classList.remove('invisible');
                        continue;
                    }
                    textBlock.children[i].classList.add('invisible');
                }
                for(const i in arrow) {
                    if (i === event.dataset.id) {
                        arrow[i].classList.add('svg');
                        continue;
                    }
                    arrow[i].classList.remove('svg');
                }
            };
naviBlock.addEventListener("click", onClickEvent);
idForTextBlock(textBlock);
idForNaviBlock(naviBlock);
idForImgBlock(imgBlock);

//Блок amazing

let imgs = document.getElementById('amazing-img-group');
let amazingBtn = document.getElementById('amazing-button');
let amazingNav = document.getElementById('amazing-nav');
console.log(imgs);
console.log(amazingBtn);
console.log(amazingNav);

let idForImgs = function (imgs) {
    for (let i = 0; i < imgs.children.length; i++)
    {imgs.children[i].dataset.id = i;}
};

let idForImgsVis = function(imgs) {
    for (let i = 12; i < imgs.children.length; i++)
    {imgs.children[i].classList.add('amazing-img-visibility')}
};
amazingBtn.onclick = function(){
    amazingBtn.style.display = 'none';
    for (let i = 12; i < 24; i++)
    {imgs.children[i].classList.remove('amazing-img-visibility')}
};

let idForamazingNav = function (amazingNav) {
    for (let i = 0; i < amazingNav.children.length; i++)
    {amazingNav.children[i].dataset.id = i;}
};
let onClickEventNavBtn = function(event) {
    let block = event.target;
    for (const elem of this.children) {
        elem.classList.remove('link-amazing-style-activ');
    }
    block.classList.add('link-amazing-style-activ')};
let onClickEventNav = function(event) {
    ActiveNav (event.target)
};
let ActiveNav = function(event) {
    if (event.dataset.id === "0") {
        amazingBtn.style.display = 'none';
        for (let i = 0; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'block';
        }
        console.log(event);
    }
    if (event.dataset.id === "1") {
        amazingBtn.style.display = 'none';
        for (let i = 0; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'none';
        }
        for (let i = 11; i < 23; i++) {
            imgs.children[i].style.display = 'block';
        }
    }
    if (event.dataset.id === "2") {
        amazingBtn.style.display = 'none';
        for (let i = 0; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'none';
        }
        for (let i = 23; i < 30; i++) {
            imgs.children[i].style.display = 'block';
        }
    }
    if (event.dataset.id === "3") {
        amazingBtn.style.display = 'none';
        for (let i = 0; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'none';
        }
        for (let i = 30; i < 36; i++) {
            imgs.children[i].style.display = 'block';
        }
    }
    if (event.dataset.id === "4") {
        amazingBtn.style.display = 'none';
        for (let i = 0; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'none';
        }
        for (let i = 36; i < imgs.children.length; i++) {
            imgs.children[i].style.display = 'block';
        }
    }
};

amazingNav.addEventListener("click", onClickEventNav);
amazingNav.addEventListener("click", onClickEventNavBtn);

idForamazingNav(amazingNav);
idForImgs(imgs);
idForImgsVis(imgs);