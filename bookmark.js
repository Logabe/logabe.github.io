let mediaQueryList = window.matchMedia("(max-width: 800px)");
let bookmark = document.getElementById('bookmark');

function handleResize(mql) {
    moveBookMark(mql.matches);
}

handleResize(mediaQueryList);

mediaQueryList.addEventListener("change", handleResize);

function onBookmarkClick(event) {
    if (mediaQueryList.matches) {
        moveBookMark(bookmark.outofway)
    }
}

function moveBookMark(check) {
    bookmark.outofway = !check;
    bookmark.style.top = (check ? -300 : -10) + 'px';
}

bookmark.addEventListener("click", onBookmarkClick)