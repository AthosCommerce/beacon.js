
# SearchAddtocartProduct

Product details

## Properties

Name | Type
------------ | -------------
`parentId` | string
`uid` | string
`sku` | string
`qty` | number
`price` | number
`searchType` | [SearchType](SearchType.md)

## Example

```typescript
import type { SearchAddtocartProduct } from ''

// TODO: Update the object below with actual values
const example = {
  "parentId": null,
  "uid": null,
  "sku": null,
  "qty": null,
  "price": null,
  "searchType": null,
} satisfies SearchAddtocartProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchAddtocartProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


