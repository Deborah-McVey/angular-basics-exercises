class Profile {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  };

  $("#add").click(function (){
    let count = 0;
    count ++;
    $("#time").text(count);
});

$(#lower).click(function(){
    let count = 0;
    count --;
    $("#time").text(count)
});
