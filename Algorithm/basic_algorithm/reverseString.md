# leetcode 557 反转字符串中的单词 III

## Problem

### Description

给定一个字符串，反转字符串中每个单词的字符顺序的同时保留空格和单词的初始顺序

### Example

```
input : "Let's take LeetCode contest"

output: "s'teL ekat edoCteeL tsetnoc"
```

### Note

每个单词由单个空格分隔，并且字符串中不会有额外的空格

### 解题要点

- String没有reverse()，但数组有reverse()
- 将字符串分割为数组reverse后再join

### Solution  

[solution.js](String/solution.js)

## Review knowledge

### 常见的String方法和属性

- ##### String.charAt(index = 0)
  未提供index则默认为0，index不在范围则返回空字符串
- ##### String.charCodeAt(index = 0)
  返回对应字符的unicode，index不在范围返回NaN
- ##### String.concat(str2,[,...strN])
- ##### String.includes(searchString,[,position])
  return true or false
- ##### String.endsWith(searchString,[,length])
  length 为搜素长度，默认为str.length
- ##### String.startsWith(searchString,[,length])
- ##### String.indexOf(searchValue,[,fromIndex])
  searchValue:查找的字符串，如果未提供则默认为"undefined"，既string.indexOf("undefined")
  未找到返回-1 fromIndex < 0 等于从0开始查找，fromIndex > string.length 返回-1 
  查找空字符串直接返回对应的fromIndex 如果fromIndex > string.length 返回 string.length
- ##### String.lastIndexOf(searchValue,[,fromIndex])
  从后向前查找 fromIndex >= str.length 等同于查找整个字符串；fromIndex < 0 等同于fromIndex = 0 
  返回 searchValue 的第一个字符在 str 中的位置。str中的字符位置是从 0 开始的；未找到返回-1
- ##### String.localeCompare(compareString[,locales[,options]])
  比较字符串排序大小
  当 引用字符串 在 比较字符串 前面时返回 -1 负值
  当 引用字符串 在 比较字符串 后面时返回 1 正值
  相同位置时返回 0
  'a'.localeCompare('c');返回负值
- ##### String.match(regexp)
  正则匹配
  如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
  如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有属性:groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）；index: 匹配的结果的开始位置；input: 搜索的字符串.
  不传参数返回[""]
- ##### String.normalize([form])##### 
  返回含有给定字符串的 Unicode 规范化形式的字符串
- ##### String.padEnd(targetLength,[,padString])##### 
  如果填充字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断；填充字符串缺省值为 " "（U+0020）(空格)
  返回 在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串。
- ##### String.padStart()
- ##### String.repeat(count)
  count必须为非负值 
  "abc".repeat(0)      // ""
  "abc".repeat(1)      // "abc"
  "abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
- ##### String.replace(regexp|substr, newSubStr|function)##### 
  返回 一个部分或全部匹配由替代模式所取代的 **新的字符串**。
  如果pattern(substr)是字符串，则仅替换第一个匹配项
- ##### String.search(regexp)##### 
  返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1
- ##### String.slice(beginIndex,[,endIndex])##### 
  返回一个从原字符串中提取出来的新字符串;如果Index < 0，则为Index + string.length
- ##### String.split([separator[,limit]])##### 
  separator 可以是字符串或正则表达式；limit是整数，限定返回的分割片段数量
- ##### String.substring(indexStart[,indexEnd])
- ##### String.to(Locale)LowerCase()
- ##### String.to(Locale)UpperCase()
- ##### String.toString()
- ##### String.trim()##### 
  去除开始和结尾的空格
- ##### String.trimStart()
- ##### String.trimEnd()
- ##### String.valueOf()##### 
  返回String的原始值
  const stringObj = new String('foo');
  console.log(stringObj);// expected output: String { "foo" }
  console.log(stringObj.valueOf());// expected output: "foo"
- ##### String.string[Symbol.iterator]


### 正则




