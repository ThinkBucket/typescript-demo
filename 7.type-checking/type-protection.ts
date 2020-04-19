enum Type { Strong, Week };

class Java {
  helloJava() {
    console.log('Hello Java' );
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript' );
  }
}

// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
//   if (lang.helloJava) {
//     lang.helloJava();
//   } else {
//     lang.helloJavaScript();
//   }
//   return lang;
// }

// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript(); // let lang: Java | JavaScript
//   if ((lang as Java).helloJava) { // OK
//     lang.helloJava(); // OK
//   } else {
//     lang.helloJavaScript(); // OK
//   }
//   return lang;
// }

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if (lang instanceof Java) { // OK
    lang.helloJava(); // OK
  } else {
    lang.helloJavaScript(); // OK
  }
  return lang;
}

getLanguage(Type.Strong);


