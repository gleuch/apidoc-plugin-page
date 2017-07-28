# apidoc-plugin-page
Generates an [apiDoc](https://github.com/apidoc/apidoc) plugin for defining a page.

## How to install
As an extension of [apiDoc](https://github.com/apidoc/apidoc), first install at least [apiDoc-core](https://github.com/apidoc/apidoc-core).

This plugin, as with all apiDoc plugins named as `apidoc-plugin-*`, can be installed locally or globally alongside the `apidoc-core`. 

~~Run either `npm install apidoc-plugin-page` or `npm install -g apidoc-plugin-author`.~~

Run `npm install git+https://git@github.com/gleuch/apidoc-plugin-page.git`

## Getting started
As the author of API endpoints looking for a way to start documentation and actually maintain it, [apiDoc](https://github.com/apidoc/apidoc) is a great way to go.  Those who are new to the syntax of apiDoc should thoroughly read the associated [documentation](http://apidocjs.com/).  Once familiar with the general syntax, add something similar to the following, to include the `author` field in the generated documentation.
The ability to quickly generate an API doc is useful, it generating documentation for a large project can be burdensome for the developer to understand where to find something. By including an `@apiPage [name]` with some template changes, anyone can make a multi-page API documentation.

```js
/**
* @apiPage Users
**/
```

The generated `api_data.json` should now include a block like
``` json
{
    "page": "Users"
}
```

### Template

...


## Todos

- [x] Parse `@apiPage`
- [ ] Allow definition within `@apiDefine`
- [ ] Publish node module
- [ ] Finalize APIDoc template
- [ ] Publish APIDoc template
