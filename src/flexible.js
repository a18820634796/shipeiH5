(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
  console.log(dpr)
    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = 20 + 'px'  //1rem = 20px;
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    setBodyFontSize();
  
    // set 1rem = viewWidth / 10
    function setRemUnit () {  //设置宽高
      if(docEl.clientWidth <768){      //5:1rem = 75px   设置这个，写的px是多少，显示的就是多少，可以写成px值
        var rem = docEl.clientWidth / 5 //18.75:1rem = 20px;   37.5：1rem = 10px; 
        docEl.style.fontSize = rem + 'px'
      }else if(docEl.clientWidth > 980){
        var rem = docEl.clientWidth / 24.88 //1rem= 44px;网页端设置多少px就是多少px
        docEl.style.fontSize = rem + 'px'
      }else{
        var rem = docEl.clientWidth / 18.75 
        docEl.style.fontSize = rem + 'px'
      }
    }
  
    setRemUnit()
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })
  
    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
  }(window, document))
  