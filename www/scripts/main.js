function Parse() {
  var textarea = document.getElementById("jsoncode").value;
  try {
    Parser.Parse(textarea);
  } catch(err) {
    document.getElementById('thejson').innerHTML = "<span style=\"color:red;\"><b>" + err.name + "</b>: " + err.message + "</span>";
  } finally {
    document.getElementById('jsoncode').placeholder = document.getElementById("jsoncode").value;
  }
}

var colors = {
  object: "#d69840",
  string: "#18690c",
  number: "#730a73",
  array: "#19979e",
  bool: "#919030",
  function: "#5a199c",
  symbol: "#1a4f63",
  other: "#3b478c"
};

var uuidvalidation = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

var Parser = {
  Parse: function(text) {
    console.log(text);
    console.log(JSON.parse(text));
    console.log(Object.entries(JSON.parse(text)));
    var stuaa = Object.entries(JSON.parse(text));
    var outputhtmla = "";
    outputhtmla += Parser.ForEACHTHING(stuaa, false);
    outputhtmla += "<hr>";
    document.getElementById('thejson').innerHTML = outputhtmla;
  },
  
  ParseArrae: function(arrae) {
    var outp = "<ul style=\"color:#1d5b5e\">";
    var itee = 0;
    arrae.forEach(theva => {
      itee++;
      if (typeof(theva) == "object") {
        if (Array.isArray(theva)) {
          //// Example:
          //// n. item is an array with the contents being:
          //// <insert inner list>
          //// Do not change the HTML tags. Only change the normal text.
          ////
          //// You should translate ". item is an " and "with contents being:" If this ends up being confusing, the word "array" is in between these both strings.
          outp += "<li>" + itee + ". item is an <span style=\"color:" + colors.array + ";\">array</span> with contents being: " + Parser.ParseArrae(theva) + "</li>";
        }
        //// Example:
        //// n. item is an object with contents being:
        else outp += "<li>" + itee + ". item is an <span style=\"color:" + colors.object + ";\">object</span> with contents being: " + Parser.ForEACHTHING(theva, true) + "</li>";
      }
      else if (typeof(theva) == "boolean") {
        //// Example:
        //// n. item is a boolean with the value assigned with [VALUE].
        outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.bool + ";\">boolean</span> with a value assigned with <span style=\"color:" + colors.bool + ";\">" + theva + "</span>.</li>";
      }
      else if (typeof(theva) == "function") {
        // Will probably end up being unused
        
        //// Example:
        //// n. item is a function.
        outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.function + ";\">function</span>.</li>";
      }
      else if (typeof(theva) == "string") {
        
        if (uuidvalidation.test(theva)) {
          //// EXAMPLE:
          //// n. item is an UUID with a value assigned with [VALUE].
          outp += "<li>" + itee + ". item is an <span style=\"color:" + colors.other + ";\">UUID</span> with a value assigned with <span style=\"color:" + colors.other + ";\">" + theva + "</span>.</li>";
        } else
          //// Example:
          //// n. item is a string with a value assigned with [VALUE].
          outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.string + ";\">string</span> with a value assigned with <span style=\"color:" + colors.string + ";\">" + theva + "</span>.</li>";
      }
      else if (typeof(theva) == "number") {
        //// Example:
        //// n. item is a number with a value assigned with [VALUE].
        outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.number + ";\">number</span> with a value assigned with <span style=\"color:" + colors.number + ";\">" + theva + "</span>.</li>";
      }
      else if (typeof(theva) == "symbol") {
        // Will probably end up being unused, since there is no way to declare an instance of Symbol in JSON files.
        
        //// Feel free to not translate. However if you want to:
        //// Example:
        //// n. item is a symbol.
        outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.symbol + ";\">symbol</span>.</li>";
      }
      else {
        // As a last resort, to handle every other types if there are, this is here to list other things that are unexpected.
        
        //// This field ends up being uncommon, but you can translate it.
        //// Example:
        //// n. item is a ????.
        outp += "<li>" + itee + ". item is a <span style=\"color:" + colors.other + ";\">" + typeof(theva) + "</span>.</li>";
      }
    });
    outp += "</ul>";
    return outp;
  },
  
  
  ForEACHTHING: function(stuff, doit) {
    var outputhtml = "<ul>";
    if (doit) stuff = Object.entries(stuff);
    if (doit) outputhtml = "<ul style=\"color:#6e5129\">"
    stuff.forEach.call(stuff, stuf => {
      if (typeof(stuf[1]) == "object") {
        if (Array.isArray(stuf[1])) {
          //// Example:
          //// [NAME] is an array with contents being:
          outputhtml += "<li>" + stuf[0] + " is an <span style=\"color:" + colors.array + ";\">array</span> with contents being: " + Parser.ParseArrae(stuf[1]) + "</li>";
        }
        //// EXAMPLE:
        //// [NAME] is an object with the contents being:
        else outputhtml += "<li>" + stuf[0] + " is an <span style=\"color:" + colors.object + ";\">object</span> with contents being: " + Parser.ForEACHTHING(stuf[1], true) + "</li>";
      }
      else if (typeof(stuf[1]) == "boolean") {
        //// EXAMPLE:
        //// [NAME] is a boolean with a value assigned with [VALUE].
        outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.bool + ";\">boolean</span> with a value assigned with <span style=\"color:" + colors.bool + ";\">" + stuf[1] + "</span>.</li>";
      }
      else if (typeof(stuf[1]) == "function") {
        //// EXAMPLE:
        //// [NAME] is a function.
        outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.function + ";\">function</span>.</li>";
      }
      else if (typeof(stuf[1]) == "string") {
        if (uuidvalidation.test(stuf[1])) {
          //// EXAMPLE:
          //// [NAME] is an UUID with a value assigned with [VALUE].
          outputhtml += "<li>" + stuf[0] + " is an <span style=\"color:" + colors.other + ";\">UUID</span> with a value assigned with <span style=\"color:" + colors.other + ";\">" + stuf[1] + "</span>.</li>";
        } else
          //// EXAMPLE:
          //// [NAME] is a string with a value assigned with [VALUE].
          outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.string + ";\">string</span> with a value assigned with <span style=\"color:" + colors.string + ";\">" + stuf[1] + "</span>.</li>";
      }
      else if (typeof(stuf[1]) == "number") {
        //// EXAMPLE:
        //// [NAME] is a number with a value assigned with [VALUE].
        outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.number + ";\">number</span> with a value assigned with <span style=\"color:" + colors.number + ";\">" + stuf[1] + "</span>.</li>";
      }
      else if (typeof(stuf[1]) == "symbol") {
        //// EXAMPLE:
        //// [NAME] is a symbol.
        outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.symbol + ";\">symbol</span>.</li>";
      }
      else {
        // As a last resort.
        
        //// EXAMPLE:
        //// [NAME] is a ????.
        outputhtml += "<li>" + stuf[0] + " is a <span style=\"color:" + colors.other + ";\">" + typeof(stuf[1]) + "</span>.</li>";
      }
    });
    outputhtml += "</ul>";
    return outputhtml;
  }
};

function ParseFile() {
  if (document.getElementById("jsonfile").files.length != 1) {
    //// Translate this string if user ends up selecting more than one file somehow
    alert('You must select one file in order to parse the JSON into readable summary!');
    return;
  }
  var filetext = document.getElementById("jsonfile").files[0];
  if (filetext.type != "application/json") {
    if (filetext.type == "") {
      // To handle uncommon MIME types, this little code of block is here.
      
      //// You can translate the whole string, if you are confused, here's an example
      //// That's strange. This doesn't look like a JSON file. Please upload a JSON file.\n\nFILE TYPE: ???/[file type]
      alert("That's strange... This doesn't look like a JSON file. Please upload a JSON file.\n\nFILE TYPE: ???/" + filetext.name.split('.')[1]);
    } else
      // If it's a common MIME type however, type it out here.
      
      //// You can translate the whole string
      alert("That's strange... This doesn't look like a JSON file. Please upload a JSON file.\n\nFILE TYPE: " + filetext.type);
    return;
  }
  var filereader = new FileReader();
  filereader.onloadend = function(event) {
    try {
    Parser.Parse(event.target.result);
  } catch(err) {
    //// I suggest you to avoid attempt,ng to translate this. However if you can, feel free to do. Just keep the tags.
    document.getElementById('thejson').innerHTML = "<span style=\"color:red;\"><b>" + err.name + "</b>: " + err.message + "</span>";
  } finally {
    document.getElementById('jsoncode').placeholder = event.target.result;
  }
  }
  filereader.readAsText(filetext);
}

try {
  console.log(Parse);
  console.log(ParseFile);
  console.log(colors);
  console.log(Parser);
} catch (err) {
  //// Translate the whole string
  alert(err.name + ": " + err.message + "\n\nTry troubleshooting by restarting the page. If this keeps going then contact the developer");
}

function displayWarning() {
  document.getElementById('he').innerHTML = "<sup style=\"color:#aaaaaa;\">Disclaimer: Google Translate may end up being faulty. Don't rely on this function too much.</sup>";
}

function dedisplayWarning() {
  document.getElementById('he').innerHTML = "Translate the page:";
}