# quickjs-emscripten as ESM

This module simply re-packages [QuickJS Emscripten](https://github.com/justjake/quickjs-emscripten) as usable ES Module plus it adds in memory FileSystem.

```js
import { getQuickJS } from 'https://esm.run/@webreflection/quickjs-emscripten';
const QuickJS = await getQuickJS();

const vm = QuickJS.newContext();
const world = vm.newString("world");

vm.setProp(vm.global, "NAME", world);
world.dispose();

const result = vm.evalCode(`"Hello " + NAME + "!"`);

if (result.error) {
  console.log("Execution failed:", vm.dump(result.error));
  result.error.dispose();
} else {
  console.log("Success:", vm.dump(result.value));
  result.value.dispose();
}

vm.dispose();
```
