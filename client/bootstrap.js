import { store } from '@things-factory/shell'
import bizBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    bizBase
  })
}
