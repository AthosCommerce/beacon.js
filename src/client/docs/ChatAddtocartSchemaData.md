
# ChatAddtocartSchemaData

Event details

## Properties

Name | Type
------------ | -------------
`chatSessionId` | string
`responseId` | string
`results` | [Array&lt;Product&gt;](Product.md)

## Example

```typescript
import type { ChatAddtocartSchemaData } from ''

// TODO: Update the object below with actual values
const example = {
  "chatSessionId": null,
  "responseId": null,
  "results": null,
} satisfies ChatAddtocartSchemaData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatAddtocartSchemaData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


