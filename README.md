# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a bug encountered in a Next.js 15 application involving client-side navigation using the `useRouter` hook and `Link` component.  Under certain conditions (possibly related to timing or race conditions), navigation between pages intermittently fails.  The affected page may appear blank, or the previous page's content might persist.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between the home page and the about page several times.  You should observe that sometimes, navigation doesn't work correctly.

## Potential Causes

The root cause is likely related to asynchronous operations during the client-side routing process.  This might involve timing issues where the component hasn't fully unmounted before the next route's component attempts to mount.

## Workaround

While a definitive solution may require deeper investigation and possibly a Next.js update, using `router.replace()` instead of `router.push()` can sometimes mitigate the problem.  This ensures that the current page is fully replaced instead of creating a history entry, potentially resolving the timing conflict.
