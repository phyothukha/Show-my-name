const myName="Phyo Thu Kha";

export function showMyName(){
    return myName;
}
export function showMyNameUi(){
    const h1=document.createElement("h1");
    h1.innerText=myName;
    h1.style.position='fixed';
    h1.style.zIndex=1000;
    h1.style.fontSize=100+"px";
    h1.style.color="white";
    h1.style.top=0;
    h1.style.right=0;
    h1.style.backgroundColor="black";
    h1.style.fontWeight="Bold";
    document.body.append(h1);
}