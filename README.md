# initiativetracker

## Synopsis

A Library for an initiative tracker for the game Dungeons and Dragons

## Code Example

The easiest way is to 
```javascript
window.onload = function(){
    //the button to fire the function myFunction()
			document.getElementById("btn_submit").addEventListener("click", myFunction);
    // Options, fill in which Div element contains the players(name) and the initiative (number 0-30)
			var options = {
				players: "players",
				initiative: "initiative"
			}

      //In your function the selected item needs to be selected and removed from the list after adding to the initiative list.
			function myFunction() {
			    _ts("#players", options).adding();
			    _ts("#players", options).removing();
			}
		}
```

## Demo
See bounce [demo](tschout.nl/initiative)

## Motivation

This library was created because I wanted, as a DM, to make an easy to use initiative tracker. So when I build it, I wanted to share it with other DM's

## Installation

Just download library.js, put it in the head of your page and call it. Make sure there is a button and a selectitem to use.

## API Reference

### init

| Parameters    | Type          | Optional | Description                                                |
|:-------------:|:-------------:|:--------:| ---------------------------------------------------------- |
| selector      | string        | true     | Html selector that targets the element that needs to get the players |
| settings      | object        | true     | Object containing settings `players` and/or `initiative`  |
