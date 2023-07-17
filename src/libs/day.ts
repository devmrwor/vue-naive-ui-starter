import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import 'dayjs/locale/vi'
import 'dayjs/locale/ru'
import 'dayjs/locale/zh'

dayjs.extend(relativeTime)
dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)

const defaultDateFormat = 'DD/MM/YYYY'
const defaultDatetimeFormat = 'HH:mm:ss YDD/MM/YYYY'

export default dayjs

export const formatDate = (date: string | number | dayjs.Dayjs | Date | null | undefined, format = defaultDateFormat) => dayjs(date).format(format)
export const formatDatetime = (date: string | number | dayjs.Dayjs | Date | null | undefined, format = defaultDatetimeFormat) => dayjs(date).format(format)
