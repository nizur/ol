import Vue from 'vue'
import Business from 'src/components/Business'

describe('Business', () => {
  // Inspect the raw component options
  it('has all necessary hooks', () => {
    expect(typeof Business.created).toBe('function')
  })
})
