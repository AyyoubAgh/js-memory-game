window.onload = ()=>{

    let gameGrid = document.querySelector(".game-grid")
    let gameItem = document.querySelectorAll(".game-grid-item")
    let gameItemArr = Array.from(gameItem)


    gameItem.forEach(_ => {
        let childList = _.children
        _.addEventListener("click",()=>{
            childList[0].style.transform = "rotateY(180deg)";
            childList[1].style.transform = "rotateY(0deg)";
           
        })    
    });

    function shuffle(array){
        return array.sort(() => Math.random() - 0.5);
    }


    function toNodeList (arrayofnodes) {
        var fragment = document.createDocumentFragment()
        arrayofnodes.forEach( item => {
            fragment.appendChild(item.cloneNode())
        })

        return fragment.childNodes
    } 
    
    //gameGrid.innerHTML = document.createElement(i)
    //gameItem.appendChild(shuffle(gameItemArr))
}


