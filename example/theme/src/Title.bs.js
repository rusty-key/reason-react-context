// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
"use strict";

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Theme$ReactTemplate = require("./Theme.bs.js");

var component = ReasonReact.statelessComponent("Title");

function make(message, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      Curry._1(
        Theme$ReactTemplate.Context[/* Consumer */ 5][/* make */ 1],
        function(theme) {
          var match = +(theme === /* Light */ 0);
          return React.createElement(
            "h1",
            {
              className: match !== 0 ? "title-light" : "title-dark"
            },
            message
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
