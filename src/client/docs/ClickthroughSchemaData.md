
# ClickthroughSchemaData

Event details

## Properties

Name | Type
------------ | -------------
`responseId` | string
`results` | [Array&lt;ClickthroughResultsInner&gt;](ClickthroughResultsInner.md)
`banners` | [Array&lt;ClickthroughBannersInner&gt;](ClickthroughBannersInner.md)

## Example

```typescript
import type { ClickthroughSchemaData } from ''

// TODO: Update the object below with actual values
const example = {
  "responseId": null,
  "results": null,
  "banners": null,
} satisfies ClickthroughSchemaData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClickthroughSchemaData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


