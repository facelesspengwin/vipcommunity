import * as pagination from "./pagination"
// @ponicode
describe("pagination.generatePagination", () => {
    test("0", () => {
        let callFunction: any = () => {
            pagination.generatePagination(0, 16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            pagination.generatePagination(1, 32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            pagination.generatePagination(5, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            pagination.generatePagination(2, 256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            pagination.generatePagination(3, 64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            pagination.generatePagination(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
