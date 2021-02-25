function getData(){
  var node = document.createElement("LI");
  node.id="list";
  var an = document.createElement("A");
  an.id="ankr";
  an.setAttribute("href", "#");
  an.style.backgroundColor = "red";
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

function searchbtn(){
  var sb=document.createElement("i");
  sb.className="fas fa-2x fa-search";
  sb.style.float="right";
  sb.style.marginTop="30px";
  sb.style.marginRight="20px";
  return sb;
}

function homeBtn(){
  var HB=document.createElement("i");
  HB.className="fas fa-3x fa-home";
  HB.style.float="left";
  HB.style.marginTop="20px";
  HB.style.marginLeft="20px";
  return HB;
}

function profileBtn(){
  var PB=document.createElement("i");
  PB.className="fas fa-2x fa-user-circle";
  PB.style.float="right";
  PB.style.marginTop="30px";
  PB.style.marginRight="20px";
  return PB;
}

function globlicon(){
  var GB=document.createElement("i");
  GB.className="fas fa-2x fa-globe-americas";
  GB.style.float="right";
  GB.style.marginTop="30px";
  GB.style.marginRight="20px";
  return GB;
}

function searchbar(cssStyle){
  var mi = document.createElement("INPUT");
    mi.id="serch";
    mi.style.cssText=cssStyle;
    mi.setAttribute("placeholder", "   Search....");
    return mi;
}

function cmpName(cssStyle,valueNam)
{
  var hed = document.createElement("h1");
  hed.id="Hone";
  hed.innerHTML=valueNam;
  hed.style.cssText=cssStyle;
  return hed;
}

function logoBtn(cssStyle,namelogo){
  var btn=document.createElement("button");
  btn.id="logob";
  btn.innerHTML=namelogo;
  btn.style.cssText=cssStyle;
  return btn;

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

    

    switch(i){
      case 0:
      {
        search_icon=searchbtn();
        document.getElementById("firstnav0").appendChild(search_icon);
        Globl_icon=globlicon();
        document.getElementById("firstnav0").appendChild(Globl_icon);
        log=logoBtn("background-color:rgb(179, 174, 174);border: 1px solid black;color:black;padding: 20px;font-size: 16px;margin-left: 400px; margin-top:10px; border-radius: 50%;","Logo")
        document.getElementById("firstnav0").appendChild(log);
        Home_button=homeBtn();
        document.getElementById("firstnav0").appendChild(Home_button);
        cmpnam=cmpName("float:left; color:white; font-size:40px; margin:20px 0px 0px 50px;","WellCome")
        document.getElementById("firstnav0").appendChild(cmpnam);
        cln.style.float="right";
        div.style.borderRadius="20px 0px 20px";
        div.style.background="rgb(134, 134, 160)";
        document.getElementById("firstnav"+[i]).appendChild(cln);


        
      }
      break;
      case 1:
      {
        Profile_icon=profileBtn();
        document.getElementById("firstnav1").appendChild(Profile_icon);
        Globl_icon=globlicon();
        document.getElementById("firstnav1").appendChild(Globl_icon);
        j=searchbar("float: right; width: 300px; outline:none; height:20px;border-radius:20px 20px 20px 20px; margin-top:30px; margin-right:30px;");
        document.getElementById("firstnav1").appendChild(j);
        cln.style.float="left";
        div.style.backgroundImage="url('nav3pic.jpg')";
        document.getElementById("firstnav"+[i]).appendChild(cln);


        
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
        j=searchbar("float: right; width: 300px; outline:none; height:30px; border:3px solid black ;border-radius:20px 20px 20px 20px; margin-top:20px; margin-right:80px;");
        document.getElementById("firstnav2").appendChild(j);
        document.getElementById("firstnav"+[i]).appendChild(cln);

  
      }
      break;
      case 3:
      {
        log=logoBtn("background-color:rgb(179, 174, 174);border: 1px solid black;color:black;padding: 20px;font-size: 16px;margin-left: 30px; margin-top:10px; border-radius: 50%;","hello")
        document.getElementById("firstnav3").appendChild(log);
        cln.style.float="right";
        div.style.background="white";
        div.style.border="1px solid black";
        document.getElementById("firstnav"+[i]).appendChild(cln);

        
      }
      break;
      case 4:
      {
        cmpnam=cmpName("float:right; color:black; margin:0px 650px 0px 0px;","WellCome")
        document.getElementById("firstnav4").appendChild(cmpnam);
       cln.style.float="left";
       div.style.background="#ccccff";
        document.getElementById("firstnav"+[i]).appendChild(cln);

      }
      break;
      case 5:
      {
       cln.style.float="left";
       div.style.background="white";
       div.style.borderBottom="1px solid black";
       div.style.borderTop="1px solid black";
        btn1=addButton("height: 35px; width: 70px; color:white; border:none; float:right; margin-right:90px; background-color:red; margin-top:20px", "Register");
        document.getElementById("firstnav5").appendChild(btn1);
        btn2=addButton("height: 35px; width: 70px; color:white; border:none; float:right; background-color:blue;margin-top:20px", "Login In");
        document.getElementById("firstnav5").appendChild(btn2);
        document.getElementById("firstnav"+[i]).appendChild(cln);

      }
      break;
      default:
        cln.style.float="right";
    }   
    
  } 
  document.getElementById("btn12").disabled = true;
  
}  







