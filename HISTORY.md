# Changelog

## [v0.2.0]
> Jul 17, 2016

The new block text directive allows you to write text without Expug parsing.

```jade
script.
  if (usingExpug) {
    alert('Awesome!')
  }
```

Added support for multiline code. Lines ending in `{`, `(`, `[` or `,` will assume to be wrapped.

```jade
= render App.FooView, "nav.html",
  conn: @conn,
  action: {
    "Create new",
    item_path(@conn, :new) }
```

[v0.2.0]: https://github.com/rstacruz/expug/compare/v0.1.1...v0.2.0

## [v0.1.1]
> Jun 27, 2016

Expug now supports `if do ... end` and other blocks.

```jade
= if @error do
  .alert Uh oh! Check your form and try again.
```

[v0.1.1]: https://github.com/rstacruz/expug/compare/v0.0.1...v0.1.1

## [v0.0.1]
> Jun 26, 2016

Initial release.

[v0.0.1]: https://github.com/rstacruz/expug/tree/v0.0.1
