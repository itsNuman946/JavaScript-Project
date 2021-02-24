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

function addButton(cssStyle,ValueBtn){
  var btnm = document.createElement("button");
  btnm.innerHTML=ValueBtn;
  btnm.id="btn11";
  btnm.style.cssText=cssStyle;
  return btnm;
}

function searchbar(cssStyle){
  var mi = document.createElement("INPUT");
    mi.id="serch";
    mi.style.cssText=cssStyle;
    mi.setAttribute("placeholder", "   Search....");
    return mi;
}

function showNav(){
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
        j=searchbar("float: right; width: 300px; outline:none; height:30px; border:3px solid black ;border-radius:20px 20px 20px 20px; margin-top:20px;");
        document.getElementById("firstnav1").appendChild(j);
        cln.style.float="right";
        div.style.backgroundImage="url('nav3pic.jpg')";
        a=addButton("height: 30px; width: 100px; background-color: blue; margin-top:30px" ,"hello world" );
        document.getElementById("firstnav1").appendChild(a);
      }
      break;
      case 2:
      {
        cln.style.float="left";
        div.style.background="#ffff66";
        div.style.border="2px solid #e6b800";
        btn1=addButton("height: 35px; width: 100px; color:white; border:none; float:right; margin-right:20px; border-radius:20px; background-color:#ff4d4d;", "Sign Up");
        document.getElementById("firstnav2").appendChild(btn1);
        btn2=addButton("height: 35px; width: 70px; color:black; border:none; float:right;","Sign In");
        document.getElementById("firstnav2").appendChild(btn2);

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
        btn1=addButton("height: 35px; width: 70px; color:white; border:none; float:right; margin-right:20px; background-color:red; margin-top:20px", "Register");
        document.getElementById("firstnav5").appendChild(btn1);
        btn2=addButton("height: 35px; width: 70px; color:white; border:none; float:right; background-color:blue;margin-top:20px", "Login In");
        document.getElementById("firstnav5").appendChild(btn2);
      }
      break;
      default:
        cln.style.float="right";
    }   
  }     
}  





