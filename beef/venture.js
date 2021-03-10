let dimmeds = document.querySelectorAll('.dimmed');
for(let i = 0; i < dimmeds.length; i++){
    let liElement = dimmeds[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    liElement.classList.add("maybeDisplayNone");
}

let isresctricteds = document.querySelectorAll('.isrestricted');
console.log(isresctricteds);
for(let i = 0; i < isresctricteds.length; i++){
    let liElement = isresctricteds[i].parentNode.parentNode.parentNode;
    //console.log(liElement);
    liElement.classList.add("maybeDisplayNone");
}




