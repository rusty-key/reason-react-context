// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
"use strict";

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Input$ReactTemplate = require("./Input.bs.js");
var State$ReactTemplate = require("./State.bs.js");
var AddInput$ReactTemplate = require("./AddInput.bs.js");
var TodoList$ReactTemplate = require("./TodoList.bs.js");

var component = ReasonReact.statelessComponent("App");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      State$ReactTemplate.make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            Input$ReactTemplate.make(/* array */ [])
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            AddInput$ReactTemplate.make(/* array */ [])
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            TodoList$ReactTemplate.make(/* array */ [])
          )
        ]
      )
    );
  };
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */