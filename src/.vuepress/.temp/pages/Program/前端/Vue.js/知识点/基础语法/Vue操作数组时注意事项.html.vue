<template><div><p>由于 JavaScript 语言本身的限制，当我们对数组进行某些操作时，Vue 可能不会检测到数组元素的变化，那么进而视图也不会响应。</p>
<p>为了解决这个问题，Vue给我们提供了如下解决方案： Vue 提供一组观察数组的变异方法（就是这些方法会改变原始数组，所以才会被Vue检测到），使用它们就可以触发视图更新。 这些方法有7个：<code v-pre>push()</code>、<code v-pre>pop()</code>、<code v-pre>shift()</code>、<code v-pre>unshift()</code>、<code v-pre>splice()</code>、<code v-pre>sort()</code>、<code v-pre>reverse()</code></p>
</div></template>


