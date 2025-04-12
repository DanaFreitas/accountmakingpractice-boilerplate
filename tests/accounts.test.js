 import {expect, test, bench,describe } from 'vitest' 
import {azterketa, sum} from './utils.js'
import { vi } from 'vitest'
import {Schema, Account} from './models/User.js'
//export const Account = new mongoose.model("Account", userSchema);


//import newAccount from '../controllers/newAccount.js'
//import {LoginInfo, LoginStatus} from './models/LoginStatus'



test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  
// describe('Mongoose connection', () => {
//     it('should check if the connection is being made', (Schema) => {
//         expect(Schema).toBeDefined()

//     });

//     it('should make sure accounts are being made', (Account) => {
//         expect(Account).toBeDefined()
//     });
// });



//const mockresult = Account("mocktest","mocktest","mocktest@mocktest.com")

vi.mock('../controllers/newAccount.js', {spy:true})

const result = Account(Schema,email,password)


test("The account creation works", () => {
expect(result.toBeDefined)
})







test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })





// describe('Login Info', () => {


// })
// it("Is the login true or false, and can I get the login info", (LoginInfo, LoginStatus) => {
// expect(LoginStatus).toBeDefined()    
// })
