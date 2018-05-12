// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var State$ReactTemplate = require("./State.bs.js");

var component = ReasonReact.statelessComponent("TodoList");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      Curry._1(
        State$ReactTemplate.Context[/* Consumer */ 5][/* make */ 1],
        function(param) {
          var send = param[/* send */ 0];
          var __x = Belt_List.reverse(param[/* state */ 1][/* todos */ 0]);
          return React.createElement(
            "ol",
            undefined,
            Belt_List.toArray(
              Belt_List.map(__x, function(todo) {
                var match = todo[/* complete */ 1];
                return React.createElement(
                  "li",
                  {
                    key: String(todo[/* id */ 2]),
                    style: {
                      textDecoration: match !== 0 ? "line-through" : ""
                    },
                    onClick: function() {
                      return Curry._1(
                        send,
                        /* ToggleTodo */ Block.__(1, [todo[/* id */ 2]])
                      );
                    }
                  },
                  todo[/* content */ 0]
                );
              })
            )
          );
        }
      )
    );
  };
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */