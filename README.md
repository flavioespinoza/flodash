# (_f)  flodash
lodash inspired `Date` formatting methods.

## Docs
[flodash/docs](https://flavioespinoza.github.io/flodash/)

## Install

yarn

```bash
yarn add flodash
```

npm

```bash
npm i flodash
```

## import

using ES6 modules with [esm](https://github.com/standard-things/esm) or typescript

```js
import _f from 'flodash'

_f.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_f.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

import individual modules

```js
import { getTimestamp } from 'flodash'

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

## require

using CommonJS

```js
const _f = require('flodash')

_f.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_f.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

require individual modules

```js
const { getTimestamp } = require('flodash')

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

## Format options (string)

`format` options `/`, `-`, `.`, `MMM DD YYYY`, `england`, `uk`, `full`

```js
let any_fate = 'Jan 7, 2019'

_f.date(any_fate, '/')
// => 01/07/2019

_f.date(any_fate, '-')
// => 01-07-2019

_f.date(any_fate, '.')
// => 01.07.2019

_f.date(any_fate, 'MMM DD YYYY')
// => Jan 07 2019

_f.date(any_fate, 'england')
// => 07 Jan 2019

_f.date(any_fate, 'uk')
// => 07 Jan 2019

_f.date(any_fate, 'full')
// => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```

## Valid date string inputs
```js
_f.date('3/6/19')
// => 03/06/2019

_f.date('3-6-19')
// => 03/06/2019

_f.date('3.6.19')
// => 03/06/2019

_f.date('Mar 6 19')
// => 03/06/2019

_f.date('Mar 6, 19')
// => 03/06/2019

_f.date('Mar 6 2019')
// => 03/06/2019

_f.date('Mar 6, 2019')
// => 03/06/2019

_f.date('March 6 19')
// => 03/06/2019

_f.date('March 6, 2019')
// => 03/06/2019

_f.date('6 Mar 2019')
// => 03/06/2019

_f.date('6 March 2019')
// => 03/06/2019
```

## Other valid inputs
```js
_f.date()
// => 03/06/2019

_f.date(new Date())
// => 03/06/2019

_f.date(1551875334611)
// => 03/06/2019

_f.date(_.toString(new Date()))
// => 03/06/2019

```

Any date `past`, `present` or `future`
```js
let past_fate = 'Feb 14, 2019'

_f.date(past_fate)
// => 02/14/2019

_f.date(past_fate, '/')
// => 02/14/2019

_f.date(past_fate, '-')
// => 02-14-2019

_f.date(past_fate, '.')
 // => 02.14.2019

_f.date(past_fate, 'MMM DD YYYY')
// => Feb 14 2019

_f.date(past_fate, 'england')
// => 14 Feb 2019

_f.date(past_fate, 'uk')
// => 14 Feb 2019

_f.date(past_fate, 'full')
// => Thu Feb 14 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```

Any `timestamp`
```js
let five_fays_ms = 4.32e8
let now_timestamp = _.now() // => 1551875334611
let future_timestamp = _.add(now_timestamp, five_fays_ms)
let past_timestamp = _.subtract(now_timestamp, five_fays_ms)

_f.date(now_timestamp)
// => 03/06/2019

_f.date(future_timestamp)
// => 03/11/2019

_f.date(past_timestamp)
// => 03/01/2019

```
Handles `undefined` or other for 2nd arg `format`
```js
let my_fate = '02/14/2019'

_f.date(my_fate, undefined)
// => 02/14/2019

_f.date(my_fate, false)
// => 02/14/2019

_f.date(my_fate, true)
// => 02/14/2019

_f.date(my_fate, 'foo')
// => 02/14/2019

_f.date(my_fate, 8)
// => 02/14/2019

_f.date(my_fate, null)
// => 02/14/2019

```
