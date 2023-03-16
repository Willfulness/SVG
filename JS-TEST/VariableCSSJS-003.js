console.log('JS File console log')

var root = document.documentElement;
  root.style.setProperty('--JSVar', '#777777' )
  root.style.setProperty('--innerWidth2', window.innerWidth)


var sheet = document.styleSheets[0];
//sheet.insertRule(":root{--blue2:#4444FF}");

sheet.addRule(":root", "--blue2: #4444FF;", 1);

const rootSt = document.querySelector(':root');
rootSt.style.setProperty('--innerWidth', window.innerWidth);


window.onresize = function(event) {
  root.style.setProperty('--screen-x', window.screenX)
  root.style.setProperty('--screen-y', window.screenY)
  root.style.setProperty('--innerWidth2', window.innerWidth)




console.log( 'window.onresize ' + style.getPropertyValue('--innerWidth') )
console.log( 'window.onresize ' + style.getPropertyValue('--innerWidth2') )
console.log( 'window.onresize ' + style.getPropertyValue('--JSVar') )


};

//document.addEventListener('resize', () => {
document.addEventListener('resize', function(event) {
  root.style.setProperty('--screen-x', window.screenX)
  root.style.setProperty('--screen-y', window.screenY)
  root.style.setProperty('--innerWidth2', window.innerWidth)
  root.style.setProperty('--JSVar', '#222222' )

console.log( 'document.addEventListener '+ style.getPropertyValue('--innerWidth') )
console.log( 'document.addEventListener '+ style.getPropertyValue('--innerWidth2') )
console.log( 'document.addEventListener '+ style.getPropertyValue('--JSVar') )


}, true)
