module.exports = function solveEquation(equation) {
equation=equation.replace(/ /g,"");
  var arg=equation.split('x^2');
  var a=parseInt(arg[0]);
  arg=arg[1].split('x');
  var b=parseInt(arg[0]);
  var c=parseInt(arg[1]);

  var result=[];
  result[0]=Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));
  result[1]=Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));
  result.sort((a, b)=> {
      if (a > b) return 1;
      if (a < b) return -1;
  });
return result;
}