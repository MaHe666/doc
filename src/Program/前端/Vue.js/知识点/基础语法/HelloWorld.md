---
title: HelloWorld
order: 10
---

```html
<div  id="app">
    <input type="text"  v-model="msg" />
	<span>{{msg}}</span>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            msg: 'Hello World!'
        }
    });
</script>
```

