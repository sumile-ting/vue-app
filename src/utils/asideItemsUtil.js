function isPropValInAsideItems(items, path) {
    let urlArr = [];
    getUrls(items, urlArr);
    return urlArr.includes(decodeURI(path));


}

function getUrls(items, urlArr) {
    if (items instanceof Array) {
        for (let i = 0; i < items.length; i++) {
            urlArr.push(items[i].url);
            getUrls(items[i].children, urlArr);
        }
    } else if(items){
        urlArr.push(items.url);
    }
}


export default isPropValInAsideItems;