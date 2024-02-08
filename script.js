const date = document.getElementById("date"),actualDate = new Date()
date.innerText = `${actualDate.getDay()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}`
//Animations
let timeline = gsap.timeline({defaults:{duration:1}})

timeline.fromTo('.title',{
        x:-200
    },{
        x:100
    })
    .fromTo('#date',{
        x:100,
        y:10
    },{
        x:-100,
        y:10
        
    })
    .from('#nav2',{
        x:-100
    })
    .fromTo('#greetings h1,#greetings p',{
        opacity:0,
        x:-30
    },{
        opacity:1,
        stagger:.5,
        x:30
    })
    .fromTo('#profile',{
        x:250,
        y:-250,
        opacity:0
    },{
        x:-90,
        y:-250,
        opacity:1
    })
    .from('.divider',{
        y:-100,
        opacity:0
    })
    .fromTo('#quotes p',{
        opacity:0,
    },{
        stagger:.5,
        opacity:1
    })
    /*Images and after*/
    .from('#info1',{
        scrollTrigger:{
            scrub:true
        },
        x:200
    })
    .from("#info2",{
        delay:1,
        scrollTrigger:{
            scrub:true
        },
        x:200
    })
    .from('#img1',{
        scrollTrigger:{
            scrub:true
        },
        x:-200
    })
    .from('#img2',{
        scrollTrigger:{
            scrub:true
        },
        x:200
    })

/*Quotes */
const quoteTag = document.getElementById("quote"),author = document.getElementById("author")
let randomNumQuote = Math.floor(Math.random() * 15),quote
console.log(randomNumQuote)

const quoteFetcher =  async() => {fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quoteTag.innerHTML = data[randomNumQuote].text
    author.innerHTML = data[randomNumQuote].author
}).catch(error => console.log(error))}

const caller = async () => {
  const Func1 = await quoteFetcher().then(() => console.log("Success")).catch(error => console.error(error))
}
caller()

/*Lenis Scroller*/
const lenis = new Lenis()

lenis.on('scroll',(e) => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

//Email sender
function sendEmail(){
    (function(){
        emailjs.init({
            publicKey: 'quodMm74t9sYgpRTo',
        })
    })()

    var params = {
        from_name: document.querySelector("#name").value,
        to_name:"lawrence muchiri",
        from_email: document.querySelector("#email").value,
        message:document.querySelector("#message").value
    }
    var serviceId = "contact_service"
    var templateId = "template_vh0lru2"

    emailjs.send(serviceId,templateId,params).then(res => {
        alert("Email sent")
    }).catch(error => console.log(error));
}
document.getElementById("submit").addEventListener("click",sendEmail)