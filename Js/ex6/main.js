function protect_email(email){
  var splited_name = email.split("_")
  var name = splited_name[0] 
  return (name + "...@gmail.com"); 
}
console.log(protect_email("khang_pham@gmail.com"));


