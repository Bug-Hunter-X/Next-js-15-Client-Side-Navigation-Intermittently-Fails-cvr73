```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // router.push('/'); //Original code.  Can be unreliable.
    router.replace('/'); // More reliable for client side navigation
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}
```
This solution uses `router.replace()` which is more reliable for client side navigation.