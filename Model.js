$("#NextCalib").click(startInterval)

 $(window).load(function(){
 		$("#calibModal").modal("hide")
    });
$('#calibModal').modal({
    backdrop: 'static',
    keyboard: false
})
$('#startModal').modal({
    backdrop: 'static',
    keyboard: false
})
$("#startCalib").click(calibStart)
function calibStart(){
	$("#startModal").modal("hide");
	$("#calibModal").modal('show');
}

var time = 5
function startInterval(){
	$("#NextCalib").hide()
	interval = setInterval(function(){timer()}, 1000)
	recording = true
	window.setup = true
}
function NextCalib(){
	handleRecord()
	var interval
	
	$("#progress").css("width",((index+1)/8)*100 +"%")
	if(index == 0){
		progModel("Make a fist and wait a few seconds")
	}
	else if(index == 1){
		progModel("Touch your thumb with your index finger and wait a few seconds")	
	}
	else if(index == 2){
		progModel("Touch your thumb with your index finger and wait a few seconds")
	}
	else if(index == 3){
		progModel("Make a fist again and wait a few seconds")
	}
	else if(index == 4){
		progModel("Touch your thumb with your ring finger and wait a few seconds")
	}
	else if(index == 5){
		progModel("Touch your thumb with your pinky and wait a few seconds")
	}
	else if(index == 6){
		progModel("Make your hand flat and raise it above any surfaces then wait a few seconds")
	}
	else if(index == 7){
		console.log('done')
		$("#NextCalib").text("Done")
		$("#NextCalib").attr("data-dismiss","modal")
		$("#calibModal").modal('hide')
		window.setup = false
		recording = false
		canReceive = true
		console.log('ended classt')
		endClassification()
	}
	index+=1
	function progModel(text){
		$("#calibText").text("" + text)
		$("#NextCalib").show()
		var time = 5

		handleRecord()
	}
	
}
function timer(){
		$("#timeLeft").text("" + time)
		time--
		if(time==0){
			console.log(index)
			$("#timeLeft").text(" ")
			time = 5	
			clearInterval(interval)
			window.setup = false
			recording = false
			NextCalib()
		}
	}