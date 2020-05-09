# Sequence to Range

proper readme comming soon...

## Steps to install:
 ```
 npm i sequence-to-range
```

## Steps to use:

```
const { getRanges } from 'sequence-to-range`

getRanges([1, 2, 3, 4, 5])
```

## Sample input output

```
input: [1, 2, 3, 4, 5]
output: ['1 - 5']

input: [1, 2, 3, 4, 5, 9, 10, 11]
output: ['1 - 5', '9 - 11']

input: [1, 2, 3, 4, 5, 9]
output: ['1 - 5', '9']