#  Example App powered by Cellular JS

Just a Web App powered by Cellular JS (https://github.com/afsec/cellular-js/)

## Project Overview

It's Users CRUD with some other CRUD references.


## Screenshot

![Screenshot](/docs/00-app-screenshot.png?raw=true)

---

## States Concept

![States Concept](/docs/01-state-showuserspage.png?raw=true)

---

## Callgraph sample

![Current Callgraph](/docs/02-callgraph.svg?sanitize=true)

---

## General functionality

- CRUD Users
- CRUD Departments
- CRUD Permissions
- Reference: `Users`:`Department` -> `Departments`:`Name`
- Reference: `Users`:`Permission` -> `Permissions`:`Name`

---

## Getting Started

```sh
git clone --depth=1 https://github.com/afsec/cellular-js-example-app
cd cellular-js-example-app
./build.sh
```
