import tap from 'tap'
import React from 'react'
import CheckBox from '../components/CheckBox'
import { cleanup, fireEvent, render } from '@testing-library/react'

tap.afterEach(done => {
  cleanup()
  done()
})

tap.test('change after click', assert => {
  assert.plan(2)

  const { queryByLabelText, getByLabelText } = render(
    <CheckBox labelOn='On' labelOff='Off' />
  )

  assert.ok(queryByLabelText(/off/i))

  fireEvent.click(getByLabelText(/off/i))

  assert.ok(queryByLabelText(/on/i))
})
