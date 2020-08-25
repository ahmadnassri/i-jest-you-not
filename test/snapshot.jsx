import tap from 'tap'
import React from 'react'
import HelloWorld from '../components/HelloWorld'
import { create } from 'react-test-renderer'

tap.test('test', assert => {
  assert.plan(1)

  const tree = create(<HelloWorld />).toJSON()

  assert.matchSnapshot(tree)
})
