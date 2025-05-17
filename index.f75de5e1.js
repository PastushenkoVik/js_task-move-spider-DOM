"use strict";
document.addEventListener("click", (e)=>{
    const wall = document.querySelector(".wall");
    const borderWidth = wall.clientLeft;
    const rect = wall.getBoundingClientRect();
    const spider = document.querySelector(".spider");
    const spiderHalfWidth = spider.clientWidth / 2;
    const spiderHalfHeight = spider.clientHeight / 2;
    if (!e.target.closest(".wall")) return;
    let posX = e.clientX - rect.left - borderWidth - spiderHalfWidth;
    if (posX < 0) posX = 0;
    else if (posX + spider.clientHeight >= rect.width - borderWidth) posX = rect.width - spider.clientHeight - borderWidth * 2;
    let posY = e.clientY - rect.top - borderWidth - spiderHalfHeight;
    if (posY < 0) posY = 0;
    else if (posY + spider.clientHeight >= rect.height - borderWidth) posY = rect.height - spider.clientHeight - borderWidth * 2;
    spider.style.left = `${posX}px`;
    spider.style.top = `${posY}px`;
});

//# sourceMappingURL=index.f75de5e1.js.map
