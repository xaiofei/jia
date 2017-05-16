/**
 * Created by Administrator on 2017/5/3.
 */

function zai(dom,obj,ele,ele2){
    var pullDownEle = $(dom);
    var pullUpEle = $(obj);
    var artList = $(ele);
    var count = 0;
    var topOffsetHeight = pullDownEle.height();
    var contentScroller = new iScroll(ele2, {
        topOffset: topOffsetHeight,
        onRefresh: function () {
            if (pullDownEle.hasClass('loading')) {
                pullDownEle.removeClass('loading');
                pullDownEle.find('span').text('下拉刷新');
            } else if (pullUpEle.hasClass('loading')) {
                pullUpEle.removeClass('loading');
                pullUpEle.find('span').text('加载更多');
            }
        },
        onScrollMove: function () {
//                console.log(this.y)
            if (this.y > 10 && !pullDownEle.hasClass('flip')) {
                pullDownEle.addClass('flip');
                pullDownEle.find('span').text('释放刷新');
            } else if (this.y < (this.maxScrollY - 10) && !pullUpEle.hasClass('flip')) {
                pullUpEle.addClass('flip');
                pullUpEle.find('span').text('释放加载');
            }
        },
        onScrollEnd: function () {
            if (pullDownEle.hasClass('flip')) {
                pullDownEle.removeClass('flip').addClass('loading');
                pullDownEle.findf('span').text('正在刷新');
                pullDownAction();
            } else if (pullUpEle.hasClass('flip')) {
                pullUpEle.removeClass('flip').addClass('loading');
                pullUpEle.find('span').text('正在加载');
                pullUpAction();
            }
        }
    });
    function pullDownAction() {
        console.log('刷新成功！');
    }
    function pullUpAction() {
        for (var i = 0; i < 10; i++) {
            var eA = document.createElement("p");
            eA.innerHTML = ++count;
            artList.append(eA);
        }
        contentScroller.refresh();
    }
}