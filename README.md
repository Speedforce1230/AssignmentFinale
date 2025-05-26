Welcome to my app. This is for an assignment. This is my first ever time making a react-native and next app.  
  
0. Clone the repo
```bash 
   git clone https://github.com/Speedforce1230/AssignmentFinale
   ```
1. Install dependecies for Expo/Next

   ```bash
   npm install  
   cd next  
   npm install  
   ```
     
2. Please place your Next Server url in <PROJECT_ROOT>/app/(tabs)/Next.tsx  
   ```typescript
   const nextServerUrl = "<YOUR_NEXT_SERVER_URL>"
   ```
     
3. Build  

   ```bash
   npx expo prebuild  
   npx expo run:android
   cd next
   npm run build
   npm run start  
   ```
     
DEMO VIDEO  
[![Expo App Demo](https://img.youtube.com/vi/MaXWqg6LTi4/hqdefault.jpg)](https://www.youtube.com/watch?v=MaXWqg6LTi4)
