const aashu =document.querySelector(".card2")
const t1=gsap.timeline()
aashu.addEventListener("drag",(e)=>{
t1.to(".card2",{
   duration:1,
ease: "power1.out",
y: -710,
delay:1.5,
stagger:0.8,

},"aashu");
t1.to(".image2",{
   duration:1,
ease: "power1.out",
y:-500,
delay:1.4,
stagger:0.8,
},"aashu");
t1.to(".text2",{
   duration:1,
ease: "sine.out",
y:-500,
delay:1.2,
stagger:0.8,
},"aashu");


t1.to(".image1",{
   duration:0.7,
ease: "power1.out",
y:480,
delay:0.8,
stagger:1,
repeat:1,
yoyo:true,

},"aashu");
t1.to(".text1",{
   duration:0.7,
ease: "power1.out",
y:500,
delay:0.8,
 repeat:1,
stagger:1,
yoyo:true,
},"aashu");




})

