// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"
let highestNumber = prompt("What's the highest number?")
// Your Code Here
function snapCrackle(maxValue){
    let answer = ""

    for(let i = 1; i <= maxValue; i += 1){
        if(i % 2 == 1 && i % 5 == 0){
            answer += "SnapCrackle, "
        }
        else if(i % 2 == 1){
            answer += "Snap, "
        }
        else if(i % 5 == 0){
            answer += "Crackle, "
        }
        else {
            answer += `${i}, `
        }
    }
    return answer
}

function render(text, maxValue){
    document.write(`<h1>SnapCrackle!</h1><h3>Max Value: ${maxValue}</h3><p>${text}</p>`)
}

let results = snapCrackle(highestNumber)

render(results, highestNumber)