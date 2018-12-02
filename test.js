const test = require('ava')
const hasIdSelector = require('.')

test('it exposes a function', t => {
	t.is('function', typeof hasIdSelector)
})

test('it returns a boolean', t => {
	t.is(typeof hasIdSelector('test'), 'boolean')
})

test('it accepts a simple id selector', t => {
	t.true(hasIdSelector('#test'))
})

test('it accepts a combined selector', t => {
	t.true(hasIdSelector('#test::before'))
})

test('it accepts a nested id selector', t => {
	t.true(hasIdSelector('.parent #test .child'))
})

test('it accepts an element selector with an id', t => {
	t.true(hasIdSelector('main#main'))
})

test('it rejects a non-id selector', t => {
	t.false(hasIdSelector('.test'))
})

test('it does not count an attribute selector as id', t => {
	t.false(hasIdSelector('a[href=#crux])')) // No quotes
	t.false(hasIdSelector("a[href='#crux']")) // Single quotes
	t.false(hasIdSelector('a[href="#crux"]')) // Double quotes
})
