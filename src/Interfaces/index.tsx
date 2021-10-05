export interface Loading {
    status:boolean,
}
export interface Iinput {
    title:string,
    editable:boolean,
    value:any,
    placeholder:any,
    textChanged: (e:any) => void
}
export interface Ierror {
    title:string
}

export interface Isection {
    section:string,
    content:any
}

export interface categoryTitle {
    title:string,
    style:object
}

export interface Iheader {
    title: string,
    onPress : () => void
}

export interface IHeaderNoBack {
    title: string
}