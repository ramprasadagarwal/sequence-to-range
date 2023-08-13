# Sequence to Range

npm package to convert sequence of number into range

## Steps to install:

```
npm i sequence-to-range
```

## Steps to use:

```
import sequenceToRange from 'sequence-to-range'
                    or
const sequenceToRange = require('sequence-to-range')

sequenceToRange([1, 2, 3, 4, 5])
```

## Sample input output

```
input: [1, 2, 3, 4, 5]
output: ['1 - 5']

input: [1, 2, 3, 4, 5, 9, 10, 11]
output: ['1 - 5', '9 - 11']

input: [1, 2, 3, 4, 5, 9, 11]
output: ['1 - 5', '9', '11']
```

## Definition

```
sequenceToRange(sequence, delimiter = ' - ')
```
