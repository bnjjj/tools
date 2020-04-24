# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-inside-loop`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 32
      index: 32
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Async functions can only be declared at the top level or inside a block'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 9
          index: 9
          line: 1
        }
        start: Object {
          column: 10
          index: 10
          line: 1
        }
      }
    }
  ]
  body: Array [
    WhileStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 32
          index: 32
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      test: NumericLiteral {
        value: 1
        format: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 8
            line: 1
          }
          start: Object {
            column: 7
            index: 7
            line: 1
          }
        }
      }
      body: FunctionDeclaration {
        id: BindingIdentifier {
          name: 'foo'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 28
              index: 28
              line: 1
            }
            start: Object {
              column: 25
              index: 25
              line: 1
            }
          }
        }
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 32
            index: 32
            line: 1
          }
          start: Object {
            column: 10
            index: 10
            line: 1
          }
        }
        body: BlockStatement {
          body: Array []
          directives: Array []
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 32
              index: 32
              line: 1
            }
            start: Object {
              column: 30
              index: 30
              line: 1
            }
          }
        }
        head: FunctionHead {
          async: true
          generator: false
          hasHoistedVars: false
          params: Array []
          predicate: undefined
          rest: undefined
          returnType: undefined
          thisType: undefined
          typeParameters: undefined
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 30
              index: 30
              line: 1
            }
            start: Object {
              column: 28
              index: 28
              line: 1
            }
          }
        }
      }
    }
  ]
}
```