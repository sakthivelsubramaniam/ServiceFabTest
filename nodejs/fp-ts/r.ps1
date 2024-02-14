 $tsf = "eitherdt";
## $tsf = "maybeds";

tsc "$tsf.ts"
node "$tsf.js" 
del "$tsf.js"

