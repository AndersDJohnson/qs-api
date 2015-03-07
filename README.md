qs-api
======

Web tool to convert query parameters to JSON.

https://qs-api.herokuapp.com/

## Use

Pass query parameters to the URL. Supports nesting per [qs].

### Examples

* https://qs-api.herokuapp.com/?example=hello
* https://qs-api.herokuapp.com/?a[]=1&a[]=2
* https://qs-api.herokuapp.com/?person[name]=Joe&person[mood]=happy&person[address][country]=USA

### Options

Options can be passed with the special `_` parameter. This will not be included in the output.
If you need to use the `_` parameter, let me know on [#1](/../../issues/1).

#### Prettified JSON

Use the `spaces` option (from 0-10. default=2), i.e.:
https://qs-api.herokuapp.com/?ok=1&_[spaces]=10

To disable pretty printing, use a setting of `0`, i.e.:
https://qs-api.herokuapp.com/?ok=1&_[spaces]=0

[qs]: https://github.com/hapijs/qs
