let heading = document.querySelector('h1');

// `document.querySelector` may return null if the selector doesn't match anything.
if (heading) {
    const badge = document.createElement('p');
    badge.classList.add('h3', 'text-center');
    badge.textContent = '💯';

    heading.insertAdjacentElement('afterend', badge);
}

/*  
    document.body.style.background = "#000";
    *document是获取的是网页的文档
    *body获取的是网页文档中body部分
    *style是样式属性
    *background是背景属性
    *#000是黑色
    *灰色部分是注释你可以不要输入进去
 */