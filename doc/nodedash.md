# <a href="https://github.com/flavioespinoza/nodedash">nodedash</a> <span>v1.0.0</span>

<!-- div class="toc-container" -->

<!-- div class="import" -->

## `Import`
* <a href="#_n-import">`_n.import`</a>
* <a href="#_n-modules">`_n.modules`</a>

<!-- /div -->

<!-- div class="import" -->

## `Require`
* <a href="#_n-require">`_n.require`</a>

<!-- /div -->

<!-- div class="import" -->

## `App`
* <a href="#_n-app">`_n.app`</a>

<!-- /div -->

<!-- div class="import" -->

## `Util`
* <a href="#_n-error">`_n.error`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Import`

<!-- div -->

<h3 id="_n-import"><code>_n.import</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import _n from 'nodedash'

_n.date('3/14/2019', 'uk')
// => 14 Mar 2019

_n.addDays('3/6/19', 1, '-')
// => 03-07-2019

_n.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_n-modules"><code>_n.modules</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import individual ES Modules using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import { app } from 'nodedash'
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Require`

<!-- div -->

<h3 id="_n-require"><code>_n.require</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Import using `require`

#### Since
1.0.0

#### Example
```js
const _n = require('nodedash')
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“App” Methods`

<!-- div -->

<h3 id="_n-app"><code>_n.app</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Node App Server

#### Since
1.0.0

#### Example
```js
const _n = require('nodedash')

const PORT = 7001
_n.app.listen(PORT, () => {
	console.log('Listening on port ' + PORT)
})
// => Listening on port  7001
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Util” Methods`

<!-- div -->

<h3 id="_n-error"><code>_n.error(Method, Error)</code></h3>
<a href="https://github.com/flavioespinoza/nodedash/blob/master/methods/nodedash.js">nodedash.js</a>

Error Handler

#### Since
1.0.0

#### Arguments
1. `Method` *(string)*: Name
2. `Error` *(object)*: Object

#### Returns
*(object)*: and logs error in console

#### Example
```js
const _n = require('nodedash')
const axios = require('axios')

const getStuff = async (() => {
	try {
		const getData = await axios('https://bullshit.foobars')
		return getData
	} catch (err) {
		return _n.error('getStuff', err)
	}
})
// => { method: 'getStuff', error: { msg: '404 not found' }}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
