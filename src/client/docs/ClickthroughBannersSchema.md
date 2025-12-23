
# ClickthroughBannersSchema


## Properties

Name | Type
------------ | -------------
`responseId` | string
`banners` | [Array&lt;ClickthroughBannersInner&gt;](ClickthroughBannersInner.md)

## Example

```typescript
import type { ClickthroughBannersSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "responseId": null,
  "banners": null,
} satisfies ClickthroughBannersSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClickthroughBannersSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


