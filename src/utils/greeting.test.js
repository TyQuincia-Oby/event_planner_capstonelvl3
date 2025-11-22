import addDecoration from "./greeting";

import { describe, it, expect} from "vitest"

describe ("addDecoration fx", ()=> {
    it("it should add stars to name", ()=>{
        const results = addDecoration("Ty")
        console.log(results)
        expect(results).toBe("⭐Ty⭐")
        
    })
})