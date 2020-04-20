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

// 2. in
// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
//   if ('helloJava' in lang) { // OK
//     lang.helloJava(); // OK
//   } else {
//     lang.helloJavaScript(); // OK
//   }
//   return lang;
// }

// getLanguage(Type.Strong);

// 3. typeof
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if (typeof x === 'string') { // OK
    x.length; // OK
  } else {
    x.toFixed(); // OK
  }
  return lang;
}

getLanguage(Type.Strong, '');



