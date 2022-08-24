// 置顶
var four;
function toTop() {
    four=setInterval(FourscrollBy,10);
}
function FourscrollBy(eachHeight){
    if(document.documentElement && document.documentElement.scrollTop) //IE
    {
        if(document.documentElement.scrollTop<=0){
            clearInterval(four);
        }else{
            window.scrollBy(0,-30);
        }
    }else{ //Chrome不支持documentElement.scrollTop
        if(document.body.scrollTop<=0){
            clearInterval(four);
        }else{
            window.scrollBy(0,-30);
        }
    }
}

function toHtml(val){
    let x = 0;
    if(val == 1){
        let btn = document.getElementById('toHtml1');
        x = btn.offsetTop - 20;
    }else if(val == 2){
        let btn = document.getElementById('toHtml2');
        x = btn.offsetTop - 20;
    }else if(val == 3){
        let btn = document.getElementById('toHtml3');
        x = btn.offsetTop - 20;
    }else if(val == 4){
        let btn = document.getElementById('toHtml4');
        x = btn.offsetTop - 20;
    }
    if(x > 0){
        let timer = setInterval(() => {
            document.documentElement.scrollTop += 30
            if (document.documentElement.scrollTop >= x) {
                clearInterval(timer)
            }
        }, 20);
        let timer_1 = setInterval(() => {
            window.pageYOffset += 30
            if (window.pageYOffset >= x) {
                clearInterval(timer_1)
            }
        }, 20);
        let timer_2 = setInterval(() => {
            document.body.scrollTop += 30
            if (document.body.scrollTop >= x) {
                clearInterval(timer_2)
            }
        }, 20);
    }
}

var CarouselTimeer = setInterval(Carousel, 5000);

var checkTopTimeer = setInterval(checkTop, 1000);

var isINMessage = false;
function closeMessage(){
    if(!isINMessage){
        closeContact()
    }
}

function checkTop(){
    //document.body.scrollHeight; 	内容区域的高度
    let flag = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    if(flag){ //此时内容高度大于页面高度，有滚动条
        //判断滚动条的位置，
        // 谷歌浏览器和没有声明 DTD  <DOCTYPE    >：
        // document.body.scrollTop;
        // 火狐和其他浏览器
        // document.documentElement.scrollTop;
        // ie9+  和 最新浏览器   都认识
        // window.pageXOffset;     pageYOffset  （scrollTop）
        let scrollTop = window.pageYOffset ||document.documentElement.scrollTop|| document.body.scrollTop || 0;
        // console.log(scrollTop);
        if(scrollTop == 0){ //此时滚动条处于页面的顶部
            //触发下拉刷新事件
            // alert("123")
            document.getElementById("customizerTOP").style.display = 'none'
            if(document.getElementById("customizerMsg").className.indexOf("customize4r") > -1){
                document.getElementById("customizerMsg").className = document.getElementById("customizerMsg").className.replace("customize4r", "")
                document.getElementById("customizerMsg").className += " customize3r"
            }
        }else {
            // alert("222")
            document.getElementById("customizerTOP").style.display = 'block'
            if(document.getElementById("customizerMsg").className.indexOf("customize3r") > -1){
                document.getElementById("customizerMsg").className = document.getElementById("customizerMsg").className.replace("customize3r", "")
                document.getElementById("customizerMsg").className += " customize4r"
            }
        }
    }
}

$(document).ready(function(){
    $(".modal-content").mouseover(function(){
        isINMessage = true
    });
    $(".modal-content").mouseout(function(){
        isINMessage = false
    });


    $(".line").mouseover(function(obj){
        // 暂停定时任务
        clearInterval(CarouselTimeer);

        //清除active
        let lines = document.getElementsByClassName("lines")[0].children;
        for(var i=0; i<lines.length; i++){
            if(lines[i].className.indexOf('active') > -1){
                lines[i].className = lines[i].className.replace("active", '')
            }
        }
        var index = -1
        if(obj.currentTarget.id == 'line01'){
            index = 0;
            if(document.getElementById("line01").className.indexOf("active") > -1){

            }else {
                document.getElementById("line01").className += ' active'
            }
        }else if(obj.currentTarget.id == 'line02'){
            index = 1;
            if(document.getElementById("line02").className.indexOf("active") > -1){

            }else {
                document.getElementById("line02").className += ' active'
            }
        }else if(obj.currentTarget.id == 'line03'){
            index = 2;
            if(document.getElementById("line03").className.indexOf("active") > -1){

            }else {
                document.getElementById("line03").className += ' active'
            }
        }else if(obj.currentTarget.id == 'line04'){
            index = 3;
            if(document.getElementById("line04").className.indexOf("active") > -1){

            }else {
                document.getElementById("line04").className += ' active'
            }
        }else if(obj.currentTarget.id == 'line05'){
            index = 4;
            if(document.getElementById("line05").className.indexOf("active") > -1){

            }else {
                document.getElementById("line05").className += ' active'
            }
        }else if(obj.currentTarget.id == 'line06'){
            index = 5;
            if(document.getElementById("line06").className.indexOf("active") > -1){

            }else {
                document.getElementById("line06").className += ' active'
            }
        }
        bannerLists(index);
    });
    $(".line").mouseout(function(){
        CarouselTimeer = setInterval(Carousel, 2000);
    });
});

// 首页轮播图
function Carousel() {
    let lines = document.getElementsByClassName("lines")[0].children;
    var index = -1;
    for(var i=0; i<lines.length; i++){
        if(lines[i].className.indexOf('active') > -1){
            if(i == lines.length - 1){
                index = 0
            }else {
                index = i + 1
            }
            lines[i].className = lines[i].className.replace("active", '')
        }
    }
    lines[index].className += " active"

    bannerLists(index)
}

function bannerLists(index) {
    let bannerLists = document.getElementsByClassName("banner-list-index")[0].children;
    for(var j=0; j< bannerLists.length; j++){
        bannerLists[j].className = bannerLists[j].className.replace("active", '')
        bannerLists[j].style.opacity = '0';
        bannerLists[j].style.transition = 'none 0s ease 0s'
    }

    bannerLists[index].className += 'active';
    bannerLists[index].style.opacity = '1';
    bannerLists[index].style.transition = 'top 0.75s cubic-bezier(0.23, 0.53, 0.31, 1) 0s, opacity 0.75s cubic-bezier(0.23, 0.53, 0.31, 1) 0s'
}

function changeType(val) {
    if(val == 1){
        $(".selected-line").css("transform","translateX(" + 0 + "px)");
        if(document.getElementById("Type1").className.indexOf("selected") > -1){

        }else {
            document.getElementById("Type1").className = "selected"
        }

        if(document.getElementById("Type2").className.indexOf("selected") > -1){
            document.getElementById("Type2").className = ""
        }

        if(document.getElementById("solutionType1").className.indexOf("dn") > -1){
            document.getElementById("solutionType1").className = document.getElementById("solutionType1").className.replace("dn", '')
        }

        if(document.getElementById("solutionType2").className.indexOf("dn") > -1){

        }else {
            document.getElementById("solutionType2").className += ' dn'
        }
    }else {
        $(".selected-line").css("transform","translateX(" + 144 + "px)");
        if(document.getElementById("Type1").className.indexOf("selected") > -1) {
            document.getElementById("Type1").className = ''
        }

        if(document.getElementById("Type2").className.indexOf("selected") > -1){

        }else {
            document.getElementById("Type2").className = 'selected'
        }

        if(document.getElementById("solutionType1").className.indexOf("dn") > -1){

        }else {
            document.getElementById("solutionType1").className += ' dn'
        }

        if(document.getElementById("solutionType2").className.indexOf("dn") > -1){
            document.getElementById("solutionType2").className = document.getElementById("solutionType2").className.replace("dn", '')
        }
    }
}

function changesicon(obj, val) {
    // 导航栏
    if(obj.className.indexOf("selected") > -1){
        let learnSteps = document.getElementsByClassName("learn-steps");
        for(var i=0; i<learnSteps[0].children.length; i++){
            let learnStep = learnSteps[0].children[i];
            if(learnStep.id == obj.id){

            }else {
                if(learnStep.className.indexOf("selected") > -1){
                    learnStep.className = learnStep.className.replace("selected", "")
                }
            }
        }
    }else {
        let learnSteps = document.getElementsByClassName("learn-steps");
        for(var i=0; i<learnSteps[0].children.length; i++){
            let learnStep = learnSteps[0].children[i];
            if(learnStep.id == obj.id){
                learnStep.className += " selected";
            }else {
                if(learnStep.className.indexOf("selected") > -1){
                    learnStep.className = learnStep.className.replace("selected", "")
                }
            }
        }
    }
    if(val == 1){
        if(document.getElementById("preStep").className.indexOf("dn") > -1){

        }else {
            document.getElementById("preStep").className += " dn";
        }
        if(document.getElementById("nextStep").className.indexOf("dn") > -1){
            document.getElementById("nextStep").className = document.getElementById("nextStep").className.replace("dn", '');
        }
        $("#test").css("transform","translateX(" + 0 + "%)");
    }else if(val == 5){
        if(document.getElementById("preStep").className.indexOf("dn") > -1){
            document.getElementById("preStep").className = document.getElementById("preStep").className.replace("dn", '');
        }
        if(document.getElementById("nextStep").className.indexOf("dn") > -1){

        }else {
            document.getElementById("nextStep").className += ' dn'
        }
        $("#test").css("transform","translateX(" + -400 + "%)");
    }else {
        document.getElementById("preStep").className = document.getElementById("preStep").className.replace("dn", '');
        document.getElementById("nextStep").className = document.getElementById("nextStep").className.replace("dn", '');
        if(val == 2){
            $("#test").css("transform","translateX(" + -100 + "%)");
        }else if(val == 3){
            $("#test").css("transform","translateX(" + -200 + "%)");
        }else if(val == 4){
            $("#test").css("transform","translateX(" + -300 + "%)");
        }
    }
    let learnContains = document.getElementsByClassName("learn-contain");
    if(learnContains.length >= val){
        for(var i=0; i<learnContains.length; i++){
            let learnContain = learnContains[i];
            if(i == val - 1){
                if(learnContain.className.indexOf("active") > -1){

                }else {
                    learnContain.className += ' active'
                }
            }else {
                if(learnContain.className.indexOf("active") > -1){
                    learnContain.className = learnContain.className.replace("active", "")
                }
            }
        }
    }
}

function preCheck(){
    var val = -1;
    let learnContains = document.getElementsByClassName("learn-contain");
    for(var i=learnContains.length - 1; i >= 0; i--){
        let learnContain = learnContains[i];
        if(learnContain.className.indexOf("active") > -1) {
            val = i - 1
        }
    }
    document.getElementById("nextStep").className = document.getElementById("nextStep").className.replace("dn", '');
    if(val == 0){
        document.getElementById("sicon01").className += ' selected'
        document.getElementById("sicon02").className = document.getElementById("sicon02").className.replace("selected", '')
        learnContains[0].className += ' active'
        learnContains[1].className = learnContains[1].className.replace("active", '')
        $("#test").css("transform","translateX(" + 0 + "%)");

        document.getElementById("preStep").className += ' dn'
    }else if(val == 1){
        document.getElementById("sicon03").className = document.getElementById("sicon03").className.replace("selected", '')
        document.getElementById("sicon02").className += ' selected'
        learnContains[2].className = learnContains[2].className.replace("active", '')
        learnContains[1].className += ' active'
        $("#test").css("transform","translateX(" + -100 + "%)");
    }else if(val == 2){
        document.getElementById("sicon03").className += ' selected'
        document.getElementById("sicon04").className = document.getElementById("sicon04").className.replace("selected", '')
        learnContains[2].className += ' active'
        learnContains[3].className = learnContains[3].className.replace("active", '')
        $("#test").css("transform","translateX(" + -200 + "%)");
    }else if(val == 3){
        document.getElementById("sicon04").className += ' selected'
        document.getElementById("sicon05").className = document.getElementById("sicon05").className.replace("selected", '')
        learnContains[3].className += ' active'
        learnContains[4].className = learnContains[4].className.replace("active", '')
        $("#test").css("transform","translateX(" + -300 + "%)");
    }
}

function nextCheck() {
    var val = -1;
    let learnContains = document.getElementsByClassName("learn-contain");
    for(var i=0; i<learnContains.length; i++){
        let learnContain = learnContains[i];
        if(learnContain.className.indexOf("active") > -1) {
            val = i + 1
        }
    }
    document.getElementById("preStep").className = document.getElementById("preStep").className.replace("dn", '');
    if(val == 1){
        document.getElementById("sicon01").className = document.getElementById("sicon01").className.replace("selected", '')
        document.getElementById("sicon02").className += ' selected'
        learnContains[0].className = learnContains[0].className.replace("active", '')
        learnContains[1].className += ' active'
        $("#test").css("transform","translateX(" + -100 + "%)");
    }else if(val == 2){
        document.getElementById("sicon02").className = document.getElementById("sicon02").className.replace("selected", '')
        document.getElementById("sicon03").className += ' selected'
        learnContains[1].className = learnContains[1].className.replace("active", '')
        learnContains[2].className += ' active'
        $("#test").css("transform","translateX(" + -200 + "%)");
    }else if(val == 3){
        document.getElementById("sicon03").className = document.getElementById("sicon03").className.replace("selected", '')
        document.getElementById("sicon04").className += ' selected'
        learnContains[2].className = learnContains[2].className.replace("active", '')
        learnContains[3].className += ' active'
        $("#test").css("transform","translateX(" + -300 + "%)");
    }else if(val == 4){
        document.getElementById("sicon04").className = document.getElementById("sicon04").className.replace("selected", '')
        document.getElementById("sicon05").className += ' selected'
        learnContains[3].className = learnContains[3].className.replace("active", '')
        learnContains[4].className += ' active'
        $("#test").css("transform","translateX(" + -400 + "%)");
        document.getElementById("nextStep").className += ' dn'
    }
}

setInterval(assureseleteds, 2000);
function assureseleteds() {
    let childrens = document.getElementsByClassName("assure-aptitude-list")[0].children;
    var index = -1;
    for(var i=0; i<childrens.length; i++){
        let child = childrens[i];
        if(child.className.indexOf("assureseleted") > -1){
            if(i == childrens.length - 1){
                index = 0;
            }else {
                index = i + 1;
            }
            childrens[i].className = childrens[i].className.replace("assureseleted", '')
        }
    }
    if(index > -1){
        childrens[index].className += 'assureseleted'
    }
}

function openContact() {
    if(document.getElementById("contact").className.indexOf("show") > -1){

    }else {
        document.getElementById("contact").className += ' show'
    }
}

function closeContact() {
    if(document.getElementById("contact").className.indexOf("show") > -1){
        document.getElementById("contact").className = document.getElementById("contact").className.replace("show", '')
    }
}
