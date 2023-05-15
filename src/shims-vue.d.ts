declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'


declare global {
  interface Window {
    $message: MessageApiInjection
  }
}
