export interface IPlanet {
    name: string
    overview: IOverview
    structure: IStructure
    geology: IGeology
    rotation: string
    revolution: string
    radius: string
    temperature: string
    images: Images
}

export interface IOverview {
    content: string
    source: string
}

export interface IStructure {
    content: string
    source: string
}

export interface IGeology {
    content: string
    source: string
}

export interface Images {
    planet: string
    internal: string
    geology: string
}
