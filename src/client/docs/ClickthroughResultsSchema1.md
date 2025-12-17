
# ClickthroughResultsSchema1


## Properties

Name | Type
------------ | -------------
`tag` | string
`responseId` | string
`results` | [Array&lt;ClickthroughResultsInner&gt;](ClickthroughResultsInner.md)

## Example

```typescript
import type { ClickthroughResultsSchema1 } from ''

// TODO: Update the object below with actual values
const example = {
  "tag": null,
  "responseId": null,
  "results": null,
} satisfies ClickthroughResultsSchema1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClickthroughResultsSchema1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


