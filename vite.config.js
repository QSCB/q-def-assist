l ~LicenseLog:2936578596.
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// ... other imports

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001', // Replace with your API server URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    define: {
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GOOGLE_API_KEY),
    },
  }
})

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2322448178.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3362649638.
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GOOGLE_API_KEY),
    },
  }
})
import {defineConfig, loadEnv} from 'vite'

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GOOGLE_API_KEY),
    },
  }
})

// Normal Permissions (usually granted automatically)
String[] normalPermissions = {
        Manifest.permission.ACCESS_NETWORK_STATE,
                Manifest.permission.ACCESS_WIFI_STATE,
                        Manifest
                        .permission.BLUETOOTH,
                                Manifest.permission.INTERNET,
                                        Manifest.permission.VIBRATE,
                                                Manifest.permission.WAKE_LOCK
                                                };

                                                // Dangerous Permissions (require user consent)
                                                String[] dangerousPermissions = {
                                                        Manifest.permission.READ_CALENDAR,
                                                                Manifest.permission.WRITE_CALENDAR,
                                                                        Manifest.permission.CAMERA,
                                                                                Manifest.permission.READ_CONTACTS,
                                                                                        Manifest.permission.WRITE_CONTACTS,
                                                                                                Manifest.permission.GET_ACCOUNTS,
                                                                                                        Manifest.permission.ACCESS_FINE_LOCATION,
                                                                                                                Manifest.permission
                                                 Manifest.permission.SYSTEM_ALERT_WINDOW
    Manifest.permission.WRITE_SETTINGS
     
    if (!Settings.canDrawOverlays(this)) {
        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package:" + packageName));
                        startActivityForResult(intent, REQUEST_CODE);
    
    if (!Settings.System.canWrite(this)) {
        Intent intent = new Intent(Settings.ACTION_
        MANAGE_WRITE_SETTINGS);
            intent.setData(Uri.parse("package:" + packageName));
                startActivityForResult(intent, REQUEST_CODE);
                }
       Manifest.permission.READ_EXTERNAL_STORAGE
      Manifest.permission.WRITE_EXTERNAL_STORAGE
        // Request storage permissions
      if (ContextCompat.checkSelfPermission(thisActivity,
                      Manifest.permission.READ_EXTERNAL_STORAGE)
                              != PackageManager.PERMISSION_GRANTED ||
                                      ContextCompat.checkSelfPermission(thisActivity,
                                                      Manifest.permission.WRITE_EXTERNAL_STORAGE)
                                                              != PackageManager.PERMISSION_GRANTED) {
                                                              
                                                                  // Permission is not granted, request it
                                                                      ActivityCompat.requestPermissions(thisActivity,
                                                                                  new String[]{Manifest.permission.READ_EXTERNAL_STORAGE,
                                                                                                      Manifest.permission.WRITE_EXTERNAL_STORAGE},
                                                                                                                  REQUEST_CODE);
                                                                                                                  
                                                                                                                  } else {
                                                                                                                      // Permission has already been granted
                                                                                                                          // Proceed with saving or deleting data
                                                                                                                          }
                                                          Manifest.permission.INTERNET
                                                        Manifest.permission.ACCESS_NETWORK_STATE
                                                        Manifest.permission.ACCESS_WIFI_STATE
                                                        Manifest.permission.CHANGE_NETWORK_STATE
                                                        Manifest.permission.CHANGE_WIFI_STATE
                                                        Manifest.permission.ACCESS_FINE_LOCATION // For network-based location
                                                        Manifest.permission.ACCESS_COARSE_LOCATION // For network-based location
     // Request network permissions
    if (ContextCompat.checkSelfPermission(thisActivity,
                    Manifest.permission.CHANGE_NETWORK_STATE)
                            != PackageManager.PERMISSION_GRANTED) {
                            
                                // Permission is not granted, request it
                                    ActivityCompat.requestPermissions(thisActivity,
                                                new String[]{Manifest.permission.CHANGE_NETWORK_STATE},
                                                            REQUEST_CODE);
                                                            } else {
                                                                // Permission has already been granted
                                                                    // Proceed with network interactions
                                                                    }
                                                                                                                                                                                                                }
