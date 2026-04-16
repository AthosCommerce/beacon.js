
# ChatResultProduct

Describes a tracked result.

## Properties

Name | Type
------------ | -------------
`type` | [ChatResultProductType](ChatResultProductType.md)
`parentId` | string
`uid` | string
`sku` | string

## Example

```typescript
import type { ChatResultProduct } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "parentId": null,
  "uid": null,
  "sku": null,
} satisfies ChatResultProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatResultProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


