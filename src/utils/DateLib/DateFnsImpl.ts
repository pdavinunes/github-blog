import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { DateLib } from '.'

class DateFnsImpl implements DateLib {
  formatDateDistance(date: Date): string {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBr,
    })
  }
}

export const dateFnsImpl = new DateFnsImpl()
