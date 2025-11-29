# Android TV Web App (NTVStream)

This project wraps https://ntvstream.cx/ into a simple Android TV WebView app.

## How to use
1. Open this project in Android Studio (Arctic Fox or newer).
2. Build & run on an Android TV emulator or device.
3. The app loads the URL: `https://ntvstream.cx/` by default.

## Notes
- TV-specific tweaks are included in `website-adaptations/` (CSS & JS) — add these to your website to improve DPAD navigation.
- For production, prefer HTTPS and review required permissions.
- To publish on Play Store, create an App Bundle (AAB) and configure Leanback category.

## Files included
- Minimal Android project (app module)
- `website-adaptations/` with focus CSS and JS
- GitHub Actions workflow to build debug APK

