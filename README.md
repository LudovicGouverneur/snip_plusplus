# Snip_plusplus

## Description :


## Main learning objective
1. Primitive coercion 
2. Primitive types
3. Creating our first end-to-end snippet analysis and building exercice on it

## Code

```js
typeof (typeof Number(void Boolean(null))).toString()
```
___

## Exercises & study links.  
* pytut: /
* replit: [myreplit](https://repl.it/@Ludovic7127/IroncladWebbedOutcome)  

  ```js
  typeof (typeof Number(void Boolean(null))).toString();
  // S0 : (Null, null)
  Boolean(null);
  // S1 : (Boolean, false)
  void false;
  // S2 : (Undefined, undefined)
  Number(undefined);
  // S3 : (Number, NaN);
  (typeof NaN);
  // S4 : (String, "number")
  ("number").toString();
  // S5 : (String,"number")
  typeof "number";
  // S6 : (String,"String")
  ```

* debugger: snippets directly in the text
* [sketches you made](https://sketchboard.me/HA97gi8gPUEH)

## Review : 

* Things I struggled with : classifying the files
* Things you learned : 
* typeof returns a string
* vocab : 
* next step : making an exercice of it

## Link.  
* [w3schools](https://www.w3schools.com/js/js_datatypes.asp)

