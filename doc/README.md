# <a href="https://github.com/flavioespinoza/flodash">flodash</a> <span>v1.0.14</span>

<!-- div class="toc-container" -->

<!-- div class="import" -->

## `Import`
* <a href="#import">`import`</a>
* <a href="#importModules">`importModules`</a>

<!-- /div -->

<!-- div class="import" -->

## `Require`
* <a href="#require">`require`</a>

<!-- /div -->

<!-- div class="import" -->

## `Date`
* <a href="#_f-date">`_f.date`</a>
* <a href="#_f-now">`_f.now`</a>
* <a href="#_f-getTimestamp">`_f.getTimestamp`</a>
* <a href="#_f-isDate">`_f.isDate`</a>

<!-- /div -->

<!-- div class="import" -->

## `Math`
* <a href="#_f-addDays">`_f.addDays`</a>
* <a href="#_f-subtractDays">`_f.subtractDays`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Import`

<!-- div -->

<h3 id="import"><code>import</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/import.js">import.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import _f from 'flodash'

_f.date('3/14/2019', 'uk')
// => 14 Mar 2019

_f.addDays('3/6/19', 1, '-')
// => 03-07-2019

_f.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="importModules"><code>importModules</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/importModules.js">importModules.js</a>

Import individual ES Modules using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import { addDate, subtractDate } from 'flodash'

addDays('3/6/19', 1, '-')
// => 03-07-2019

subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Require`

<!-- div -->

<h3 id="require"><code>require</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/require.js">require.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
const _f = require('flodash')

_f.date('3/14/2019', 'uk')
// => 14 Mar 2019

_f.addDays('3/6/19', 1, '-')
// => 03-07-2019

_f.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

<h3 id="_f-date"><code>_f.date(Date, format)</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/date.js">date.js</a>

Computes input `date` converts to string and returns with specified `format`.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: options are `new Date()`, `timestamp` or `string` in valid date format. See example below.
2. `format` *(string)*:

#### Returns
*(string)*: Returns the date as a String in specified format.

#### Example
```js
let any_fate = "1/07/2019"

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
---

<!-- /div -->

<!-- div -->

<h3 id="_f-now"><code>_f.now()</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/now.js">now.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
const { defer } = require('lodash')

defer(function(stamp) {
  console.log(_f.now() - stamp)
}, _f.now())

// => Logs milliseconds it took for the deferred invocation.
```
---

<!-- /div -->

<!-- div -->

<h3 id="_f-getTimestamp"><code>_f.getTimestamp(Date)</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/getTimestamp.js">getTimestamp.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
`date` argument. If `date` is `undefined` it gives milliseconds elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: to convert to timestamp.

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
_f.getTimestamp('July 4 1776')
// => 121244400000

_f.getTimestamp()
// => 1552353178563
// returns now timestamp

_f.getTimestamp('11/4/1973')
// => -6106035604000
```
---

<!-- /div -->

<!-- div -->

<h3 id="_f-isDate"><code>_f.isDate(value)</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/isDate.js">isDate.js</a>

Verifies if `value` is a valid `Date object` and valid `Date`.

#### Since
1.0.0

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a `Date object` & valid `Date`, else `false`.

#### Example
```js
_f.isDate('3/3/19')
// => true

_f.isDate(new Date())
// => true

_f.isDate('Jul 4 1776')
// => true

_f.isDate(25200000)
// => true

_f.isDate('3/33/19')
// => false

function getDate() {
    return '1/1/19'
}
_f.isDate(getDate)
// => false

_f.isDate(getDate())
// => true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

<h3 id="_f-addDays"><code>_f.addDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/addDays.js">addDays.js</a>

Input `_fate` add `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*:
2. `days` *(number)*: to add
3. `format` *(string)*:

#### Example
```js
const any_fate = '3/6/19'

_f.addDays(any_fate, 1, '-')
// => 03-07-2019

_f.addDays(any_fate, 2, '.')
// => 03.08.2019

_f.addDays(any_fate, 3, 'uk')
// => 09 Mar 2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_f-subtractDays"><code>_f.subtractDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/flodash/blob/master/methods/subtractDays.js">subtractDays.js</a>

Input `_fate` subtract `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(Date)*:
2. `days` *(number)*: to subtract
3. `format` *(string)*:

#### Example
```js
const any_fate = '3/6/19'

_f.subtractDays(any_fate, 1, '-')
// => 03-05-2019

_f.subtractDays(any_fate, 2, '.')
// => 03.04.2019

_f.subtractDays(any_fate, 3, 'uk')
// => 03 Mar 2019
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
