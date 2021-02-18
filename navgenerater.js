function getData(){
  var node = document.createElement("LI");
  node.id="list";
  var an = document.createElement("A");
  an.id="ankr";
  an.setAttribute("href", "#");
  var hello = document.getElementById("inp").value;
  document.getElementById('inp').value = "";
  var textnode = document.createTextNode(hello);
  an.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  document.getElementById("list").appendChild(an);
  
}
function showNav(constraints){
  for (i=0;i<=5;i++){ 
    var div = document.createElement("div");
    div.id="firstnav"+[i];
    div.style.width = "100%";
    div.style.margin ="30px 100px 0px 0px";
    div.style.height = "80px";
    div.style.background = "turquoise";
    div.style.color = "white";
    document.getElementById("parent").appendChild(div);
    var li=document.getElementById("myList");
    var cln = li.cloneNode(true);
    cln.style.float="right";
    cln.style.color="black";
    cln.style.fontSize="20px";
    cln.style.listStyle="none";
    cln.style.marginRight="70px";
    document.getElementById("firstnav"+[i]).appendChild(cln);
    

    switch(i){
      case 0:
      { 
        var hed = document.createElement("h1");
        hed.id="Hone";
        hed.innerHTML="Name";
        hed.style.float="left";
        hed.style.color="#ff66d9";
        hed.style.margin="0px 0px 50px 0px";
        document.getElementById("firstnav0").appendChild(hed);
        cln.style.float="right";
        div.style.borderRadius="20px 0px 20px";
        div.style.background="pink";
      }
      break;
      case 1:
      {
        cln.style.float="left";
        div.style.backgroundImage="url('nav3pic.jpg')";
      }
      break;
      case 2:
      {
        
        cln.style.float="left";
        div.style.background="#ffff66";
        div.style.border="2px solid #e6b800";
        var bt2=document.createElement("button");
        bt2.id="register";
        bt2.innerHTML = "Start For Free"; 
        bt2.style.background="#ff4d4d";
        bt2.style.color="white";
        bt2.style.float="right";
        bt2.style.border="none";
        bt2.style.height="35px";
        bt2.style.width="100px";
        bt2.style.marginTop="0px";
        bt2.style.marginRight="20px";
        bt2.style.borderRadius="20px";
        document.getElementById("firstnav2").appendChild(bt2);
        var bt=document.createElement("button");
        bt.id="singin";
        bt.innerHTML = "Sign In"; 
        bt.style.background="";
        bt.style.color="black";
        bt.style.border="none";
        bt.style.height="35px";
        bt.style.width="70px";
        bt.style.marginTop="0px";
        bt.style.float="right";
        document.getElementById("firstnav2").appendChild(bt);
      }
      break;
      case 3:
      {
        cln.style.float="left";
        div.style.background="white";
        div.style.border="1px solid black";
      }
      break;
      case 4:
      {
       cln.style.float="right";
       div.style.background="#ccccff";
      }
      break;
      case 5:
      {
       cln.style.float="left";
       div.style.background="white";
       div.style.borderBottom="1px solid black";
       div.style.borderTop="1px solid black";
       var bt2=document.createElement("button");
        bt2.id="register";
        bt2.innerHTML = "Register"; 
        bt2.style.background="red";
        bt2.style.color="white";
        bt2.style.float="right";
        bt2.style.border="none";
        bt2.style.height="35px";
        bt2.style.width="70px";
        bt2.style.marginTop="20px";
        bt2.style.marginRight="20px";
        document.getElementById("firstnav5").appendChild(bt2);
        var bt=document.createElement("button");
        bt.id="singin";
        bt.innerHTML = "Sign In"; 
        bt.style.background="blue";
        bt.style.color="white";
        bt.style.border="none";
        bt.style.height="35px";
        bt.style.width="70px";
        bt.style.marginTop="20px";
        bt.style.float="right";
        document.getElementById("firstnav5").appendChild(bt);
      }
      break;
      default:
        cln.style.float="right";
    }   
  }     
}  





