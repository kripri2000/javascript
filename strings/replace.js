let txt = "This is a sample text sample";
console.log(txt)
newtxt = txt.replace('sample','new');
console.log(newtxt)
newtxt = txt.replace(/sample/i,'new')  //first occurence
console.log(newtxt)
newtxt = txt.replace(/sample/g,'new')   //all occurences
console.log(newtxt)