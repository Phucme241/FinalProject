let items = document.querySelectorAll('.list .item');
let indexs = document.querySelectorAll('.container .item')
let itemNum = items.length;
let itemActive = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
prev.onclick = function(){
    changeActive((2*itemActive -1)%itemNum);
}
next.onclick = function(){
    changeActive((itemActive +1)%itemNum);
}
let refreshInterval = setInterval(() =>
{
    next.click();
}
, 5000)
function changeActive(x){
    itemActive = x;
    console.log(itemActive);
    showItem();
}
function showItem(){
    let curItem = document.querySelector(' .list .item.active');
    curItem.classList.remove('active');
    items[itemActive].classList.add('active');

    let curIndex = document.querySelector(' .container .item.active');
    curIndex.classList.remove('active');
    indexs[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() =>
    {
        next.click();
    }
    , 5000);
}

indexs.forEach((container, index) => {
    container.addEventListener('click', () =>
{
    changeActive(index);
})
});

