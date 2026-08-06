
# SearchAddtocartSchemaData

Event details

## Properties

Name | Type
------------ | -------------
`responseId` | string
`results` | [Array&lt;SearchAddtocartProduct&gt;](SearchAddtocartProduct.md)
`quickView` | boolean

## Example

```typescript
import type { SearchAddtocartSchemaData } from ''

// TODO: Update the object below with actual values
const example = {
  "responseId": null,
  "results": null,
  "quickView": null,
} satisfies SearchAddtocartSchemaData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchAddtocartSchemaData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


