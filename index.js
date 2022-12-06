let list=document.querySelectorAll("ul li img");
list.forEach(el=>{
    el.addEventListener("mouseenter",()=>{
        document.querySelector(".glob").src=el.src;
    });
});
