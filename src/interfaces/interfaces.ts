export interface ISticky{
    titulo : string,
    enlace : string
}
export interface IInfluencer {
    href:   string;
    titulo: string;
    datos:  Dato[];
}

export interface Dato {
    nombre:       string;
    grande?:      boolean;
    categoria:    string;
    rrss:         Rrss[];
    descripcion:  string;
    imagen?:      string;
}

export interface Rrss {
    instagram?: string;
    youtube?:   string;
    twitter?:   string;
    tiktok?:    string;
}
