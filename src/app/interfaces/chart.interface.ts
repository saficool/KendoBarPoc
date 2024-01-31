export interface Root {
    series: DataItemContainer[]
}
interface DataItemContainer {
    data: DataItem[]
}
interface DataItem {
    x: string
    value: string
}