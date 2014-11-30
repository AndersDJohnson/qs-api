qs-web
======

Web tool to convert query parameters to JSON.

http://qsapi.herokuapp.com/

## Use

Pass query parameters to the URL. Supports nesting per [qs].

### Examples

* http://qsapi.herokuapp.com/?example=hello
* http://qsapi.herokuapp.com/?a[]=1&a[]=2
* http://qsapi.herokuapp.com/?person[name]=Joe&person[mood]=happy&person[address][country]=USA

### Options

Options can be passed with the special `_` parameter. This will not be included in the output.
If you need to use the `_` parameter, let me know on [#1](/../../issues/1).

#### Prettified JSON

Use the `spaces` option, i.e.:
http://qsapi.herokuapp.com/?ok=1&_[spaces]=10

By default, we pretty print with 2 spaces. To disable pretty printing, use a setting of `0`, i.e.:
http://qsapi.herokuapp.com/?ok=1&_[spaces]=0

[qs]: https://github.com/hapijs/qs
