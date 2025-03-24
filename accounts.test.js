 import {expect, test, bench,describe } from 'vitest' 
import {azterketa, sum} from './utils.js'
import { vi } from 'vitest'



test('Did the azterketa pass?', () => {
    expect(azterketa).toBe("azterketa")
})


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
