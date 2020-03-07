#  Example App powered by Cellular JS

Just a Web App powered by Cellular JS (https://github.com/afsec/cellular-js/)

## Project Overview

It's just a CRUD Users relationed with CRUD Group

## Rendered State: ShowUsersPage

![Show Users page](/docs/01-state-showuserspage.png?raw=true)

## Auto-generated current callgraph

![Current Callgraph](/docs/02-callgraph.png?raw=true)

## General functionality

- CRUD Users
- CRUD Departments
- CRUD Permissions
- Reference: `Users`:`Department` -> `Departments`:`Name`
- Reference: `Users`:`Permission` -> `Permissions`:`Name`

## Getting Started

```sh
git clone --depth=1 https://github.com/afsec/cellular-js-example-app
cd cellular-js-example-app
./build.sh
```
