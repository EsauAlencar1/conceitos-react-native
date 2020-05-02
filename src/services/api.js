import axios from 'axios';
const api = axios.create({
  baseURL:'http://10.0.0.104:3333'
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com físico: IP da máquina
 * Android com Emulador: localhost 
 * fazer redirecionamento de porta  -> adb reverse tcp:333 tcp:3333
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */