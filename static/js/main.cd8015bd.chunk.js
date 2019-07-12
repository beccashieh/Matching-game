(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),l=a.n(i),o=(a(16),a(1)),r=a(4),s=a(5),m=a(8),d=a(6),p=a(9);var u=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("span",{className:"navbar-brand"},c.a.createElement("h1",null,"Memory Game")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"start-game-title"},"Click any image to start your game!"))))))};var g=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Memory Game:"),c.a.createElement("p",{className:"lead"},"Click on an image to receive points, but don't click the same image twice!"))))};var h=function(e){return c.a.createElement("div",{className:"counter card",id:"score-card"},c.a.createElement("h1",{className:"card-header"},"Score Tally"),c.a.createElement("h3",null,"Score: ",e.score),c.a.createElement("hr",null),c.a.createElement("h3",null,"Top Score: ",e.topScore))};var k=function(e){return c.a.createElement("div",{className:"img-card",onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e.link,alt:e.id}),c.a.createElement("div",{className:"card-body"})))},v=a(7),f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={images:v,score:0,topScore:0},a.shuffleImages=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.topScore=function(){a.setState({score:0})},a.clickedNew=function(e){var t=a.state,n=t.topScore,c=t.score+1,i=c>n?c:n;a.setState({item:a.shuffleImages(e),score:c,topScore:i}),console.log("Score: ",c),console.log("Top Score: ",i)},a.clickedAgain=function(e){a.setState({item:a.resetItem(e),score:0}),console.log("clicked again")},a.resetItem=function(e){var t=e.map(function(t){return Object(o.a)({},e,{clicked:!1})});return a.shuffleImages(t)},a.handleItemClick=function(e){var t=!1,n=a.state.images.map(function(a){var n=Object(o.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0,console.log("correct",t))),n});t?(console.log("if"),a.clickedNew(n)):(console.log("else ",n),a.clickedAgain(n))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffleImages(this.state.images)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(g,null),c.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement("div",{className:"images-section",id:"imgSection"},this.state.images.map(function(t){return c.a.createElement(k,{id:t.id,key:t.id,link:t.link,handleClick:e.handleItemClick})})),c.a.createElement("footer",null,"Memory Game with React",c.a.createElement("i",{className:"fab fa-react"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{id:1,link:"https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/puppy-vomiting_canna-pet-1024x682.jpg",clicked:!1},{id:2,link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf1zQ4azoItHGYTS78dHyHVTSMXJNMnBY5PPxuFzQv9TYjnn-",clicked:!1},{id:3,link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVIFmEYbAVCfBv4TKGOqtdr91CoDvFNTS-k94JMMIQQnaQEYLwg",clicked:!1},{id:4,link:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Bulldog_02.jpg",clicked:!1},{id:5,link:"https://c.tadst.com/gfx/750w/puppy-day-fun.jpg",clicked:!1},{id:6,link:"https://cache.desktopnexus.com/thumbseg/1922/1922774-bigthumbnail.jpg",clicked:!1},{id:7,link:"https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg",clicked:!1},{id:8,link:"https://cdn.pixabay.com/photo/2019/06/07/21/03/dog-4259058__340.jpg",clicked:!1},{id:9,link:"https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy.jpg?imwidth=450",clicked:!1},{id:10,link:"https://www.preventivevet.com/hs-fs/hubfs/black%20lab%20puppy%20sad.jpg?width=350&name=black%20lab%20puppy%20sad.jpg",clicked:!1},{id:11,link:"https://secure.i.telegraph.co.uk/multimedia/archive/03280/Black_Labrador_pup_3280744b.jpg",clicked:!1},{id:12,link:"https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760__340.jpg",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.cd8015bd.chunk.js.map