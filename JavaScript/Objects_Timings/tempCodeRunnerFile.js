function change1(obj) {
    obj.name = "ninjas"
  }
  function change2(obj) {
    obj = {name: "changed"}
  }
  
  var obj = {name:"coding"}
  
  change1(obj)
  change2(obj)
  console.log(obj.name)  