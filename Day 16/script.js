
var task=['javascript course','revise last weeks concepts'];
var week=['tuesday','wednesday','thursday','friday','saturday','sunday'];
console.log("monday:Start javascript course");
for(i=0;i<week.length;i++){
    console.log(week[i]+":"+task[i%2]);
}