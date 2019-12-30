# Calculating Derived State in JavaScript Using Selectors

This repository accompanies the blog post [Calculating Derived State in JavaScript Using Selectors](https://typeofnan.dev/calculating-derived-state-in-javascript-using-selectors/).

## Introduction

State management is challenging. We can make it less challenging by making sure we don’t store any redundant information in our state. What do I mean? Let’s say in our program we need to figure out whether people will be allowed in our bar. We can determine this by examining a couple attributes of the person: we can look at his or her age (anyone who is 21 or older may enter the bar) or we can look at whether he or she is an employee of the bar (all bar employees are allowed to enter, regardless of age). Now, we _could_ store all this information in our state object.

## Exploring the Content of this Repository

This repository contains two files:

- `createSelect.js`: Exports a `createSelector` function that allows us to compose selectors form other selectors.
- `index.js`: Implements a sample `state` object and demonstrates calculating derived state with selectors.
