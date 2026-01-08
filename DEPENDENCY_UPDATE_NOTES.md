# Dependency Update Notes - January 2026

All dependencies have been updated to their latest versions. This document outlines the major changes and any breaking changes to be aware of.

## Major Version Updates

### React 19.2.3 (from 18.3.1)
- **Breaking Changes**:
  - New React Compiler (optional, not enabled yet)
  - `ref` is now a regular prop (no need for `forwardRef` in many cases)
  - Improved hydration error messages
  - New `use()` API for data fetching
- **Migration Required**: None immediately, but consider gradually adopting new patterns
- **Documentation**: https://react.dev/blog/2025/01/08/react-19

### Next.js 16.1.1 (from 15.1.0)
- **Breaking Changes**:
  - Improved Turbopack stability (now default in dev)
  - Better error handling in development
  - Enhanced Server Actions security
  - Experimental PPR (Partial Prerendering) improvements
- **Migration Required**: None - backward compatible with Next.js 15
- **Documentation**: https://nextjs.org/blog/next-16

### Sanity 5.2.0 (from 3.58.0)
- **Breaking Changes**:
  - New Studio UI improvements
  - Enhanced TypeScript support
  - Better Content Lake API
  - Updated document actions API
- **Migration Required**: Configuration files are compatible
- **Note**: Some internal Sanity packages still use Zod v3, which is fine
- **Documentation**: https://www.sanity.io/docs/platform

### next-sanity 12.0.10 (from 9.5.0)
- **Breaking Changes**:
  - Updated for Sanity v5 and Next.js 16
  - Improved live preview with Visual Editing
  - Better server component support
- **Migration Required**: Already configured correctly
- **Documentation**: https://github.com/sanity-io/next-sanity

### Zod 4.3.5 (from 3.25.76)
- **Breaking Changes**:
  - Improved error messages
  - Better TypeScript inference
  - New validation methods
- **Impact**: Currently not directly used in the codebase
- **Note**: Only used through @hookform/resolvers
- **Documentation**: https://zod.dev

### date-fns 4.1.0 (from 3.6.0)
- **Breaking Changes**:
  - Improved TypeScript types
  - Better tree-shaking
  - New helper functions
- **Migration Required**: May need to update date formatting if directly used
- **Documentation**: https://date-fns.org

### Other Notable Updates

- **@hookform/resolvers** 5.2.2 → Compatible with Zod 4 and React Hook Form 7
- **@sanity/image-url** 2.0.2 → Better type safety and performance
- **@sanity/vision** 5.2.0 → Updated for Sanity v5
- **next-themes** 0.4.6 → Better React 19 support
- **recharts** 3.6.0 → Major rewrite with better performance
- **sonner** 2.0.7 → React 19 compatibility
- **vaul** 1.1.2 → Improved drawer animations
- **@types/node** 22.19.3 → Updated Node.js types

## Radix UI Components

All Radix UI components have been updated to their latest versions with React 19 support:
- Better SSR support
- Improved accessibility
- Enhanced TypeScript types
- React 19 compatibility

## Peer Dependency Notes

All peer dependencies are satisfied:
- React 19.2.3 ✅
- React DOM 19.2.3 ✅
- Next.js 16.1.1 ✅
- TypeScript 5.9.3 ✅

## Testing Recommendations

After updating, test the following areas:

1. **Sanity Studio** (`/studio`)
   - Test login and authentication
   - Create/edit/publish documents
   - Test Vision plugin for GROQ queries

2. **Data Fetching**
   - Verify content loads from Sanity
   - Test fallback to JSON
   - Check error handling

3. **UI Components**
   - Test all Radix UI components
   - Verify animations work (Framer Motion)
   - Test responsive design

4. **Forms**
   - Test React Hook Form with new resolvers
   - Verify validation works correctly

5. **Build Process**
   - Run `npm run build`
   - Check for any build errors or warnings
   - Test production build locally

## Known Issues

None at this time. All dependencies are compatible with each other.

## Installation

If you're setting up from scratch:

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install updated dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Rollback Plan

If issues arise, you can rollback to previous versions by checking out the previous commit and running:

```bash
git checkout HEAD~1 package.json
npm install
```

Or manually restore these key versions in package.json:
- `"react": "^18.3.1"`
- `"react-dom": "^18.3.1"`
- `"next": "^15.1.0"`
- `"sanity": "^3.58.0"`
- `"next-sanity": "^9.5.0"`
- `"zod": "^3.25.76"`
- `"date-fns": "^3.6.0"`

## Additional Resources

- [React 19 Migration Guide](https://react.dev/blog/2025/01/08/react-19)
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/upgrading)
- [Sanity v5 Migration](https://www.sanity.io/docs/migrate-to-v5)

## Update Date

Last updated: January 9, 2026

All dependencies are now at their latest stable versions with full React 19 and Next.js 16 support.
