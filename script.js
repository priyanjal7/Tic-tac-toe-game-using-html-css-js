let box = document.querySelectorAll("main table tbody tr td")
let heading = document.querySelector("main h1")
let flag = 0
for(let i = 0 ; i<box.length ; i++){
    box[i].addEventListener("click",function(){
        if(box[i].textContent === "" && flag === 0){
            box[i].textContent = "X"
            flag = 1
        }
        else if(box[i].textContent !== "X" && flag === 1){
            box[i].textContent = "O"
            flag = 0
        }
        checkwinner()
    })
}
function checkwinner(){
    let winningpatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(val of winningpatterns){
        let p1 = box[val[0]]
        let p2 = box[val[1]]
        let p3 = box[val[2]]
        if(p1.textContent !== "" && p2.textContent !== "" && p3.textContent !== ""){
            if(p1.textContent === p2.textContent && p2.textContent === p3.textContent){
                heading.textContent = `${p1.textContent} is winner`
            }
        }
    }
}