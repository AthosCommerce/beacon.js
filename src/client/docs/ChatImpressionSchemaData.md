
# ChatImpressionSchemaData

Event details

## Properties

Name | Type
------------ | -------------
`chatSessionId` | string
`responseId` | string
`results` | [Array&lt;ChatResultProduct&gt;](ChatResultProduct.md)

## Example

```typescript
import type { ChatImpressionSchemaData } from ''

// TODO: Update the object below with actual values
const example = {
  "chatSessionId": null,
  "responseId": null,
  "results": null,
} satisfies ChatImpressionSchemaData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatImpressionSchemaData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


