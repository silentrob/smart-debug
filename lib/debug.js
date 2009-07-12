/**
  *  Slightly nicer printout of objects, much nicer then uneval()
  *
  *  Example
  *  var console = new DebugConsole();
  *  console.log(function | object | string | value);
  *    
  **/


function DebugConsole() {
}

DebugConsole.prototype.log = function(message) {
    if (typeof(message) != 'object') {
        return message;
    } else {
        function indent(str) {
            return str.replace(/^/mg, " ");
        }
        function makeStructured(obj) {
            var str = "";
            for (var i in obj) {
                try {
                    if (typeof(obj[i]) == 'object') {
                        str += i + ":\n" + indent(makeStructured(obj[i])) + "\n";
                    } else {
                        str += i + " = " + indent(String(obj[i])).replace(/^ /, "") + "\n";
                    }
                } catch(e) {
                    str += i + " = EXCEPTION: " + e.message + "\n";
                }
            }
            return str;
        }
        return "\nObject:\n" + makeStructured(message);
    }
};