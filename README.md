use-text-fit
===

![npm version](https://img.shields.io/npm/v/use-adblock-detect)

A simple React hook to detect AdBlock

---

Install 
---

```shell script
npm install use-adblock-detect
```

Usage
---

```typescript jsx
import useAdblockDetect from 'use-adblock-detect';


function Page() {
    const detected = useAdblockDetect();

    return <main>
        {detected && <h1>Please disable adblock</h1>}
    </main>;
}
```

The hook returns a boolean that determines whether Adblock was detected on the user's browser.
