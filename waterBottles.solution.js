
/* 04 january 2023 23:00 */
const f = (full,exchange,empty=0,drank=0) => { console.log(full,exchange,empty,drank); return (full>0 ? f(0,exchange,empty+full,drank+full) : (empty >= exchange ? f(full+empty/exchange|0,exchange,empty%exchange,drank) : drank))}

var f = (full,exchange,empty=0,count=0) => (empty<exchange&&full==0) ? count : (full>0) ? f(0,exchange,empty+full,count+full) : f((empty-empty%exchange)/exchange,exchange,empty%exchange,count)
const f = (full,ex,mt=0,c=0) => (mt<ex&&full==0) ? c : (full>0) ? f(0,ex,mt+full,c+full) : f((mt-mt%ex)/ex,ex,mt%ex,c)
const f = (full,ex,mt=0,c=0) => (full>0||ex<=mt) ? (full > 0) ? f(0,ex,mt+full,c+full) : f(mt/ex>>0,ex,mt%ex,c) : c
const f = (fu,ex,em=0,co=0) => (fu>0||em>=ex) ? (fu>0) ? f(0,ex,em+fu,co+fu) : f(fu+em/ex>>0,ex,em%ex,co) : co
const f = (fu,ex,em=0,co=0) => (fu>0||em>=ex) ? (fu>0) ? f(0,ex,em+fu,co+fu) : f(fu+em/ex|0,ex,em%ex,co) : co
const f = (fu,ex,em=0,co=0) => (fu>0|em>=ex) ? (fu>0) ? f(0,ex,em+fu,co+fu) : f(fu+em/ex|0,ex,em%ex,co) : co
const f = (fu,ex,em=0,co=0) => (fu>0||em>=ex) ? (fu>0) ? f(0,ex,em+fu,co+fu) : f(fu+em/ex|0,ex,em%ex,co) : co
const f = (fu,ex,em=0,co=0) => (fu>0||em>=ex) ? (fu>0) ? f(0,ex,em+fu,co+fu) : f(fu+em/ex|0,ex,em%ex,co) : co
