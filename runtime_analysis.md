## **Step 1 Notes**:
**extraLargeArray**
```bash
insert 915.3814 ms
append 3.0642 ms
```
**largeArray**:
```bash
insert 9.2781 ms
append 687.8 μs
```
**mediumArray**:
```bash
insert 198.8 μs
append 152.4 μs
```
**smallArray**:
```bash
insert 51.1 μs
append 110.4 μs
```
**tinyArray**
```bash
insert 72.1 μs
append 92.1 μs
```

**Observation**:

in all cases, performing a Push has a faster runtime result then unshift. however it is also relevant to notice that the magnatude of difference between each test is vastly different based on the relative size of the array. the bigger the array, the wider the runtime differential.

**extra credit**:

the reason that this is the case is because while `push()` or `append()` might just place a value on the array at the very end, `unshift()` places the value at the beginning of the array and forces every other value to shift indicies by 1, greatly increasing workload.