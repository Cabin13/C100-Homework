Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})

var camera= document.getElementById("camera")
Webcam.attach(camera)

function speech() {
    var synth= window.speechSynthesis
    var speechData= "Your selfie will be taken in 5, 10, and 15 seconds"
    var utterThis= new SpeechSynthesisUtterance(speechData)
    synth.speak(utterThis)
    setTimeout(function() {
        takeSelfie1()
        saveSelfie1()
    }, 5000
    )

    setTimeout(function() {
        takeSelfie2()
        saveSelfie2()
    }, 10000
    )

    setTimeout(function() {
        takeSelfie3()
        saveSelfie3()
    }, 15000
    )
}

function takeSelfie1() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>';
    })
}

function saveSelfie1() {
    var link= document.getElementById("link")
    link.href= document.getElementById("selfie1").src
    link.click()
}

function takeSelfie2() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>';
    })
}

function saveSelfie2() {
    var link= document.getElementById("link")
    link.href= document.getElementById("selfie2").src
    link.click()
}

function takeSelfie3() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>';
    })
}

function saveSelfie3() {
    var link= document.getElementById("link")
    link.href= document.getElementById("selfie3").src
    link.click()
}
