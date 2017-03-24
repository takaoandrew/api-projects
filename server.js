var express = require('express')
var app = express()
app.get('/:time', function (req, res) {
  var script = ""
  var time = req.params.time
  var count = 0
  var month = ""
  var date = ""
  var year = ""
if (parseInt(time)) {
  var t = new Date(time*1000);
}
else {
  for (var i=0; i<time.length; i++) {
    if (time.slice(i, i+1) == " ") {
	count += 1
    }
    else if (time.slice(i, i+1) == ",") {
    }
    else if (count == 0) {
	month += time.slice(i, i+1)
    }
    else if (count == 1) {
	date += time.slice(i, i+1)
    }
    else if (count == 2) {
	year += time.slice(i, i+1)
    }
    
  }
  month = getMonthFromString(month)<10?"0"+getMonthFromString(month):""+getMonthFromString(month)
  date = parseInt(date)<10?"0"+date:date
  var t = new Date(year+"."+month+"."+date).getTime()/1000	
}
  var formatted = t
  script += formatted
  res.send(script)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080')
})

function getMonthFromString(mon){
   return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}
