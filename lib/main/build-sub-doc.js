'use strict'

const { _log, log } = require('@flavioespinoza/log_log')
log.configure({ locate: true })

const _ = require('lodash')
const docdash = require('../../../docdash/index')
const fs = require('fs-extra')

const path = require('path')

const util = require('../common/util')

const basePath = path.join(__dirname, '..', '..')

log.lightYellow('basePath', basePath)


const _path_nodedash = path.join(basePath, '_nodedash')
log.lightYellow('_path_nodedash', _path_nodedash)

const _doc_path_flodash = path.join(basePath, 'doc')
const _doc_path_nodedash = path.join(_path_nodedash, 'doc')

const _doc_flodash_README = path.join(_doc_path_flodash, 'doc.md')
const _doc_nodedash_README = path.join(_doc_path_flodash, 'nodedash.md')

const _flodashPkg = require(path.join(basePath, 'package.json'))
const _nodedashPkg = require(path.join(_path_nodedash, 'package.json'))

const _flodash = path.join(basePath, 'flodash.js')
const _nodedash = path.join(_path_nodedash, 'nodedash.js')

const _flodash_config = _config(_flodash, _flodashPkg)
const _nodedash_config = _config(_nodedash, _nodedashPkg)

// console.log('_flodash_config')
// console.log(_flodash_config)


console.log('_nodedash_config')
console.log(_nodedash_config)

function _config (_path, _pkg) {
	log.blue(_pkg.name)

	return {
		base: {
			path: _path,
			title: `<a href="https://github.com/flavioespinoza/${_pkg.name}">${_pkg.name}</a> <span>v${_pkg.version}</span>`,
			toc: 'categories',
			pkg: _pkg,
			url: source(_pkg)
		},
		site: {
			entryLink: '',
			sourceLink: `<a href="${source(_pkg)}">${_pkg.name}.js</a>`,
			tocHref: '',
			tocLink: '',
			sublinks: ''
		}
	}
}

/**
 * Composes a npm link from `text` and optional `title`.
 *
 * @private
 * @returns {string} Returns the composed github `link` for each `method`.
 */
function source(_pkg) {
	return `https://github.com/flavioespinoza/${_pkg.name}/blob/master/methods/${_pkg.name}.js`
}

/**
 * Post-process `markdown` to make adjustments.
 *
 * @private
 * @param {string} markdown The markdown to process.
 * @returns {string} Returns the processed markdown.
 */
function postprocess(markdown) {
	// Wrap symbol property identifiers in brackets.
	return markdown.replace(/\.(Symbol\.(?:[a-z]+[A-Z]?)+)/g, '[$1]')
}

/*----------------------------------------------------------------------------*/

/**
 * Creates the documentation markdown formatted for 'github' or 'site'.
 *
 * @private
 * @param {string} type The format type.
 */
function build(type) {

	// const _flodashOptions = _.defaults({}, _flodash_config.base, _flodash_config[type])
	const _nodedashOptions = _.defaults({}, _nodedash_config.base, _nodedash_config[type])

	// const _flodash_markdown = docdash(_flodashOptions)
	const _nodedash_markdown = docdash(_nodedashOptions)

	// fs.writeFile(_doc_flodash_README, postprocess(_flodash_markdown), util.pitch)
	fs.writeFile(_doc_nodedash_README, postprocess(_nodedash_markdown), util.pitch)

}

build(_.last(process.argv))
