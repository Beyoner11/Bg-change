var index = 0;
function change(){
  var color=['red','blue','green','yellow','orange','purple']
  
  document.getElementsByTagName('body')[0].style.background=color[index++];
  if(index> color.lenght -1)
    index = 0
}