export interface Locations {
  id: number,
  content: string,
  opened: boolean,
  mask: string,
  towel: string,
  foutain:string,
  locker_room:string,
  schedules: Schedule[]
}

interface Schedule {
  weekdays: string,
  hour: string
}
